$(function(){
    //1. 변수
    //상품 클릭시 해당 상품이미지 나옴
    var $s1_top_img = $('.s1_top_right_top img');
    var $s1_btm_img = $('.s1_top_right_btm ul li');
    
    //구매수량 변수
    var amount = document.getElementById('amount');
    var $down = $('#down');
    var $up = $('#up');
    var num = 1;
    
    //다른 추천상품 - 마우스오버시
    var $pro_hover = $('.pro_hover');
    var $pro_contents = $('.s3_products ul li');
    
    console.log($s1_top_img, $s1_btm_img);
    
    //2. 실행
    //상품 클릭시 해당 상품이미지 나옴
    //내용초기
    $s1_top_img.eq(0).show();
    for(var i=0; i<3; i++){
        (function(i){
            $s1_btm_img.eq(i).click(function(){
                $s1_top_img.hide();
                $s1_top_img.eq(i).show();
            });
        })(i)
    }
    
    //구매수량 변수
    $up.click(function(){
        num ++;
        amount.innerHTML = num;
    })
    $down.click(function(){
        num --;
        if(num < 1){
            alert('최소 수량 1개이상 선택해주세요');
        }else if(num >= 1){
            amount.innerHTML = num;
        }
    })
    
    //다른 추천상품 - 마우스오버시
    $pro_hover.hide();
    for(var i=0; i<4; i++){
        (function(i){
            $pro_contents.eq(i).mouseover(function(){
                $pro_hover.eq(i).show();
            })
            $pro_contents.eq(i).mouseout(function(){
                $pro_hover.eq(i).hide();
            })
        })(i)
    }
    
    
});//ready function end

































