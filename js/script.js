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

// // // Привильное решение 2

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

// // // Привильное решение 4

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


// for (let i = 0; i < 2; i++) {
//   const a = prompt('Один и последних просмотренных фильмов', ''),
//         b = prompt('На сколько оценили его?', '');

//   if (a != null && b != null && a !='' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   } else {
//     console.log('error');
//     i --;
//   }

//   personalMovieDB.movies[a] = b;
// }

// if (personalMovieDB.count < 10) {
//   console.log("Просмотсрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//   console.log("Вы киноман!");
// } else {
//   console.log("Произошла Ошибка!");
// }

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

// ЦИКЛЫ

// let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// ЦИКЛ 2

// do {
//   console.log(num);
//   num++;
// }
// while (num <= 55);

// ОСНОВНОЙ ЦИКЛ

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }


// let num = 20;

// function showFirstMessage(text) {
//   console.log(text);
//   // let num = 10;
//   console.log(num);
// }

// showFirstMessage("Hello World!");
// console.log(num);

// function calc(a, b) {
//   return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//   let num = 50;
//   return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//   console.log("Hello");
// };

// logger();

// const calc = (a, b) => {
//   console.log("1");
//   return a + b;
// } ;

// const str = "test";

// console.log(str[2] = 'd');
// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());
// console.log(str);

// const fruit = "some fruit";

// console.log(fruit.indexOf("q"));

// const logg = "Hello world";

// console.log(logg.slice(6));


// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));



// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
//   }
// }

// // start();

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: true
// };



// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt('Один и последних просмотренных фильмов', ''),
//           b = prompt('На сколько оценили его?', '');
//     if (a != null && b != null && a !='' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//     } else {
//       console.log('error');
//       i --;
//     }
//   }
// }

// rememberMyFilms();



// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log("Просмотсрено довольно мало фильмов");
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
//   } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман!");
//   } else {
//     console.log("Произошла Ошибка!");
//   }
// }
// detectPersonalLevel();

// function showMyDB (hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// }

// console.log(personalMovieDB);

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {

//     personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//   }
// }

// writeYourGenres();

// function first() {
//   // DO something
//   setTimeout(function() {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//   console.log(`Я учу : ${lang}`);
//   callback();
// }

// function done() {
//   console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   },
//   makeTest: function() {
//     console.log("Test");
//   }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options["colors"]["border"]);

// delete options.name;

// console.log(options);


// let counter = 0;
// for (let key in options) {
//   if(typeof(options[key]) ==='object') {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//       counter++;
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//   }
// }

// console.log(counter);
// Сортировка числа!!!!

// const arr = [2, 13, 6, 38, 110];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//   return a - b;
// }

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }
// Сортировка текста!!
// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

// let a = 5,
//     b = a;


//     b = b + 5;

//     console.log(b);
//     console.log(a);


// const obj = {
//   a: 5,
//   b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy (mainObj) {
//   let objCopy = {};

//   let key;
//   for(key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }

//   return objCopy;

// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4
//   }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//   d: 17,
//   e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice();


// newArray[1] = "asdasdasd";
// console.log(newArray);
// console.log(oldArray);

// const video = ["youtube", "video", "rutube"],
//       blogs = ["wordpress", "livejournal", "blogger"],
//       intenet = [...video, ...blogs, "vk", "facebook"];

// console.log(intenet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ["a", "b"];

// const newArray = [...array];

// const q = {
//   one: 1,
//   two: 2
// };

// const newObj = {...q};

// console.log(q);



// let str = "some";

// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const soldier = {
//   health: 400,
//   armor: 100,
//   sayHello: function() {
//     console.log("Hello!!!");
//   }
// };

// const jonh = Object.create(soldier);

// const jonh = {
//   health: 100
// };

// jonh.__proto__ = soldier;

// Object.setPrototypeOf(jonh, soldier);



// jonh.sayHello();


const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  start: function() {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один и последних просмотренных фильмов', ''),
            b = prompt('На сколько оценили его?', '');
      if (a != null && b != null && a !='' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i --;
      }
    }
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log("Просмотсрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман!");
    } else {
      console.log("Произошла Ошибка!");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres:function() {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      if (genre === '' || genre == null) {
        console.log('Вы ввели некоректные данные или не ввели их воовсе'); i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }

      personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} - это ${item}`);
      });
    }
  }
};
