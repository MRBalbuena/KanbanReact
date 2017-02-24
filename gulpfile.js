var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
var webpack = require("webpack");
var config = require("./webpack.config.js");
var watch = require("gulp-watch");
var gutil = require("gulp-util");

gulp.task('default', ['webpack']);

gulp.task('webpack', function(done) {
    webpack(config).run(onBuild(done));
});

function onBuild(done) {
    return function(err, stats) {
        if (err) {
            gutil.log('Error', err);
            if (done) {
                done();
            }
        } else {
            Object.keys(stats.compilation.assets).forEach(function(key) {
                gutil.log('Webpack: output ', gutil.colors.green(key));
            });
            gutil.log('Webpack: ', gutil.colors.blue('finished ', stats.compilation.name));
            if (done) {
                done();
            }
        }
    }
}

function done() {
    console.log('done');
    gulp.start('watch-public', ['nodemon']);
}

gulp.task('nodemon', function() {
    console.log('going through nodemon');
    nodemon({
            script: 'app.ts',
            ext: 'ts',
            env: {
                PORT: 8000
            },
            ignore: ['./node_modules/**']
        })
        .on('restart', function() {
            console.log('Restarting...');
        });
});

gulp.task('watch-public', function() {
    return watch('src/compnents/**/*.tsx');
});