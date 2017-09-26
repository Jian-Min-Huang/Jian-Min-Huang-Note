'use strict';

import gulp from "gulp";
import fs from "fs";
import fileinclude from "gulp-file-include";
import recursiveList from "./src/js/recursive-list.js";
import concat from "gulp-concat";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import rename from "gulp-rename";
import less from "gulp-less";
import minifyCSS from "gulp-csso";

const SRC = "./src";
const DEST = "./build";

const JsFileDependencies = [
    "./vendors/jquery/jquery.min.js", // bootstrap depends jquery
    "./vendors/bootstrap/js/bootstrap.min.js",
    "./vendors/metisMenu/metisMenu.min.js",
    "./vendors/showdown/showdown.min.js",
    "./vendors/startbootstrap-sb-admin-2/js/sb-admin-2.js",
    "./src/js/dynamic-content.js",
    "./src/js/main.js"
];

const CssFileDependencies = [
    "./vendors/bootstrap/css/bootstrap.min.css",
    "./vendors/font-awesome/css/font-awesome.min.css",
    "./vendors/metisMenu/metisMenu.min.css",
    "./vendors/startbootstrap-sb-admin-2/css/sb-admin-2.css",
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

gulp.task("dynamic-content", function () {
    recursiveList.generateDynamicContent("./content", "./src/js");
});

gulp.task("babel", ["dynamic-content"], function () {
    gulp.src(["./src/js/es6/dynamic-content.js", "./src/js/es6/main.js"])
        .pipe(babel({
            "presets": [
                "es2015"
            ]
        }))
        .pipe(gulp.dest(SRC + "/js"));
});

gulp.task("js", ["babel"], function () {
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
        .pipe(gulp.dest(SRC + "/css"));
});

gulp.task("css", ["less"], function () {
    gulp.src(CssFileDependencies)
        .pipe(concat("bundle.css"))
        .pipe(minifyCSS())
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