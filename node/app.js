// const val =2;
// if (val>10){
//     console.log('ok');
// }
// else {
//     console.log('not ok');
// }
// console.log(`done`);

// console.log(__dirname);
// setInterval(() => {
//     console.log(`hi ra`);
// }, 1000);

const names = require('./modules');
const sayhi = require('./uti');

const data  = require('./alt');

console.log(names);
sayhi(names.me);
sayhi(names.you);

console.log(data);