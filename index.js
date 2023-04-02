const filesystem = require("./node_modules/graceful-fs/graceful-fs");
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");

class Svg {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }
  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
  }
  setTextElement(text, color) {
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }
  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

const questions = [
  {
    type: "input",
    name: "text",
    message: "Text: Enter up to (3) characters:",
  },
  {
    type: "input",
    name: "text-color",
    message: "Text Color: Enter a color keyword (or a hexadecimal number):",
  },
  {
    type: "input",
    name: "shape",
    message: "Shape Color: Enter a color keyword (or a hexadecimal number):",
  },
  {
    type: "list",
    name: "pixel-image",
    message: "Choose which Pixel Image you would like?",
    choices: ["Circle", "Square", "Triangle"],
  },
];

function writeToFile(fileName, data) {
  console.log("Writing [" + data + "] to file [" + filename + "]");
  filesystem.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Congrats! You have generated a logo.svg!");
  });
}

async function init() {
  console.log("Starting init");
  var svgString = "";
  var svg_file = "logo.svg";

  const answers = await inquirer.createPromptModule(questions);

  var userText = "";
  if (answers.text.length > 0 && answers.text.length < 4) {
    userText = answers.text;
  } else {
    console.log(
      "Invalid user text field detected! Please enter 1-3 characters!"
    );
    return;
  }
  console.log("User text: [" + userText + "]");

  userFontColor = answers["text-color"];
  console.log("User font color: [" + userFontColor + "]");

  userShapeColor = answers.shape;
  console.log("User shape color: [" + userShapeColor + "]");

  userShapeType = answers["pixel-image"];
  console.log("User shape type: [" + userShapeType + "]");

  let userShape;
  if (userShapeType === "Square" || userShapeType === "square") {
    userShape = new Square();
    console.log("User selected Square shape");
  } else if (userShapeType === "Circle" || userShapeType === "circle") {
    userShape = new Circle();
    console.log("User selected Circle shape");
  } else if (userShapeType === "Triangle" || userShapeType === "triangle") {
    userShape = new Triangle();
    console.log("User selected Triangle shape");
  } else {
    console.log("Invalid shape!");
  }
  userShape.setColor(userShapeColor);
}
