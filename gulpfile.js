/** *
 *      /$$$$$$  /$$   /$$ /$$       /$$$$$$$
 *     /$$__  $$| $$  | $$| $$      | $$__  $$
 *    | $$  \__/| $$  | $$| $$      | $$  \ $$
 *    | $$ /$$$$| $$  | $$| $$      | $$$$$$$/
 *    | $$|_  $$| $$  | $$| $$      | $$____/
 *    | $$  \ $$| $$  | $$| $$      | $$
 *    |  $$$$$$/|  $$$$$$/| $$$$$$$$| $$
 *     \______/  \______/ |________/|__/
 *
 *
 *
 */
const gulp = require("gulp");
const strip = require("gulp-strip-comments");
const es = require("event-stream");
const $ = require("gulp-load-plugins")();
const del = require("del");
const runSequence = require("run-sequence");
const pkg = require("./package.json");

const banner = [
  "/**",
  " * <%= pkg.name %> - <%= pkg.description %>",
  " * @version v<%= pkg.version %>",
  " * @license <%= pkg.license %>",
  " * @author <%= pkg.author %>",
  " * @copyright 2017 Whiting House Group. All rights reserved.",
  " */",
  ""
].join("\n");

const AUTOPREFIXER_BROWSERS = [
  "ie >= 10",
  "ie_mob >= 10",
  "ff >= 30",
  "chrome >= 34",
  "safari >= 7",
  "opera >= 23",
  "ios >= 7",
  "android >= 4.4",
  "bb >= 10"
];

const componentList = [
  "Layout",
  "Accordion",
  "Badge",
  "Breadcrumbs",
  "Button",
  "ButtonBar",
  "ButtonMenu",
  "ToolBar",
  "DatePicker",
  "Dropdown",
  "Footer",
  "Form",
  "Grid",
  "Header",
  "Input",
  "Loading",
  "Main",
  "Modal",
  "Nav",
  "Pagination",
  "Pill",
  "SelectBox",
  "Table",
  "Tabs",
  "Card",
  "Title",
  "Toasts"
];
// Base CSS [Componentized Version]
gulp.task("all_styles", () =>
  gulp
    .src(["src/scss/main.scss"])
    .pipe(
      $.sass({
        precision: 10,
        onError: console.error.bind(console, "Sass error:")
      })
    )
    .pipe(
      $.cssInlineImages({
        webRoot: "src/scss"
      })
    )
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest(".tmp"))
    .pipe($.concat("style-o-matic.all.css"))
    .pipe(strip.text())
    .pipe($.header(banner, { pkg }))
    .pipe(gulp.dest("css"))
    .pipe($.if("*.css", $.csso()))
    .pipe($.concat("style-o-matic.all.min.css"))
    .pipe($.header(banner, { pkg }))
    .pipe(gulp.dest("css"))
    .pipe($.size({ title: "styles" }))
);
// Base CSS [Componentized Version]
gulp.task("styles", () =>
  gulp
    .src(["src/scss/componentized.scss"])
    .pipe(
      $.sass({
        precision: 10,
        onError: console.error.bind(console, "Sass error:")
      })
    )
    .pipe(
      $.cssInlineImages({
        webRoot: "src/scss"
      })
    )
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest(".tmp"))
    .pipe($.concat("style-o-matic.css"))
    .pipe(strip.text())
    .pipe($.header(banner, { pkg }))
    .pipe(gulp.dest("css"))
    .pipe($.if("*.css", $.csso()))
    .pipe($.concat("style-o-matic.min.css"))
    .pipe($.header(banner, { pkg }))
    .pipe(gulp.dest("css"))
    .pipe($.size({ title: "styles" }))
);
// React Components
gulp.task("react_compile", () =>
  es.merge(
    componentList.map(componentName =>
      gulp
        .src(`src/scss/components/${componentName}/loader.scss`)
        .pipe(
          $.sass({
            precision: 10,
            onError: console.error.bind(console, "Sass error:")
          })
        )
        .pipe(
          $.cssInlineImages({
            webRoot: "scss"
          })
        )
        .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe(gulp.dest(".tmp"))
        .pipe($.if("*.css", $.csso()))
        .pipe($.concat(`${componentName}.css`))
        // .pipe($.header(banner, { pkg: pkg }))
        .pipe(gulp.dest(`src/components/${componentName}`))
        .pipe($.size({ title: `React Component: ${componentName}` }))
    )
  )
);

gulp.task(
  "react_prep",
  del.bind(null, ["src/components/*.css", ".tmp"], {
    dot: true
  })
);

gulp.task("react", cb => {
  runSequence(["react_prep"], ["react_compile"], ["clean"], cb);
});
// Prepare Output Directory
gulp.task(
  "prep",
  del.bind(null, ["_build", "css/*.css", "src/components/*.css", ".tmp"], {
    dot: true
  })
);
// Clean TMP Directory
gulp.task("clean", del.bind(null, [".tmp"], { dot: true }));
// Run all scss-to-_build handlers
gulp.task("build_all", ["prep"], cb => {
  runSequence(["all_styles"], ["styles"], ["react_compile"], cb);
});
// Copy all _build files to the public directory
gulp.task("replicate_css", () => {
  const sources = ["_build/css/*.css"];
  return gulp.src(sources).pipe(gulp.dest("./css"));
});
gulp.task("replicate", cb => {
  runSequence(["replicate_css"], cb);
});
// Our default task (executed by calling the "gulp" command)
gulp.task("default", cb => {
  runSequence(["build_all"], ["replicate"], ["clean"], cb);
});
