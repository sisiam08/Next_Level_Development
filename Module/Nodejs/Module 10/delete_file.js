const { error } = require("console");
const fs = require("fs");

// Synchronously
// try {
//   fs.writeFileSync("./files/tempFile.txt", "Delete Me!!!!!!");
//   console.log("File created!!");

//   if (fs.existsSync("./files/tempFile.txt")) {
//     fs.unlinkSync("./files/tempFile.txt");
//     console.log("File deleted!!");
//   }
// } catch (error) {
//   console.error(error.message);
// }

// Asynchronously
fs.writeFile(
  "./files/tempFile2.txt",
  "Delete Me Asynchronously..!!",
  (error) => {
    if (error) console.error(error.message);
    else console.log("File created successfully...!");
  }
);

fs.unlink("./files/tempFile2.txt", (error) => {
  if (error) console.error("ERROR: ", error.message);
  else console.log("file deleted...!");
});

console.log("End...!");
