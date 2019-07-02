const getArguments = function() {
  return process.argv.slice(2);
};

let timer = function(args) {
  for (num of args) {
    if (num > 0) {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, num * 1000);
    }
  }
};

timer(getArguments());
// process.stdout.write("\x07");
