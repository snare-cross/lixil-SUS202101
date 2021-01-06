var _ua = (function(u){
  return {
    Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1) 
      || u.indexOf("ipad") != -1
      || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
      || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
      || u.indexOf("kindle") != -1
      || u.indexOf("silk") != -1
      || u.indexOf("playbook") != -1,
    Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
      || u.indexOf("iphone") != -1
      || u.indexOf("ipod") != -1
      || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
      || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
      || u.indexOf("blackberry") != -1
  }
})(window.navigator.userAgent.toLowerCase());

var winW = $(window).width();
var flg = false;
var flg2 = false;
var flg3 = false;
var closeEnd = 0;
var defaultFlg = 0;
var listArr = new Array();
var nowId = "";
var openFlg = 0;
var delayTime = 200;
var closeFlg = 0;
var naviLeft = 0;
var innerHeightData = 0;
var suggestClickFlg = false;

$(function() {
	
	//  Page Top Scroll
    $('#fotPtop').click(function () {
		var speed = 500;
		$("html,body").animate({ scrollTop:0 }, speed, "easeOutExpo");
		return false;
    });
	
	//  Anchor Link
	$("a[href^=#]").click(function(){
		var speed = 500,
		href= $(this).attr("href"),
		target = $(href == "#" || href == "" ? 'html' : href),
		position = target.offset().top;

		$("html, body").animate({scrollTop:position}, speed, "easeOutExpo");

		return false;
	});
	
	// Loading
	$(".loading").each(function(){
		var headHeight = $("#header").outerHeight( true );
		var elemHeight = $(this).height();
		var loadHeight = elemHeight-headHeight;
		$("body").css("overflow","hidden");
		$(this).css("height",loadHeight+"px");
	});
	
	// PopUp
	if($('img').hasClass('js-picUp')){
		if($(".fNavi").css("display") == "none"){
			var addUP = $(".js-picUp");
			addUP.each(function(){
				var UPSrc = $(this).attr("src");
				$(this).wrap("<a class='picUp'>");
				$(this).parent("a").attr("href",UPSrc);
				$(this).parent("a").attr("target","_blank");
				$(this).parent("a").append("<span class='cbIconShow'></span>");
			});
		}
	}
	
	// search
	$('#searchArea form').click(function() {
		if(flg3){
		}else{
			flg3 = true;
			$('#searchArea').addClass("on");
			$('#utilityNavi').addClass("on");
			$('#searchArea input').focus();
		}
	});
	$('#searchArea input').focusout(function(e) {
		if(suggestClickFlg){
		}else{
			flg3 = false;
			$('#searchArea').removeClass("on");
			$('#utilityNavi').removeClass("on");
		}
	});
	$("#searchArea").on("mousedown", ".mf_finder_searchBox_suggest_link",function(e){
		suggestClickFlg = true;
	});
	//$('.searchReset').click(function(){
	//	$('#searchArea input').val('');
	//});
	
	$("#spMenuBtn").click(function(){
		if($(".nv").css("display")=="none"){
			$(".nv").slideDown("normal");
			$(this).addClass("active");
			flg = true;
		}else{
			$(".nv").slideUp("normal");
			$(this).removeClass("active");
			flg = false;
		};
	});
	$("#gNavi > li > p").click(function(){
		if($(".logo").css("position") == "relative"){
			if($(this).next('.megaMenu').css("display") == "none"){
				$(this).addClass('active');
				$(this).next('.megaMenu').addClass('active');
				$(this).next('.megaMenu').slideDown(1000);
			}else{
				$(this).removeClass('active');
				$(this).next('.megaMenu').removeClass('active');
				$(this).next('.megaMenu').slideUp(200);
			}
		}
	});
	$("#spMenuArrow").click(function(){
		$(".nv").slideUp("normal");
		$("#spMenuBtn").removeClass("active");
		flg = false;
	});
	
	$(".megaMenu").css("width",winW+"px");
	
	var i =0;
	$('#gNavi > li').each(function()
	{
		var self = $(this);

		if(self.children('div')[0] != undefined && self.children('div')[0] != "")
		{
			listArr[i] = new Array();
			listArr[i]['elem']  = self.children('div');
			listArr[i]['id'] = self.children('div').attr('id');
			i++;
		}
	});
	$('#nvLineup,#nvReform,#nvShowroom,#nvSupport,#nvCorporate').hover(
		function()
		{
			if($(".logo").css("position") == "absolute"){

				if(defaultFlg == 0)
				{
	
					var self = $(this);
					$('#gNavi > li').removeClass("active");
					self.addClass("active");
	
					setTimeout(function()
					{
						if(closeFlg == 1)
						{
							return false;
						}
						
						var naviHeightDate = ($("#header").outerHeight( true ))/2;
						$('#gNavi > li').css('height',naviHeightDate+'px');
						nowId = $(this).children('div').attr('id');
	
						self.find('.megaMenu').css('left','-9999px').show();
						innerHeightData = self.find('.mmChild').innerHeight();
						naviLeft = self.offset();
						self.find(".megaMenu").css("left","-"+naviLeft.left+"px").hide();
						self.find('.megaMenu').css('height',innerHeightData+'px');
						self.find('.mmChild').hide();
	
						self.children('.megaMenu').stop(true, true).slideDown(200,function()
						{
							setTimeout(function()
							{
								self.find('.mmChild').fadeIn();
							},50)
						});
	
						defaultFlg = 1;
						openFlg = 1;
					},100);
	
				}
				else
				{
					var naviHeightDate = ($("#header").outerHeight( true ))/2;
					$('#gNavi > li').css('height',naviHeightDate+'px');
					nowId = $(this).children('div').attr('id');
	
					openFlg = 1;
					var self = $(this);
					$('#gNavi > li').removeClass("active");
					self.addClass("active");
					self.find('.megaMenu').css('left','-9999px').show();
					innerHeightData = self.find('.mmChild').innerHeight();
					naviLeft = self.offset();
					self.find('.mmChild').hide();
					self.find('.megaMenu').css('left','-'+naviLeft.left+'px').css('height',innerHeightData+'px');
	
					self.children('.megaMenu').stop(true, true).delay(delayTime).fadeIn(1,function()
					{
						setTimeout(function()
						{
							self.find('.mmChild').fadeIn();
						},50)
					});
	
	
				}
			}
		},
		function()
		{
			if($(".logo").css("position") == "absolute"){
				closeFlg = 1;
				gManuClose($(this));
			}
		}
	);

		$('.mmArrow').bind('click',function()
		{
			 gManuClose($(this).parents('li'));
		});


		function gManuClose(thisElem)
		{
			closeFlg = 1;
			openFlg = 0;
			$('#gNavi > li').removeClass("active");

			var self = thisElem;
			setTimeout(function()
			{
				if(openFlg == 1)
				{
					$.each(listArr,function(key,value)
					{
						if(value['id'] != nowId)
						{
							$('#'+value['id']).hide();
							setTimeout(function()
							{
								closeFlg = 0;
							},100)
						}
					});
				}
				else
				{
					var naviHeightDate = ($("#header").outerHeight( true ))/6;
					$('#gNavi > li').css('height',naviHeightDate+'px');

					self.children('.megaMenu').fadeOut(300,function()
					{
						$.each(listArr,function(key,value)
						{
							if(value['id'] != nowId)
							{
								$('#'+value['id']).hide();
								self.children('.megaMenu').hide();
								self.children('.megaMenu').css('left','0px');
								self.children('.megaMenu').css('height','');
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
		
		// SNS
    var shareTitle = encodeURI($('title').html());
    var shareUrl = encodeURI(document.URL);
    var shareUrlComponent = encodeURIComponent(document.URL);
    $('.twitter a').attr("href", "http://twitter.com/share?url="+ shareUrl + "&text=" + shareTitle);
    $('.facebook a').attr("href", "http://www.facebook.com/sharer.php?u="+ shareUrl +"&t=" + shareTitle);
    $('.in a').attr("href", "http://www.linkedin.com/shareArticle?mini=true&url=" + shareUrl + "&title=" + shareTitle);
    $(".nvOtSns a").click(function(){
        window.open(this.href, "social_window","width=600,height=600,resizable=yes,scrollbars=yes,toolbar=yes");
        return false;
    });
	
});


$(function() {

	var $window = $(window),
	$pageTop = $("#fotPtop"),
	lxlFooterElem = $('#footer'),
	footerNavitOffset = lxlFooterElem.offset(),
	pageTop = $window.height() - $pageTop.height() - 20,
	pageTopRight = ($window.width() - $("#container").width())/2,
	scImgHeight = $pageTop.height(),
	adjustedValueFooter = $pageTop.height(),
	adjustedValuePageTop = 10;

	$pageTop.css('top',pageTop+'px');
	if($(".fNavi").css("display") == "none"){
		pageTopRight = ($window.width() - $("#contents").width())/2
	}
	$pageTop.css('right',pageTopRight+'px');

	$window.scroll(function(){
		footerNavitOffset = lxlFooterElem.offset();
		pageTop = $window.height() - scImgHeight - adjustedValuePageTop;
		$pageTop.css('top',pageTop+'px');
		
		winBottom = parseInt($window.scrollTop()) + $window.height();
		if($window.scrollTop() >= 100){
			$pageTop.show();
		}else if($window.scrollTop() <= 10){
			$pageTop.hide();
		}
		if(winBottom >= footerNavitOffset.top){
			pagetopTop = parseInt(footerNavitOffset.top) - parseInt(adjustedValueFooter);
			pagetopTop = pagetopTop + 2;
			$pageTop.css('position','absolute');
			$pageTop.css('top',pagetopTop+'px');
		}else{
			$pageTop.css('position','fixed');
			$pageTop.css('top',pageTop+'px');
		}
		
		$(".content-col-2 #side").each(function(){
		var $sidebar = $("#side");
		var offset = $sidebar.offset();
		var topPadding = 20;
		var parentY = $sidebar.parent().offset().top;
		var parentH = $sidebar.parent().height();
		var wScrollvalue = $window.scrollTop();
	
			if (wScrollvalue > parentY) {
				if(wScrollvalue > (parentY + parentH) - ($sidebar.height()) ){
						$sidebar.stop().animate({
							marginTop:parentH - $sidebar.height()
						});
				}else{
					if($sidebar.css("position")=="absolute"){
						$sidebar.stop().animate({
							marginTop:wScrollvalue - parentY + topPadding
						});
					}else{
						$sidebar.stop().animate({
							marginTop:0
						});
					}
				}
			} else {
				$sidebar.stop().animate({
					marginTop:0
				});
			}
		});
	});
});


window.onload = function(){
	$(".loading").each(function(){
		$(this).fadeOut();
		$("body").css("overflow","auto");
	});
	
	$(".content-col-2 #side").each(function(){
	var $sidebar = $("#side");
	var sidebarH = $sidebar.innerHeight();
	var parentH = $sidebar.parent().height();

		if (parentH <= sidebarH) {
			$sidebar.css({
				position:"static"
			});
		}
	});
};

$(window).resize(function(){
	winW = $(window).width();
	
	if(_ua.Mobile || _ua.Tablet){
		if(winW <= 768){
			if(flg){
				$(".nv").css("display","block");
			}else{
				$(".nv").css("display","none");
			}
			if(flg2){
				$(".sideNavi").css("display","block");
			}else{
				$(".sideNavi").css("display","none");
			}
		}else{
			$(".nv").css("display","block");
			$(".sideNavi").css("display","block");
			$(".megaMenu").css("display","none");
		};
	}else{
		if($(".logo").css("position") == "relative"){
			if(flg){
				$(".nv").css("display","block");
			}else{
				$(".nv").css("display","none");
			}
			if(flg2){
				$(".sideNavi").css("display","block");
			}else{
				$(".sideNavi").css("display","none");
			}
			$(".megaMenu.active").css("display","block");
		}else{
			var fnavi = $(".fNavi").css("display");
			$(".nv").css("display","block");
			$(".sideNavi").css("display","block");
			$(".megaMenu").css("display","none");
		};
	}
	
	$(".megaMenu").css("width",winW+"px");
	
	
	// PopUp
	if($('img').hasClass('js-picUp')){
		var addUP = $(".js-picUp");
		if($(".logo").css("position") == "relative"){
			if ( addUP.parent().is( ".picUp" ) ) {
			}else{
				addUP.each(function(){
					var UPSrc = $(this).attr("src");
					$(this).wrap("<a class='picUp'>");
					$(this).parent("a").attr("href",UPSrc);
					$(this).parent("a").attr("target","_blank");
					$(this).parent("a").append("<span class='cbIconShow'></span>");
				});
			}
		}else{
			if ( addUP.parent().is( ".picUp" ) ) {
				addUP.unwrap();
				$(".cbIconShow").remove();
			}
		}
	}
	
	$(".content-col-2 #side").each(function(){
	var $sidebar = $("#side");
	var sidebarH = $sidebar.innerHeight();
	var parentH = $sidebar.parent().height();

		if (parentH <= sidebarH) {
			$sidebar.css({
				position:"static"
			});
		}
	});

	var $window     = $(window),
	$pageTop    = $("#fotPtop"),
	lxlFooterElem = $('#footer'),
	footerNavitOffset = lxlFooterElem.offset(),
	pageTop = $window.height() - $pageTop.height() - 20,
	pageTopRight = ($window.width() - $("#container").width())/2,
	scImgHeight = $pageTop.height(),
	adjustedValueFooter = $pageTop.height(),
	adjustedValuePageTop = 10;

	$pageTop.css('top',pageTop+'px');
	if($(".logo").css("position") == "relative"){
		pageTopRight = ($window.width() - $("#contents").width())/2
	}
	$pageTop.css('right',pageTopRight+'px');

	$window.scroll(function(){
		footerNavitOffset = lxlFooterElem.offset();
		pageTop = $window.height() - scImgHeight - adjustedValuePageTop;
		$pageTop.css('top',pageTop+'px');
		
		winBottom = parseInt($window.scrollTop()) + $window.height();
		if($window.scrollTop() >= 100){
			$pageTop.show();
		}else if($window.scrollTop() <= 10){
			$pageTop.hide();
		}
		if(winBottom >= footerNavitOffset.top){
			pagetopTop = parseInt(footerNavitOffset.top) - parseInt(adjustedValueFooter);
			pagetopTop = pagetopTop + 2;
			$pageTop.css('position','absolute');
			$pageTop.css('top',pagetopTop+'px');
		}else{
			$pageTop.css('position','fixed');
			$pageTop.css('top',pageTop+'px');
		}
	});
});