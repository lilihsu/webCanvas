var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var radius = 10;
var dragging=false;

canvas.width = window.innerWidth - 60;
canvas.height = window.innerHeight*0.6;
ctx.lineWidth= radius*2;

var draw = function(e){
    if(type_pen){
        if(dragging){
            ctx.lineTo(e.offsetX,e.offsetY);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(e.offsetX,e.offsetY,radius,0,Math.PI*2);
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(e.offsetX,e.offsetY);
        }
    }
    else if(type_erase){
        if(dragging){
            ctx.lineTo(e.offsetX,e.offsetY);
            ctx.stroke();
            ctx.globalCompositieOperation= source-over;
            ctx.beginPath();
            ctx.arc(e.offsetX,e.offsetY,radius,0,Math.PI*2);
            ctx.globalCompositeOperation = destination-out;
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(e.offsetX,e.offsetY);
        }
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