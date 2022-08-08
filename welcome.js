const fs = require("fs");
const path = require("path");

fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;

  console.log("the file was created");
});

const filePath = path.join(process.cwd(), "welcome.txt");

fs.readFile(filePath, (error, content) => {
  if (error) throw error;

  console.log(content.toString());
});
