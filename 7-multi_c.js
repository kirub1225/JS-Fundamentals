const arg = process.argv[2];
const num = parseInt(arg);

if (isNaN(num) || num <= 0) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < num; i++) {
    console.log("C is fun");
  }
}