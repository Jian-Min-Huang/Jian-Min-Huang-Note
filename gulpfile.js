const gulp = require("gulp");
const fileinclude = require("gulp-file-include");
const less = require("gulp-less");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const minifyCSS = require("gulp-minify-css");
const fs = require("fs");

const SRC = "./src";
const DEST = "./build";

const JsFileDependencies = [
    "./vendors/jquery/jquery.min.js", // bootstrap depends jquery
    "./vendors/bootstrap/js/bootstrap.min.js",
    "./vendors/metisMenu/metisMenu.min.js",
    "./vendors/showdown/showdown.min.js",
    "./src/js/*.js"
];

const CssFileDependencies = [
    "./vendors/bootstrap/css/bootstrap.min.css",
    "./vendors/font-awesome/css/font-awesome.min.css",
    "./vendors/metisMenu/metisMenu.min.css",
    "./src/css/sb-admin-2.css",
    "./src/css/mixins.css",
    "./src/css/variables.css",
    "./src/css/main.css" // main.css put last override anything custom css
];

gulp.task("versioning", function () {
    fs.writeFileSync("./src/html/version.html", new Date().toLocaleString(), "");
});

gulp.task("html", ["versioning"], function () {
    gulp.src(SRC + "/html/*.html")
        .pipe(fileinclude({
            prefix: "@@",
            basepath: "@file"
        }))
        .pipe(gulp.dest(DEST));
});

gulp.task("js", function () {
    gulp.src(JsFileDependencies)
        .pipe(concat("bundle.js"))
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.basename += ".min";
            path.extname = ".js";
        }))
        .pipe(gulp.dest(DEST));
});

gulp.task("less", function () {
    gulp.src(SRC + "/css/less/*.less")
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest(SRC + "/css"));
});

gulp.task("css", ["less"], function () {
    gulp.src(CssFileDependencies)
        .pipe(concat("bundle.css"))
        .pipe(rename(function (path) {
            path.basename += ".min";
            path.extname = ".css";
        }))
        .pipe(gulp.dest(DEST + "/css"));
});

gulp.task("default", ["html", "js", "css"]);

gulp.task("watch", function () {
    gulp.watch("src/**", ["default"]);
});