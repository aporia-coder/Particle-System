// Global declaration of width, height, font and particle array
let w;
let h;
let pars = [];
let nunito;
let colors = [
  [252, 219, 3],
  [235, 52, 113],
  [60, 232, 143],
  [38, 98, 163],
];

function preload() {
  mont = loadFont("../assets/Montserrat-Thin.ttf");
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-holder");
  w = window.innerWidth;
  h = window.innerHeight;
  textFont(mont);
  for (let i = 0; i < width / 10; i++) {
    pars.push(new Particle());
  }
}

class Text {
  constructor() {
    this.textSize(50);
  }
}

class Particle {
  constructor() {
    this.pos = createVector(random(0, w), random(0, h));
    this.vel = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
    this.glow = 50;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.linesArr = [];
  }

  show() {
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, 2);
  }

  // glow(line) {
  //   let d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
  // }

  move() {
    this.pos.add(this.vel);
  }

  hits() {
    if (this.pos.x <= 0 || this.pos.x >= w) {
      this.vel.x *= -1;
    }
    if (this.pos.y <= 0 || this.pos.y >= h) {
      this.vel.y *= -1;
    }
  }

  lines(particleArr) {
    for (let particle of particleArr) {
      let d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      if (d < 120) {
        stroke(100, 100, 100, this.glow);
        line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      }
    }
  }
}

function draw() {
  background(37, 40, 52);
  pars.forEach((particle, index) => {
    particle.show();
    particle.move();
    particle.hits();
    // particle.glow(particle);
    particle.lines(pars.slice(index));
  });
  textAlign(CENTER, CENTER);
  textSize(width / 30);
  fill(255, 255, 255);
  // text(`Hi, I'm Zachary Gray`, window.innerWidth / 2, window.innerHeight / 2);
  // text(
  //   "A Software developer based in the UK",
  //   window.innerWidth / 2,
  //   window.innerHeight / 2 + window.innerHeight / 10,
  // );
  // push();
  // stroke(colors[1]);
  // fill("rgb(255, 255, 255");
  // rectMode(CENTER);
  // rect(
  //   window.innerWidth / 2,
  //   window.innerHeight / 2 + window.innerHeight / 5,
  //   160,
  //   50,
  // );
  // pop();
}
