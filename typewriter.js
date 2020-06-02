const sentence = 'hello there from lighthouse labs';
let time = 0;
const interval = 500;
for (const char of sentence) {
  setTimeout(() => {
    time += interval;
    process.stdout.write(`${char} => ${time} ms \n`);
  }, interval);
}
