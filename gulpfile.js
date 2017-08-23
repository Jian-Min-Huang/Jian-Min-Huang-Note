var gulp	= require("gulp"),
    fileinclude	= require("gulp-file-include"),
    less	= require("gulp-less"), 
    concat	= require("gulp-concat"),
    uglify	= require("gulp-uglify"),
    rename	= require("gulp-rename");

var SRC = "./src";
var DEST = "./build";

var JsFileDependency = [ 
    "./vendors/jquery/jquery.min.js",
    "./vendors/bootstrap/js/bootstrap.min.js",
    "./vendors/metisMenu/metisMenu.min.js",
    "./src/js/*.js"
];

// var CssFileDependency = [
//     "./vendors/bootstrap/css/bootstrap.min.css",
//     "./vendors/font-awesome/css/font-awesome.min.css",
//     "./vendors/metisMenu/metisMenu.min.css"
// ];

gulp.task("less", function() {
    gulp.src(SRC + "/less/*.less")
        .pipe(less())
        .pipe(gulp.dest(DEST + "/css"))
});

gulp.task("fileinclude", function() {
    gulp.src(SRC + "/html/*.html")
        .pipe(fileinclude({
            prefix: "@@",
            basepath: "@file"
        }))
        .pipe(gulp.dest(DEST));
});

gulp.task('scripts', function() {
    gulp.src(JsFileDependency)
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(DEST));
});

// gulp.task('styles', function() {
//     gulp.src(CssFileDependency)
//         .pipe(concat('bundle.css'))
//         .pipe(gulp.dest(DEST));
// });

gulp.task("default",["less","fileinclude","scripts"]);