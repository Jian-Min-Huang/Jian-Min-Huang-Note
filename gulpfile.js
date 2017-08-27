var gulp        = require("gulp"),
    fileinclude = require("gulp-file-include"),
    less        = require("gulp-less"),
    concat      = require("gulp-concat"),
    uglify      = require("gulp-uglify"),
    rename      = require("gulp-rename"),
    fs          = require("fs");

var SRC = "./src";
var DEST = "./build";

var JsFileDependency = [
    "./vendors/jquery/jquery.min.js",
    "./vendors/bootstrap/js/bootstrap.min.js",
    "./vendors/metisMenu/metisMenu.min.js",
    "./vendors/showdown/showdown.min.js",
    "./src/js/*.js"
];

gulp.task('versioning', function () {
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

gulp.task('scripts', function () {
    gulp.src(JsFileDependency)
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(DEST));
});

gulp.task("less", function () {
    gulp.src(SRC + "/css/less/*.less")
        .pipe(less())
        .pipe(gulp.dest(DEST + "/css"));
});

gulp.task("default", ["fileinclude", "scripts", "less"]);