/* Эти все плагины смотри на сайте https://www.npmjs.com/ */

const {src, dest, watch} = require('gulp');
/* Деструктурировали наш gulp */
const scss = require('gulp-sass')(require('sass'));
/* Компилятор sass/scss */
const concat = require('gulp-concat');
/* Обьединение файлов, сжатие файлов в min и переименование файлов */
const autoprefixer = require('gulp-autoprefixer');

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
exports.watching = watching;