canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";

ctx.beginPath();//comenzamos o reiniciamos para dibujar
ctx.strokeStyle=color; //es para darle color
ctx.lineWidth=2; //es el ancho de la linea del dibujo
ctx.arc(200,200,40,0,2*Math.PI);//coordenadas del circulo, radio del circulo, formula para circulo
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    circle(mouse_x, mouse_y);
}
function circle(mouse_x, mouse_y){
    ctx.beginPath();//comenzamos o reiniciamos para dibujar
    ctx.strokeStyle=color; //es para darle color
    ctx.lineWidth=2; //es el ancho de la linea del dibujo
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);//coordenadas del circulo, radio del circulo, formula para circulo
    ctx.stroke();
}

