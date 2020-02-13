// jsを記述する際はここに記載していく

//上に浮き出る動き
$('.animation').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.animation').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   $(this).addClass("fadeInDown");
  }
 });
});



//↓トップに戻るボタン

$(function(){
	//#back-to-topを消す
	$('.back-to-top').hide();
	
	//スクロールしたいタイミングになったら#back-to-topを表示する。スクロールが戻ったら消える
	$(window).scroll(function(){
		$('.pos').text($(this).scrollTop());
		if($(this).scrollTop()>60){
			$('.back-to-top').fadeIn();
		}else{
			$('.back-to-top').fadeOut();
		}
		});
	//#back-to-topがクリックされたら上に戻る
	$('.back-to-top a').click(function(){
		$('html,body').animate({
			scrollTop:0
		},500);
		return false;
	});
});
