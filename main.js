let allButtons = $("#buttons > span");
var n = 0;

//点击对应按钮跳转图片
for(let i = 0; i < allButtons.length; i++){
    $(allButtons[i]).on("click",function(x){
       n = $(x.currentTarget).index();
        $("#images").css({
            transform:"translateX(" + -500 * $(x.currentTarget).index() + "px)"
        })
    })
}

//自动轮播
var setTimer = setInterval(function(){
    $(allButtons[n % allButtons.length]).trigger("click");
    n++;
    }, 2000);

//鼠标移入/移出时打断/继续轮播
$(".window,#buttons").on("mouseenter",function(){
    window.clearInterval(setTimer);
    console.log("enter");
})

$(".window,#buttons").on("mouseleave",function(){
    setTimer = setInterval(function(){
        $(allButtons[n % allButtons.length]).trigger("click");
        n++;
        }, 2000);
    console.log("leave");
})