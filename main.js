var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var radius = 10;
var dragging=false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineWidth= radius*2;

var draw = function(e){
    if(dragging){
        ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(e.clientX,e.clientY,radius,0,Math.PI*2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(e.clientX,e.clientY);
    }
    
}

var engage = function(e){
    dragging=true;
    draw(e);
}

var disengage = function(){
    dragging=false;
    ctx.beginPath();
}

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', disengage);