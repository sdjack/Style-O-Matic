/** *
 *    _██████╗_██╗___██╗██╗_____██████╗_
 *    ██╔════╝_██║___██║██║_____██╔══██╗
 *    ██║__███╗██║___██║██║_____██████╔╝
 *    ██║___██║██║___██║██║_____██╔═══╝_
 *    ╚██████╔╝╚██████╔╝███████╗██║_____
 *    _╚═════╝__╚═════╝_╚══════╝╚═╝_____
 *    __________________________________
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
  "Drawer",
  "Dropdown",
  "Footer",
  "Form",
  "Grid",
  "Header",
  "Input",
  "Loading",
  "Modal",
  "Nav",
  "Pagination",
  "Pill",
  "SelectBox",
  "Table",
  "Tabs",
  "Tile",
  "Title",
  "Toasts"
];
// Base CSS [Full Version]
gulp.task("all_styles", () =>
  gulp
    .src(["scss/main.scss"])
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
    .pipe($.concat("style-o-matic.css"))
    .pipe(strip.text())
    .pipe($.header(banner, { pkg }))
    .pipe(gulp.dest("./public/css"))
    .pipe($.if("*.css", $.csso()))
    .pipe($.concat("style-o-matic.min.css"))
    .pipe($.header(banner, { pkg }))
    .pipe(gulp.dest("./public/css"))
    .pipe($.size({ title: "all_styles" }))
);
// Base CSS [Componentized Version]
gulp.task("styles", () =>
  gulp
    .src(["scss/componentized.scss"])
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
    .pipe($.concat("style.css"))
    .pipe(strip.text())
    .pipe($.header(banner, { pkg }))
    .pipe(gulp.dest("./public/css"))
    .pipe($.if("*.css", $.csso()))
    .pipe($.concat("style.min.css"))
    .pipe(strip.text())
    .pipe($.header(banner, { pkg }))
    .pipe(gulp.dest("./public/css"))
    .pipe($.size({ title: "styles" }))
);
// Font Awesome
gulp.task("fa", () =>
  gulp
    .src(["scss/vendor/font-awesome/font-awesome.scss"])
    .pipe(
      $.sass({
        precision: 10,
        onError: console.error.bind(console, "Sass error:")
      })
    )
    .pipe(gulp.dest(".tmp"))
    .pipe($.concat("fa.css"))
    .pipe($.header(banner, { pkg }))
    .pipe(gulp.dest("./public/fonts/vendor/fa"))
    .pipe($.if("*.css", $.csso()))
    .pipe($.concat("fa.min.css"))
    .pipe($.header(banner, { pkg }))
    .pipe(gulp.dest("./public/fonts/vendor/fa"))
    .pipe($.size({ title: "fa" }))
);
// React Components
gulp.task("react_compile", () =>
  es.merge(
    componentList.map(componentName =>
      gulp
        .src(`scss/components/${componentName}/loader.scss`)
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

// Prepare Output Directory
gulp.task(
  "prep",
  del.bind(
    null,
    ["_build", "public/css/style-o-matic.*", "src/components/*.css", ".tmp"],
    {
      dot: true
    }
  )
);
// Clean TMP Directory
gulp.task("clean", del.bind(null, [".tmp"], { dot: true }));
// Run all scss-to-_build handlers
gulp.task("build_all", ["prep"], cb => {
  runSequence(["all_styles"], ["styles"], ["fa"], ["react_compile"], cb);
});
// Copy all _build files to the public directory
gulp.task("replicate_css", () => {
  const sources = ["_build/css/*.css"];
  return gulp.src(sources).pipe(gulp.dest("./public/css"));
});
gulp.task("replicate_js", () => {
  const sources = ["_build/js/*.js"];
  return gulp.src(sources).pipe(gulp.dest("./public/js"));
});
gulp.task("replicate", cb => {
  runSequence(["replicate_css"], ["replicate_js"], cb);
});
// Our default task (executed by calling the "gulp" command)
gulp.task("default", cb => {
  runSequence(["build_all"], ["replicate"], ["clean"], cb);
});
