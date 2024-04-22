var mouseEvent=""

canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var color="blue";
var width=7;
var radius=9;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color.document.getElementById("color").value;
    width_of_line.document.getElementById("width_of_line").value;
    radius.document.getElementById("radius").value;
    mouseEvent="mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvasoffsetLeft;
    current_position_of_mouse_y = e.clientY - canvasoffsetTop;

    if (mouseEvent == "mousedown"){
        console.log("Current position of X and Y coordinates =")
        console
    }
}
