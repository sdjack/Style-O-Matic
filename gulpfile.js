const gulp = require("gulp");
const strip = require("gulp-strip-comments");
const es = require("event-stream");
const $ = require("gulp-load-plugins")();
const del = require("del");
const pkg = require("./package.json");

const banner = [
  "/**",
  " * <%= pkg.name %> - <%= pkg.description %>",
  " * @version v<%= pkg.version %>",
  " * @license <%= pkg.license %>",
  " * @author <%= pkg.author %>",
  " * @copyright 2017 Steven Jackson. All rights reserved.",
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
  "App",
  "Accordion",
  "Badge",
  "Breadcrumbs",
  "Button",
  "ButtonBar",
  "Card",
  "DatePicker",
  "Drawer",
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
  "Radio",
  "Select",
  "Table",
  "Tabs",
  "Textarea",
  "Title",
  "Toasts",
  "ToolBar",
  "ToolTip"
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
    .pipe($.size({ title: "all_styles" }))
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
gulp.task("react_compile", cb => {
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
        .pipe(gulp.dest(`src/components/${componentName}`))
        .pipe(gulp.dest(`es/components/${componentName}`))
        .pipe(gulp.dest(`lib/components/${componentName}`))
        .pipe($.size({ title: `React Component: ${componentName}` }))
    )
  );
  cb();
});

// Clean TMP Directory
gulp.task("clean", () => del([".tmp"]));

gulp.task("react_prep", () => del(["src/components/*.css", ".tmp"]));

gulp.task("react", gulp.series("react_prep", "react_compile"));
// Prepare Output Directory
gulp.task("prep", () =>
  del(["_build", "css/*.css", "src/components/*.css", ".tmp"])
);
// Copy all _build files to the public directory
gulp.task("replicate", () =>
  gulp.src(["_build/css/*.css"]).pipe(gulp.dest("./css"))
);
// Our default task (executed by calling the "gulp" command)
gulp.task(
  "default",
  gulp.series("prep", "all_styles", "styles", "react_compile", "replicate")
);
// Start watching for file changes
gulp.task("watch", () => {
  gulp.watch(
    ["src/scss/**/*.scss", "src/scss/**/**/*.scss"],
    gulp.series("default")
  );
});
