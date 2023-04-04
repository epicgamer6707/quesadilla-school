// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>

class Draggable {
    constructor(x, y, w, h) {
      this.dragging = false; // Is the object being dragged?
      this.rollover = false; // Is the mouse over the ellipse?
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.offsetX = 0;
      this.offsetY = 0;
    }
  
    over() {
      // Is mouse over object
      if (mouseX > this.x-25 && mouseX < this.x-25 + this.w && mouseY > this.y-25 && mouseY < this.y-25 + this.h) {
        this.rollover = true;
      } else {
        this.rollover = false;
      }
    }
  
    update() {
      // Adjust location if being dragged
      if (this.dragging) {
        this.x = mouseX + this.offsetX;
        this.y = mouseY + this.offsetY;
      }
    }
  
    showtort() {
      stroke(0);
      // Different fill based on state
      if (this.dragging) {
        fill(204, 177, 122);
      } else if (this.rollover) {
        fill(232, 212, 172);
      } else {
        fill(252, 234, 197);
      }
      ellipse(this.x, this.y, this.w, this.h);
    }


    showch() {
      stroke(0);
      // Different fill based on state
      if (this.dragging) {
        fill(189, 123, 66);
      } else if (this.rollover) {
        fill(212, 138, 74);
      } else {
        fill(230, 151, 83);
      }
      ellipse(this.x, this.y, this.w, this.h);
    }

    showbo() {
      stroke(0);
      // Different fill based on state
      if (this.dragging) {
        fill(23, 23, 23);
      } else if (this.rollover) {
        fill(23, 23, 23);
      } else {
        fill(23, 23, 23);
      }
      ellipse(this.x, this.y, this.w, this.h);
    }

    showg() {
      stroke(0);
      // Different fill based on state
      if (this.dragging) {
        fill(99, 153, 64);
      } else if (this.rollover) {
        fill(113, 171, 75);
      } else {
        fill(130, 196, 86);
      }
      ellipse(this.x, this.y, this.w, this.h);
    }

    showc() {
      stroke(0);
      // Different fill based on state
      if (this.dragging) {
        fill(201, 177, 34);
      } else if (this.rollover) {
        fill(227, 202, 54);
      } else {
        fill(247, 220, 64);
      }
      ellipse(this.x, this.y, this.w, this.h);
    }
    showt() {
      stroke(0);
      // Different fill based on state
      if (this.dragging) {
        fill(176, 59, 46);
      } else if (this.rollover) {
        fill(194, 66, 52);
      } else {
        fill(227, 80, 64);
      }
      ellipse(this.x, this.y, this.w, this.h);
    }




  
    pressed() {
      // Did I click on the rectangle?
      if (mouseX > this.x-25 && mouseX < this.x-25 + this.w && mouseY > this.y-25 && mouseY < this.y-25 + this.h) {
        this.dragging = true;
        // If so, keep track of relative location of click to corner of rectangle
        this.offsetX = this.x - mouseX;
        this.offsetY = this.y - mouseY;
      }
    }
  
    released() {
      // Quit dragging
      this.dragging = false;
    }
  }