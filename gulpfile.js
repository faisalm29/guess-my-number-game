const { src, dest, watch, series } = require("gulp");
// const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const babel = require("gulp-babel");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();

// css task
function cssTask() {
  const plugins = [autoprefixer(), cssnano()];
  return src("app/css/style.css", { sourcemaps: true })
    .pipe(postcss(plugins))
    .pipe(dest("dist", { sourcemaps: true }));
}

// js task
function jsTask() {
  return src("app/js/script.js", { sourcemaps: true })
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(terser())
    .pipe(dest("dist", { sourcemaps: "." }));
}

// browser sync function
function browserSyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: ".",
    },
    notify: {
      styles: {
        top: "auto",
        bottom: "0",
      },
    },
  });
  cb();
}
function browserSyncReload(cb) {
  browsersync.reload();
  cb();
}

// watch task
function watchTask() {
  watch("*.html", browserSyncReload);
  watch(
    ["app/**/*.css", "app/**/*.js"],
    series(cssTask, jsTask, browserSyncReload)
  );
}

// Default gulp task
exports.default = series(cssTask, jsTask, browserSyncServe, watchTask);
