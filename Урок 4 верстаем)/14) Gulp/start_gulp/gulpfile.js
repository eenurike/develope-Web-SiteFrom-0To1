/* Эти все плагины смотри на сайте https://www.npmjs.com/ 
Если при начале нового проекта, после установки npm i, у тебя не запускается gulp, то нужно
gulp установить глобально npm i gulp -g
И если выдает ошибку "gulp : Невозможно загрузить файл C:\Users\Админ\AppData\Roaming\npm\gulp.ps1"
то нужно дать доступ в powershell через запуск администратора, там пишешь Set-ExecutionPolicy unrestricted,
и даешь разрешение */

/* Все плагины скачаивай с nom i --save-dev bla */

const {src, dest, watch} = require('gulp');
/* Деструктурировали наш gulp */
const scss = require('gulp-sass')(require('sass'));
/* Компилятор sass/scss */
const concat = require('gulp-concat');
/* Обьединение файлов, сжатие файлов в min и переименование файлов */
const autoprefixer = require('gulp-autoprefixer');
/* Минификация для js файлов */
const uglify = require('gulp-uglify');

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
  .pipe(dest('app/css'));
  /* И выкидываем уже конвертированный файл в папку css, который он сам создаст.
  Обрати внимание на ; только вконце. 
  Так же создаем переменную dest из gulp */
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
  .pipe(dest('app/js'));
  /* И будет помещен в папку js, для пробы скачаем какойто файл js, ну для работы нам
  ведь понадобится jquery, можно скачивать как обычно с официалки, ну а зачем мы изучаем 
  gulp, если и в gulp можно установить jquery >npm i --save-dev jquery */
}

function watching() {
  watch(['app/scss/**/*.scss'], styles);
  /* Так же создаем переменную dest из gulp. 
  ** это означает что он зайдет в каждую папку в папке scss 
  *.scss это означает что он возмет все файлы с расширением .scss,
  и будет следить за функцией styles */
}

/* Но styles сейчас не заработает */

exports.styles = styles;
/* И в терминале прописываешь gulp styles, и в папке css создается файл css */
exports.scripts = scripts;
exports.watching = watching;