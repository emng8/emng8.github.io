// OOP Inheritance Demo

// Parent Class
class Shape {
  constructor(x, y, theColor) {
    this.x = x;
    this.y = y;
    this.theColor = theColor;
  }

  // common display for all shapes
  display() {
    noStroke();
    fill(this.theColor);
  }

  // common move function 
  move() {
    this.x += random(-2, 2); 
    this.y += random(-2, 2);
  }
}

// Child Class
class Circle extends Shape {
  constructor(x, y, theColor, radius) {
    super(x, y, theColor);
    this.radius = radius;
  }

  // override display function 
  display() {
    super.display();
    circle(this.x, this.y, this.radius * 2);
  }
}

// Child Class
class Square extends Shape {
  constructor(x, y, theColor, size) {
    super(x, y, theColor);
    thesize = size;
  }

  display() {
    super.display();
    square(this.x, this.y, this.size * 2);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) {
    if(random(100) < 50) {
      let theCircle = new Circle(random(width), random(height), color(random255), random(255), random(255), random(20, 50));
      theShapes.push(theCircle);
    }
    else {
      let theSquare = new Square(random(width), random(height), color(random255), random(255), random(255), random(20, 50));
      theShapes.push(theSquare);
    }
  }
}

function draw() {
  background(220);
  for (let someShape of theShapes) {
    someShape.move();
    someShape.display();
  }
}
