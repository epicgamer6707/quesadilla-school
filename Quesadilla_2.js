// Click and Drag an object
let shape1;
let shape2;
let shape3;
var x = "Step 2: Now, add your cheese (don't spill it on the pan) and your ingredients which can be customized (make sure you don't add too much so that it overflows). <br> Paso 2: Ahora, agregue su queso (no lo derrame en la sartén) y sus ingredientes que se pueden personalizar (asegúrese de no agregar demasiado para que se desborde).";
var y = "Step 3: Let your quesadilla rest for a bit at low heat and remove when the cheese is melted. Finnaly cover your quesadilla with another tortilla or fold it in half. <br> Paso 3: Deja reposar un rato tu quesadilla a fuego lento y retira cuando el queso se derrita. Finalmente cubra su quesadilla con otra tortilla o dóblela por la mitad."

function setup(button) {

  
    createCanvas(3000,5000);
    shape1 = new Draggable(800,230,285,285); 
    shape3 = new Draggable(130,305,250,250); 
    shape4 = new Draggable(525,305,250,250); 
    shape5 = new Draggable(1075,130,250,250); 
    shape2 = new Draggable(325,130,250,250); 
    shape6 = new Draggable(1255,325,250,250); 


 
}
document.getElementById("writeHere").innerHTML =x;

document.getElementById("trigger1").addEventListener("click", write);
function write(){
document.getElementById("writeHere").innerHTML = x;
}


document.getElementById("trigger2").addEventListener("click",write1);
function write1(){
document.getElementById("writeHere").innerHTML = y;
}




function draw() {
 background(227);
 shape1.over();
 shape1.update();
 shape1.showtort();
 shape2.over();
 shape2.update();
 shape2.showc();
 shape3.over();
 shape3.update();
 shape3.showch();
 shape4.over();
 shape4.update();
 shape4.showbo();
 shape5.over();
 shape5.update();
 shape5.showg();
 shape6.over();
 shape6.update();
 shape6.showt();

}

function mousePressed() {
 shape1.pressed();
 shape2.pressed();
 shape3.pressed();
 shape4.pressed();
 shape5.pressed();
 shape6.pressed();
}

function mouseReleased() {
 shape1.released();
 shape2.released();
 shape3.released();
 shape4.released();
 shape5.released();
 shape6.released();
}
