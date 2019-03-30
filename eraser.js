var eraser=document.getElementById('eraser');
eraser.addEventListener('click',function(){
    type_pen=false;
    type_erase=true;
    type_font=false;
    type_img=false;
    type_rect=false;
    type_trian=false;
    type_circle=false;
    document.body.style.cursor="url('eraser.png'), default";
}
)


