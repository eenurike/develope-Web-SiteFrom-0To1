/* Эти все плагины смотри на сайте https://www.npmjs.com/ 
Если при начале нового проекта, после установки npm i, у тебя не запускается gulp, то нужно
gulp установить глобально npm i gulp -g
И если выдает ошибку "gulp : Невозможно загрузить файл C:\Users\Админ\AppData\Roaming\npm\gulp.ps1"
то нужно дать доступ в powershell через запуск администратора, там пишешь Set-ExecutionPolicy unrestricted,
и даешь разрешение */

/* Все плагины скачаивай с nom i --save-dev bla */

const {src, dest, watch, parallel} = require('gulp');
/* Деструктурировали наш gulp */
const scss = require('gulp-sass')(require('sass'));
/* Компилятор sass/scss */
const concat = require('gulp-concat');
/* Обьединение файлов, сжатие файлов в min и переименование файлов */
const autoprefixer = require('gulp-autoprefixer');
/* Авто префиксер */
const uglify = require('gulp-uglify');
/* Минификация для js файлов */
const imagemin = require('gulp-imagemin');
/* Плагин для сжатия картинок */
const browserSync = require('browser-sync').create();
/* Плагин на типе liveServer, и будем писать именно в styles и scripts
так как нам нужно чтоб мы следили именно за этими ведь файлами */


function browsersync() {
  browserSync.init({
    server: {
        baseDir: "app/"
    },
    notify: false
    /* Чтоб не появлялось уведомление в браузере, что сервер перезагрузился
    в связи с изменениями в файлах */
  });
}

function styles() {
  return src('app/scss/style.scss')
  /* Но этот src работать не будет, так как ему нужно присвоить возможности gulp,
  так как мы сделали с scss присвоили ему возможност gulp-sass.
  Тут мы берем сам файл scss */
  .pipe(scss({
    outputStyle: 'expanded'
  }))
  /* Pipe начинает процесс конвертирования из scss в css, в помощью нашего gulp-sass,
  outputStyle expanded обозначает чтоб привести в нормальный вид в плане читаемости(скобки, пробелы)
  outputStyles compressed это минифицированный вид */
  .pipe(concat('style.min.css'))
  /* Добавляет файл минифицированную версию, а обычную style.css можно удалить */
  .pipe(autoprefixer({
    overrideBrowserslist: ['last 10 versions'],
    grid: true
  }))
  /* Автопрефиксер закидываем перед тем как наш файл выплинется уже компилированной */
  .pipe(dest('app/css'))
  /* И выкидываем уже конвертированный файл в папку css, который он сам создаст.
  Обрати внимание на ; только вконце. 
  Так же создаем переменную dest из gulp */
  .pipe(browserSync.stream());
  /* Будет обновлять стили без перезагрузки страницы */
}

/* Так же и со скриптами */
function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    /* Зачем путь указывать к минифицированной версии, если мы будем сжимать файл */
    'app/js/main.js'
    /* Файлов js может быть много, так что записываем в квадратных скобках */
  ])
  .pipe(concat('main.min.js'))
  /* Чтоб они все обьединились в общий файл, но они не будут минифицированы, так как
  для js нет такого compressed как для css. Нам нужно скачать другой плагин gulp-uglify */
  .pipe(uglify())
  /* Теперь файл минифицирован */
  .pipe(dest('app/js'))
  /* И будет помещен в папку js, для пробы скачаем какойто файл js, ну для работы нам
  ведь понадобится jquery, можно скачивать как обычно с официалки, ну а зачем мы изучаем 
  gulp, если и в gulp можно установить jquery >npm i --save-dev jquery */
  .pipe(browserSync.stream());
  /* Будет обновлять js без перезагрузкой страницы */
}

function images() {
  return src ('app/images/**/*.*')
  .pipe(imagemin())
  .pipe(dest('dist/images'));
}

function watching() {
  watch(['app/scss/**/*.scss'], styles);
  /* Так же создаем переменную dest из gulp. 
  ** это означает что он зайдет в каждую папку в папке scss 
  *.scss это означает что он возмет все файлы с расширением .scss,
  и будет следить за функцией styles */
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  /* Нам же не нужно что он следил за минифицированным файлом,
  так что исключаем его с помощью ! */
  watch(['app/**/*.html']).on('change', browserSync.reload);
  /* Следим за нашим html и выводим его на страницу с перезагрузкой страницы */
}

/* Но styles сейчас не заработает */

exports.styles = styles;
/* И в терминале прописываешь gulp styles, и в папке css создается файл css */
exports.scripts = scripts;
exports.watching = watching;
exports.images = images;
exports.browsersync = browsersync;
/* Но смотрри, теперь нам нужно сделать так чтоб watching и browsersync запускались
обновременно, в деструктуризации вытаскиваем переменную parallel */
exports.default = parallel(styles, scripts, browsersync, watching);
/* Не очень удобно, если постоянно прописываем gulp watching, удобнее будет
если прописать одно слово gulp, короче что впишешь в default будет открываться
при одном слове gulp, и в parallel все наши таски будем запускать одновременно */
