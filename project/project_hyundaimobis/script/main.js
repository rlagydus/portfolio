$(function(){
    //1. 변수
    //전체메뉴
    var $allMenu_icon = $('.h_right .xi-bars');
    var $allMenu = $('.allMenu');
    var $allMenu_wrap = $('.allMenu .allMenu_wrap');
    var $allMenu_close = $('.allMenu_top .close');
    
    var $allMenu_title = $('.allMenu_title .allMenu_title_con');
    var $allMenu_sub = $('.allMenu_sub .allMenu_sub_con');
    
    //서브메뉴
    var $nav = $('nav li');
    var $sub_wrap = $('.sub_menu_wrap');
    
    //검색창
    var $search = $('.search');
    var $search_btn = $('.h_right .xi-search');
    
    //제품 tap클릭시 변경
    var $s3tap_li = $('.s3_tap li');
    var $s3_contents = $('.s3_contents_wrap .contents');
    
    //s4 - 배경이미지변경
    var $s4contents_li = $('.s4_contents li');
    
    
    //2. 실행
    //전체메뉴
    $allMenu_icon.click(function(){
        $allMenu.stop(true).animate({'right':'0px'});
    });
    $allMenu_close.click(function(){
        $allMenu.stop(true).animate({'right':'-350px'});
    });
    
    $('.allMenu_title_con').click(function(){
        if($(this).siblings('.allMenu_con').css('display') != 'none'){
            var click_allMenu = this;
            $(this).siblings('.allMenu_con').slideUp(500,
                function(){
                    $(click_allMenu).removeClass('on');
                });
        }else
        {
            $('.allMenu_title_con').removeClass('on');
            $('.allMenu_con').slideUp(500);
            $(this).siblings('.allMenu_con').slideDown(500);
            $(this).addClass('on');
        }
    });
    
    $('.allMenu_sub_con').click(function(){
        if($(this).siblings('ul').css('display') != 'none')
        {
            $(this).siblings('ul').slideUp(500);
            $(this).removeClass('on');
        }
        else
        {
            $('.allMenu_sub_con').removeClass('on');
            $('.allMenu_sub_con').siblings('ul').slideUp(500);
            $(this).siblings('ul').slideDown(500);
            $(this).addClass('on');

        }
    });
    
    //서브메뉴
    $sub_wrap.hide();
    for(var u=0; u<7; u++){
        (function(u){
            $nav.eq(u).mouseover(function(){
                $sub_wrap.eq(u).show();
                $sub_wrap.mouseover(function(){
                    $(this).show();
                });
            }).mouseout(function(){
                $sub_wrap.eq(u).hide();
                $sub_wrap.mouseout(function(){
                    $(this).hide();
                });
            });
        })(u)
    }
    
    //header 언어
    $('.h_right li').eq(0).click(function(){
        $(this).addClass(' h_select');
        $('.h_right li').eq(2).removeClass('h_select');
    });
     $('.h_right li').eq(2).click(function(){
        $(this).addClass(' h_select');
        $('.h_right li').eq(0).removeClass('h_select');
    });
    
    //검색창
    $search.hide();
    $search_btn.click(function(){
        $search.show();
    });
    $search.mouseover(function(){
        $(this).show();
    }).mouseout(function(){
        $(this).hide();
    });
    
    //제품 tap클릭시 변경
    $s3tap_li.click(function(){
        $s3tap_li.css({'background-color':'#efefef', 'color':'#3c3c3c', 'box-shadow':'none'});
        $(this).css({'background-color':'#0b5391', 'color':'#fff', 'box-shadow':'3px 5px 6.02px 0.98px rgba(0,0,0,0.2)'});
    });
    $s3_contents.hide();
    $s3_contents.eq(0).show();
    for(var i=0; i<8; i++){
        (function(i){
            $s3tap_li.eq(i).click(function(){
                $s3_contents.hide();
                $s3_contents.eq(i).show();
            });
        })(i)
    }
    
    //s4 - 배경이미지변경
    $s4contents_li.mouseover(function(){
        $(this).find('a').css({'background':'url(images/s4_bg_over.png)', 'background-size':'100%'});
        $(this).find('h3').css({'color':'#fff'});
        $(this).find('p').css({'color':'#fff'});
    }).mouseleave(function(){
        $(this).find('a').css({'background':'url(images/s4_bg_out.png)', 'background-size':'100%'});
        $(this).find('h3').css({'color':'#3c3c3c'});
        $(this).find('p').css({'color':'#3c3c3c'});
    });
    
    
});//ready function end




















































