mouse="empty";
var uPOsicionX, uPOsicionY;

canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d")

color="purple";
anchoDeLinea=12;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{

    color=document.getElementById("color").value;
    mouse="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove)

function my_mousemove(e)
{
    PosicionActualX = e.clientX - canvas.offsetLeft;
    PosicionActualY = e.clientY - canvas.offsetTop;

    if (mouse== "mouseDown"){
       ctx.beginPath();
       ctx.strokeStyle = color;
       ctx.lineWidth =anchoDeLinea;
       ctx.moveTo(uPOsicionX,uPOsicionY);
       ctx.lineTo(PosicionActualX,PosicionActualY);
       ctx.stroke();

       
    }

    uPOsicionX =PosicionActualX;
    uPOsicionY =PosicionActualY;
}
canvas.addEventListener("mouseup",mymouse_up);
function mymouse_up(e){mouse = "mouseup";

}
function borrador(){
ctx.clearRect(0,0,canvas.width,canvas.height);    
}