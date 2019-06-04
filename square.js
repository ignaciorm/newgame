function Square() {
  this.size = 50;

  this.show = function() {
    rectMode(CENTER);
    rect(centerw,centerh,this.size,this.size);
  }

}
