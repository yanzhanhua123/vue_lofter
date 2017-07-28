
/*

$("#fabu").click(function () {
    var mask=document.createElement("div");
    $(mask).css({
        width:"100%",
        height:"100%",
        background:"rgba(255,255,255,0.9)",
        position:"fixed",
        "z-index":100,
        top:0,
    });
    $("body").append(mask);


});
*/
//点击按钮显示遮罩
$("#fabu").click(function () {
    $("#mask").css({"z-index":202});
    $("#mask").animate(
       {opacity:"1"},
        100
    );
    $("#a1").animate({bottom:"4.9rem"},200).delay(100);
    $("#a2").animate({bottom:"4.9rem"},200).delay(200);
    $("#a3").animate({bottom:"0rem"},200).delay(300);
    $("#a4").animate({bottom:"0rem"},200).delay(400);
});
//点击遮罩隐藏遮罩,并降低z
$("#mask").click(function () {
   $("#mask").css({"z-index":-1,opacity:0});
    $("#a1").css({bottom:"-7rem"});
    $("#a2").css({bottom:"-7rem"});
    $("#a3").css({bottom:"-7rem"});
    $("#a4").css({bottom:"-7rem"});
});
