class Firework {
  constructor(x, Vy, longevity, thick, n,) {
	  this.H = random(255);
    this.longevity = longevity;
    this.thick = thick;
    this.n = n;
    this.particles = [];
	  let part = new Particle(x, height, this.thick, 0, Vy, this.H);
    this.particles.push(part);
  }
  actualize(){
    this.longevity -= 1;
    if(this.longevity < 0){
      this.particles = [];
      fireList.shift();
    }
    for (var par of this.particles){
      par.show();
      if(this.particles.length == 1 && par.Vy <= 0){
        let i = par.x;
        let j = par.y;
        this.particles.pop();
        this.explote(i, j);
      }
    }
  }
  explote(x, y){
    for(var c = 0; c <= this.n; c++){
      let part = new Particle(x, y, this.thick, random(-6, 6), random(-3, 20), this.H);
      this.particles.push(part);
    }
  }
  dec(){
    this.index -= 1;
  }
}

class Particle{
  constructor(x, y, r, Vx, Vy, h){
    this.x = x;
    this.y = y;
    this.r = r;
    this.Vy = Vy;
    this.Vx = Vx;

	  this.H = h;
  }
  show(){
    this.x += this.Vx;
    this.y -= this.Vy;
    this.Vy += gravity;
    //  this.Vx *= friction;
	  fill(this.H, 255, 255);
    ellipse(this.x, this.y, this.r, this.r);
  }
}
