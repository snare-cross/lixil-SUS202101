/*
  
  
-------------------------------------------------------------------*/



/*-------------------------------------------------------------------

  browser detect

-------------------------------------------------------------------*/

function UserAgentDetection(){
	var ua = navigator.userAgent;
	this.ua = {};
	this.ua.isWin      = ua.match(/Win/);
	this.ua.isMac      = ua.match(/Mac/);
	this.ua.isGecko    = (ua.match(/Gecko\//) && ua.indexOf('KHTML') == -1);
	this.ua.isNetscape = (this.ua.isGecko && ua.match(/Netscape/));
	this.ua.isFirefox  = (this.ua.isGecko && ua.match(/Firefox/));
	this.ua.isSafari   = ua.match(/AppleWebKit/);
	this.ua.isOpera    = window.opera;
	this.ua.isIE       = (document.all && !this.ua.isOpera);
	this.ua.ver        = ( this.ua.isIE )?      parseFloat(ua.match( /MSIE\s+([\d\.]+)/         )[1]):
						 ( this.ua.isNetscape )? parseFloat(ua.match( /Netscape[\d]*\/([\d\.]+)/ )[1]):
						 ( this.ua.isFirefox )?  parseFloat(ua.match( /Firefox\/([\d\.]+)/       )[1]):
						 ( this.ua.isSafari )?   parseFloat(ua.match( /AppleWebKit\/([\d\.]+)/   )[1]):
						 ( this.ua.isOpera )?    parseFloat(ua.match( /Opera[\.\/\s]([\d\.]+)/   )[1]): null;
	this.ua.majorVer   = parseInt(this.ua.ver);

}
var env = new UserAgentDetection();



/*-------------------------------------------------------------------

  Array

-------------------------------------------------------------------*/

if(!Array.prototype.pop) {
	Array.prototype.pop = function() {
		if(!this.length) {
			return null;
		}
		else {
			var last = this[this.length - 1];
			--this.length;
			return last;
		}
	}
}

if(!Array.prototype.push) {
	Array.prototype.push = function() {
		for (var i = 0, n = arguments.length; i < n; i++) {
			this[this.length] = arguments[i];
		}
		return this.length;
	}
}

if(!Array.prototype.shift) {
	Array.prototype.shift = function() {
		if(!this.length) {
			return null;
		}
		else {
			this.reverse();
			var ret = this.pop();
			this.reverse();
			return ret;
		}
	}
}

if(!Array.prototype.unshift) {
	Array.prototype.unshift = function() {
		this.reverse();
		for (var i = arguments.length - 1; i >= 0; i--) {
			this.push(arguments[i]);
		}
		this.reverse();
		return this.length;
	}
}


if( !Array.prototype.forEach ){
	Array.prototype.forEach = function( callback,thisObject ){
		for(var i=0,len=this.length;i<len;i++) {
			callback.call(thisObject,this[i],i,this);
		}
	}
}

if( !Array.prototype.shuffle ){
	Array.prototype.shuffle = function() {
		var i = this.length;
		while(i)
		{
			var j = Math.floor(Math.random()*i);
			var t = this[--i];
			this[i] = this[j];
			this[j] = t;
		}
		return this;
	}
}

/*-------------------------------------------------------------------

  

-------------------------------------------------------------------*/


function Util(){}

Util.prototype = {


	$: function(el){
		return typeof el == 'string' ? document.getElementById(el) : el;
	},

	getStyle: function(o,s){
		var res;
		try{
			if(document.defaultView && document.defaultView.getComputedStyle){
				res = document.defaultView.getComputedStyle(o, null).getPropertyValue(s);
			} else {
				if(o.currentStyle){
					var camelized = s.replace(/-([^-])/g, function(a,b){return b.toUpperCase()});
					res = o.currentStyle[camelized];
				}
			}
			return res;
		} catch(e){}
		return "";
	},

	setStyle: function( element, styles ){
		if(!element) return;
		for( var key in styles ){
			element.style[key] = styles[key];
		}
//		console.log(styles);
	},

	addClassName: function( el, className ){
		el = this.$(el);
		if( !this.hasClassName( el, className ) )
			el.className += ( el.className? " " : "" ) + className;
	},

	removeClassName: function(el, className){
		el = this.$(el);
		if(el.className == null) return;
		var newList = [];
		var curList = el.className.split(/\s+/);

		for(var i = 0; i < curList.length; i++)
			if(curList[i] != className)
				newList[newList.length] = curList[i];
				//newList.push(curList[i]);
		el.className = newList.join(" ");
	},

	hasClassName: function(el, className){
		el = this.$(el);
		if(!el.className) return false;
		return new RegExp("(^|\\s)" + className + "(\\s|$)" ).test( el.className );
	},

	foreach: function( array,callback ){
		var len = array.length;
		for(var i=0;i<len;i++){
			callback(array[i],i,array)
		}
	},

	// ret : '../..//common/'
	// デフォルトは /common/ に設定
	getCommonDirPath: function(){
		var dirName = arguments.length? arguments[0] : 'common';
		var links = document.getElementsByTagName('LINK');
		var reg = new RegExp( "(.*\/?" + dirName + "\/).+$" );
		if( links ){
			for( var i=0; i<links.length; i++ ){
				if( links[i].getAttribute("rel") && links[i].getAttribute("rel").indexOf("stylesheet") != -1 ) {
					if( links[i].href && links[i].href.match( reg ) )
						return RegExp.$1;
				}
			}
		}
		return '/'+ dirName +'/';
	},

	isContainerWith: function(el, tagName, className) {
		while (el != null)
		{
			if (el.tagName != null && el.tagName == tagName && u.hasClassName(el, className))
				return true;
			else
				el = el.parentNode;
		}
		return false;
	},

	getContainerWith: function(el, tagName, className) {
		while (el != null)
		{
			if (el.tagName != null && el.tagName == tagName && u.hasClassName(el, className))
				return el;
			else
				el = el.parentNode;
		}
		return el;
	}

}
var u = new Util();




/*-------------------------------------------------------------------

  イベント関連

-------------------------------------------------------------------*/

var EventManager = {};

EventManager.list = [];

EventManager.removeEvent = function( obj, event, listener, useCapture ){
	//if(navigator.userAgent.match(/Mac/) && document.all && !this.env.isOpera ) return;
	useCapture = useCapture || false;
	if(obj.removeEventListener){
		obj.removeEventListener( event, listener, useCapture );
	} else if(obj.detachEvent){
		obj.detachEvent( "on"+event, listener );
	} else {
		//delete obj['on'+event];
	}
};

EventManager.addEvent = function( obj, event, listener, useCapture ){
	//EventManager.list.push(arguments);
	EventManager.list[EventManager.list.length] = arguments;
	useCapture = useCapture || false;
	if(obj.addEventListener){
		obj.addEventListener( event, listener, useCapture );
	} else if(obj.attachEvent){
		obj.attachEvent( "on"+event, listener );
	} else {
		var exists = obj['on'+event];
		obj['on'+event] = (exists)?
			function(){
				exists();
				listener();
			} : function() {
				listener();
			};
	}
};


EventManager.addLoadEvent = function( listener ){
	EventManager.addEvent( window, "load", listener, false );
};
/**/
EventManager.removeEventCache = function(){
	if(!EventManager.list) return;
	for( var i=0; i<EventManager.list.length; i++ ){
//		EventManager.removeEvent.apply( this, EventManager.list[i] );
		EventManager.removeEvent( EventManager.list[i][0], EventManager.list[i][1], EventManager.list[i][2], EventManager.list[i][3] );
	}
}


EventManager.addEvent(window, 'unload', EventManager.removeEventCache, false);




/*-------------------------------------------------------------------

  

-------------------------------------------------------------------*/


function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  win = window.open(theURL,winName,features);
  win.focus();
}

/*-------------------------------------------------------------------

  userAgentの取得

-------------------------------------------------------------------*/

var ua = navigator.userAgent //userAgentの情報を取得
var cssHTML = '<link rel="stylesheet" type="text/css" href="'
//Macならmac.css、Winならtop.css、その他ならtop.css
    if( ua.indexOf("Mac") != -1 )      cssHTML += '/cmn/css/mac.css'
    cssHTML += '">'
    document.write(cssHTML)


