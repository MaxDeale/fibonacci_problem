// FIBONACCI SEQUENCE

//OUTPUT THE CORRECT FIBONACCI VALUE AT INDEX X
//THE FIBONACCI SEQUENCE IS A SERIES OF NUMBERS WHERE EVERY NUMBER IS THE SUM OF THE PREVIOUS TWO
// AS SUCH  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// function fib(x) {
//   let fibArr = [0, 1];
//   let lastNum = 0;

//   if (x === 1) {
//     return 1;
//   } else {
//     for (let i = 2; i <= x; i++) {
//       let nextNum = fibArr[i - 1] + fibArr[i - 2];
//       fibArr.push(nextNum);
//       lastNum = fibArr[x];
//     }
//   }

//   return lastNum;
// }

function fib(x) {
  if (x < 2) {
    return x;
  }

  return fib(x - 1) + fib(x - 2);
}

module.exports = fib;
