import replace from "gulp-replace"; // Плагин поиск и замена
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Сообщения / Подсказки
import browsersync from "browser-sync"; // Локальный Сервер
import newer from "gulp-newer"; // Проверка обновления
import ifPlugin from "gulp-if";
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import gulpPostcss from 'gulp-postcss';

// Экспортируем объект
export const plugins = {
    tailwindcss: tailwindcss(),
    autoprefixer: autoprefixer(),
    gulpPostcss: gulpPostcss,
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin,
}




