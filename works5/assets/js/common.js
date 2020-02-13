//↓トグルメニュー

$(function($) {
	WindowHeight = $(window).height();
	$('.drawr').css('height','100%');
	$(document).ready(function(){
		$('.btn').click(function(){
			if($('.drawr').is(":animated")){
				return false;
			}else{
				$('.drawr').animate({width:'toggle'});
				$(this).toggleClass('close');
				return false;
			}
});
		});
	//別領域クリックでメニューをクローズ
	$(document).click(function(event) {
		if (!$(event.target).closest('.drawr').length) {
			$('.btn').removeClass('close');
			$('.drawr').hide();
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

//お問い合わせフォーム

$(function() {
	$(".alert , .alert2").hide();
	
	// チェック用の変数sendFlag
	var name = "#name .name"
	var tel = "#tel .tel"
	var email = "#email .email"
	var inquiry = "#inquiry .inquiry"
	var sendFlag = true;

	$(".submitBtn").click(function(){

//お名前
		if(!$(name).val()){
				$("#name .alert").show();
				sendFlag = false;
				
			}else{
				$("#name .alert").hide();
			}
//アドレス
		if(!$(email).val()){
				$("#email .alert").show();
				sendFlag = false;
				
			}else{
				$("#email .alert").hide();
			}
//確認用アラート
		if(!$(".confirm").val()){
			$("#confirm .alert").hide();
			$("#confirm .alert2").show();
			sendFlag = false;
//整合性がとれていれば"ture"
		}else{
			if($("#confirm .confirm").val() != $("#email .email").val()){
//不一致でアラート1、フラグ"false"
				$("#confirm .alert").show();
					sendFlag = false;
			}else{
				$("#confirm .alert , .alert2").hide();
			}
		}
//空欄でアラート2、フラグ"false"
//電話番号
		if(!$(tel).val()){
				$("#tel .alert").show();
				sendFlag = false;
				
			}else{
				$("#tel .alert").hide();
			}
	
			if(sendFlag == false){
				return false; // falseであれば送信を許可しない（そうでなければ送信）
			}
	});
});