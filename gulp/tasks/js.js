import webpack from "webpack-stream";

export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
        // Раскомментровать если нужно сообщение об ошибке
        /* .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "JS",
                message: "Error: <%= error.message %>"
            })
        )) */
        .pipe(webpack({
            mode: app.isBuild ? 'production' : 'development',
            output: {
                filename: 'app.min.js',
            },
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/, // Обрабатывать файлы с расширениями .js и .jsx
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env', '@babel/preset-react']
                            }
                        }
                    }
                ]
            },
            resolve: {
                extensions: ['.js', '.jsx'], // Разрешить импорт файлов с расширениями .js и .jsx без указания расширения
            },
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
}