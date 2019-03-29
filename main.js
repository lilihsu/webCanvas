var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var radius = 10;
var dragging=false;

var type_pen=true;
var type_erase=false;
var type_font=false;
var type_img=false;

canvas.width = window.innerWidth - 60;
canvas.height = window.innerHeight*0.6;
ctx.lineWidth= radius*2;

var draw = function(e){
    if(type_pen){
        if(dragging){
            console.log("pen");
            ctx.globalCompositeOperation= "source-over";
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
            console.log("erase");
            ctx.lineTo(e.offsetX,e.offsetY);
            ctx.globalCompositeOperation = "destination-out";
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(e.offsetX,e.offsetY,radius,0,Math.PI*2);
            ctx.fill();
            ctx.globalCompositeOperation= "source-over";
            ctx.beginPath();
            ctx.moveTo(e.offsetX,e.offsetY);
            
        }
    }
    else if(type_font)
    {
        if(dragging){
            ctx.font= radius+"px"+" "+selectfont.value;
            ctx.fillText(input_text.value,e.offsetX,e.offsetY);
        }
    }
    else if(type_img)
    {
        if(dragging){
            ctx.drawImage(img,e.offsetX,e.offsetY,radius,radius);
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

//reset

var reset=document.getElementById('reset');
reset.addEventListener('click',function(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
})


//font
var text=document.getElementById('text');
var selectfont=document.getElementById('selectfont');
var input_text=document.getElementById('input_text');

text.addEventListener('click',function(){
    type_erase=false;
    type_pen=false;
    type_img=false;
    type_font=true;
    document.body.style.cursor="url('text.png'), default";
}
)


//upload image
var imgButton=document.getElementById('img_button');
var imageLoader = document.getElementById('imageLoader');
 
var img = new Image();
var reader = new FileReader();

imageLoader.addEventListener('change', handleImage, false);

function handleImage(e){
    
    reader.onload = function(event){
        
        
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
}



imgButton.addEventListener('click',function(){
    type_erase=false;
    type_pen=false;
    type_font=false;
    type_img=true;
})

