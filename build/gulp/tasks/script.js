var gulp = require('gulp'),
    concat = require('gulp-concat'),
    gutil = require('gulp-util'),
    header = require('gulp-header'),
    footer = require('gulp-footer'),
    sourceMaps = require('gulp-sourcemaps'),
    amdOptimize = require('gulp-requirejs'),
    uglify = require('gulp-uglify'),
    replace = require('gulp-replace'),
    rename = require("gulp-rename"),
    util = require('../utils'),
     fs = require('fs');


var src = [util.src +  "**/*.js"];

var dest = util.dest+"uncompressed/";

var requireConfig = {
    baseUrl: util.src,
    out : util.pkg.name + ".js",
    packages : [{
       name : "skylark-langx" ,
       location :  util.lib_langx+"uncompressed/skylark-langx"
    },
    {
       name : "skylark-utils" ,
       location :  util.lib_utils+"uncompressed/skylark-utils"
    },
    {
       name : "skylark-utils-interact" ,
       location :  util.lib_utils_interact+"uncompressed/skylark-utils-interact"
    },
    {
       name : "skylark-bootstrap3" ,
       location :  util.lib_ui_bootstrap3+"uncompressed/skylark-bootstrap3"
    },
    {
       name : "skylark-fuelux" ,
       location :  util.lib_ui_fuelux+"uncompressed/skylark-fuelux"
    },
    {
       name : "skylark-ui-repeater" ,
       location :  util.lib_ui_repeater+"uncompressed/skylark-ui-repeater"
    },
    {
       name : util.pkg.name ,
       location :  util.src ,
       main : "main"

    }],

    include: [
        util.pkg.name + "/main" 
    ],
    exclude: [
        "skylark-langx",
        "skylark-utils"
    ]
};


module.exports = function() {
    var p =  new Promise(function(resolve, reject) {
     gulp.src(src)
        .pipe(header(util.banner, {
            pkg: util.pkg
        }) )
        .on("error", reject)
        .pipe(gulp.dest(dest+util.pkg.name))
        .on("end",resolve);
    });

    return p.then(function(){
        return amdOptimize(requireConfig)
            .pipe(header(fs.readFileSync(util.allinoneHeader, 'utf8')))
            .pipe(footer(fs.readFileSync(util.allinoneFooter, 'utf8')))
            .pipe(header(util.banner, {
                pkg: util.pkg
            })) 
            .pipe(gulp.dest(dest));
    })

};