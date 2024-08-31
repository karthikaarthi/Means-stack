const fs = require("fs");

console.log("Process Start ....");

const FILE_PATH = "E:\\Means Stack\\k_nodejs\\NODE_JS\\day_1\\data\\sample1.txt";

fs.unlink(FILE_PATH, (err) => {
  if (err) throw err;
  console.log("Deleted ....");
});

console.log("Process End ....");