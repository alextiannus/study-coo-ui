//顶部hover
$(function(){  
	if (/android/i.test(navigator.userAgent) || /ipad|iphone|mac/i.test(navigator.userAgent)){
		$(".hidden_btn").on("click", function(){
			if($(this).find(".dropDiv").is(':hidden')){
				$(this).find("div.dropDiv").css({display:"block",opacity:"1"});
			}
			else{
				$(this).find("div.dropDiv").css({display:"none",opacity:"0"});
			}
		})
	}else{
		$(".hidden_btn").on({
			mouseenter:function(){
				$(this).addClass("current");
				 $(this).children("div.dropDiv").stop();
				 $(this).children("div.dropDiv").css("display","block")
				 $(this).children("div.dropDiv").queue(function(){
					$(this).animate({opacity:1.0},300);
				});
				 $(this).children("div.dropDiv").dequeue();
			},
			mouseleave:function(){
				$(this).removeClass("current");

				 $(this).children("div.dropDiv").stop();
				 $(this).children("div.dropDiv").css("display","none")
				 $(this).children("div.dropDiv").queue(function(){
					$(this).animate({opacity:0},300);
				});
				 $(this).children("div.dropDiv").dequeue();
			}
		});
	}     
});

$(document).ready(function(){

		$(".home-wrap .section-wrap").hover(function(){
			$(this).append('<div class="section-shadow"></div>')
		},function(){
			$(this).children(".section-shadow").remove();
		})
	});


