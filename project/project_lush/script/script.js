//1. 변수
//전체메뉴(모바일)
var allMenu = document.getElementsByClassName('xi-bars')[0];
var allMenu_wrap = document.getElementsByClassName('allMenu_wrap')[0];
var allMenu_con = document.getElementsByClassName('allMenu_contents')[0];
var allMenu_close = document.getElementsByClassName('allMenu_close')[0];
var allMenu_title1 = document.getElementsByClassName('allMenu_title1')[0];
var allMenu_title2 = document.getElementsByClassName('allMenu_title2')[0];
var allMenu_sub1 = document.getElementsByClassName('allMenu_sub1')[0];
var allMenu_sub2 = document.getElementsByClassName('allMenu_sub2')[0];
console.log(allMenu_title1, allMenu_sub1);

//서브메뉴
var nav = document.getElementsByClassName('nav');
var sub = document.getElementsByClassName('subMenu');

//마이페이지 팝업
var mypage = document.getElementsByClassName('mypage')[0];
var mypage_pop = document.getElementsByClassName('mypage_pop')[0];

//검색 팝업
var search = document.getElementsByClassName('search')[0];
var search_pop = document.getElementsByClassName('search_popup')[0];
var search_wrap = document.getElementsByClassName('search_popup_wrap')[0];
var close = document.getElementsByClassName('search_close')[0];
var tap = document.getElementsByClassName('tap');
var popular =document.getElementsByClassName('popular')[0];
var recently =document.getElementsByClassName('recently')[0];
var search_num = 0;

//슬라이드 광고
var bnr_wrap = document.getElementsByClassName('slide_wrap');
var slideBnr = document.getElementsByClassName('slide');
var bnr_dot = document.getElementsByClassName('bnr_dot');
var indexNum = 0;

//베스트상품 상품이미지 변경
var $a = $('a.attr');
var $a_img = $a.find('img');


//2. 실행
//전체메뉴(모바일)
allMenu.onclick = function(){
    allMenu_wrap.style.display = 'block';
    allMenu_con.style.display = 'block';
}
allMenu_close.onclick = function(){
    allMenu_wrap.style.display ='none';
    allMenu_con.style.display ='none';
}
allMenu_title1.onclick = function(){
    $('.allMenu_sub1').stop(true).slideDown();
    allMenu_sub1.style.display = 'block';
    allMenu_sub2.style.display = 'none';
}
allMenu_title2.onclick = function(){
    $('.allMenu_sub2').stop(true).slideDown();
    allMenu_sub2.style.display = 'block';
    allMenu_sub1.style.display = 'none';
}

//서브메뉴
for(var d=0; d<2; d++){
    (function(d){
        nav[d].onmouseenter = function(){
            /*$('.subMenu').eq(d).stop(true).slideDown();*/
            sub[d].style.display = 'block';
        }
        nav[d].onmouseleave = function(){
            /*$('.subMenu').eq(d).stop(true).slideUp();*/
            sub[d].style.display = 'none';
        }
    })(d)
}

//마이페이지 팝업
mypage.onmouseenter = function(){
    mypage_pop.style.display = 'block';
}
mypage.onmouseleave = function(){
    mypage_pop.style.display = 'none';
}

//검색 팝업
search.onclick = function(){
    search_wrap.style.display = 'block';
    search_pop.style.display = 'block';
}
close.onclick = function(){
    search_wrap.style.display = 'none';
    search_pop.style.display = 'none';
}
tap[0].onclick = function(){
    popular.style.display = 'block';
    recently.style.display = 'none';
    tap[0].className += ' selected';
    tap[1].classList.remove('selected');
}
tap[1].onclick = function(){
    recently.style.display = 'block';
    popular.style.display = 'none';
    tap[1].className += ' selected';
    tap[0].classList.remove('selected');
}

//슬라이드 광고
showSlide();
function showSlide(){
    for(var i=0; i<slideBnr.length; i++){
        slideBnr[i].style.display = 'none';
    }
    for(var i=0; i<slideBnr.length; i++){
        bnr_dot[i].className = 'bnr_dot';
    }
    console.log('시작>>',indexNum);
    slideBnr[indexNum].style.display = 'block';
    bnr_dot[indexNum].className += ' active';
    indexNum++;
    console.log('증가>>',indexNum);
    if(indexNum >= slideBnr.length){
        indexNum = 0;
    }
    setTimeout(showSlide,2000);
}

//베스트상품 상품이미지 변경
for(var b=0; b<4; b++){
    var a = $a.eq(b);
    a.mouseenter(function(){
        $(this).find('img').attr('src',$(this).find('img').attr('src').replace('_out','_over'));
    });
    a.mouseleave(function(){
        $(this).find('img').attr('src',$(this).find('img').attr('src').replace('_over','_out'));
    });
}


$(function(){
    //ready start
    //이용안내 이미지
    $('#serviceGuide ul li').mouseenter(function(){
        $(this).stop(true).animate({
            'background-size':'120%'
        },700)
    }).mouseleave(function(){
        $(this).stop(true).animate({
            'background-size':'100%'
        },700)
    });
    
    //SNS mask/해시태그/이미지
    $('.sns_box a').hide();
    $('.sns_box').mouseenter(function(){
        $(this).find('a').stop(true).fadeIn();
    }).mouseleave(function(){
        $(this).find('a').stop(true).fadeOut();
    });
    /*$('.sns_box').mouseenter(function(){
        $(this).stop(true).animate({
            'background-size':'120%'
        },700)
    }).mouseleave(function(){
        $(this).stop(true).animate({
            'background-size':'100%'
        },700)
    });*/
    
    //ready end
});























