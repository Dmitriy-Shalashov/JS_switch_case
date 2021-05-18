'use strict'

// 1) Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

// const num = 3;
// let result;
// switch (num) {
//    case 1:
//       result = 'зима';
//       break;
//    case 2:
//       result = 'весна';
//       break;
//    case 3:
//       result = 'лето';
//       break;
//    case 4:
//       result = 'осень';
//       break;
//    default:
//       result = undefined;
// }

// 2) В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

// вариант решения 1

// const month = 4;
// let season;
// switch (month) {
//    case 1:
//    case 2:
//    case 12:
//       season = 'зима';
//       break;
//    case 3:
//    case 4:
//    case 5:
//       season = 'весна';
//       break;
//    case 6:
//    case 7:
//    case 8:
//       season = 'лето';
//       break;
//    case 9:
//    case 10:
//    case 11:
//       season = 'осень';
//       break;
//    default:
//       season = undefined;
// }

// вариант решения 2 

// const testMonth = 12;
// let testSeason;

// switch (true) {
//    case testMonth <= 2 || testMonth === 12:
//       testSeason = 'зима';
//       break;
//    case testMonth > 2 && testMonth <= 5:
//       testSeason = 'весна';
//       break;
//    case testMonth > 5 && testMonth <= 8:
//       testSeason = 'лето';
//       break;
//    case testMonth > 8 && testMonth <= 11:
//       testSeason = 'осень';
//       break;
//    default:
//       testSeason = undefined;
// } 


// 3) Запросить у пользователя номер дня недели и вывести соответствующее полное строковое название (например, если пользователь вводит 7 - выводится сообщение "воскресенье"). предусмотреть ошибку введения (default).

// const dayNumber = +prompt('Введите номер недели');

// switch (dayNumber) {
//    case 1:
//       alert('понедельник');
//       break;
//    case 2:
//       alert('вторник');
//       break;
//    case 3:
//       alert('среда');
//       break;
//    case 4:
//       alert('четверг');
//       break;
//    case 5:
//       alert('пятница \nНе забудь здать домашку');
//       break;
//    case 6:
//       alert('суббота');
//       break;
//    case 7:
//       alert('воскресенье');
//       break;
//    case 0:
//       alert('не нарушай правила');
//       break;
//    default:
//       alert('не верный ввод\nвведите число от 1 до 7')
// }



// 4) В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// const day = 35;

// switch (true) {
//    case day <= 10:
//       console.log('первая декада месяца');
//       break;
//    case day > 10 && day <= 20:
//       console.log('вторая декада месяца');
//       break;
//    case day > 20 && day < 32:
//       console.log('третья декада месяца');
//       break;
//    default:
//       console.log('неверный ввод');
// }