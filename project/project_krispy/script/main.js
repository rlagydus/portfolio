$(function(){
    //1. 변수
    //서브메뉴
    var $nav = $('.main_nav li');
    var $sub_wrap = $('.sub_wrap');
    var $sub_wrap_a = $('.sub_wrap li a');
    
    //전체메뉴
    var $allMenu = $('.h_btm .allMenu');
    var $allMenu_close = $('.allMenu_wrap .allMenu_close');
    var $allMenu_wrap = $('.h_btm .allMenu_wrap');
    var $allMenu_con = $('.allMenu_wrap .allMenu_contents');
    var $menu1 = $('.menu1');
    var $allMenu_sub = $('.menu1 .allMenu_sub');
    
    //브랜드 소개
    var $brand_scroll = $('.brand .brand_wrap');
    
    //메뉴 이미지변경
    var $menu_li = $('li.attr');
    var $menu_li_img = $menu_li.find('img');
    
    //서비스
    var $service_scroll = $('.service_wrap > div');
    
    //이벤트 슬라이드
    var event_slide = document.getElementsByClassName('event_contents');
    var event_dot = document.getElementsByClassName('event_dot');
    
    
    //2. 실행
    //서브메뉴
    $sub_wrap.hide();
    $nav.mouseover(function(){
        $(this).css({'border-bottom':'5px solid #00704a'});
        $sub_wrap.stop(true).slideDown();
        $sub_wrap.mouseover(function(){
            $sub_wrap.stop(true).slideDown();
        });
        $sub_wrap_a.mouseover(function(){
            $(this).css({'color':'#c91347', 'font-weight':'800'});
        });
    }).mouseout(function(){
        $(this).css({'border-bottom':'0'});
        $sub_wrap.stop(true).slideUp();
        $sub_wrap.mouseout(function(){
            $sub_wrap.stop(true).slideUp();
        });
        $sub_wrap_a.mouseout(function(){
            $(this).css({'color':'#333', 'font-weight':'normal'});
        });
    });
    
    //전체메뉴
    $allMenu_wrap.hide();
    $allMenu_con.hide();
    $allMenu_sub.hide();
    $allMenu.click(function(){
        $allMenu_wrap.show();
        $allMenu_con.show();
    });
    $allMenu_close.click(function(){
        $allMenu_wrap.hide();
        $allMenu_con.hide();
    });
    $menu1.mouseenter(function(){
        $(this).css({'background-color':'#372317'});
        $(this).find('a').css({'color':'#f9f4ec'});
        $(this).find('div').stop(true).slideDown();
    }).mouseleave(function(){
        $(this).css({'background-color':'#f9f4ec'});
        $(this).find('a').css({'color':'#372317'});
        $(this).find('div').stop(true).slideUp();
    });
    
    //메뉴 이미지변경
    for(var t=0; t<4; t++){
        var u = $menu_li.eq(t);
        u.mouseenter(function(){
            $(this).find('img').attr('src',$(this).find('img').attr('src').replace('_out','_over'));
        }).mouseleave(function(){
            $(this).find('img').attr('src',$(this).find('img').attr('src').replace('_over','_out'));
        });
    }
    
    //이벤트 슬라이드
    event_slide[1].style.display = 'none';
    event_dot[0].onclick = function(){
        event_slide[0].style.display = 'none';
        event_slide[1].style.display = 'none';
        
        event_slide[0].style.display = 'block';
        event_dot[0].className += ' active';
        event_dot[1].classList.remove('active');
    }
    event_dot[1].onclick = function(){
        event_slide[0].style.display = 'none';
        event_slide[1].style.display = 'none';
        
        event_slide[1].style.display = 'block';
        event_dot[1].className += ' active';
        event_dot[0].classList.remove('active');
    }
    
    //sns mask
    $('.sns_mask').hide();
    $('.sns_contents ul li a').mouseover(function(){
        $(this).find('div').stop(true).fadeIn();
    }).mouseout(function(){
        $(this).find('div').stop(true).fadeOut();
    });
    
    //슬라이드 플러그인 slidesjs
    $('.banner').slidesjs({
        play:{
            auto:true,
            interval:4000,
            effect:'fade'
        }
    });
    
    //scroll animate
    window.onscroll = function(){ scroll(); }
    function scroll(){
        console.log(window.scrollY);
        //브랜드 소개에 대한 scrollY 50
        if(document.body.scrolltop >= 50 || document.documentElement.scrollTop >= 50){
            $brand_scroll.addClass('brandOn');
            //메뉴에 대한 scrollY 1300
            if(document.body.scrolltop >= 1300 || document.documentElement.scrollTop >= 1300){
                $service_scroll.addClass('on');
            }
        }
    }
    
    
    
});//ready function end




















































