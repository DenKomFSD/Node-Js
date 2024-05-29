const fs = require("fs");
const dns = require("dns");

function timestamp() {
  return performance.now().toFixed(2);
}

console.log("Program start");
setTimeout(() => console.log("Timeout 1", timestamp()), 0);
setTimeout(() => {
  process.nextTick(() => console.log("Next tick 2", timestamp()));
  console.log("Timeout 2", timestamp());
}, 10);

fs.writeFile("./text.txt", "Hello Denis", () =>
  console.log("File written", timestamp())
);
Promise.resolve().then(() => console.log("Promise 1", timestamp()));

process.nextTick(() => console.log("Next tick 1", timestamp()));

setImmediate(() => console.log("Immediate 1", timestamp()));

dns.lookup("localhost", (error, address, family) =>
  console.log("DNS 1 localhost", address, timestamp())
);

console.log("Programm end");
