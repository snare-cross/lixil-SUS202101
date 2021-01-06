/*
  
EventManager.addEvent( window, 'load', function(){
	new RolloverImages('rollover','on');
	new RolloverImages('rollover','on', 'active');
}, false );
  
-------------------------------------------------------------------*/


function RolloverImages( className, onSuffix, aSuffix ){
	if( !className ) return;
	this.targetClassName = className;
	this.onSuffix = onSuffix;
	this.aSuffix = aSuffix;
	this.buttons = [];
	this.init();
}


RolloverImages.prototype = {

	preloadImages : function(){
		var ret = [];
		for( var i=0; i<this.buttons.length; i++ ){
			(new Image()).src = this.buttons[i].onsrc;
			ret[ret.length] = this.buttons[i].onsrc;
			if(this.buttons[i].activesrc){
				(new Image()).src = this.buttons[i].activesrc;
				ret[ret.length] = this.buttons[i].activesrc;
			}
		}
	},


	swapImage : function( obj, status ){
		if( !obj || !obj[status+"src"] ) return;
		if( !obj.lock )
			obj.src = obj[status+"src"];
	},


	// statusをonにしっぱなしにしたい場合
	activate : function( el ){
		this.swapImage( el, 'active' );
		this.lock( el );
	},

	// acitevateでonにしたものは、必ずdeactivateでoffに。swapImageではlock解除されず。
	deactivate : function( el ){
		this.unlock( el );
		this.swapImage( el, 'off' );
	},

	lock : function( obj ){
		if( obj.lock == 'undefined' ) return;
		if(!obj.lock) obj.lock = true;
	},

	unlock : function( obj ){
		if( obj.lock == 'undefined' ) return;
		if( obj.lock ) obj.lock = false;
	},


	registButton : function( el ){
		var _this = this;
		var btn = new Object();
		btn.src = el.src;
		btn.filetype = btn.src.substring(btn.src.lastIndexOf('.'));
		btn.basename = btn.src.substring(0, btn.src.length-btn.filetype.length);
		btn.onsrc = btn.basename + this.onSuffix + btn.filetype;

		el.offsrc = btn.src;
		el.onsrc  = btn.onsrc;
		el.lock   = false;
		if( this.aSuffix ){
			btn.activesrc = btn.basename + this.aSuffix + btn.filetype;
			el.activesrc = btn.activesrc;
		}

		this.buttons.push( el );


		if( !this.aSuffix ){
			EventManager.addEvent( el, 'mouseover', function(){ _this.swapImage( el, 'on' ); }, false );
			EventManager.addEvent( el, 'mouseout',  function(){ _this.swapImage( el, 'off'); }, false );
		}
		else {
			EventManager.addEvent( el, 'mouseover', function(){ if(!el.lock) _this.swapImage( el, 'on' ); }, false );
			EventManager.addEvent( el, 'mouseout',  function(){ if(!el.lock) _this.swapImage( el, 'off'); }, false );
			EventManager.addEvent( el, 'mouseup', function(){
				u.foreach(_this.buttons, function(button){
					_this.deactivate(button);
				});
				_this.activate( el );
			}, false );
		}
	},


	init : function(){
		if(!document.getElementById && document.images) return;

		var _this = this;
		var imgs = [];
		var inputs = [];

		u.foreach( document.getElementsByTagName('IMG'), function(el){
			if(u.hasClassName( el, _this.targetClassName )) imgs.push(el);
		} );
		u.foreach( document.getElementsByTagName('INPUT'), function(el){
			if(u.hasClassName( el, _this.targetClassName )) inputs.push(el);
		} );

		var objs = imgs.concat(inputs);
		u.foreach( objs, function( obj ){ _this.registButton( obj ); } )

		this.preloadImages();
	}
}


/*---------------------------------------------------------------------------*/
/*
// 
EventManager.addEvent( window, 'load', function(){
	new RolloverImages('rollover','on');
}, false );
*/

