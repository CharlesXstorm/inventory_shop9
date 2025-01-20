const fs = require("fs");
const path = require("path");

const processFile = (inputPath, outputPath) => {
  fs.readFile(inputPath, "utf8", (err, data) => {
    if (err) {
      console.log("error reading file");
      return;
    }

    const processedData = data
      .split("\n")
      .map((item) => {
        if (item !== "\r") {
          return `"${item.replace(/\r/g, "")}"`;
        } else {
          return "";
        }
      })
      .filter((item) => item.length != 0)
      .join(",");

    fs.writeFile(outputPath, processedData, "utf8", (err) => {
      if (err) {
        return console.log("Error writing file");
      }
      return console.log("file written successfully");
    });
  });
};

const inputPath = path.join(__dirname, "file.txt");
const outputPath = path.join(__dirname, "outfile.txt");

processFile(inputPath, outputPath);
