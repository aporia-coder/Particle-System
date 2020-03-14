// Global declaration of width, height, and particle array
let w;
let h;
let pars = [];

class Particle {
  constructor() {
    this.pos = createVector(random(0, w), random(0, h));
    this.vel = createVector(random(-2, 2), random(-2, 2));
  }

  show() {
    noStroke();
    fill(255);
    ellipse(this.pos.x, this.pos.y, 7);
  }

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
        stroke(100);
        line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      }
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  w = width;
  h = height;
  for (let i = 0; i < width / 10; i++) {
    pars.push(new Particle());
  }
}

function draw() {
  background(0);
  pars.forEach((particle, index) => {
    particle.show();
    particle.move();
    particle.hits();
    particle.lines(pars.slice(index));
  });
}
