import gulp from "gulp";
import runSequence from "gulp4-run-sequence";
import del from "del";
import nodemon from "gulp-nodemon";
import ts from "gulp-typescript";

const tsProject = ts.createProject("tsconfig.json");
gulp.task("typescript-transpile",  ()=> {
  var tsResult = tsProject.src().pipe(tsProject());

  return tsResult.js.pipe(gulp.dest("dist"));
});

gulp.task("restart",  ()=> {
  return del(["dist"]).then( ()=> {
    runSequence("typescript-transpile");
  });
});

gulp.task("startServer",  (done)=> {
  nodemon({
    script: "./dist/app.js",
    ext: '.ts',
    ignore: ["node_modules/*", "dist/*"],
    tasks: ["restart"],
  });
  done();
});

gulp.task("start", (callback) => {
  return del(["dist"]).then(function () {
    runSequence(
      "typescript-transpile",
      "startServer",
      callback
    );
  });
});
