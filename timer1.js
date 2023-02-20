
const input = process.argv.slice(2).filter((time) => Number(time)).filter((time) => time > 0);

for (let time of input) {
  setTimeout(() => {
    process.stdout.write('\x07');
    // console.log('hello');
  }, 1000 * time);
};