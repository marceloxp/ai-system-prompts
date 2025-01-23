const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const rename = require('gulp-rename');

function processMarkdown() {
    return gulp
        .src('./jqueryvalidation/template.md') // Arquivo de entrada
        .pipe(
            fileInclude({
                prefix: '@@', // Prefixo para os includes
                basepath: './jqueryvalidation', // Caminho base para os includes
            })
        )
        .pipe(rename('base.md')) // Renomeia o arquivo final
        .pipe(gulp.dest('./jqueryvalidation')); // Pasta de saída
}

exports.default = processMarkdown;