const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");

stdin.on("data", key => {
  if (key === "\u0003") {
    process.exit();
  } else if (key === "b") {
    process.stdout.write("\x07" + "beep\n");
  } else if (/[0-9]/.test(key)) {
    // RegEx - 0 to 9, testing if 0-9 is in (key)
    process.stdout.write(`Start time for ${key}`);
    setTimeout(() => {
      process.stdout.write("\x07");
    }, key * 1000);
  }
});

// const getArguments = function() {
//   return process.argv.slice(2);
// };
//
// let timer = function(args) {
//   for (num of args) {
//     if (num > 0) {
//       setTimeout(() => {
//         process.stdout.write("\x07");
//       }, num * 1000);
//     }
//   }
// };

// timer(getArguments());
// // process.stdout.write("\x07");
//
//
// // const stdin = process.stdin;
// // don't worry about these next two lines of setup work.
// stdin.setRawMode(true);
// stdin.setEncoding('utf8');
//
// ////////////
// // Event Handling for User Input
// ////////////
//
// // on any input from stdin (standard input), output a "." to stdout
// stdin.on('data', (key) => {
//   process.stdout.write('.');
// \u0003 maps to ctrl+c input
// if (key === '\u0003') {
//   process.exit();
// }

// });
//
// console.log('after callback');
// //
