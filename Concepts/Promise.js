import fs from "fs";

import fsp from "fs/promises";


console.log("Start..");
fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});


let promise = fsp.readFile("file.txt", "utf-8");
promise.then((data) => {
    console.log(data);
  }).catch((err) => {
    console.log(err);
  });

console.log("End..");