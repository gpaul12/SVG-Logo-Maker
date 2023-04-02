class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}
class Circle extends Shape {
  render() {
    return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`;
  }
}
class Square extends Shape {
  render() {
    return `<rect x="50" height="200" width="200" fill="${this.color}">`;
  }
}
