// Cookieに値を保存する
function set_cookie(name,param) {
	// クッキーに書き込む情報
	var c_data = name + "=" + escape(param);
	c_data += "; expires=" + "Thu, 31 Dec 2037 12:00:00 GMT";
	c_data += "; path=/";

	// クッキー書き込み
	document.cookie = c_data ;
}
// Cookieから値を取得する
function get_cookie(name) {
	var c_data = document.cookie + ";";
	var c_name = name + "=";

	var id_st = c_data.indexOf(c_name);
	var id_en = -1;

	// クッキー検索
	if (id_st != -1 ) {
		id_en = c_data.indexOf(";", id_st);
		c_data = unescape(c_data.substring(id_st + c_name.length, id_en));
	} else {
		c_data = "";
	}

	// 結果を返す
	return c_data;
}



// 数字チェック（１文字用）
function check_one_number(number) {
	number_0 = "0123456789";
	for ( Z=0 ; Z<10 ; Z++ ) {
		if ( number == number_0.charAt(Z) ) { return true; }
	}
	return false;
}

// CSSのタイプを指定する
function set_cssType(mode) {
	var cssType = get_cookie("CSSTYPE");
	if ( cssType != mode ) {
		// Cookie保存
		set_cookie("CSSTYPE",mode);
		// ページリロード
		location.reload();
	}
}


var cssType;
// CSSを設定する
function set_css() {
	cssType = get_cookie("CSSTYPE");
	var cssSrc;
//	if (
//	 cssType != "2" && cssType != "4")
//	 cssSrc != "2" && cssSrc != "4")
//	{
//		cssSrc = "3";
//	}else{
//		}

	 if (cssType=="2") { 
	cssSrc = "small";
	}  else if (cssType=="3") { 
	cssSrc = "middle";		
	}  else if (cssType=="4") { 
	cssSrc = "large";}
	else{
			cssSrc = "middle";
	}
	
	var MSG = '<link href="/corporate/css/fontsize_' + cssSrc + '.css" rel="stylesheet" type="text/css">';
	document.write(MSG);
}
set_css();

function fontsize(){

var MSG = '';

if (cssType=="4") {
	MSG += '<img src="/corporate/img_fontsize/op_fontsize.gif" width="92" height="20" border="0" alt="文字サイズ"><a href="javascript:set_cssType(\'2\');"><img style=margin:1px src="/corporate/img_fontsize/button_ss.gif" width="20" height="20" border="0" alt="小"></a><a href="javascript:set_cssType(\'3\');"><img style=margin:1px src="/corporate/img_fontsize/button_mm.gif" width="22" height="22" border="0" alt="中"></a><img style=margin:1px src="/corporate/img_fontsize/button_l.gif" width="24" height="24" border="0" alt="大">';
	}
else if  (cssType=="3"){
	MSG += '<img src="/corporate/img_fontsize/op_fontsize.gif" width="92" height="20" border="0" alt="文字サイズ"><a href="javascript:set_cssType(\'2\');"><img style=margin:1px src="/corporate/img_fontsize/button_ss.gif" width="20" height="20" border="0" alt="小"></a><img style=margin:1px src="/corporate/img_fontsize/button_m.gif" width="22" height="22" border="0" alt="中"><a href="javascript:set_cssType(\'4\');"><img style=margin:1px src="/corporate/img_fontsize/button_ll.gif" width="24" height="24" border="0" alt="大"></a>';
	}
else if  (cssType=="2"){
	MSG += '<img src="/corporate/img_fontsize/op_fontsize.gif" width="92" height="20" border="0" alt="文字サイズ"><img style=margin:1px src="/corporate/img_fontsize/button_s.gif" width="20" height="20" border="0" alt="小"><a href="javascript:set_cssType(\'3\');"><img style=margin:1px src="/corporate/img_fontsize/button_mm.gif" width="22" height="22" border="0" alt="中"></a><a href="javascript:set_cssType(\'4\');"><img style=margin:1px src="/corporate/img_fontsize/button_ll.gif" width="24" height="24" border="0" alt="大"></a>';
	}
else {
	MSG += '<img src="/corporate/img_fontsize/op_fontsize.gif" width="92" height="20" border="0" alt="文字サイズ"><a href="javascript:set_cssType(\'2\');"><img style=margin:1px src="/corporate/img_fontsize/button_ss.gif" width="20" height="20" border="0" alt="小"></a><img style=margin:1px src="/corporate/img_fontsize/button_m.gif" width="22" height="22" border="0" alt="中"><a href="javascript:set_cssType(\'4\');"><img style=margin:1px src="/corporate/img_fontsize/button_ll.gif" width="24" height="24" border="0" alt="大"></a>';
	}
	document.write(MSG);
  }