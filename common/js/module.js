//
// ver 2016-03-28 14:17
//

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
			//return false;
		}
	}


	$jq183('.lxl-mdd-menu').append('<a href="javascript:void(0);" class="flatMenuClose"><img src="/common/pic/icon_close.gif" width="23" height="23" alt="閉じる"></a>');
	setTimeout(function()
	 {
	  $jq183('.flatMenuClose').bind('click',function()
	  {
	   closeMenu($jq183(this).parents('.lxl-mdd-menu'));
	  });
	 },1)


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
// setCookie,getCookie //setCookie(クッキー名,値,日数); getCookie(クッキー名);
////////////////////////////////////////////////////////

function setCookie(c_name,value,expiredays){
	// path
	var path = location.pathname;
	// path for IE
	var paths = new Array();
	paths = path.split("/");
	if(paths[paths.length-1] != ""){
		paths[paths.length-1] = "";
		path = paths.join("/");
	}
	// expires
	var extime = new Date().getTime();
	var cltime = new Date(extime + (60*60*24*1000*expiredays));
	var exdate = cltime.toUTCString();
	// create
	var s="";
	s += c_name +"="+ escape(value);
	s += "; path="+ path;
	if(expiredays){
		s += "; expires=" +exdate+"; ";
	}else{
		s += "; ";
	}
	document.cookie=s;
}

// getCookie
function getCookie(c_name){
	var st="";
	var ed="";
	if(document.cookie.length>0){
		// get
		st=document.cookie.indexOf(c_name + "=");
		if(st!=-1){
			st=st+c_name.length+1;
			ed=document.cookie.indexOf(";",st);
			if(ed==-1) ed=document.cookie.length;
			// decode
			return unescape(document.cookie.substring(st,ed));
		}
	}
	return "";
}


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
		//$jq183('#dummyId').attr('id',saveId);

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

	var setAnchor = function($obj){
		var parentH2 = $obj["0"].parentNode.parentNode.parentNode.children[0].innerText;
		var eventLableSrc = "";
		var eventLableAlt = "";
		if($obj.children().attr('src') != undefined && $obj.children().attr('src') != ""){ eventLableSrc = $obj.children().attr('src'); }
		if($obj.children().attr('alt') != undefined && $obj.children().attr('alt') != ""){ eventLableAlt = $obj.children().attr('alt'); }
		var eventLabel = '[' +  eventLableSrc + ']:[' + eventLableAlt + ']';

		if($obj.attr('target') != undefined && $obj.attr('target') != "" && $obj.attr('target') == '_blank')
		{
			if(parentH2 == "キャンペーン情報" || parentH2 == "関連情報"){ dataLayer.push({'event': 'RelatedinfoClick','eventLabel': eventLabel}); }
			window.open($obj.attr("href"),'_blank');
			return false;
		}
		else
		{
			if(parentH2 == "キャンペーン情報" || parentH2 == "関連情報"){ dataLayer.push({'event': 'RelatedinfoClick','eventLabel': eventLabel}); }
			window.location=$obj.attr("href");
			return false;
		}
	}

	//set event
	$jq183("div[class^=btn-panel-] .box").each(function(){
		if($jq183(this).find("div").hasClass("btn-biz-links")){
			$jq183(this).find("div.txt-area").click(function(){
				setAnchor($jq183(this).prev("a"));
				return false;
			});
		}else{
			$jq183(this).click(function(){
				setAnchor($jq183(this).find("a"));
				return false;
			});

		}
	})
	
	/*biz-lix menus
	================================================== */
	//action
	var bizListOp = function($obj){
		if($obj.find("p.lxl-bizbtn-up").css('display','none')){
			$obj.children("ul").show("fast");
			$obj.find("p.lxl-bizbtn-down").hide("fast");
			$obj.find("p.lxl-bizbtn-up").show("fast");
		}
	}
	var bizListCl = function($obj){
		if($obj.find("p.lxl-bizbtn-down").css('display','none')){
			$obj.children("ul").hide("fast");
			$obj.find("p.lxl-bizbtn-up").hide("fast");
			$obj.find("p.lxl-bizbtn-down").show("fast");
		}
	}
	
	//event
	if($jq183(".box").hasClass("lxl-biz-box")){
		
		// default
		if($jq183("body").hasClass("js-bizpannel-show")){
			bizListOp($jq183(".btn-biz-links"));
		}else{
			bizListCl($jq183(".btn-biz-links"));
		}
		
		$jq183("p.lxl-bizbtn-up").click(function(){
			bizListCl($jq183(this).parents("div.btn-biz-links"));
		});
		$jq183("p.lxl-bizbtn-down").click(function(){
			bizListOp($jq183(this).parents("div.btn-biz-links"));
		});
	}else{
	}
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
			pause: 8000,
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
			pause: 8000,
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
			pause: 8000,
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
	if(document.getElementById('index') && $jq183('ul.mainimg').hasClass('bxslider')){

		function replacement(){
			var $sliderLI = $jq183('.bxslider');
			var $showLI =  $jq183('.js-ShowLayer');
			var $showImg = $jq183('.js-ShowLayer img').attr('src');
			var $showAlt = $jq183('.js-ShowLayer img').attr('alt');
			var $showAc = $jq183('.js-ShowLayer a').attr('href');
			$showLI.remove();
			//$jq183('.js-ShowLayer').remove();
			$showImg = '<li><a href="'+ $showAc +'"><img src="'+ $showImg +'" alt="'+ $showAlt +'"></a></li>';
			$sliderLI.prepend($showImg);
			
		}
		// main script start
		var setName = getCookie('view');
		if(setName !== 'checked'){
			if($jq183('.bxslider li').hasClass('js-ShowLayer')){
				replacement();
			}
			window.onload = setCookie('view','checked',7);
		}else{
			
		}
		$jq183('.lxl-main-image').removeClass('js-lodingSShow');
	}else{
	}
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
// スライドショーカテゴリTOP
//
//---------------------------------------------------------
$jq183(function(){
	try{
		$jq183('.slideShowCategoryTop .bxslider').bxSlider({
			auto: true,
			pause: 6000,
			speed: 1000,
			mode: 'horizontal',
			pager: false,
			slideWidth:948,
			onSliderLoad: function(){

				// ホバーバインド
				$jq183('.slideShowCategoryTop .mainimg li').hover(function()
				{
					$jq183('.slideShowCategoryTop .bx-prev').addClass('bx-prevImgOver');
					$jq183('.slideShowCategoryTop .bx-next').addClass('bx-nextImgOver');
				},
				function()
				{
					$jq183('.slideShowCategoryTop .bx-prev').removeClass('bx-prevImgOver');
					$jq183('.slideShowCategoryTop .bx-next').removeClass('bx-nextImgOver');
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
			pause: 8000,
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
// スライドショーカテゴリTOP（フェードイン・フェードアウト）
//
//---------------------------------------------------------
$jq183(function(){
	try{
		$jq183('.slideShowLineupCategoryTop .bxslider').bxSlider({
			auto: true,
			pause: 6000,
			speed: 1500,
			mode: 'fade',
			pager: false,
			slideWidth:948
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
// スライドショー商品詳細（フェードイン・フェードアウト）
//
//---------------------------------------------------------
$jq183(function(){
	try{
		$jq183('.slideShowLineupDetail .bxslider').bxSlider({
			auto: true,
			pause: 6000,
			speed: 1500,
			mode: 'fade',
			pager: false,
			controls:false,
			slideWidth:948
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

$jq183(function(){
	var catName = location.pathname.split( '/' );
	var hrefData = location.href,
			hashData = location.hash,
			hostname = window.location.hostname;
			pathnameData = location.pathname,
			newHref = "";

	if(hashData != "")
	{
		hrefData = hrefData.replace(hashData,'');
	}

	hrefData = hrefData.split('?');

	if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0)
	{

		if(pathnameData.indexOf('/sp/') >= 0)
		{
			return false;
		}

		// リダイレクト
		newHref = '//' + hostname + '/sp' + pathnameData;

		if(hrefData[1] != undefined)
		{
			// fromspパラメータが設定されている場合は処理の終了
			if(hrefData[1] == 'fromsp')
			{
				return false;
			}
			newHref = newHref+'?'+hrefData[1];
		}
		if(hashData != "")
		{
			newHref = newHref+hashData;
		}

		if(catName[1] == 'showroom') {
				var exurl = location.href.replace('/showroom','/showroom/sp');
				$jq183.ajax({
				url: exurl,
				cache: false,
				success: function(html){
				location.href = exurl;
				}
			});

		}else{
			$jq183.ajax({
				url: newHref,
				cache: false,
				success: function(html){
				location.href = newHref;
				}
			});
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

	var hrefData = location.href;

	var html = "",
			userAgent      = window.navigator.userAgent.toLowerCase(),
			appVersion     = window.navigator.appVersion.toLowerCase(),
			cookieViewFlg  = $jq183.cookie('ie6alert_lixil'),
			cookieModalFlg = "",
			ie6Flg = 0,
			modalHref = "";

	//------------------------------------
	// アンケート用初期装備
	//------------------------------------
	cookieModalFlg = $jq183.cookie('researchModalOpen'); // クッキーデータの取得
	modalHref      = "/qa/default.htm"; // アンケートHTMLファイル


	if(cookieViewFlg == 1 || hrefData.indexOf("newsrelease.lixil.co.jp") != -1 || hrefData.indexOf("www2.lixil.co.jp") != -1)
	{
		return false;
	}

	// HTMLの挿入
	html+= '<div id="ie6OnlyViewBox" class="section box-right" style="position: absolute; left: 25%; top: 232px;width:500px;display:none; z-index:999999;">';
	html+= '<p class="mb30" style="text-align:center;font-size:18px;">お使いのブラウザでは一部の機能が表示、<br />使用できない場合があります。<br />本ウェブサイトを最適な状態でご覧頂くために、<br />最新版ブラウザへのアップグレードをお勧め致します。</p>';
	html+= '<ul class="btn-close pt0" style="position: absolute;right: 10px;top: 10px"><li><a href="javascript:void(0);"><img src="//www.lixil.co.jp/common/pic/btn_close.gif" alt="閉じる" width="23" height="23"></a></li></ul>';
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

	// IE6以外はアンケートの表示
	if(ie6Flg == 0)
	{

		//*************************************************
		// ショールーム配下、www以外の場合は処理の終了
		//*************************************************
		if(hrefData.indexOf("showroom-info.lixil.co.jp") != -1 || hrefData.indexOf("www.lixil.co.jp") < 0){
			return false;
		}
		  
		//*************************************************
		// クッキーにデータが存在している場合は処理の終了
		//*************************************************
		if(cookieModalFlg == 1){
			return false;
		}

		//*******************************************
		// ランダムで表示・非表示設定
		//*******************************************
		var randnum = Math.floor( Math.random() * 100 )+1,
				thisPath = "",
				dirPassFlg = 0,
				searchUrl = location.protocol+'//'+location.host;

		$jq183.getScript("/common/js/enq-init.js",function()
		{


			//*******************************************
			// 特定のディレクトリに居い場合は処理の終了
			//*******************************************

			thisPath = location.pathname.replace('default.htm','')
			thisPath = searchUrl+thisPath;

			// ディレクトリ判定
			$jq183.each(enqInit['enq-dir-path'],function(key,value)


			{

				if(value == '/')
				{
					// スラッシュのみはTOP
					// indexOfですると全てが当てはまってしまう為処理を分岐
					if(thisPath == value)
					{
						dirPassFlg = 1;
						return false;
					}
				}
				else if(thisPath.indexOf(searchUrl+value) >= 0)
				{
					dirPassFlg = 1;
					return false;
				}
			});

			// 判定処理
			if(dirPassFlg == 0)
			{
				return false;
			}


			//****************************************
			// 0の場合は処理の終了
			//****************************************
			if(enqInit['enq-probability'] == 0)
			{
				return false;
			}

			//****************************************
			// ランダム判定処理
			//****************************************
			if(randnum > enqInit['enq-probability'])
			{
				return false;
			}

			//****************************************
			// cookieにデータ投入
			//****************************************
			$jq183.cookie('researchModalOpen', 1, {path: '/',expires: enqInit['enq-cookie-expires']});

			//****************************************
			// 表示用イベントトラッキングの送信
			//****************************************
			_gaq.push(['_trackEvent','qaOpen','view',1]);

			//****************************************
			// モーダル用ソースの投入と表示
			//****************************************

			$jq183("head").append("<link>");
			css = $jq183("head").children(":last");
			css.attr({
				rel: "stylesheet",
				type: "text/css",
				href: "/qa/css/style.css"
			});

			$jq183("head").append("<link>");
			css = $jq183("head").children(":last");
			css.attr({
				rel: "stylesheet",
				type: "text/css",
				href: "/common/css/modal.css"
			});

			modalHtml = "";
			modalHtml+= '<div id="modalResearch"><div class="modalBackground"></div><div class="modalContainer">';
			modalHtml+= '<div id="qa">';
			modalHtml+= '<div class="header">';
			modalHtml+= '<h1><img src="/qa/img/img_h1.png" width="676" height="65"></h1>';
			modalHtml+= '<a href="javascript:void(0);" class="modalClose" ><img src="/qa/img/btn_modal_close.png" width="50" height="50"></a>';
			modalHtml+= '</div>';
			modalHtml+= '<div class="contents">';
			modalHtml+= '<img class="question" src="/qa/img/img_q.png" width="676" height="59">';
			modalHtml+= '<div class="answerBox bBottom clearfix">';
			modalHtml+= '<ul class="answerList clearfix">';
			modalHtml+= '<li><a href="javascript:void(0);" class="ans1">テレビCM</a></li>';
			modalHtml+= '<li><a href="javascript:void(0);" class="ans2">テレビ番組</a></li>';
			modalHtml+= '<li class="last"><a href="javascript:void(0);" class="ans3">駅、街頭の看板/ポスターなど</a></li>';
			modalHtml+= '</ul>';
			modalHtml+= '<ul class="answerList clearfix">';
			modalHtml+= '<li><a href="javascript:void(0);" class="ans4">新聞</a></li>';
			modalHtml+= '<li><a href="javascript:void(0);" class="ans5">雑誌</a></li>';
			modalHtml+= '<li class="last"><a href="javascript:void(0);" class="ans6">チラシ</a></li>';
			modalHtml+= '</ul>';
			modalHtml+= '<ul class="answerList clearfix listlast">';
			modalHtml+= '<li><a href="javascript:void(0);" class="ans7">LIXILのショールームで聞いた</a></li>';
			modalHtml+= '<li><a href="javascript:void(0);" class="ans8">工務店などで話を聞いた</a></li>';
			modalHtml+= '<li class="last"><a href="javascript:void(0);" class="ans9">口コミ</a></li>';
			modalHtml+= '</ul>';
			modalHtml+= '</div>';
			modalHtml+= '<div class="answerBox mt10">';
			modalHtml+= '<ul class="answerList clearfix">';
			modalHtml+= '<li class="otherAns"><a href="javascript:void(0);" class="ans10">ビジネスでの利用</a></li>';
			modalHtml+= '<li class="otherAns last"><a href="javascript:void(0);" class="ans11">あてはまるものはない</a></li>';
			modalHtml+= '</ul>';
			modalHtml+= '</div>';
			modalHtml+= '<div class="thanks">';
			modalHtml+= '<p class="mb40"><img src="/qa/img/img_thank.png" width="333" height="24" alt="ご回答ありがとうございました。"></p>';
			modalHtml+= '</div>';
			modalHtml+= '</div>';
			modalHtml+= '<div class="footer clearfix">';
			//modalHtml+= '<a href="/"><img class="logo" src="/qa/img/img_logo.png" width="100" height="54" /></a>';
			modalHtml+= '<a href="javascript:void(0);" class="skip"><img src="/qa/img/btn_skip.png" width="174" height="18" /></a>';
			modalHtml+= '</div>';
			modalHtml+= '</div>';
			modalHtml+= '</div></div>';

			$jq183('body').append(modalHtml);

			setTimeout(function()
			{
				$jq183("#modalResearch .modalContainer").ready(function() {
					$jq183("#modalResearch").fadeIn(250,function()
					{
						onComplete();
					});
				});
			},500);

			//$jq183("#modalResearch .modalContainer").load(modalHref, "", onComplete);


		});

	}


	//--------------------------------------------------------------------
	// モーダル表示完了時処理
	//--------------------------------------------------------------------
	function onComplete()
	{
		displayModal(true);

		//****************************************
		// 閉じるボタンクリック時
		//****************************************
		$jq183("#modalResearch .modalContainer a.modalClose,#modalResearch .modalContainer a.skip").click(function()
		{
			displayModal(false);
			return false;
		});

		//****************************************
		// 回答ボタンクリック時
		//****************************************
		$jq183(".answerList a").click(function()
		{
			var gaData = $jq183(this).attr('class');

			// 回答文言のキャッチ
			switch(gaData)
			{
				case 'ans1':
					gaData = 'テレビCM';
					break;
				case 'ans2':
					gaData = 'テレビ番組';
					break;
				case 'ans3':
					gaData = '駅、街頭の看板/ポスターなど';
					break;
				case 'ans4':
					gaData = '新聞';
					break;
				case 'ans5':
					gaData = '雑誌';
					break;
				case 'ans6':
					gaData = 'チラシ';
					break;
				case 'ans7':
					gaData = 'LIXILのショールームで聞いた';
					break;
				case 'ans8':
					gaData = '工務店などで話を聞いた';
					break;
				case 'ans9':
					gaData = '口コミ';
					break;
				case 'ans10':
					gaData = 'ビジネスでの利用';
					break;
				case 'ans11':
					gaData = 'あてはまるものはない';
					break;
			}

			// イベントトラッキングの送信

			//var test = ga('send', 'event', 'answer', 'click', 'test');
			//_gaq.push(['_trackEvent','answer','click',gaData]);

			_gaq.push(['_trackEvent', 'answer','click',gaData]);
			dataLayer.push({'event':'_trackEvent','category':'answer','action':'click','opt_value':gaData});


			//--------------------------------------------
			// thanksへの切り替え
			//--------------------------------------------
			$jq183(".question").hide();
			$jq183(".answerBox").hide();
			$jq183(".skip").hide();
			$jq183(".thanks").show();
			setTimeout(function()
			{
				displayModal(false);
				return false;
			},10000);
		});
	}

	//--------------------------------------------------------------------
	// モーダル開閉クラス
	//--------------------------------------------------------------------
	function displayModal(sign)
	{

		if (sign)
		{
			$jq183("#modalResearch").show();
			$jq183("#modalResearch .modalContainer").fadeIn(250,function()
			{
				modalOnFlg = 1;
			});
		}
		else
		{
			modalOnFlg = 0;
			$jq183("#modalResearch").fadeOut(250);
			$jq183("#modalResearch .modalContainer").fadeOut(250);
		}
	}
});

////////////////////////////////////////////////////////
// add js for checking lists
// add current
////////////////////////////////////////////////////////
$jq183(function(){
	if(document.getElementById('lxl-thumb-lists')){
		var thumbCurrent = $jq183('#lxl-thumb-lists').attr('data-list-current');
		thumbCurrent= '.' + thumbCurrent.replace('C-', '');
		$jq183(thumbCurrent).addClass('stay');//カレント用のclassを入れてください。
		if( $jq183('#lxl-thumb-lists').attr('data-list-type') != undefined) {
			var thumbTypeCurrent = $jq183('#lxl-thumb-lists').attr('data-list-type');
			thumbTypeCurrent= '.' + thumbTypeCurrent.replace('C-', '');
			$jq183(thumbTypeCurrent).addClass('stay');//グループカレント用のclassを入れてください。
		}
	}else if(document.getElementById('lxl-uditems-list')){
		var thumbCurrent2 = $jq183('#lxl-uditems-list').attr('data-list-current');
		thumbCurrent2= '.' + thumbCurrent2.replace('C-', '');
		 $jq183(thumbCurrent2).addClass('stay');//カレント用のclassを入れてください。
		if( $jq183('#lxl-uditems-list').attr('data-list-type') != undefined) {
			var thumbTypeCurrent2 = $jq183('#lxl-thumb-lists').attr('data-list-type');
			thumbTypeCurrent2= '.' + thumbTypeCurrent2.replace('C-', '');
			 $jq183(thumbTypeCurrent2).addClass('stay');//グループカレント用のclassを入れてください。
		}

	}else{
	}
	

});


//--------------------------------------------------------------------
// sortout
//--------------------------------------------------------------------
$jq183(function(){
  if (location.href.indexOf("sortout=1") > 0) {
    //印刷用CSSを追記
    var style = 
      '<style type="text/css" media="print">' +
      '  #lxl-header, #lxl-footer, #sortout_printui, .lxl-topicpath, .h2-group, .thumb-link-box, .contents-footer-panel,.lixTmplNavSns, .section .btn-basic, #lxl-contents-menu, #lxl-contents-menu .btn-menu { display: none; }' +
      '</style>';
    $jq183("body").append(style);
    //印刷用UIを表示
    var html = 
    '<div id="sortout_printui" class="section clearfix" style="margin: 26px auto; padding: 0;">' +
    '  <ul style="overflow:hidden;">' +
    '    <li style="float: left; width: 50%;">' +
    '      <a href="javascript:print()" style="box-sizing: border-box; display:block; font-size:20px; text-decoration: none; text-align:center; padding:12px 0;">' +
    '        <span style="display:inline-block; vertical-align: middle; margin-right:20px;"><img src="/common/pic/icon_print.svg" alt=""></span>' +
    '        <span style="display:inline-block; vertical-align: middle;">印刷する</span>' +
    '      </a>' +
    '    </li>' +
    '    <li style="box-sizing: border-box; float: left; width: 50%; border-left: 1px solid #e6e6e6">' +
    '      <a href="/showroom/" style="display:block; font-size:20px; text-decoration: none; text-align:center; padding:12px 0;">' +
    '        <span style="display:inline-block; vertical-align: middle; margin-right:20px;"><img src="/common/pic/icon_showroom.svg" alt=""></span>' +
    '        <span style="display:inline-block; vertical-align: middle;">お近くのショールームを探す</span>' +
    '      </a>' +
    '    </li>' +
    '  </ul>' +
    '</div>';
    $jq183("#lxl-contents-title").after(html);
  }
});