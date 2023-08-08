$(function(){
    
    
    //1. 변수
    
    //프로젝트 마우스오버시 mask 보이기
    var $uiux_list_li = $('.uiux_list ul li');
    var $graphics_list_li = $('.graphics_list ul li');
    var $edit_list_li = $('.edit_list ul li');
    
    
    
    //2. 실행
    
    //프로젝트 마우스오버시 mask 보이기
    $uiux_list_li.mouseover(function(){
        $(this).find('span').stop(true).animate({
            opacity:1
        },200)
    }).mouseout(function(){
        $(this).find('span').stop(true).animate({
            opacity:0
        },200)
    });

    $graphics_list_li.mouseover(function(){
        $(this).find('span').stop(true).animate({
            opacity:1
        },200)
    }).mouseout(function(){
        $(this).find('span').stop(true).animate({
            opacity:0
        },200)
    });

    $edit_list_li.mouseover(function(){
        $(this).find('span').stop(true).animate({
            opacity:1
        },200)
    }).mouseout(function(){
        $(this).find('span').stop(true).animate({
            opacity:0
        },200)
    });
    

    //uiux 프로젝트
    $('.uiux_contents').hide(); //전체 감싼 프로젝트 숨기기
    for(var i=0; i<$('.uiux_list li').length; i++){
        (function(i){
            $('.uiux_list li').eq(i).click(function(){
                $('.uiux_contents').eq(i).show();
            })
        })(i)
    }

    //graphics 프로젝트
    $('.graphics_contents').hide(); //전체 감싼 프로젝트 숨기기
    for(var i=0; i<$('.graphics_list li').length; i++){
        (function(i){
            $('.graphics_list li').eq(i).click(function(){
                $('.graphics_contents').eq(i).show();
            })
        })(i)
    }

    //edit 프로젝트
    $('.edit_contents').hide(); //전체 감싼 프로젝트 숨기기
    for(var i=0; i<$('.edit_list li').length; i++){
        (function(i){
            $('.edit_list li').eq(i).click(function(){
                $('.edit_contents').eq(i).show();
            })
        })(i)
    }

    //close 실행
    $('.close').click(function(){
        $('.uiux_contents').hide();
        $('.graphics_contents').hide();
        $('.edit_contents').hide();
    });

    
    
});//ready function end






































