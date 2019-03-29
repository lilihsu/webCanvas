var pen=document.getElementById('pen');
pen.addEventListener('click',function(){
    type_erase=false;
    type_pen=true;
    type_font=false;
    type_img=false;
    document.body.style.cursor="url('pen.png'), default";
}
)
