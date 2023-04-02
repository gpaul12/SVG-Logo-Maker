const filesystem = require("./node_modules/graceful-fs/graceful-fs");
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");

class Svg {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }
}
