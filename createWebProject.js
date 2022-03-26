var fs = require("fs");
const prompt = require("prompt-sync")();
console.log("Welcome to Web Create Project.");
let EMMET = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href ="./assets/css/style.css">
</head>
<body>
    <script src="./assets/js/script.js"> </script>
</body>
</html>
`;
let RESET = `*{\n\tmargin:0;\n\tpadding:0;\n\tbox-sizing:border-box;\n}`;
createWebProject();

function createWebProject() {
  nomeDoProjeto = prompt(`Type project's name: `);
  caminho = `./${nomeDoProjeto}`;
  if (fs.existsSync(caminho)) throw "This name already exist!";
  fs.mkdirSync(caminho);
  fs.mkdirSync(caminho + `/assets`);
  fs.mkdirSync(caminho + `/assets/css`);
  fs.mkdirSync(caminho + `/assets/js`);
  fs.mkdirSync(caminho + `/assets/img`);
  console.log('Image directory created!');
  fs.appendFile(`${caminho}/index.html`, EMMET, function (err) {
    if (err) throw err;
    console.log("index.html created!");
  });
  fs.appendFile(`${caminho}/assets/css/style.css`, RESET, function (err) {
    if (err) throw err;
    console.log("CSS directory and file created!");
  });
  fs.appendFile(
    `${caminho}/assets/js/script.js`,
    "// Js vazio",
    function (err) {
      if (err) throw err;
      console.log("JavaScript directory and file created!");
    }
  );
}
