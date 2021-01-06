// グローバルメニュー
$jq183(function(){
	var closeEnd = 0,
			defaultFlg = 0,
			listArr = new Array(),
			nowId = "",
			openFlg = 0;

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

	$jq183('#lxl-lineup,#lxl-reform,#lxl-showroom,#lxl-support,#lxl-corporate').hover(
		function()
		{

			nowId = $jq183(this).children('div').attr('id');

			if(defaultFlg == 0)
			{
				$jq183(this).children('.lxl-mdd').stop(true, true).slideDown();
				defaultFlg = 1;
				openFlg = 1;
			}
			else
			{
				$jq183(this).children('.lxl-mdd').show();
				openFlg = 1;
			}
		},
		function()
		{
			openFlg = 0;
			var self = $jq183(this);
			setTimeout(function()
			{
				if(openFlg == 1)
				{
					$jq183.each(listArr,function(key,value)
					{
						if(value['id'] != nowId)
						{
							$jq183('#'+value['id']).hide();
						}
					});
				}
				else
				{
					setTimeout(function()
					{
						self.children('.lxl-mdd').slideUp();
						$jq183.each(listArr,function(key,value)
						{
							if(value['id'] != nowId)
							{
								$jq183('#'+value['id']).hide();
							}
						});
					},300);

					defaultFlg = 0;
				}
			},100);
		}
	);
});


////////////////////////////////////////////////////////
// スムーススクロール
////////////////////////////////////////////////////////
$jq183(function(){
	$jq183('a[href^=#]').click(function(){
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
	var $window = $jq183(window);

	// 要素のコピー
	$jq183('.lxl-contents-inner').find('.lxl-title-set').clone().prependTo('.lxl-float-menu');
	$jq183('#lxl-contents-menu').hover(function(){openMenu($jq183(this).children('.lxl-mdd-menu'));},function(){closeMenu($jq183(this).children('.lxl-mdd-menu'));});
	$jq183('.lxl-float-menu').find('#lxl-contents-menu').hover(function(){openMenu($jq183(this).children('.lxl-mdd-menu'));},function(){closeMenu($jq183(this).children('.lxl-mdd-menu'));});
	function openMenu(elem){elem.fadeIn();}
	function closeMenu(elem){elem.fadeOut();}

	$window.scroll(function(){
	if($window.scrollTop() >= 100){
		$jq183('.lxl-float-menu').slideDown();
		$jq183('#lxl-footer-pagetop').show();
	}else{
		$jq183('.lxl-float-menu').slideUp();
		$jq183('#lxl-footer-pagetop').hide();
	}
	});
});


////////////////////////////////////////////////////////
// 先頭に戻るボタンの追尾
////////////////////////////////////////////////////////
$jq183(function(){

	var $window     = $jq183(window),
			$pageTop    = $jq183("#lxl-footer-pagetop"),
			footerNavitOffset = $jq183('#lxl-footer').offset(),
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











