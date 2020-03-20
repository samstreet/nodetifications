let gulp = require("gulp");
let ts = require("gulp-typescript");

let tsProject = ts.createProject("tsconfig.json");

gulp.task("build", () => {
    return tsProject
        .src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task("handlebars", () => {
    return gulp.src('./src/app/Notifications/Templates/*')
        .pipe(gulp.dest('./dist/app/Notifications/Templates/'));
});

gulp.task("default", gulp.series(["build", "handlebars"]), () => {

});