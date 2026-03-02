import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      name: "url",
      message: "Type in your URL",
    },
  ])
  .then((answers) => {
    var qr_svg = qr.image(answers.url);
    qr_svg.pipe(fs.createWriteStream("url_qr.png"));

    fs.writeFile("url.txt", answers.url, (err) => {
      if (err) throw err;
      console.log("URL saved to url.txt");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
