// ---------------------
// lixil template ver1.9
// ---------------------
//alert("test");
/**
 * SNSボタンジェネレータ
 */
window.___gcfg = {lang: 'ja'};	// Google +1逕ｨ
$jq183(function(){
	// Google +1 Check
	var isGPlusone = false;
	if ($jq183.browser.msie && $jq183.browser.version < 8) {
		isGPlusone = false;
	}
	var isWin = false;
	if (navigator.platform.indexOf("Win") != -1) {
		isWin = true;
	}

	$jq183(".lixTmplNavSns").empty();
	var url = encodeURIComponent(document.URL);
	var title = document.title;

	// Tags for navigation
	var buf = '<li class="lixTmplNavSnsTw"></li>';
	buf += '<li class="lixTmplNavSnsFb"></li>';
	if (isGPlusone) {
//		buf += '<li class="lixTmplNavSnsGp"><g:plusone size="medium" annotation="none"></g:plusone></li>';
		buf += '<li class="lixTmplNavSnsGp"><div class="g-plusone" data-size="medium" data-count="false" data-annotation="none"></div></li>';
	}
	$jq183(".lixTmplNavSns").html(buf);

	// SNS Tags
	var twitterTag = "";
	if (($jq183.browser.msie && $jq183.browser.version < 8) || (isWin == false && $jq183.browser.mozilla)) {
		twitterTag = '<a href="https://twitter.com/share?count=none&amp;lang=ja&amp;url='+document.URL+'" target="_blank"><img src="/lixil_template/pic/btn_sns_twitter.gif" alt="twitter" width="68" height="20" /></a>';
	} else if ($jq183.browser.msie && $jq183.browser.version < 9) {
		twitterTag = '<iframe allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:68px; height:21px;" src="https://platform.twitter.com/widgets/tweet_button.html?count=none&amp;lang=ja&amp;text='+title+'"></iframe>';
	} else {
		twitterTag = '<a href="https://twitter.com/share" class="twitter-share-button" data-url="'+document.URL+'" data-text="'+title+'" data-count="none" data-lang="ja">Tweet</a><script type="text/javascript" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
	}
	var facebookTag = "";
	if (($jq183.browser.msie && $jq183.browser.version < 8) || (isWin == false && $jq183.browser.mozilla)) {
		facebookTag = '<a href="https://www.facebook.com/sharer.php?u='+document.URL+'" target="_blank"><img src="/lixil_template/pic/btn_sns_facebook.gif" alt="facebook" width="74" height="20" /></a>';
	} else {
//		facebookTag = '<fb:like send="false" width="73" height=21 layout=button_count show_faces="false" font=""></fb:like>';
		facebookTag = '<iframe src="https://www.facebook.com/plugins/like.php?href='+url+'&amp;send=false&amp;layout=button_count&amp;show_faces=false&amp;width=73&amp;action=like&amp;colorscheme=light&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:100px; height:21px;" allowTransparency="true"></iframe>';
	}
	___navSnsBtns.push({className:"lixTmplNavSnsTw", html:twitterTag});
	___appendNavSnsBtn();	// Write Twitter
	___navSnsBtns.push({className:"lixTmplNavSnsFb", html:facebookTag});
	___appendNavSnsBtn();	// Write Facebook
	if (isGPlusone) {
		___navSnsBtns.push({className:"lixTmplNavSnsGp", html:""});
	}

	// Display SNS buttons (Google +1)
	setTimeout("___appendNavSnsBtn()", 100);
});

var ___navSnsBtns = new Array();
function ___appendNavSnsBtn() {
	if (___navSnsBtns.length > 0) {
		var bt = ___navSnsBtns.shift();
		if (bt.className == "lixTmplNavSnsGp") {
			// Google +1
		    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
		    po.src = 'https://apis.google.com/js/plusone.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
		} else {
			$jq183("."+bt.className).html(bt.html);
		}
		setTimeout("___appendNavSnsBtn()", 100);
	}
}
