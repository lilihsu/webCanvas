var pen=document.getElementById('pen');
pen.addEventListener('click',function(){
    type_erase=false;
    type_pen=true;
    type_font=false;
    type_img=false;
    type_rect=false;
    type_trian=false;
    type_circle=false;
    document.body.style.cursor="url('pen.png'), default";
}
)
