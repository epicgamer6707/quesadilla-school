// Click and Drag an object
let shape1;




function setup(button) {

  
    createCanvas(3000,5000);
    shape1 = new Draggable(700,230,285,285); 


 
}




function draw() {
 background(227);
 shape1.over();
 shape1.update();
 shape1.showtort();


}




function mousePressed() {
 shape1.pressed();

}




function mouseReleased() {
 shape1.released();


}
