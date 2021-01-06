/*
   Copyrights (C) 2008 David Esperalta <davidesperalta@gmail.com>

   This file is part of StyleSwichter jQuery plugin for jQuery

   StyleSwichter is free software: you can redistribute it and/or 
   modify it under the terms of the GNU General Public License as 
   published by the Free Software Foundation, either version 3 of 
   the License, or (at your option) any later version.

   StyleSwichter is distributed in the hope that it will be useful, 
   but WITHOUT ANY WARRANTY; without even the implied warranty of 
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU 
   General Public License for more details.

   You should have received a copy of the GNU General Public License
   along with StyleSwichter. If not, see <http://www.gnu.org/licenses/>.

*/

/*
   --------------------------------------
   StyleSwichter jQuery plugin for jQuery
   --------------------------------------
  
   Please, use the "example.html" and source code to more information
   about how use this plugin. Thanks very much for your interest.
   
   Plugin tested in Firefox 2, Opera 9, IExplorer 7 and Safari 3
   
   This plugin assume the existence of Cookie jQuery plugin. This not
   is an optional plugin, Cookie jQuery plugin must be require in order
   of use StyleSwichter plugin.
   
   For information and download visit my weblog:
   
   http://www.bitacora.davidesperalta.com/
     
   Thanks so much too Mike Alsup for their article jQuery plugin 
   pattern: learningjquery.com/2007/10/a-plugin-development-pattern 
    
*/

(function($){

  $.fn.StyleSwichter = function(options){
    var opts = $.extend({}, $.fn.StyleSwichter.defaults, options);
    var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
		
		var btnId = o.cookieBtnId;
		//console.log($.cookie(o.cookieBtnName));
		
    $('link').each(function(i){
														
      if(this.rel == 'stylesheet' && this.title == o.linkTitle){
        if(o.cssPath != ''){
					/* select */
					//console.log('select:'+o.cookieBtnId);
          this.href = o.cssPath;
					chengeBtn(o.cookieBtnId);

          $.cookie(o.cookieName,this.href,{		// write cookie :css
            path: o.cookiePath,
            expires: o.cookieDays,
            domain: o.cookieDomain,
            secure: o.cookieSecure
          });
					$.cookie(o.cookieBtnName,btnId,{		// write cookie :btn
            path: o.cookiePath,
            expires: o.cookieDays,
            domain: o.cookieDomain,
            secure: o.cookieSecure
          });

        }else if($.cookie(o.cookieBtnName)){
					/* loaded */
					//console.log('load:'+$.cookie(o.cookieBtnName));
          this.href = $.cookie(o.cookieName);
					$('#'+o.btnBoxId).ready(function(){
						chengeBtn($.cookie(o.cookieBtnName));
					});
        }else if(!$.cookie(o.cookieBtnName)){
					//console.log('cookie null');
					chengeBtn('null');
				}
        return true;
      }
    });
		
		function chengeBtn(id){
//			console.log('func:'+id);
			if(id == 'null'){
				$('#'+o.btnBoxId).ready(function(){
					$('#'+o.cookieBtnId).children('span')
					.addClass(o.currentClass);
					$('#'+o.cookieBtnId).siblings()
					.children('span')
					.addClass(o.uncurrentClass);
					
					$('.'+o.uncurrentClass).mouseover(function(){
						$(this).addClass('hover');
					});
					$('.'+o.uncurrentClass).mouseout(function(){
						$(this).removeClass('hover');
					});
				
				});
				
			}else {
			
				$('.'+o.btnClass).children('span')
				.removeClass(o.currentClass)
				.removeClass(o.uncurrentClass);
								
				$($('.'+o.btnClass).not('#'+id)).children('span')
				.addClass(o.uncurrentClass);

				
				$('#'+id).children('span').addClass(o.currentClass);
				

			
			}


			$('.'+o.uncurrentClass)
			.bind('mouseenter',addHover)
			.bind('mouseleave',removeHover);
			
			$('.'+o.currentClass)
			.unbind('mouseenter',addHover)
			.unbind('mouseleave',removeHover);

			
			function addHover(){
				$(this).addClass('hover');
			}
			function removeHover(){
				$(this).removeClass('hover');
			}
			
		}
		
		  
		
		
		
    return false;
  };
  

  
  
  $.fn.StyleSwichter.defaults={
		// cookie info
    cookieDays		: 365,
    cookiePath		: '/',
    cookieDomain	: '',
    cookieSecure	: false,
		// css info
    cssPath				: '',
    linkTitle			: 'styleswichter',
    cookieName		: 'selected-style',
		// button info
    cookieBtnName	: 'selected-btn',
		cookieBtnId		:	'font-medium',
		btnBoxId			:	'fontsize-switch',
		btnClass			:	'fontsize-btn',
		currentClass	:	'current-fontsize',
		uncurrentClass:	'uncurrent-fontsize'
		
		
		
		
		
  };
  
})(jQuery);


/* ---------------------------------------------------------------- 
						init
------------------------------------------------------------------- */

$.fn.StyleSwichter();	
$(function(){

	var PATH = {
		root	:	'../',
		css		:'/common/css/'
	}
	var CSS_FILES = {
		fontM	:	'medium.css',
		fontL	:	'large.css'
	}
/* btn click
--------------------------------------------- */

	$('#font-medium').bind('click',PATH.css+CSS_FILES.fontM, chengeFontSie);
	$('#font-large').bind('click',PATH.css+CSS_FILES.fontL, chengeFontSie);
	
/* func
--------------------------------------------- */	
	function chengeFontSie(pass){
		$.fn.StyleSwichter({
			cssPath: pass.data,
			cookieBtnId:$(this).attr('id')
		})
	}
	
});
