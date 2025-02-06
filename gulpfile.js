const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const rename = require('gulp-rename');
const merge = require('merge-stream'); // Importa o merge-stream

function processMarkdownJquery() {
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

function processMarkdownBanners() {
    // Processa o template.md
    const processTemplate = gulp
        .src('./banners/templates/template.md') // Arquivo de entrada
        .pipe(
            fileInclude({
                prefix: '@@', // Prefixo para os includes
                basepath: './banners', // Caminho base para os includes
            })
        )
        .pipe(rename('base.md')) // Renomeia o arquivo final
        .pipe(gulp.dest('./banners')); // Pasta de saída

    // Processa o prompt.md
    const processPrompt = gulp
        .src('./banners/templates/prompt.md') // Arquivo de entrada
        .pipe(
            fileInclude({
                prefix: '@@', // Prefixo para os includes
                basepath: './banners', // Caminho base para os includes
            })
        )
        .pipe(rename('prompt.md')) // Renomeia o arquivo final
        .pipe(gulp.dest('./banners')); // Pasta de saída

    // Combina os dois streams em um único stream
    return merge(processTemplate, processPrompt);
}

// Define a tarefa padrão que executa ambas as tarefas em paralelo
exports.default = gulp.parallel(processMarkdownJquery, processMarkdownBanners);