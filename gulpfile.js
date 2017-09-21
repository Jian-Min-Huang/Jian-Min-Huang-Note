const gulp = require("gulp");
const fileinclude = require("gulp-file-include");
const less = require("gulp-less");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const fs = require("fs");

const SRC = "./src";
const DEST = "./build";

const JsFileDependencies = [
    "./vendors/jquery/jquery.min.js",
    "./vendors/bootstrap/js/bootstrap.min.js",
    "./vendors/metisMenu/metisMenu.min.js",
    "./vendors/showdown/showdown.min.js",
    "./src/js/*.js"
];

gulp.task("versioning", function () {
    fs.writeFileSync("./src/html/version.html", new Date().toLocaleString(), "");
});

gulp.task("fileinclude", ["versioning"], function () {
    gulp.src(SRC + "/html/*.html")
        .pipe(fileinclude({
            prefix: "@@",
            basepath: "@file"
        }))
        .pipe(gulp.dest(DEST));
});

gulp.task("script", function () {
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
        .pipe(gulp.dest(DEST + "/css"));
});

gulp.task("default", ["fileinclude", "script", "less"]);

gulp.task("watch", function () {
    gulp.watch("src/**", ["default"]);
});