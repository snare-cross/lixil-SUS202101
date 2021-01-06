//
// ver 2017-09-09 19:00
//
$jq183(function(){

var SPNav = function(){
	//for SP
		if(!document.getElementById('lxl-SPMenu')){
				$jq183('.lxl-header-inner').append('<div id="lxl-SPMenu"></div>');
			$jq183('#lxl-global-nav li p').click(function(){
				if($jq183(this).next().hasClass('lxl-mdd')){								  
					if($jq183(this).hasClass('l-gnavUP')){
						$jq183(this).next().slideUp();
						$jq183(this).removeClass('l-gnavUP');
					}else{
						$jq183(this).next().slideDown();
						$jq183(this).addClass('l-gnavUP');
					}
				return false;
				}
			});
			$jq183('#lxl-SPMenu').click(function(){
				if($jq183('#lxl-utility-area').hasClass('l-spMenuOn')){
					$jq183('#lxl-SPMenu').removeClass('l-close');
					$jq183('#lxl-utility-area').removeClass('l-spMenuOn');
				}else{
					$jq183('#lxl-utility-area').addClass('l-spMenuOn');
					$jq183('#lxl-SPMenu').addClass('l-close');
				}
			});
		}
}

var PCNav = function(){
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
}
var userAgent = window.navigator.userAgent.toLowerCase()
if (userAgent.indexOf("msie") != -1){
	if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0)
	{
			if(!$jq183('body').hasClass('SP')){
				$jq183('body').addClass('SP');
				SPNav();
		}else{
			if($jq183('body').hasClass('SP')){
				$jq183('body').removeClass('SP');
			}
			if(document.getElementById('lxl-SPMenu')){
				$jq183('#lxl-SPMenu').remove();
			}
			PCNav();
		}
	}else{
		if($jq183('body').hasClass('SP')){
			$jq183('body').removeClass('SP');
		}
		if(document.getElementById('lxl-SPMenu')){
			$jq183('#lxl-SPMenu').remove();
		}
		PCNav();
	}
}else{
	if (window.matchMedia('screen and (min-width:768px)').matches) {
		if($jq183('body').hasClass('SP')){
			$jq183('body').removeClass('SP');
		}
		if(document.getElementById('lxl-SPMenu')){
			$jq183('#lxl-SPMenu').remove();
		}
		PCNav();
	}else{
		if(!$jq183('body').hasClass('lineup-popupItemMenu')){
			SPNav();
			if(!$jq183('body').hasClass('SP')){
					$jq183('body').addClass('SP');
			}else{
				PCNav();
				if($jq183('body').hasClass('SP')){
					$jq183('body').removeClass('SP');
				}
				if(document.getElementById('lxl-SPMenu')){
					$jq183('#lxl-SPMenu').remove();
				}
			}
		}
	}
}

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
// カテゴリ別
////////////////////////////////////////////////////////
$jq183(function(){
		//common
		if ($jq183('body').hasClass('SP')){
			if($jq183('img').hasClass('js-picUp')){
				var addUP = $jq183('.js-picUp');
				addUP.each(function(){
					var UPSrc = $jq183(this).attr('src');
					$jq183(this).wrap('<a class="js-picUp-wrap">');
					$jq183(this).parent('a').attr('href',UPSrc);
					$jq183(this).parent('a').attr('target','_blank');
				});
			}
		}else{}
		//lineup sec
		if($jq183('body').hasClass('lineup-space')){
			
			//common function
			var addHight = function(w){
				var iH = w.width();
				if($jq183('.lxl-inSeachImList ul').hasClass('lxl-seachLstCol03')){
					iH = iH;
					if($jq183('.lxl-seachLstWd ul').hasClass('lxl-seachLstCol03')){
						iH = iH*0.667;
					}
				}else{
					iH = iH*0.6;
				}
				$jq183($jq183('.lxl-inSeachImList img')).height(iH);
			}
			var lyHight = function(obj){
				var objHi =0;
				obj.each(function(){
					var thisHi = $jq183(this).children('p').height();
					if(objHi < thisHi){
						objHi = thisHi;
					}
				});
				objHi = objHi +20;
				obj.height(objHi);
			}
			var menuHide = function(){
				//seach menu default
				$jq183('.lxl-seachLst').each(function(){
					if($jq183(this).hasClass('lxl-serchOn')){
					}else{
						$jq183('.section',$jq183(this)).hide();
					}
				});
			}
			
			var elip = function(obj){
				obj.each(function(){
					var pL = $jq183(this).height();
					if(pL > 50){
							$jq183(this).addClass('l-elip');
					}else{}
				});

			}
			elip($jq183('.lxl-CateListG03 .lxl-inCateList ul li a dd'));
			
			var cateHi = function(df){
				if($jq183('.lxl-inSeachCateList div').hasClass('lxl-CateListG03')){
					df.each(function(){
						var coH = $jq183(this).next('div.lxl-inCateList').height();
						var NvH =$jq183(this).parents('ul').height();
						elip($jq183('.lxl-CateListG03 .lxl-inCateList ul li a dd'));
						if(coH>NvH){
							$jq183(this).parents('div.lxl-CateListG03').height(coH+10);
						}else{
							$jq183(this).parents('div.lxl-CateListG03').height(NvH+10);
						}
					});
				}else{
					df.each(function(){
						var coH = $jq183(this).next('div').height();
						$jq183(this).parents('ul').height(coH);
					});
				}
			}
			var pageLink = function(IDn){
				if(IDn!==''){
					 $jq183('.lxl-seachLst').each(function(){
						if($jq183(this).attr('id')==IDn){
							var scTOP = $jq183(window).scrollTop();
							var IDtop =  $jq183('#'+IDn+' h3').offset().top;
							if(scTOP==IDtop){
							}else{
								//alert(scTOP+' / '+IDtop+' / '+IDn);
								$jq183(window).scrollTop(IDtop,0);
							}
						}else{
						}
					});
				}
			}
			
			//cookie
			var crn;
			var crnBtn;
			crn = getCookie('liSpace_seach');
			crnBtn = getCookie('liSpace_seachB');
			
			if(crn!==''){
				$jq183('.lxl-serchOn').removeClass('lxl-serchOn');
				$jq183('#'+ crn).addClass('lxl-serchOn');
			}else{
			}
			if(crn=='image'){
				if(crnBtn!==''){
					$jq183('.lxl-inSeachImList ul.js-seachImgAdd',$jq183('#'+ crn)).removeClass('js-seachImgAdd');
					$jq183('.lxl-btnLinks',$jq183('#'+ crn)).addClass('l-btnHide');
					$jq183('.lxl-btnLinks',$jq183('#'+ crn)).hide();
				}else{
				}
			
			}	
			
			
			////// default set
			//in-site-linkset menu open
			var uu = location.href;
			var BoxID = '';
			BoxID = uu.substring(uu.lastIndexOf('#'), uu.length);
			BoxID = BoxID.replace('#','');
			if(BoxID==uu){BoxID = '';}
			$u = $jq183('.lxl-seachLst');
			$u.each(function(){
				if($jq183(this).attr('id') == BoxID)	{
					$jq183('.lxl-serchOn').removeClass('lxl-serchOn');
					$jq183(this).addClass('lxl-serchOn');
				}else{
				}
			});		
			
			//default set start
			if ($jq183('body').hasClass('SP')){
				addHight($jq183(".lxl-inSeachImList ul li"));
				lyHight($jq183('.lxl-inSeachLayout .lxl-col03-G03 .lxl-inCol'));
				$jq183(window).on('orientationchange', function(e) {
					addHight($jq183(".lxl-inSeachImList ul li"));
					lyHight($jq183('.lxl-inSeachLayout .lxl-col03-G03 .lxl-inCol'));
				});
				menuHide();
				pageLink(BoxID);
			}else{
				var allImage = $jq183(".lxl-inSeachCateList .l-muOn .lxl-inCateList img");
				var allImageCount = allImage.length;
				var completeImageCount = 0;
				for(var i = 0; i < allImageCount; i++){
					$jq183(allImage[i]).bind("load", function(){
					  completeImageCount ++;
					  if (allImageCount == completeImageCount){
						  cateHi($jq183('.lxl-inSeachCateList .l-muOn .l-menu'));
					  }
					});
				}
				cateHi($jq183('.lxl-inSeachCateList .l-muOn .l-menu'));
				menuHide();
				pageLink(BoxID);
			}
						
		//event h3
			$jq183('.lxl-seachLst h3').click(function(){
				var uu2 = location.href;
				var BoxID2 = '';
				BoxID2 = uu2.substring(uu2.lastIndexOf('#'), uu2.length);
				if(BoxID2==uu2){BoxID2 = '';}
				if(BoxID2!==''){
					var catName = location.pathname.split( '/' );
					
					window.history.pushState(null, null,'/'+catName[1]+'/'+catName[2]+'/');
					//alert(BoxID2 + ','+ catName[2]);
				}
				var liseach_crn = $jq183(this).parent().attr('id');
				window.onload = setCookie('liSpace_seach',liseach_crn,7);
				if(liseach_crn=='image'){
					var liSpace_seachBtn = $jq183('.lxl-inSeachImList .lxl-btnLinks').hasClass('l-btnHide');
					window.onload = setCookie('liSpace_seachB',liSpace_seachBtn,7);
				}
			});
		//event images
			$jq183('.lxl-inSeachImList .lxl-btnLinks').click(function(){
				$jq183('.lxl-inSeachImList ul.js-seachImgAdd').removeClass('js-seachImgAdd');
				$jq183(this).parent().addClass('l-muOn');
				$jq183(this).addClass('l-btnHide');
				$jq183(this).hide();
			});
		
		//event layout
			$jq183('#layout').click(function(){
				lyHight($jq183('.lxl-inSeachLayout .lxl-col03-G03 .lxl-inCol'));
			});
		
		//evnet seach menu
			$jq183('.lxl-seach h3').click(function(){
				var $box = $jq183(this).parent();
				if($box.hasClass('lxl-serchOn')){
					$jq183(this).next().slideUp('slow');
					$box.removeClass('lxl-serchOn');
				}else{
					$jq183(this).next().slideDown('slow');
					$box.addClass('lxl-serchOn');
					if(!$jq183('.lxl-inSeachImList ul').hasClass('lxl-seachLstCol03')){
						if($jq183(this).parent().attr('id')=='image'){
							addHight($jq183(".lxl-inSeachImList ul li"));
						}
					}
				}
			});

			
		//event catelist menu
			if ($jq183('body').hasClass('SP')){
				$jq183('.lxl-inSeachCateList span.l-menu').click(function(){
					var $box = $jq183(this).parent();
					if($box.hasClass('l-muOn')){
						$jq183(this).next().slideUp('slow');
						$box.removeClass('l-muOn');
					}else{
						$jq183(this).next().slideDown('slow');
						$box.addClass('l-muOn');
					}
				});	
			}else{
				$jq183('#category').click(function(){cateHi($jq183('.lxl-inSeachCateList .l-muOn .l-menu'))});
				//hover
				$jq183('.lxl-inSeachCateList span.l-menu').hover(function(){
					$jq183('.l-muOn',$jq183(this).parents('ul')).removeClass('l-muOn');
					$jq183(this).parent('li').addClass('l-muOn');
					cateHi($jq183(this));
				});
			}
		}
		//lineup items menu
		if($jq183('body', parent.document).hasClass('SP')){
			$jq183(".sCateLst li .l-menu").click(function(){
				var $box = $jq183(this).parent();
				if($box.hasClass('l-muOn')){
					$jq183(this).next().slideUp('slow');
					$box.removeClass('l-muOn');
				}else{
					$jq183(".sCateLst li.l-muOn ul").slideUp('slow');
					$jq183(".sCateLst li.l-muOn").removeClass('l-muOn');
					$jq183(this).next().slideDown('slow');
					$box.addClass('l-muOn');
				}
			});
		}
		
		if($jq183('.lxl-seach .section div').hasClass('lxl-seachSortOut')){
			//lineup seach Box
			var $sinput = $jq183('.lxl-seachSortOut input');
			var $sAreaLi = $jq183('.lxl-sh-SortArea .lxl-seachHeadThmu li');
			var $sAreaShow = '';


			// ----- function
			//showlist
			var checkShShowList = function(obj){
				if(obj.prop('checked')){
					var num =obj.attr('for');
					$sAreaShow += '.'+num;
				}else{
					var num =obj.attr('for');
					$jq183('.'+num).addClass('showL');
				}
			}
			
			//show animation
			var showShList = function(obj){
				obj.each(function(i){
					$jq183(this).fadeIn(600);
					$jq183(this).removeClass('l-listClear');
					if((i % 3) == 0){
						$jq183(this).addClass('l-listClear');
					}
				});	
			}
			
			// ----- default
			//checked list
			$sAreaLi.removeClass('checked');
			$sAreaLi.removeClass('showL');
			
			$sinput.each(function(){
				checkShShowList($jq183(this))
			});
			$jq183($sAreaShow).addClass('checked');
			$sAreaLi.hide();
			if($sinput.hasClass('chechedImg')){
				showShList($jq183('.checked'));
			}else{
				showShList($sAreaLi);
			}
			
			// ----- event
			$jq183('.lxl-seachSortOut label').mouseup(function(){
				$sBox = $jq183(this).parents('div.lxl-seachSortOut');
				$sArea = $sBox.next();
				$sinput =$jq183(this).parents('ul').children('li').children('label');
				$sAreaLi = $sArea.children('div').children('ul').children('li');
				
				//reset
				$sAreaLi.removeClass('checked');
				$sAreaLi.removeClass('showL');
				$jq183('.lxl-SortAreaNoItems').removeClass('l-Scmt');
				$sAreaShow = '';
				
				//input area
				if($jq183(this).prop('checked')){
					$jq183(this).prop('checked',false);
					$jq183(this).removeClass('chechedImg');
				}else{
					$jq183(this).prop('checked',true);
					$jq183(this).addClass('chechedImg');
				}
				
				//checked list
				$sinput.each(function(){
					checkShShowList($jq183(this))
				});
				$jq183($sAreaShow).addClass('checked');	
				
				//showList
				$sAreaLi.hide();
				if($sinput.hasClass('chechedImg')){
					showShList($jq183('.checked'));
					if($jq183('.checked').length == 0){
						$jq183('.lxl-SortAreaNoItems').addClass('l-Scmt');
					}
				}else{
					showShList($sAreaLi);
				}
			});	
		}

		if($jq183('#lxl-contents > div').hasClass('lxl-itm-index-Wrapper')){
			$jq183(".lxl-itm-index-Wrapper").prevAll(".lxl-item-ttl").css('display','none');
			$jq183(".lxl-itm-index-Wrapper").prevAll(".lxl-contents-inner").css('marginBottom',0 +'px');
			$jq183(".lxl-itm-index-Wrapper").nextAll(".lxl-contents-innerBg").addClass("lxl-itm-contents-fInnerBg");
			$jq183(window).on('load resize', function(){
				var w = $jq183(window).width();
				var x = 767;
				if (w <= x) {
					$jq183(".lxl-itm-index-Wrapper #lxl-contents-menu").each(function(i) {
							if($jq183(this).children('#lxl-contents-menu-r').length){
								var ttl_pr = $jq183(this).find('.lxl-itm-btn-menu').innerWidth();
								$jq183(this).css('padding-right',ttl_pr+35+'px');
							}else{
								if($jq183(this).parent().hasClass('lxl-itm-contents-title-logo-pb-wrap')){
									$jq183(this).prev('.lxl-itm-contents-title-logo-pb').css({paddingRight:''});
								}
							}
					});
					$jq183(".lxl-itm-index-Wrapper").prev(".lxl-contents-inner").css('display','none');
				}else{
					$jq183(".lxl-itm-index-Wrapper #lxl-contents-menu").each(function(i) {
							if($jq183(this).children('#lxl-contents-menu-r').length){
								var ttl_pr = $jq183(this).find('.lxl-itm-btn-menu').innerWidth();
								if($jq183(this).parent().hasClass('lxl-itm-contents-title-logo-pb-wrap')){
									ttl_pr = ttl_pr + $jq183(this).prev('.lxl-itm-contents-title-logo-pb').children('img').width()+30;
								}
								$jq183(this).css('padding-right',ttl_pr+15+'px');
								//30th
								$jq183(this).find(".lxl-itm-contents-title-logo-30th").parent(".lxl-itm-contents-title-logo-interior30th").css('padding-right',ttl_pr+15+97+'px');
							}else{
								if($jq183(this).parent().hasClass('lxl-itm-contents-title-logo-pb-wrap')){
									$jq183(this).prev('.lxl-itm-contents-title-logo-pb').css({right:'0',paddingRight:'0',borderRight:'none'});
									var ttl_pr = $jq183(this).prev('.lxl-itm-contents-title-logo-pb').children('img').width()+15;
									$jq183(this).css('padding-right',ttl_pr+'px');
								}else{
									$jq183(this).css('padding-right','');
								}
							}
					});
					$jq183(".lxl-itm-index-Wrapper").prev(".lxl-contents-inner").css('display','block');
				}
			});
			$jq183('.lxl-itm-sc-functio-list ul').slick({
				autoplay:true,
				autoplaySpeed:3000,
				edgeFriction:015,
				infinite:true,
				dots:false,
				arrows:true,
				slidesToShow: 3,
				centerMode:true,
				centerPadding:'0',
				responsive: [{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						centerPadding:'20px'
					}
				}]
			});
			$jq183('.lxl-itm-sc-thum-list ul').slick({
				autoplay:true,
				autoplaySpeed:3000,
				edgeFriction:015,
				infinite:true,
				dots:false,
				arrows:true,
				slidesToShow: 1,
				centerMode:true,
				centerPadding:'33%'
			});
			$jq183('.lxl-itm-sc-thum-list02 ul').slick({
				autoplay:true,
				autoplaySpeed:3000,
				edgeFriction:015,
				infinite:true,
				dots:false,
				arrows:true,
				slidesToShow: 2,
				centerMode:true,
				centerPadding:'15%'
			});
			$jq183('.lxl-itm-sc-thum-list02r ul').slick({
				autoplay:true,
				autoplaySpeed:2600,
				speed:200,
				edgeFriction:015,
				infinite:true,
				dots:false,
				arrows:true,
				slidesToShow: 3,
				centerMode:true,
				centerPadding:'15%'
			});
			$jq183('.lxl-itm-sc-img-list01 ul').slick({
				autoplay:false,
				dots:true,
				arrows:true,
				slidesToShow: 1,
				centerMode:true,
				centerPadding:'0'
			});
			$jq183('.lxl-itm-sc-img-list01m ul').slick({
				autoplay:false,
				dots:true,
				arrows:true,
				slidesToShow: 1,
				centerMode:true,
				centerPadding:'0'
			});
			$jq183('.lxl-itm-sc-img-list02r ul').slick({
				autoplay:false,
				dots:true,
				arrows:true,
				slidesToShow: 2,
				centerMode:true,
				centerPadding:'0'
			});
			$jq183('.lxl-itm-sc-thum-listr ul').slick({
				autoplay:true,
				autoplaySpeed:3000,
				edgeFriction:015,
				infinite:true,
				dots:false,
				arrows:true,
				slidesToShow: 2,
				centerMode:true,
				centerPadding:'15%'
			});
		}else{
			if($jq183('#lxl-contents-title').hasClass('lxl-itm-contents-title-logo-pb-wrap')){
				$jq183(window).on('load resize', function(){
					var w = $jq183(window).width();
					var x = 767;
					if (w <= x) {
						$jq183(".lxl-itm-contents-title-logo-pb-wrap #lxl-contents-menu").each(function() {
								var ttl_pr = $jq183(this).find('.lxl-itm-btn-menu').innerWidth();
								$jq183(this).css('padding-right',ttl_pr+35+'px');
						});
					}else{
						$jq183(".lxl-itm-contents-title-logo-pb-wrap #lxl-contents-menu").each(function() {
								var ttl_pr = $jq183(this).find('.lxl-itm-btn-menu').innerWidth() + $jq183(this).prev('.lxl-itm-contents-title-logo-pb').children('img').width()+30;
								$jq183(this).css('padding-right',ttl_pr+15+'px');
						});
					}
				});
			}
		}
		
		if($jq183('body').hasClass('SP')){
			if($jq183('.lxl-itm-other-col2').hasClass('lxl-itm-slick')){
				$jq183('.lxl-itm-other-col2 ul').slick({
					autoplay:false,
					dots:true,
					arrows:false,
					slidesToShow: 1,
					centerMode:true,
					centerPadding:'0'
				});
			}
		}
		$jq183(window).on('load resize', function(){
			$jq183(".lxl-itm-cb").each(function() {
					var h = $jq183(this).find('.lxl-itm-cb-img').height();
					$jq183(this).css('min-height',h);
			});
			$jq183(".lxl-itm-sp-g2").each(function() {
					var h = $jq183(this).find('.lxl-itm-cb-img').height();
					$jq183(this).css('min-height',h);
			});
			$jq183(".lxl-itm-sp-g2l").each(function() {
					var h = $jq183(this).find('.lxl-itm-cb-img').height();
					$jq183(this).css('min-height',h);
			});
			$jq183(".lxl-itm-ig-stset").each(function() {
					var h = $jq183(this).find('.lxl-itm-cb-img').height();
					$jq183(this).css('min-height',h);
			});
			$jq183(".lxl-itm-ig-stsetl").each(function() {
					var h = $jq183(this).find('.lxl-itm-cb-img').height();
					$jq183(this).css('min-height',h);
			});
			$jq183(".lxl-itm-sc-img-list02").each(function() {
					var h = $jq183('.lxl-itm-sc-img-list02-img').height();
					$jq183(this).css('min-height',h);
			});
		});
		
		// lxl-itm-more
		$jq183(".lxl-itm-more").each(function() {
			if(!$jq183(this).children('.lxl-itm-more-btn').length){
				$jq183(this).children('.lxl-itm-gray-inner').css('display','inline-block');
			}
		});
		$jq183(".lxl-itm-more-btn span").click(function(){
			$jq183(this).css('display','none');
			$jq183(this).parent().next('.lxl-itm-gray-inner').slideDown();
			$jq183(this).parent().parent().find('.lxl-itm-more-btn-close span').css('display','inline-block');
		});
		$jq183(".lxl-itm-more-btn-close span").click(function(){
			$jq183(this).css('display','none');
			$jq183(this).parent(".lxl-itm-more-btn-close").prev('.lxl-itm-gray-inner').slideUp();
			$jq183(this).parent().parent().find('.lxl-itm-more-btn span').css('display','inline-block');
		});
		
		// lxl-itm-c-menu
		$jq183(window).on('load resize', function(){
			$jq183('#lxl-contents .lxl-itm-c-menu').each(function() {
				var w = $jq183(window).width();
				var x = 767;
				if(w <= x){
					if(!$jq183(this).children('.lxl-itm-c-menu-title').next().hasClass('lxl-itm-c-menu-wrap')){
						var ttl = $jq183(this).children('.lxl-itm-c-menu-title').text();
						var $div = $jq183('<div class="lxl-itm-c-menu-wrap">');
						$div = $jq183(this).children('*:not(.lxl-itm-c-menu-title)').wrapAll($div).parent();
						$jq183('<p class="lxl-itm-c-menu-title-sp">'+ ttl +'</p>').prependTo($div);
						$jq183('<div class="lxl-itm-c-menu-close-btn"></div>').appendTo($div);
						$div.after('<div class="lxl-itm-btn-menu lxl-itm-c-menu-btn"><a href="#" class="lxl-noScrl">コンテンツメニュー</a></div>');
						$div.css('width',w-10+'px');
					}else{
						var $wrap = $jq183('.lxl-itm-c-menu-wrap');
						$wrap.css('width',w-10+'px');
					}
				}else{
					if($jq183(this).children('.lxl-itm-c-menu-title').next().hasClass('lxl-itm-c-menu-wrap')){
						$jq183(this).children('.lxl-itm-c-menu-btn').remove();
						$jq183(this).find('.lxl-itm-c-menu-title-sp').remove();
						$jq183(this).find('.lxl-itm-c-menu-close-btn').remove();
						$jq183(this).find('.lxl-itm-c-menu-business').unwrap();
					}
				}
			});
		});
		
		// lxl-itm-c-menu-current
		$jq183(window).on('load', function(){
			$jq183('.lxl-itm-c-manu-local li a').each(function(){
				var url = location.pathname + location.search;
				var pathname = location.pathname;
				if(url.match("/presea/specification/")){
					pathname = '/lineup/building_apartment_store/presea/specification/';
				}
				if($jq183(this).attr('href') == pathname || $jq183(this).attr('href')+'default.htm' == pathname){
					$jq183(this).parent('li').addClass('current');
				}
			});
		});
		
		// lxl-itm-c-menu-btn
		$jq183(document).on("click", ".lxl-itm-c-menu-btn a", function(){
			if($jq183(this).parent('.lxl-itm-c-menu-btn').prev('.lxl-itm-c-menu-wrap').css('display') == 'none'){
				$jq183(this).parent('.lxl-itm-c-menu-btn').prev('.lxl-itm-c-menu-wrap').fadeIn(250);
			}
			return false;
		});
		
		// lxl-itm-c-menu-close-btn
		$jq183(document).on("click", ".lxl-itm-c-menu-close-btn", function(){
			$jq183(this).parent('.lxl-itm-c-menu-wrap').fadeOut(250);
		});
		
		// lxl-itm-c-menu-tab
		$jq183(document).on("click", ".lxl-itm-c-menu-tab p", function(){
			if($jq183(this).next().css('display') == 'none'){
				$jq183(this).addClass('open');
				$jq183(this).next().slideDown('slow');
			}else{
				$jq183(this).removeClass('open');
				$jq183(this).next().slideUp('slow');
			}
		});
		
		// lxl-itm-c-manu-local
		$jq183(document).on("click", ".lxl-itm-c-manu-local p", function(){
			if($jq183(this).next().css('display') == 'none'){
				$jq183(this).addClass('open');
				$jq183(this).next().slideDown('slow');
			}else{
				$jq183(this).removeClass('open');
				$jq183(this).next().slideUp('slow');
			}
		});
		
		// lineup-business
		$jq183(window).on('load', function(){
			$jq183(".lineup-business").each(function() {
				$jq183(".lxl-itm-gray-inner").each(function() {
					if(!$jq183(this).hasClass('lxl-itm-cb-ot-wrapper')){
						if(!$jq183(this).hasClass('lxl-itm-gray-none')){
							$jq183(this).addClass('lxl-itm-gray-none');
						}
					}
				});
			});
		});
		
		
		
		// /reform/
		$jq183(window).on('load resize', function(){
			if($jq183('body').hasClass('reform-top')){
				$jq183(".lxl-reform-linkSetInCol2 .lxl-itm-linkSet-cb-img").each(function() {
						var h = $jq183(this).height();
						$jq183(this).parents("li").css('min-height',h);
				});
				
				//lxl-itemRelatedLk
				if( $jq183('#lxl-itemRelatedLk div').hasClass('lxl-underRelatedLinks')){
					var start =0;
					var l =$jq183('.lxl-underRelatedLinks ul.l-slide li');
					var m = $jq183('#lxl-itemRelatedLk').width();
					if($jq183('body').width() <= 767){
						m = m/2;
						$back = $jq183('.l-ONBack');
						$next = $jq183('.l-ONNext');
						$slide = $jq183('.lxl-underRelatedLinks ul.l-slide');
						$wrp = $jq183('.lxl-underRelatedLinks');
						$back.hide();
						
						$slide.width(m*l.length);
						l.width(m);
						var lH = m*1.5;
						$slide.height(lH);
						$wrp.height(lH);
						
						// smartphone slide
						$next.bind('click',function(event){
							var _this = $slide.position().left;
							var _max = -$wrp.width();
							var _Slidmax = -$slide.width();
							var _move = -m * parseInt(_max/m);
							var _min = _Slidmax+_move;
							_min = _Slidmax+_min;
							if(_this > _Slidmax+(_move)){
								$back.show();
								$slide.animate({
								left: _this-_move +'px'
								}, 500, 'linear');
									if(_this <= _Slidmax+(_move*2)){
										$next.hide();
									}
									event.preventDefault();
								}else{
								$next.hide();
							}
						});
						$back.bind('click',function(event){
							var _this = $slide.position().left;
							var _max = -$wrp.width();
							var _Slidmax = -$slide.width();
							var _move = -m * parseInt(_max/m);
							if(_this <  start){
							$next.show();
							$slide.animate({
								left: _this+_move +'px'
								}, 500, 'linear');
							if(_this > (-_move-1)){
									$back.hide();
							}
								event.preventDefault();
							}else{
								$back.hide();
							}
						});
						//for smartphone touch
						var tcStartX;
						var tcMoveX;
						$slide.bind('touchstart', function() {
							tcStartX = event.touches[0].pageX;
						});	
						$slide.bind('touchmove', function() {
							tcMoveX = event.changedTouches[0].pageX;
							
						});
						$slide.bind('touchend', function() {
							if (tcStartX > (tcMoveX + 50)) {//Next
								var _this = $slide.position().left;
								var _max = -$wrp.width();
								var _Slidmax = -$slide.width();
								var _move = -m * parseInt(_max/m);
								var _min = _Slidmax+_move;
								_min = _Slidmax+_min;
								if(_this > _Slidmax+(_move)){
									$back.show();
									$slide.animate({
									left: _this-_move +'px'
									}, 500, 'linear');
										if(_this <= _Slidmax+(_move*2)){
											$next.hide();
										}
										event.preventDefault();
									}else{
									$next.hide();
								}
							}
							if ((tcStartX + 50) < tcMoveX) {//back
								var _this = $slide.position().left;
								var _max = -$wrp.width();
								var _Slidmax = -$slide.width();
								var _move = -m * parseInt(_max/m);
								if(_this <  start){
								$next.show();
								$slide.animate({
									left: _this+_move +'px'
									}, 500, 'linear');
								if(_this > (-_move-1)){
										$back.hide();
								}
									event.preventDefault();
								}else{
									$back.hide();
								}
							}
						});
					}
				}
			}
		});
		if($jq183('body').hasClass('reform-top')){
			if($jq183('.lxl-caseLists').hasClass('lxl-itm-sc-caseLists')){
				if($jq183('.lxl-itm-sc-caseLists .lxl-linkpanelCol3').hasClass('lxl-itm-slick')){
					if ($jq183('body').hasClass('SP')){
						$jq183('.lxl-itm-sc-caseLists .lxl-linkpanelCol3 ul').slick({
						autoplay:false,
						dots:true,
						arrows:true,
						slidesToShow: 2,
						centerMode:false,
						centerPadding:'0'
						});
					}else{
						$jq183('.lxl-itm-sc-caseLists .lxl-linkpanelCol3 ul').each(function(index) {
							var l = $jq183(this).children('li').length;
							if(l <= 3){
								$jq183(this).parents('.lxl-caseLists').css('margin-right','-1px');
							}
						});
						$jq183('.lxl-itm-sc-caseLists .lxl-linkpanelCol3 ul').slick({
						autoplay:false,
						dots:true,
						arrows:true,
						slidesToShow: 3,
						centerMode:false,
						centerPadding:'0'
						});
					}
				}
			}
		}
		if($jq183('.lxl-rfmMainWrap .lxl-rfmImg li').hasClass('lxl-mn-on')){
			// fade image
			if($jq183('div.l-inRfKBimg').hasClass('js-inRfOn')){
			var dn = $jq183('.l-inRfKBimg').length;
			setInterval(function(){
				var $images =$jq183('.js-inRfOn');
				var thisNumm = $jq183('.js-inRfOn').index();
				if(thisNumm == dn-1){
						//$jq183('div.l-inRfKBimg').eq(0).css('display','block');
						$images.prev().css('display','block');
						$images.animate(
							{ opacity: "toggle"},
							{
								duration: "slow", easing: "linear",
								complete: function(){
									$images.prev().addClass('js-inRfOn');
									$images.removeClass('js-inRfOn');
								 }
							 }
						  );					
					
					}else{
						$images.next().css('display','block');
						$images.animate(
							{ opacity: "toggle"},
							{
								duration: "slow", easing: "linear",
								complete: function(){
									$images.next().addClass('js-inRfOn');
									$images.removeClass('js-inRfOn');
								 }
							 }
						  );
					}
				},6000);
			}else{}
			
			
			// slide image
			if($jq183('div.lxl-rfmMainWrap div').hasClass('lxl-rfmMainMenu01')){
			var $AllList =[$jq183('.lxl-rfmMainMenu01'),$jq183('.lxl-rfmMainMenu02'),$jq183('.lxl-rfmMainMenu03')];
			var slActBaseSet = function(){
				var $balWidthS = $jq183('.lxl-rfm_Ball').width();
				var $balHeightS = $jq183('.lxl-rfm_Ball').height();
				if($jq183('body').hasClass('SP')){
					var $imgHeightS = $jq183('ul.lxl-rfmImg li').width();
				}else{
					var $imgHeightS = $jq183('ul.lxl-rfmImg').height();
				}
				$jq183('.lxl-rfmMainWrap .lxl-rfmImg li').hide();
				$jq183('.lxl-rfmMainWrap .lxl-rfmImg li.lxl-mn-on').show();
				$jq183('.lxl-rfm_Ball').each(function(){
					if($jq183(this).hasClass('tl')){//top center
						$jq183(this).css('bottom',$imgHeightS +'px');
						$jq183(this).css('margin-right',-$balWidthS/2+'px');
						$jq183(this).css('margin-bottom',-$balHeightS+'px');
					}else if($jq183(this).hasClass('ml')){//bottom
						$jq183(this).css('margin-bottom','-10px');
						$jq183(this).css('margin-right',-$balWidthS-5+'px');
					}else{//top left
						$jq183(this).css('margin-bottom',-$balHeightS+'px');
						$jq183(this).css('margin-right',-$balWidthS-5+'px');
						$jq183(this).css('bottom',$imgHeightS+20 +'px');
					}
				});
			}
			slActBaseSet();
			
			var slAct = function($this,$next,$li){
				$this.hide();
				
				var $balWidth = $jq183(".lxl-rfm_Ball",$next).width();
				var $balHeight = $jq183(".lxl-rfm_Ball",$next).height();
				
				var $balBtm = $jq183(".lxl-rfm_Ball",$next).css('bottom');
				var $balBtmNum = Math.floor($balBtm.replace('px','')-20)+'px';
				var $balBtmNum2 = Math.floor($balBtm.replace('px','')-10)+'px';
				
				$jq183(".lxl-rfm_Ball",$next).hide();
				$jq183(".lxl-rfm_Ball img",$next).hide();
				
				$next.animate(
					{opacity: "toggle"},
					{duration: "slow", easing: "linear",
						complete: function(){
							$jq183(".lxl-rfm_Ball",$next).animate(
								{height: $balHeight,width: $balWidth,bottom:$balBtm,opacity: "toggle"},
								{duration: 200, easing: "linear",
									complete: function(){
										$jq183(".lxl-rfm_Ball",$next).animate(
											{height:$balHeight-50,width:$balWidth-50,bottom:$balBtmNum,opacity: "toggle"},
											{duration: 200, easing: "linear",
												complete: function(){
													$jq183(".lxl-rfm_Ball img",$next).animate(
														{opacity: "toggle"},
														{duration: "slow", easing: "linear"}
													);
													//second
													$jq183(".lxl-rfm_Ball",$next).animate(
														{height: $balHeight,width: $balWidth,bottom:$balBtm,opacity: "toggle"},
														{duration: 200, easing: "linear",
															complete: function(){
																$jq183(".lxl-rfm_Ball",$next).animate(
																	{bottom:$balBtmNum},
																	{duration: 200, easing: "linear",
																		complete: function(){
																			
																			$jq183(".lxl-rfm_Ball",$next).animate(
																				{bottom:$balBtm},
																				{duration: 200, easing: "linear",
																					complete: function(){
																						$jq183(".lxl-rfm_Ball",$next).animate(
																							{bottom:$balBtmNum2},
																							{duration: 300, easing: "linear",
																								complete: function(){
																									$jq183(".lxl-rfm_Ball",$next).animate(
																										{bottom:$balBtm},
																										{duration: 300, easing: "linear"}
																										
																									);
																								}
																							}
																							
																						);
																					}
																				}
																				
																			);
																		}
																	}
																	
																);
															}
														}
													);
												}
											}
										);
									}
								}
								
							);
						}
					}
				);
				$this.removeClass('lxl-mn-on');
				$next.addClass('lxl-mn-on');
			}
			
			$jq183(window).on('orientationchange',function(){
				slActBaseSet();
				for(i=0;i< $AllList.length;i++){
						var $this = $jq183('.lxl-rfmImg li.lxl-mn-on',$AllList[i]);
						var $li = $jq183('.lxl-rfmImg li',$AllList[i]);
						var n = $jq183('.lxl-rfmImg li.lxl-mn-on',$AllList[i]).index();
						if(n == $li.length-1){
							slAct($this,$li.eq(0),$li);
						}else{
							slAct($this,$li.eq(n+1),$li);
						}
					}
			});
			
			setInterval(function(){
				for(i=0;i< $AllList.length;i++){
						var $this = $jq183('.lxl-rfmImg li.lxl-mn-on',$AllList[i]);
						var $li = $jq183('.lxl-rfmImg li',$AllList[i]);
						var n = $jq183('.lxl-rfmImg li.lxl-mn-on',$AllList[i]).index();
						if(n == $li.length-1){
							slAct($this,$li.eq(0),$li);
						}else{
							slAct($this,$li.eq(n+1),$li);
						}
					}
				},7000);
			}else{}
		}else{
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
				if(!$jq183('body').hasClass('SP') && $jq183('.lxl-itm-c-menu').length){
					if($jq183('body').hasClass('lineup-business')){
						position = position-90;
					}else{
						if(target.hasClass('lxl-itm-tl-h2')){
							position = position-60;
						}else{
							position = position-90;
						}
					}
				}

		$jq183("html, body").animate({scrollTop:position}, speed, "easeOutExpo");

		return false;
	});
});

////////////////////////////////////////////////////////
// ページ遷移スムーススクロール
////////////////////////////////////////////////////////
$jq183(window).on('load', function(){
	if(!$jq183('body').hasClass('SP') && $jq183('.lxl-itm-c-menu').length){
		var url = location.href;
		if(url.match('#')){
			var hash = location.hash;
			speed = 500;
			setTimeout(function(){
				var position = $jq183(hash).offset().top-90;
				$jq183("html, body").animate({scrollTop:position}, speed, "easeOutExpo");
			},1)
		}
	}
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
	
	//hover
	$jq183('.lxl-mdd-menu').append('<a href="javascript:void(0);" class="flatMenuClose"><img src="/common/pic/icon_close_2.png" width="23" height="23" alt="閉じる"></a>');
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
		
		if ($jq183('body').hasClass('SP')){
		}else{
			if($window.scrollTop() >= 250){
				$jq183('.lxl-float-menu').slideDown();
			}else{
				$jq183('.lxl-float-menu').slideUp();
			}
		}
	});

/*if ($jq183('body').hasClass('SP')){
}else{
	if($jq183('#lxl-contents-menu .btn-menu').size() == 0)
	{
		return false;
	}

	$jq183('#lxl-contents-menu').show();
	$jq183('#lxl-contents-title').clone().appendTo('body').addClass('lxl-float-menu');
	

	$jq183('#lxl-contents-menu').hover(function(){openMenu($jq183(this).children('.lxl-mdd-menu'),1)},function(){closeMenu($jq183(this).children('.lxl-mdd-menu'));});
	$jq183('.lxl-float-menu').find('#lxl-contents-menu').hover(function(){openMenu($jq183(this).children('.lxl-mdd-menu'),2)},function(){closeMenu($jq183(this).children('.lxl-mdd-menu'));});

	height = $jq183('#lxl-contents-menu').children('.lxl-mdd-menu').height();

	function openMenu(elem,type)
	{
		var heightData = 0;
		if(elem.css("display") == "none") elem.height(0);
		elem.stop(true, true).show().animate({height: height+'px'}, "");
	}
	function closeMenu(elem)
	{
		closeFlg = 1;
		elem.stop(true, true).slideUp("fast",function(){ closeFlg = 0 });
	}

	elem1 = $jq183('.lxl-float-menu').find('.lxl-title-set');
	elem2 = $jq183('.lxl-float-menu').find('#lxl-contents-menu');

	$jq183(".lxl-float-menu .lxl-title-set,.lxl-float-menu #lxl-contents-menu").wrapAll("<div class=\"lxl-float-menu-outer clearfix\"></div>");
	$jq183("#lxl-breadcrumb-list .lxl-topicpath").clone().appendTo(".lxl-float-menu-outer");
}*/
	//hover
	if($jq183('#lxl-contents-title .btn-menu').size() == 0)
	{
		return false;
	}

	$jq183('#lxl-contents-menu').show();
	$jq183('#lxl-contents-title').clone().appendTo('body').addClass('lxl-float-menu');
	$jq183('#lxl-breadcrumb-list .lxl-topicpath').clone().prependTo('.lxl-float-menu');

	$jq183('#lxl-contents-menu').hover(function(){openMenu($jq183(this).children('.lxl-mdd-menu'),1)},function(){closeMenu($jq183(this).children('.lxl-mdd-menu'));});
	$jq183('.lxl-float-menu').find('#lxl-contents-menu').hover(function(){openMenu($jq183(this).children('.lxl-mdd-menu'),2)},function(){closeMenu($jq183(this).children('.lxl-mdd-menu'));});
	


	height = $jq183('#lxl-contents-menu').children('.lxl-mdd-menu').height();

	function openMenu(elem,type)
	{
		var heightData = 0;
		if(elem.css("display") == "none") elem.height(0);
			if ($jq183('body').hasClass('SP')){
			elem.slideDown();
			}else{
			elem.stop(true, true).show().animate({height: height+'px'}, "");
			}
		
	}
	function closeMenu(elem)
	{
		closeFlg = 1;
		elem.stop(true, true).slideUp("fast",function(){ closeFlg = 0 });
	}

	elem1 = $jq183('.lxl-float-menu').find('.lxl-float-menu-follow');
	elem2 = $jq183('.lxl-float-menu').find('#lxl-contents-menu');
	$jq183('.lxl-float-menu > .lxl-topicpath,.lxl-float-menu > h1').wrapAll('<div class="lxl-float-menu-follow"></div>');
	$jq183(".lxl-float-menu .lxl-float-menu-follow,.lxl-float-menu #lxl-contents-menu").wrapAll("<div class=\"lxl-float-menu-outer clearfix\"></div>");


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
/*$jq183(function(){


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

		return false;

	});

});
*/


////////////////////////////////////////////////////////
// マウスオーバーでキャプションの表示
////////////////////////////////////////////////////////
/*$jq183(function(){
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
*/
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
			var $showAc = $jq183('.js-ShowLayer a').attr('href');
			$showLI.remove();
			//$jq183('.js-ShowLayer').remove();
			$showImg = '<li><a href="'+ $showAc +'"><img src="'+ $showImg +'"></a></li>';
			$sliderLI.prepend($showImg);
			
		}
		// main script start
		var setName = getCookie('view');
		if(setName !== 'checked'){
			replacement();
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
// スライドショー1907
// パターン分け対応版
//
//---------------------------------------------------------
$jq183(function(){
	try{
		var $multiSlider_speed = 1000;
		var $slider = $jq183('.lxl-multiSlider .inslider');
		$jq183('.lxl-multiSlider .lxl-multiSlider_bnr:not(:first-child)').css({'display':'none'});
		$slider.bxSlider({
			mode: 'fade',
			speed:$multiSlider_speed,
			pause:4000,
			pager:true,
			controls: true,
			onSliderLoad: function(index){
				$slider.css({'position':'relative'});
				$jq183('.lxl-multiSlider .lxl-multiSlider_bnr').css({'visibility':'visible'});
				$jq183('.lxl-multiSlider .lxl-multiSlider_bnr:first-child').css({'z-index':19});
			},
			onSlideBefore: function($slideElement, oldIndex, newIndex){
				$jq183('#lxl-footer-pagetop').css({'z-index':51});
			},
			onSlideAfter: function($slideElement, oldIndex, newIndex){
				$jq183('#lxl-footer-pagetop').css({'z-index':''});
				$jq183($slideElement).css({'z-index':19});
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
// スライドショーカテゴリTOP（フェードイン・フェードアウト）
//
//---------------------------------------------------------
/*$jq183(function(){
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
		return false;
	}
});*/

//---------------------------------------------------------
//
// スライドショー商品詳細（フェードイン・フェードアウト）
//
//---------------------------------------------------------
/*$jq183(function(){
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
*/
//---------------------------------------------------------
//
// PC→SP
// スマホでアクセスされた場合
//
//---------------------------------------------------------
/*
$jq183(function(){

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

		$jq183.ajax({
			url: newHref,
			cache: false,
			success: function(html){
				location.href = newHref;
			}
		});

	}
});
*/
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
	html+= '<ul class="btn-close pt0" style="position: absolute;right: 10px;top: 10px"><li><a href="javascript:void(0);"><img src="/common/pic/btn_close.gif" alt="閉じる" width="23" height="23"></a></li></ul>';
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
	}else if(document.getElementById('lxl-uditems-list')){
		var thumbCurrent2 = $jq183('#lxl-uditems-list').attr('data-list-current');
		thumbCurrent2= '.' + thumbCurrent2.replace('C-', '');
		 $jq183(thumbCurrent2).addClass('stay');//カレント用のclassを入れてください。
	}else{
	}
	

});
////////////////////////////////////////////////////////
// add js for checking lists
// add current
////////////////////////////////////////////////////////
/*$jq183(function(){
	if($jq183('a').hasClass('popup')){
		 $jq183(".popup").fancybox({
			maxWidth	: 980,
			maxHeight	: 900,
			fitToView	: false,
			width		: '960px',
			height		: '90%',
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none'
		});
	}
});
*/

////////////////////////////////////////////////////////
// OT-Items:for Another item links
////////////////////////////////////////////////////////
$jq183(function () {
	var $target = $jq183('div.lxl-itm-other-box h3');
	$target.on('click', function () {
		if ($jq183(this).hasClass('open')) {
			$jq183(this).removeClass('open');
		} else {
			$jq183(this).addClass('open');
		};
	});
});