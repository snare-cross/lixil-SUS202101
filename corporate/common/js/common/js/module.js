// グローバルメニュー
$jq183(function(){
	var closeEnd    = 0,
			defaultFlg  = 0,
			listArr     = new Array(),
			nowId       = "",
			openFlg     = 0,
			delayTime   = 350,
			userAgent   = window.navigator.userAgent.toLowerCase(),
			appVersion  = window.navigator.appVersion.toLowerCase(),
			closeFlg    = 0,
			innerHeightData = 0;


	if (userAgent.indexOf("msie") != -1)
	{
		if (appVersion.indexOf("msie 6.") >= 0 || appVersion.indexOf("msie 7.") >= 0 )
		{
			//IE6 IE7
			return false;
		}
	}


	i=0;
	$jq183('#lxl-global-nav').children('li').each(function()
	{
		var self = $jq183(this);

		if(self.children('div')[0] != undefined && self.children('div')[0] != "")
		{
			listArr[i] = new Array();
			listArr[i]['elem']  = self.children('div');
			listArr[i]['id'] = self.children('div').attr('id');
			i++;
		}
	});


	$jq183('#lxl-global-nav').children('li').css('height','26px');

	// 45px

	$jq183('#lxl-lineup,#lxl-reform,#lxl-showroom,#lxl-support,#lxl-corporate').hover(
		function()
		{

			if(defaultFlg == 0)
			{

				var self = $jq183(this);

				setTimeout(function()
				{
					if(closeFlg == 1)
					{
						return false;
					}

					$jq183('#lxl-global-nav').children('li').css('height','45px');
					nowId = $jq183(this).children('div').attr('id');

					//$jq183(this).animate({'height':self.find('.lxl-mdd-inner').innerHeight()+'px'},600,'');

					self.find('.lxl-mdd').css('left','-9999px').show();
					innerHeightData = self.find('.lxl-mdd-inner').height();
					self.find('.lxl-mdd').css({'left':'50%'}).hide();
					self.find('.lxl-mdd').css('height',innerHeightData+'px');
					self.find('.lxl-mdd-inner').hide();

					self.children('.lxl-mdd').stop(true, true).slideDown(function()
					{
						setTimeout(function()
						{
							self.find('.lxl-mdd-inner').fadeIn();
						},100)
					});

					defaultFlg = 1;
					openFlg = 1;
				},100);

			}
			else
			{
				$jq183('#lxl-global-nav').children('li').css('height','45px');
				nowId = $jq183(this).children('div').attr('id');

				openFlg = 1;
				var self = $jq183(this);
				self.find('.lxl-mdd').css('left','-9999px').show();
				innerHeightData = self.find('.lxl-mdd-inner').height();
				self.find('.lxl-mdd-inner').hide();
				self.find('.lxl-mdd').css('left','50%').css('height',innerHeightData+'px');

				self.children('.lxl-mdd').stop(true, true).delay(delayTime).fadeIn(1,function()
				{
					setTimeout(function()
					{
						self.find('.lxl-mdd-inner').fadeIn();
					},100)
				});


			}
		},
		function()
		{
			closeFlg = 1;
			gManuClose($jq183(this));
		}
	);

		$jq183('.gMenuCloseBtn').bind('click',function()
		{
			 gManuClose($jq183(this).parents('li'));
		});


		function gManuClose(thisElem)
		{
			closeFlg = 1;
			openFlg = 0;

			var self = thisElem;
			setTimeout(function()
			{
				if(openFlg == 1)
				{
					$jq183.each(listArr,function(key,value)
					{
						if(value['id'] != nowId)
						{
							$jq183('#'+value['id']).hide();
							setTimeout(function()
							{
								closeFlg = 0;
							},100)
						}
					});
				}
				else
				{
					$jq183('#lxl-global-nav').children('li').css('height','26px');

					self.children('.lxl-mdd').fadeOut(300,function()
					{
						$jq183.each(listArr,function(key,value)
						{
							if(value['id'] != nowId)
							{
								$jq183('#'+value['id']).hide();
								self.children('.lxl-mdd').hide();
								setTimeout(function()
								{
									closeFlg = 0;
								},100);
							}
						});
					});

					defaultFlg = 0;
				}
			},200);
		}



});


////////////////////////////////////////////////////////
// スムーススクロール
////////////////////////////////////////////////////////
$jq183(function(){
	$jq183('a[href^=#]').not(".lxl-noScrl").click(function(){
		var speed = 500,
				href= $jq183(this).attr("href"),
				target = $jq183(href == "#" || href == "" ? 'html' : href),
				position = target.offset().top;

		$jq183("html, body").animate({scrollTop:position}, speed, "easeOutExpo");

		return false;
	});
});


////////////////////////////////////////////////////////
//コンテンツメニュー
//追尾＋オープン処理
////////////////////////////////////////////////////////
$jq183(function(){

	var $window = $jq183(window),
			userAgent   = window.navigator.userAgent.toLowerCase(),
			appVersion  = window.navigator.appVersion.toLowerCase(),
			elem1 = "",
			elem2 = "",
			height1 = 0
			height2 = 0,
			closeFlg = 0;

	if (userAgent.indexOf("msie") != -1)
	{
		if (appVersion.indexOf("msie 6.") >= 0 || appVersion.indexOf("msie 7.") >= 0 )
		{
			//IE6 IE7
			$jq183('#lxl-contents-menu').hide();
			return false;
		}
	}


	$jq183('.lxl-mdd-menu').append('<a href="javascript:void(0);" class="flatMenuClose"><img src="/common/pic/icon_close.gif" width="23" height="23" alt="閉じる">');
	$jq183('.flatMenuClose').bind('click',function()
	{
		closeMenu($jq183(this).parents('.lxl-mdd-menu'));
	});


	$window.scroll(function(){
		if($window.scrollTop() >= 100){
			$jq183('#lxl-footer-pagetop').show();
		}else if($window.scrollTop() <= 10){
			$jq183('#lxl-footer-pagetop').hide();
		}
		if($window.scrollTop() >= 250){
			$jq183('.lxl-float-menu').slideDown();
		}else{
			$jq183('.lxl-float-menu').slideUp();
		}
	});

	if($jq183('#lxl-contents-title .btn-menu').size() == 0)
	{
		return false;
	}

	$jq183('#lxl-contents-menu').show();
	// 要素のコピー
	$jq183('#lxl-contents-title').clone().appendTo('body').addClass('lxl-float-menu');

	$jq183('#lxl-contents-menu').hover(function(){openMenu($jq183(this).children('.lxl-mdd-menu'),1)},function(){closeMenu($jq183(this).children('.lxl-mdd-menu'));});
	$jq183('.lxl-float-menu').find('#lxl-contents-menu').hover(function(){openMenu($jq183(this).children('.lxl-mdd-menu'),2)},function(){closeMenu($jq183(this).children('.lxl-mdd-menu'));});

	height = $jq183('#lxl-contents-menu').children('.lxl-mdd-menu').height();
	//height2 = $jq183('.lxl-float-menu').find('.lxl-mdd-menu').height();

	function openMenu(elem,type)
	{
		var heightData = 0;
		/*
		if(type == 1) {
			heightData = height1;
		} else if(type == 2) {
			heightData = height2;
		}
		*/
		if(elem.css("display") == "none") elem.height(0);
		elem.stop(true, true).show().animate({height: height+'px'}, "");
		//elem.slideDown();
	}
	function closeMenu(elem)
	{
		closeFlg = 1;
		elem.stop(true, true).slideUp("fast",function(){ closeFlg = 0 });
		//elem.slideUp();
	}

	elem1 = $jq183('.lxl-float-menu').find('.lxl-title-set');
	elem2 = $jq183('.lxl-float-menu').find('#lxl-contents-menu');

	$jq183(".lxl-float-menu .lxl-title-set,.lxl-float-menu #lxl-contents-menu").wrapAll("<div class=\"lxl-float-menu-outer clearfix\"></div>");

});


////////////////////////////////////////////////////////
// 先頭に戻るボタンの追尾
////////////////////////////////////////////////////////
$jq183(function(){

	var $window     = $jq183(window),
			$pageTop    = $jq183("#lxl-footer-pagetop"),
			lxlFooterElem = $jq183('#lxl-footer'),
			footerNavitOffset = lxlFooterElem.offset(),
			pageTop = $window.height() - $pageTop.find('img').height() - 20,
			scImgHeight = $pageTop.find('img').height(),
			adjustedValueFooter = 70,
			adjustedValuePageTop = 10;

	// 先頭に戻るボタンの初期位置の指定
	$pageTop.css('top',pageTop+'px');

	//------------------------------------
	// ローカルナビ追従処理
	//------------------------------------
	$window.scroll(function(){
		footerNavitOffset = lxlFooterElem.offset();
		pageTop = $window.height() - scImgHeight - adjustedValuePageTop;
		$pageTop.css('top',pageTop+'px');
		// ボタンの現在の位置
		winBottom = parseInt($window.scrollTop()) + $window.height();
		if(winBottom >= footerNavitOffset.top){
			pagetopTop = parseInt(footerNavitOffset.top) - parseInt(adjustedValueFooter);
			$pageTop.css('position','absolute');
			$pageTop.css('top',pagetopTop+'px');
		}else{
			$pageTop.css('position','fixed');
			$pageTop.css('top',pageTop+'px');
		}
	});
});


////////////////////////////////////////////////////////
// ロールオーバー
////////////////////////////////////////////////////////
function initRollovers() {/*alert("test");*/if (!document.getElementById) return;var aPreLoad = new Array();var sTempSrc;var aImages = document.getElementsByTagName('img');var clsNm;for (var i = 0; i < aImages.length; i++) {clsNm = aImages[i].className;cNm = clsNm.substring(0,7);if (cNm == 'imgover') {var src = aImages[i].getAttribute('src');var ftype = src.substring(src.lastIndexOf('.'), src.length);var hsrc = src.replace(ftype, '_r'+ftype);aImages[i].setAttribute('hsrc', hsrc);aPreLoad[i] = new Image();aPreLoad[i].src = hsrc;aImages[i].onmouseover = function() {sTempSrc = this.getAttribute('src');this.setAttribute('src', this.getAttribute('hsrc'));}	;aImages[i].onmouseout = function() {if (!sTempSrc) sTempSrc = this.getAttribute('src').replace('_r'+ftype, ftype);this.setAttribute('src', sTempSrc);}}}}/*window.onload = initRollovers;*/
try{ window.addEventListener("load",initRollovers,false); }catch(e){ window.attachEvent("onload",initRollovers); }



////////////////////////////////////////////////////////
// 汎用タブ切替
////////////////////////////////////////////////////////
$jq183(function(){


	var hashData  = location.hash,
			hashIndex = "",
			i=0,
			ii=0,
			iii=0;

	if(hashData != "")
	{

		hashData = hashData.replace('#','');

		// ハッシュ整合性チェック
		$jq183(".lxl-tab-area").find('.lxl-tabCnt').each(function()
		{
			if($jq183(this).attr('id').indexOf(hashData) >= 0)
			{
				hashIndex = i;
				return false;
			}
			i++;
		});

		if(hashIndex != "")
		{

			$jq183(".lxl-tab-area").find('.lxl-tabCnt').each(function()
			{
				// 一旦全て閉じる
				if($jq183(this).attr('class').indexOf('lxl-noDisp') < 0)
				{
					$jq183(this).addClass('lxl-noDisp');
				}
				if(hashIndex == ii)
				{
					$jq183(this).removeClass('lxl-noDisp');
				}
				ii++;
			});

			$jq183(".lxl-tab-area div:first").find('li').each(function()
			{
				// 一旦全て閉じる
				if($jq183(this).attr('class') != undefined && $jq183(this).attr('class').indexOf('now') >= 0)
				{
					$jq183(this).removeClass('now');
				}
				if(hashIndex == iii)
				{
					$jq183(this).addClass('now');
				}
				iii++;
			});
		}
	}

	$jq183(".lxl-tab-area .lxl-tab-three li,.lxl-tab-area .lxl-tab-four li").click(function()
	{
		var num = $jq183(".lxl-tab-area li").index(this);
		$jq183(".lxl-tabCnt",".lxl-tab-area").addClass('lxl-noDisp').eq(num).removeClass('lxl-noDisp');
		$jq183('.lxl-tab-area li').removeClass('now');
		$jq183(this).addClass('now');
		changeBoxSize();

		saveId = $jq183(this).find('a').attr('href');

		$jq183(saveId).attr('id','dummyId');
		location.hash = $jq183(this).find('a').attr('href');
		$jq183('#dummyId').attr('id',saveId);

		return false;



		/*
		if($jq183(this).find('a').attr('href').indexOf('#') == 0)
		{
			location.hash = $jq183(this).find('a').attr('href');
			return false;
		}
		*/
	});

});

////////////////////////////////////////////////////////
// BOX全体クリッカブル処理
////////////////////////////////////////////////////////
$jq183(function(){
	$jq183("div[class^=btn-panel-] .box").click(function(){

		if($jq183(this).find("a").attr('target') != undefined && $jq183(this).find("a").attr('target') != "" && $jq183(this).find("a").attr('target') == '_blank')
		{
			window.open($jq183(this).find("a").attr("href"),'_blank');
			return false;
		}
		else
		{
			window.location=$jq183(this).find("a").attr("href");
			return false;
		}
	});
/*
	$jq183("div[class^=btn-panel-] .box").click(function(){
		window.location=$jq183(this).find("a").attr("href"), '_blank';
		return false;
	});
*/
});



////////////////////////////////////////////////////////
// マスオーバー時にキャンプション表示
////////////////////////////////////////////////////////
$jq183(function(){
	$jq183('.captionfull').hover(function()
	{
		$jq183(".cover", this).stop().animate({top:'265px'},{queue:false,duration:160,easing:'easeOutExpo'});
	}, function() {
	    $jq183(".cover", this).stop().animate({top:'418px'},{queue:false,duration:16,easing:'easeOutExpo'});
	});
});




////////////////////////////////////////////////////////
// スライダー
////////////////////////////////////////////////////////
$jq183(function(){
	$jq183(document).ready(function()
	{

		try{
			//エラー出るかもしれないけど実行したい処理
			/*
			$jq183('.bxslider').bxSlider({
				infiniteLoop: false,
				hideControlOnEnd: true,
				pager:false,
				minSlides: 2,
				maxSlides: 4,
				slideWidth: 237,
				slideMargin: 0
			});
			*/
		}
		catch(e)
		{
			//エラーが出たときの処理
			return false;
		}finally{
			//必ず実行される処理
		}
	});
});




////////////////////////////////////////////////////////
//スタイルから探す
////////////////////////////////////////////////////////
$jq183(function(){

var openContentId = "";

$jq183(".style-set .box a").on("click", function()
{

	if($jq183(this).parents('.box').attr('class').indexOf('stay') < 0)
	{

		//-----------------------------------------------
		// 自分と同階層にいるdivのstayを削除
		// 閉じるときに消す処理はあるが、念のための保険
		//-----------------------------------------------
		$jq183(this).parents('.style-set').find('.box').each(function()
		{
			$jq183(this).removeClass('stay');
		});

		//-----------------------------------------------
		// 前回IDを使用してstayの削除
		// 別のボックス内のをクリック時等
		//-----------------------------------------------
		$jq183('#'+openContentId).parents('.tabBoxes').prevAll('.style-set').find('.box').each(function()
		{
			$jq183(this).removeClass('stay');
		});

		$jq183(this).parents('.box').addClass('stay');

		openContentId = $jq183(this).attr("href");

		$jq183(".tabBoxes .section").hide();

		$jq183('#'+$jq183(this).attr("href")).fadeIn();
	}
	else
	{
		// 表示分のfadeOut
		$jq183('#'+openContentId).fadeOut();

		// 付与したstayを削除
		$jq183('#'+openContentId).parents('.tabBoxes').prevAll('.style-set').find('.box').each(function()
		{
			$jq183(this).removeClass('stay');
		});

		// 判定用変数を空に
		openContentId = "";
	}
	return false;
});

//--------------------------------------------------
// 表示されたBOX内の閉じるボタンクリック時の動作
// 表示しているものを閉じる
//--------------------------------------------------
$jq183('#lxl-datastyle').find('.btn-close a').bind('click',function()
{
	if(openContentId != "")
	{
		// 表示分のfadeOut
		$jq183('#'+openContentId).fadeOut();

		// 付与したstayを削除
		$jq183('#'+openContentId).parents('.tabBoxes').prevAll('.style-set').find('.box').each(function()
		{
			$jq183(this).removeClass('stay');
		});

		// 判定用変数を空に
		openContentId = "";
		return false;
	}
});

return false;
});

////////////////////////////////////////////////////////
// マウスオーバーでキャプションの表示
////////////////////////////////////////////////////////
$jq183(function(){
	$jq183('.style-set .captionfull').hover(function(){

		// stayクラスがある場合は、キャプションを表示させない
		if($jq183(this).attr('class').indexOf('stay') > 0)
		{
			return false;
		}
		else
		{
	    //$jq183(".cover", this).stop().animate({top:'0'},{queue:false,duration:160,easing:'easeOutExpo'});
			$jq183(".cover", this).stop(true,true).animate({top:'0'},{queue:false,duration:500,easing:'easeOutExpo'});
		}

	}, function() {
		if($jq183(this).attr('class').indexOf('stay') > 0)
		{
			return false;
		}
		else
		{
			$jq183(".cover", this).stop(true,true).animate({top:'220px'},{queue:false,duration:160,easing:'easeOutExpo'});
		}

	});
});

////////////////////////////////////////////////////////
//さらにみる処理
////////////////////////////////////////////////////////
$jq183(function(){

	var slideElemMax   = $jq183('#lxl-datastyle').children('.style-set').length,
			slideCnt       = 1, // スライドさせるclassの連番。この数字と合致するものがスライド表示される
			slideCnt2      = 0, // スライドが行われた回数
			defaultElemCnt = 2, // デフォルトで表示させるカウント数
			slideElemCnt   = 2, // 1回のスライドでいくつ出すか
			maxCnt         = slideElemMax - defaultElemCnt; // 最大開けれる回数

	slideCnt2 = slideElemCnt;

	// maxCntの算出

	// 開く処理
	$jq183('.listDown').bind('click',function()
	{
		$jq183('.slideBox'+slideCnt).slideDown();

		if(maxCnt <= slideCnt2)
		{
			$jq183('.listDown').parent('li').hide();
			$jq183('.listUp').parent('li').show();
		}

		slideCnt++;
		slideCnt2 = parseInt(slideCnt2) + parseInt(slideElemCnt);

		return false;
	});


	// 閉じる処理
	$jq183('.listUp').click(function()
	{
		for(var i=maxCnt;i>=1;i--)
		{
			$jq183('.slideBox'+i).slideUp();
		}

		slideTarget = $jq183('#lxl-datastyle');
		slidePosition = slideTarget.offset().top;
		$jq183("html, body").animate({scrollTop:slidePosition}, 500, "swing");

		$jq183('.listDown').parent('li').show();
		$jq183('.listUp').parent('li').hide();

		slideCnt = 1;
		slideCnt2 = slideElemCnt;

		return false;
	});
});



//---------------------------------------------------------
//
// スライドショーA
//
//---------------------------------------------------------
$jq183(function(){

	try{
		$jq183('.slideShowA .bxslider').bxSlider({
			auto: true,
			pause: 5000,
			speed: 1000,
			mode: 'horizontal',
			pager: true,
			slideWidth:1120,
			//easing: 'easeOutBounce',
			pagerCustom: '.slideShowA .thumb-list',
			onSliderLoad: function(){

				// ホバーバインド
				$jq183('.slideShowA .mainimg li').hover(function()
				{
					$jq183('.slideShowA .bx-prev').addClass('bx-prevImgOver');
					$jq183('.slideShowA .bx-next').addClass('bx-nextImgOver');
				},
				function()
				{
					$jq183('.slideShowA .bx-prev').removeClass('bx-prevImgOver');
					$jq183('.slideShowA .bx-next').removeClass('bx-nextImgOver');
				});

			}
		});
	}
	catch(e)
	{
		//エラーが出たときの処理
		return false;
	}
});

//---------------------------------------------------------
//
// スライドショーB
//
//---------------------------------------------------------
$jq183(function(){
	try{
		$jq183('.slideShowB .bxslider').bxSlider({
			auto: true,
			pause: 5000,
			speed: 1000,
			mode: 'horizontal',
			pager: true,
			//easing: 'easeOutBounce',
			pagerCustom: '.slideShowB .thumb-list',
			slideWidth:359
		});
	}
	catch(e)
	{
		//エラーが出たときの処理
		return false;
	}
});

//---------------------------------------------------------
//
// スライドショーB2
//
//---------------------------------------------------------
$jq183(function(){
	try{
		$jq183('.slideShowB2 .bxslider').bxSlider({
			auto: true,
			pause: 5000,
			speed: 1000,
			mode: 'horizontal',
			pager: true,
			//easing: 'easeOutBounce',
			pagerCustom: '.slideShowB2 .thumb-list'
		});
	}
	catch(e)
	{
		//エラーが出たときの処理
		return false;
	}
});

//---------------------------------------------------------
//
// スライドショーTOP
//
//---------------------------------------------------------
$jq183(function(){
	try{
		$jq183('.slideShowTop .bxslider').bxSlider({
			auto: true,
			pause: 6000,
			speed: 1000,
			mode: 'horizontal',
			pager: false,
			slideWidth:1550,
			onSliderLoad: function(){

				// ホバーバインド
				$jq183('.slideShowTop .mainimg li').hover(function()
				{
					$jq183('.slideShowTop .bx-prev').addClass('bx-prevImgOver');
					$jq183('.slideShowTop .bx-next').addClass('bx-nextImgOver');
				},
				function()
				{
					$jq183('.slideShowTop .bx-prev').removeClass('bx-prevImgOver');
					$jq183('.slideShowTop .bx-next').removeClass('bx-nextImgOver');
				});

			}
			//easing: 'easeOutBounce',
			//pagerCustom: '.slideShowB2 .thumb-list'
		});
	}
	catch(e)
	{
		//エラーが出たときの処理
		return false;
	}
});

//---------------------------------------------------------
//
// スライドショーB2-1
// オートスライドを切るバージョン
//
//---------------------------------------------------------
$jq183(function(){
	try{
		$jq183('.slideShowB2 .bxslider2').bxSlider({
			auto: false,
			pause: 5000,
			speed: 1000,
			mode: 'horizontal',
			pager: true,
			//easing: 'easeOutBounce',
			pagerCustom: '.slideShowB2 .thumb-list'
		});

		$jq183('.slideShowB2 .thumb-list .contentsOpenLi').bind('click',function()
		{

			$jq183('div[class^=slideContents]').hide();

			var openClassNum = $jq183(this).attr('class').replace('contentsOpenLi','').replace(' ','').replace('openContents','');

			$jq183('.slideContents'+openClassNum).show();
		});

	}
	catch(e)
	{
		//エラーが出たときの処理
		return false;
	}
});


//---------------------------------------------------------
//
// PC→SP
// スマホでアクセスされた場合
//
//---------------------------------------------------------


//pcFlag 1 PC優先
//pcFlag 0 スマホ優先

$jq183(function(){

	var hrefData = location.href;

	if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0)
	{

  var fromDara=window.location.search.substring(1);

if(fromDara=="fromsp"){
  }else{

		if(hrefData == 'http://www.lixil.co.jp/' || hrefData == 'http://www.lixil.co.jp/default.htm')
		{
			location.href = 'http://www.lixil.co.jp/sp/';
		}
		else if(hrefData == 'http://www.lixil.co.jp/lineup/' || hrefData == 'http://www.lixil.co.jp/lineup/default.htm')
		{
			location.href = hrefData.replace('http://www.lixil.co.jp/lineup/','http://www.lixil.co.jp/sp/lineup/')
		}
		else if(hrefData == 'http://www.lixil.co.jp/reform/' || hrefData == 'http://www.lixil.co.jp/reform/default.htm')
		{
			location.href = hrefData.replace('http://www.lixil.co.jp/reform/','http://www.lixil.co.jp/sp/reform/')
		}
		else if(hrefData == 'http://www.lixil.co.jp/support/' || hrefData == 'http://www.lixil.co.jp/support/default.htm')
		{
			location.href = hrefData.replace('http://www.lixil.co.jp/support/','http://www.lixil.co.jp/sp/support/')
		}
		else if (hrefData == 'https://www.lixil.co.jp/' || hrefData == 'https://www.lixil.co.jp/default.htm')
		{
			location.href = 'https://www.lixil.co.jp/sp/';
		}
		else if(hrefData == 'https://www.lixil.co.jp/lineup/' || hrefData == 'https://www.lixil.co.jp/lineup/default.htm')
		{
			location.href = hrefData.replace('https://www.lixil.co.jp/lineup/','https://www.lixil.co.jp/sp/lineup/')
		}
		else if(hrefData == 'https://www.lixil.co.jp/reform/' || hrefData == 'https://www.lixil.co.jp/reform/default.htm')
		{
			location.href = hrefData.replace('https://www.lixil.co.jp/reform/','https://www.lixil.co.jp/sp/reform/')
		}
		else if(hrefData == 'https://www.lixil.co.jp/support/' || hrefData == 'https://www.lixil.co.jp/support/default.htm')
		{
			location.href = hrefData.replace('https://www.lixil.co.jp/support/','https://www.lixil.co.jp/sp/support/')
		}

  }


	}
});



//---------------------------------------------------------
//
// IE6でアクセスされた場合のアラート表示
//
//---------------------------------------------------------
$jq183(function(){

	/*!
	 * jQuery Cookie Plugin v1.3.1
	 * https://github.com/carhartl/jquery-cookie
	 *
	 * Copyright 2013 Klaus Hartl
	 * Released under the MIT license
	 */
	(function (factory) {
		if (typeof define === 'function' && define.amd) {
			// AMD. Register as anonymous module.
			define(['jquery'], factory);
		} else {
			// Browser globals.
			factory(jQuery);
		}
	}(function () {

		var pluses = /\+/g;

		function decode(s) {
			if (config.raw) {
				return s;
			}
			return decodeURIComponent(s.replace(pluses, ' '));
		}

		function decodeAndParse(s) {
			if (s.indexOf('"') === 0) {
				// This is a quoted cookie as according to RFC2068, unescape...
				s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
			}

			s = decode(s);

			try {
				return config.json ? JSON.parse(s) : s;
			} catch(e) {}
		}

		var config = $jq183.cookie = function (key, value, options) {

			// Write
			if (value !== undefined) {
				options = $jq183.extend({}, config.defaults, options);

				if (typeof options.expires === 'number') {
					var days = options.expires, t = options.expires = new Date();
					t.setDate(t.getDate() + days);
				}

				value = config.json ? JSON.stringify(value) : String(value);

				return (document.cookie = [
					config.raw ? key : encodeURIComponent(key),
					'=',
					config.raw ? value : encodeURIComponent(value),
					options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
					options.path    ? '; path=' + options.path : '',
					options.domain  ? '; domain=' + options.domain : '',
					options.secure  ? '; secure' : ''
				].join(''));
			}

			// Read
			var cookies = document.cookie.split('; ');
			var result = key ? undefined : {};
			for (var i = 0, l = cookies.length; i < l; i++) {
				var parts = cookies[i].split('=');
				var name = decode(parts.shift());
				var cookie = parts.join('=');

				if (key && key === name) {
					result = decodeAndParse(cookie);
					break;
				}

				if (!key) {
					result[name] = decodeAndParse(cookie);
				}
			}

			return result;
		};

		config.defaults = {};

		$jq183.removeCookie = function (key, options) {
			if ($jq183.cookie(key) !== undefined) {
				// Must not alter options, thus extending a fresh object...
				$jq183.cookie(key, '', $jq183.extend({}, options, { expires: -1 }));
				return true;
			}
			return false;
		};

	}));

	var html = "",
			userAgent     = window.navigator.userAgent.toLowerCase(),
			appVersion    = window.navigator.appVersion.toLowerCase(),
			cookieViewFlg = $jq183.cookie('ie6alert_lixil');

	if(cookieViewFlg == 1)
	{
		return false;
	}

	// HTMLの挿入
	html+= '<div id="ie6OnlyViewBox" class="section box-right" style="position: absolute; left: 25%; top: 232px;width:500px;display:none; z-index:999999;">';
	html+= '<p class="mb30" style="font-size:18px;text-align:center;font-weight: bold;">ブラウザのアップグレードをお願い致します</p>';
	html+= '<p class="mb30" style="text-align:center;">お使いのブラウザでは一部の機能が表示、使用できません。<br />本ウェブサイトを最適な状態でご覧頂くために、<br />最新版ブラウザへのアップグレードをお勧め致します。</p>';
	html+= '<ul class="btn-basic pt0" style="text-align:center;">';
	html+= '<li class="btn-large"><a style="color:#FFF" href="http://www.microsoft.com/ja-jp/windows/products/winfamily/ie/function/default.aspx" target="_blank">アップグレードへ</a></li>';
	html+= '</ul>';
	html+= '<ul class="btn-close" style="position: absolute;right: 10px;top: 10px"><li><a href="javascript:void(0);"><img src="/common/pic/btn_close.gif" alt="閉じる" width="23" height="23"></a></li></ul>';
	html+= '<!-- //#content03 --></div>';
	$jq183('body').append(html);


	// 表示とイベントバインド
	if (userAgent.indexOf("msie") != -1)
	{
		if (appVersion.indexOf("msie 6.") >= 0)
		{
			//IE6 IE7
			$jq183('#ie6OnlyViewBox').show();
			$jq183('#ie6OnlyViewBox .btn-close').bind('click',function()
			{
				$jq183.cookie('ie6alert_lixil', 1, {path: '/',expires: 9999});
				$jq183('#ie6OnlyViewBox').hide();
			});
		}
	}







});


