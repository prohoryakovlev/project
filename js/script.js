"use strict";

// const result = confirm("Are you hero?");

// console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Какая ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));
// console.log(typeof(null));

// УРОК 8
// const category = 'toys';

// console.log(`https://sumeurl.com/${category}/5`);

// const user = "Ivam";

// alert(`Привет, ${user}`);




// УРОК 9
// console.log(4 + +" 5");

// let incr = 10,
//     decr = 10;

// ++incr;
// --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2 + 2 * 2 !== 6);

// &&
// ||

// const isChecked = false,
//       isClose = false;

// console.log(isChecked || !isClose);

// Задание № 1

// let numberOfFilms = "Сколько фильмов вы уже посмотрели?";

// Задача № 2
// let personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// console.log(numberOfFilms, personalMovieDB);

// const answers = [];
//       answers[0] = 'Один и последних просмотренных фильмов';
//       answers[1] = 'На сколько оценили его?';

// Привильное решение 1

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

// // Привильное решение 2

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// // Привильное решение 3

// const a = prompt('Один и последних просмотренных фильмов', ''),
//       b = prompt('На сколько оценили его?', ''),
//       c = prompt('Один и последних просмотренных фильмов', ''),
//       d = prompt('На сколько оценили его?', '');

// // Привильное решение 4

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// Урок 13

// if (1) {
//   console.log("Ok!");
// } else {
//   console.log("Error!");
// }



// if(num < 49) {
//   console.log("Error");
// } else if (num > 100) {
//   console.log("Много!");
// } else {
//   console.log("Ok!");
// }

// // Тернанрный оператор

// (num === 50) ? console.log("Ok!") : console.log("Error");

// SWITCH

// const num = '50';

// switch (num) {
//     case '49':
//         console.log("Неверно!");
//         break;
//     case '100':
//         console.log("Неверно!");
//         break;
//     case '51':
//         console.log("В Точку");
//         break;
//     default:
//       console.log("Не в этот раз!");
//       break;
// }