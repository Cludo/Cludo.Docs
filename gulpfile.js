import fs from 'fs';
import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';
import ejs from 'gulp-ejs';
import gls from 'gulp-live-server';
import gulpif from 'gulp-if';
import open from 'gulp-open';
import prettify from 'gulp-prettify';
import rename from 'gulp-rename';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass'
import uglify from 'gulp-uglify';
import gutil from 'gulp-util';
import * as del from 'del';
import highlight from 'highlight.js';
import { marked } from 'marked';
import yaml from 'js-yaml';

// gulp-sass requires a sass compiler
const sass = gulpSass(dartSass);

// Derive __filename from import meta (__filename is not included in ES modules)
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

var renderer = new marked.Renderer();
var COMPRESS = true;

renderer.code = function (code, language) {
  var highlighted = language ? highlight.highlight(language, code).value
                             : highlight.highlightAuto(code).value;

  return '<pre class="highlight ' + language + '"><code>' + highlighted + '</code></pre>';
};

var readIndexYml = function() {
  return yaml.load(fs.readFileSync('./source/index.yml', 'utf8'));
};

var getPageData = function() {
  var config = readIndexYml();

  var includes = config.includes
        .map(function(include) { return './source/includes/' + include + '.md'; })
        .map(function(include) { return fs.readFileSync(include, 'utf8'); })
        .map(function(include) { return marked(include, { renderer: renderer }); });

  return {
    current_page: {
      data: config
    },
    page_classes: '',
    includes: includes,
    image_tag: function(filename, alt, className) {
      return '<img alt="' + alt + '" class="' + className + '" src="images/' + filename + '">';
    },
    javascript_include_tag: function(name) {
      return '<script src="javascripts/' + name + '.js" type="text/javascript"></script>';
    },
    stylesheet_link_tag: function(name, media) {
      return '<link href="stylesheets/' + name + '.css" rel="stylesheet" type="text/css" media="' + media + '" />';
    },
    langs: (config.language_tabs || []).map(function(lang) {
      return typeof lang == 'string' ? lang : lang.keys.first;
    })
  };
};

gulp.task('clean', function (cb) {
  del.deleteSync(['build/*']);
  cb();
});

gulp.task('fonts', function() {
  return gulp.src('./source/fonts/**/*').pipe(gulp.dest('build/fonts'));
});

gulp.task('images', function() {
  return gulp.src('./source/images/**/*').pipe(gulp.dest('build/images'));
});

gulp.task('definitions', function() {
  return gulp.src('./source/definitions/**/*').pipe(gulp.dest('build/definitions'));
});

gulp.task('js', function() {
  var config = readIndexYml();
  var libs = [
    './source/javascripts/lib/_energize.js',
    './source/javascripts/lib/_jquery.js',
    './source/javascripts/lib/_jquery_ui.js',
    './source/javascripts/lib/_jquery.tocify.js',
    './source/javascripts/lib/_imagesloaded.min.js',
  ];
  var scripts = [
    './source/javascripts/app/_lang.js',
    './source/javascripts/app/_toc.js',
    './source/javascripts/app/try-it-module.js'
  ];

  if (config.search) {
    libs.push('./source/javascripts/lib/_lunr.js');
    libs.push('./source/javascripts/lib/_jquery.highlight.js');
    libs.push('./source/javascripts/app/_search.js');
  }

  return gulp.src(libs.concat(scripts))
    .pipe(concat('all.js'))
    .pipe(gulpif(COMPRESS, uglify()))
    .pipe(gulp.dest('./build/javascripts'));
});

gulp.task('sass', function () {
  return gulp.src('./source/stylesheets/*.css.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({ extname: ''}))
    .pipe(gulpif(COMPRESS, cleanCSS()))
    .pipe(gulp.dest('./build/stylesheets'));
});

gulp.task('highlightjs', function () {
  var config = readIndexYml();
  var path = './node_modules/highlight.js/styles/' + config.highlight_theme + '.css';
  return gulp.src(path)
    .pipe(rename({ prefix: 'highlight-'}))
    .pipe(gulpif(COMPRESS, cleanCSS()))
    .pipe(gulp.dest('./build/stylesheets'));
});

gulp.task('html', function () {
  var data = getPageData();
  return gulp.src('./source/*.html')
  	.pipe(ejs(data).on('error', gutil.log))
    .pipe(gulpif(COMPRESS, prettify({indent_size: 2})))
  	.pipe(gulp.dest('./build'));
});

gulp.task('NO_COMPRESS', function(cb) {
  COMPRESS = false;
  cb();
});


gulp.task('default', gulp.series('clean', gulp.parallel('fonts', 'images', 'definitions', 'highlightjs', 'js', 'sass', 'html'), cb => cb()));
gulp.task('default-devel', gulp.series('NO_COMPRESS', 'default', cb => cb()));


gulp.task('serve', gulp.series('default-devel', function(cb) {
	
  gulp.watch(['./source/*.html', './source/includes/**/*'], gulp.series('html'));
  gulp.watch('./source/javascripts/**/*', gulp.series('js'));
  gulp.watch('./source/stylesheets/**/*', gulp.series('sass'));
  gulp.watch('./source/index.yml', gulp.series('highlightjs', 'js', 'html'));

  var server = gls.static('build', 4567);
  server.start();

  gulp.watch(['build/**/*'], function (file) {
    server.notify.apply(server, [file]);
  });

  gulp.src(__filename).pipe(open({uri: 'http://localhost:4567'}));

  cb(); // Callback to signal completion
}));
