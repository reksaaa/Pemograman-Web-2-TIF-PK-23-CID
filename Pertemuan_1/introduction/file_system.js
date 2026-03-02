import * as fs from "node:fs";

fs.writeFile(
  "hello.txt",
  "Welcome to Web Programming 2! Lecturer Muhammad Reksa Ariansyah",
  (err) => {
    if (err) {
      throw err;
    }
    console.log("File written successfully!");
  },
);

fs.readFile("./hello.txt", "utf-8", (err, data) => {
  if (err) throw err;

  console.log(data);
});
