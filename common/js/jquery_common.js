var Obj = {};


/**
 * @function    
 * @return {String}    ex) '../common/'
 */
Obj.getCommonDirPath = function() {
	var s = document.getElementsByTagName('SCRIPT');
	if( s.length && s[0].src && s[0].src.match(/(.*\/?common\/)js\/.+$/))
		return RegExp.$1;
	else
		return '/common/';
}


/* -------------------------------------------------------------------
	* 共通関数実行
	* init
 ------------------------------------------------------------------- */
$(function() {

	/* for IE6 background image flicker */
	if (jQuery.browser.msie && jQuery.browser.version == 6) {
		try {
			document.execCommand("BackgroundImageCache", false, true);
		} catch(err) {}
	}

	/* rollover */
	new RolloverImages('rollover', 'on');

	/* set SmoothScroll */
	$().SmoothScroll();
	
});



	


/* -------------------------------------------------------------------
	* 共通関数定義
	* @function
 ------------------------------------------------------------------- */
(function($){

	/*
	 * リンクのtarget指定の設定・上書き	(初期値：pdfリンクを別窓にする)
	 * @function
	 */
	$.fn.LinkTargetSet = function(config){
		if(this.length == 0) return false;
		c = jQuery.extend({
					reg	:	new RegExp("(\.pdf$|\.pdf#.*)", "i"),
				 	target	:	'_blank'
			 },config);
		$(this).each(function(){
			var t = this;
			var $t = $(t);
			var href = $t.attr('href');
			if (href.match(c.reg)) {
				$t.attr('target',c.target);
			}
		});
	};
	

	/*
	 * スムーススクロール
	 * @function
	 */
	$.fn.SmoothScroll	= function(options){
		if(this.length == 0) return false;
		var scroller = (function() {
			var c = $.extend({
							easing:100,
							step:30,
							fps:60,
							fragment:''
						}, options);
				
			c.ms = Math.floor(1000/c.fps);
			var timerId;
			var param = {
					stepCount:0,
					startY:0,
					endY:0,
					lastY:0
			};
				
				// fnc
				function move() {
					if (param.stepCount == c.step) {
						// scroll end
						setFragment(param.fragment);
						
						window.scrollTo(getCurrentX(), param.endY);
					} else if (param.lastY == getCurrentY()) {
						// scroll
						param.stepCount++;
						window.scrollTo(getCurrentX(), getEasingY());
						param.lastY = getEasingY();
						timerId = setTimeout(move, c.ms); 
					} else {
						// error	
						if (getCurrentY()+getViewportHeight() == getDocumentHeight()) {
							setFragment(param.fragment);
						}
					}
				}
				function setFragment(fragment){
					location.href = location.href.split('#')[0] + fragment;
				}

				function getEasingY() {
					return Math.floor(getEasing(param.startY, param.endY, param.stepCount, c.step, c.easing));
				}
				function getEasing(start, end, stepCount, step, easing) {
					var s = stepCount / step;
					return (end - start) * (s + easing / (100 * Math.PI) * Math.sin(Math.PI * s)) + start;
				}
				function targetOffsetTop(target){
					return target.offset().top;
				}
				return {
					set: function(options) {
						this.stop();
						if (options.startY == undefined) options.startY = getCurrentY();
						param = $.extend(param, options);						
						param.lastY = param.startY;
						param.fragment = options.fragment;
						timerId = setTimeout(move, c.ms); 
					},
					stop: function(){
						clearTimeout(timerId);
						param.stepCount = 0;
					}
				};
			})();
			
			function getCurrentY() {
					return document.body.scrollTop  || document.documentElement.scrollTop;
			}
			function getCurrentX() {
					return document.body.scrollLeft  || document.documentElement.scrollLeft;
			}
			function getDocumentHeight(){
					return (document.compatMode && document.compatMode != "BackCompat")?document.documentElement.scrollHeight:document.body.scrollHeight;
			}
			function getViewportHeight(){
					return (!$.browser.safari && !$.browser.opera) ? document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight : window.innerHeight;
			}
			// init
			$('a[href^=#], area[href^=#]').not('a[href=#], area[href=#], a.no-scroll, area.no-scroll').click(function(){

				var fragment = $(this).attr('href');
				var target = $(fragment);
				if (target.length == 0) target = $('a[name='+fragment+']');
				
				if (target.length) {
					scroller.set({
						endY: ((getDocumentHeight() - target.offset().top )) < getViewportHeight() ? getDocumentHeight() - getViewportHeight() : target.offset().top,
						fragment: fragment,
						_target :	target
					});

					return false;
				}
			});
	}
	
})(jQuery)



/*---------------------------------------------------------------------------*/
/**
 * @version  0.0.1_2009-06-29
 * @requires jquery.js
 * @requires styleswitcher.js
 * @requires rollover.js
 */
 
 
/*
FONTSIZE_SELECTOR_ENABLED = true;
FONTSIZE_SELECTOR         = null;


if (FONTSIZE_SELECTOR_ENABLED) {

	$(function() {
		var config = {
			className      : "fontsize",
			blockId        : "fontsize-default",
			buttonsSetting : {
					"small" : {
								styleId       : "fontsize-small",
								buttonId      : "fsbutton-small",
								title         : "文字サイズを「小」に変更します",
								titleSelected : "現在選択中の文字サイズは「小」です"
					},
					"default" : {
								styleId       : "fontsize-default",
								buttonId      : "fsbutton-default",
								title         : "文字サイズを「中」に変更します",
								titleSelected : "現在選択中の文字サイズは「中」です"
					},
					"large" : {
								styleId       : "fontsize-large",
								buttonId      : "fsbutton-large",
								title         : "文字サイズを「大」に変更します",
								titleSelected : "現在選択中の文字サイズは「大」です"
					}
			}
			,rollover : new RolloverImages("rollover-fsbutton", "on", "on")
		};

		FONTSIZE_SELECTOR = new FontSizeSelector(config);
	});

	// 
	document.write(''
	+ '<style type="text/css" media="screen,print">'
	+ '#fontsize-selector {display: block !important;}'
	+ '</style>');
}
*/
