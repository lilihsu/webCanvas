var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var radius = 10;
var dragging=false;
var storeArray=new Array();
var step=-1;

var startX;
var startY;

var type_pen=true;
var type_erase=false;
var type_font=false;
var type_img=false;
var type_rect=false;
var type_trian=false;
var type_circle=false;

canvas.width = window.innerWidth*0.97;
canvas.height = window.innerHeight*0.78;
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
    else if(type_font){
        if(dragging){
            ctx.font= radius+"px"+" "+selectfont.value;
            ctx.fillText(input_text.value,e.offsetX,e.offsetY);
        }
    }
    
   
}

var engage = function(e){
    dragging=true;
    draw(e);
    startX=e.offsetX;
    startY=e.offsetY;
}

var disengage = function(e){
    if(type_rect){
        ctx.rect(startX,startY,e.offsetX-startX,e.offsetY-startY);
        ctx.stroke();
    }
    else if(type_img){
        ctx.drawImage(img,startX,startY,e.offsetX-startX,e.offsetY-startY);
    }
    else if(type_circle){
        var Xdistance=e.offsetX-startX;
        var Ydistance=e.offsetY-startY;
        var diameter=Math.pow(Xdistance*Xdistance+Ydistance*Ydistance,0.5);
        ctx.arc((startX+e.offsetX)/2,(startY+e.offsetY)/2,diameter/2,0,Math.PI*2);
        ctx.stroke();
    }
    else if(type_trian){
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.lineTo(startX+(event.offsetX-startX)*2, startY);
        ctx.closePath();
        ctx.stroke();
    }
    Store();
    dragging=false;
    ctx.beginPath();
}
var overDisengage = function(e){
    if(dragging){
        Store();
    }
    dragging=false;
    ctx.beginPath();
}

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', disengage);
canvas.addEventListener('mouseover', overDisengage);

//reset

var reset=document.getElementById('reset');
reset.addEventListener('click',function(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    step=-1;
    storeArray.length=0;
})


//font
var text=document.getElementById('text');
var selectfont=document.getElementById('selectfont');
var input_text=document.getElementById('input_text');

text.addEventListener('click',function(){
    type_erase=false;
    type_pen=false;
    type_img=false;
    type_rect=false;
    type_trian=false;
    type_circle=false;
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
    document.body.style.cursor="crosshair";
}

imgButton.addEventListener('click',function(){
    type_erase=false;
    type_pen=false;
    type_font=false;
    type_rect=false;
    type_trian=false;
    type_circle=false;
    type_img=true;
    document.body.style.cursor="crosshair";
})

//rect
var rect=document.getElementById('rect');
    rect.addEventListener('click',function(){
        type_erase=false;
        type_pen=false;
        type_font=false;
        type_rect=true;
        type_trian=false;
        type_circle=false;
        type_img=false;
        document.body.style.cursor="crosshair";
    })
// circle

var circle=document.getElementById('circle');
    circle.addEventListener('click',function(){
        type_erase=false;
        type_pen=false;
        type_font=false;
        type_rect=false;
        type_trian=false;
        type_circle=true;
        type_img=false;
        document.body.style.cursor="crosshair";
    })
//triangle
var triangle=document.getElementById('triangle');
    triangle.addEventListener('click',function(){
        type_erase=false;
        type_pen=false;
        type_font=false;
        type_rect=false;
        type_trian=true;
        type_circle=false;
        type_img=false;
        document.body.style.cursor="crosshair";
    })
//store
function Store(){
    step++;
    if(step<storeArray.length){
        storeArray.length=step;
    }
    storeArray.push(canvas.toDataURL());
}
//redo
var redo=document.getElementById('redo');
    redo.addEventListener('click',function(){
        var canvasImg=new Image();
        if(step<storeArray.length-1){
            step++;
            canvasImg.src=storeArray[step];
            canvasImg.onload= function(){
                ctx.clearRect(0,0,canvas.width,canvas.height);
                ctx.drawImage(canvasImg,0,0);
            }
            
        }
    })
//undo
var undo=document.getElementById('undo');
    undo.addEventListener('click',function(){
        var canvasImg =new Image();
        if(step>0){
            step--;
            canvasImg.src=storeArray[step];
            canvasImg.onload=function(){
                ctx.clearRect(0,0,canvas.width,canvas.height);
                ctx.drawImage(canvasImg,0,0);
            }
        }
        else if(step==0){
            step--;
            ctx.clearRect(0,0,canvas.width,canvas.height);
        }
    })

