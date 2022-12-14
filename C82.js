canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
ctx.lineWidth=1;

var mouseEvent = "empty";
var last_position_x, last_position_y;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    posicion_continua_x = e.clientX - canvas.offsetLeft; 
    posicion_continua_y = e.clientY - canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();//comenzamos o reiniciamos para dibujar
        ctx.strokeStyle=color; //es para darle color
        ctx.lineWidth=1; //es el ancho de la linea del dibujo
        ctx.moveTo(last_position_x, last_position_y);
        ctx.lineTo(posicion_continua_x,posicion_continua_y);
        ctx.stroke();
    }
    last_position_x = posicion_continua_x;
    last_position_y = posicion_continua_y;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}