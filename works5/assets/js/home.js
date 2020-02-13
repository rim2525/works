
//スライドショー

$(function(){
	var count=$("#mainVisual li").length;
	var current=1;
	var next=2;
	var interval=3000;
	var duration=500;
	var timer;
	$("#mainVisual li:not(:first-child)").hide();
	timer=setInterval(mainvisualTimer,interval);
	function mainvisualTimer(){
		$("#mainVisual li:nth-child("+current+")").fadeOut(duration);
		$("#mainVisual li:nth-child("+next+")").fadeIn(duration);
		current=next;
		next=++next;
		if(next>count){
			next=1;
		}
		$("#button li a").removeClass("target");
		$("#button li:nth-child("+current+") a")
		.addClass("target");
	}
	$("#button li a").click(function(){
		next=$(this).html();
		clearInterval(timer);
		timer=setInterval(mainvisualTimer,interval);
		mainvisualTimer();
		return false;
	});
});

//フェードイン

window.onload = function() {
	scroll_effect();
	$(window).scroll(function(){
		scroll_effect();
	});
	function scroll_effect(){
		$('.scroll-fade').each(function(){
		var elemPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll > elemPos - windowHeight){
			$(this).addClass('effect-scroll');
			}
		});
	}
};
$(function(){
	$(window).scroll(function (){
		$('.scroll-fade').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
				if (scroll > elemPos - windowHeight){
					$(this).addClass('effect-scroll');
				}
		});
	});
});

//モーダルウインドウ

$(function(){
	$("a.thumb").click(function(){
		$("body").append('<div id="bg"></div>');
		$("body").append('<div id="photo"></div>');
		$("#bg").hide();
		$("#photo").hide();
		$("#photo").html("<img>");
		$("#photo img").attr("src",$(this).attr("href"));
		$("#photo img").attr("width","860");
		$("#photo img").attr("height","536");
		$("#photo img").attr("alt","ポイント");
		$("#bg").fadeIn();
		$("#photo").fadeIn();
		$("#bg,#photo").click(function(){
			$("#bg,#photo").fadeOut(function(){
				$(this).remove();
			});
		});
		return false;
	});
});

//ショップリストタブ
/*
jQuery(function($){
	$('.tab').click(function(){
		$('.is-active').removeClass('is-active');
		$(this).addClass('is-active');
		$('.is-show').removeClass('is-show');
        // クリックしたタブからインデックス番号を取得
		const index = $(this).index();
        // クリックしたタブと同じインデックス番号をもつコンテンツを表示
		$('.panel').eq(index).addClass('is-show');
	});
});
*/