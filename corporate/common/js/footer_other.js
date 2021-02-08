//Shift_jis
//
// ver 2018-03-20 09:00 t.chiba
//

var foot;
var path = "//www.lixil.co.jp";

foot = '<div class="lxl-footer-inner">\
<div id="lxl-footer-sitemap" class="clearfix">\
<div class="lxl-footer-col">\
<h2><a href="' + path + '/lineup/">商品ラインアップ</a></h2>\
<ul id="lxl-footer-lineup">\
<li><a href="' + path + '/lineup/kitchen/">キッチン</a></li>\
<li><a href="' + path + '/lineup/bathroom/">浴室</a></li>\
<li><a href="' + path + '/lineup/toiletroom/">トイレ</a></li>\
<li><a href="' + path + '/lineup/powderroom/">洗面化粧室</a></li>\
<li><a href="' + path + '/lineup/livingroom_bedroom/">リビング・寝室・居室</a></li>\
<li><a href="' + path + '/lineup/window/">窓まわり</a></li>\
<li><a href="' + path + '/lineup/entrance/">玄関まわり</a></li>\
<li><a href="' + path + '/lineup/gate_fence/">門まわり・塀・フェンス</a></li>\
<li><a href="' + path + '/lineup/carspace/">カースペース</a></li>\
<li><a href="' + path + '/lineup/gardenspace/">ガーデンスペース</a></li>\
<li><a href="' + path + '/lineup/veranda_balcony/">ベランダ・バルコニー</a></li>\
<li><a href="' + path + '/lineup/solar_roof_outerwall/">太陽光発電・外壁・屋根</a></li>\
<li><a href="' + path + '/lineup/category/">カテゴリーから探す</a></li>\
</ul>\
</div>\
<div class="lxl-footer-col">\
<h2><a href="' + path + '/reform/">リフォーム</a></h2>\
<ul id="lxl-footer-reform">\
<li><a href="' + path + '/reform/basic/">リフォームの基礎</a></li>\
<li><a href="' + path + '/reform/shop/">施工店のご紹介</a></li>\
<li><a href="' + path + '/reform/kitchen/">キッチンのリフォーム</a></li>\
<li><a href="' + path + '/reform/bathroom/">浴室のリフォーム</a></li>\
<li><a href="' + path + '/reform/toiletroom/">トイレのリフォーム</a></li>\
<li><a href="' + path + '/reform/powderroom/">洗面化粧室のリフォーム</a></li>\
<li><a href="' + path + '/reform/livingroom_bedroom/">リビング・寝室・居室のリフォーム</a></li>\
<li><a href="' + path + '/reform/window/">窓まわりのリフォーム</a></li>\
<li><a href="' + path + '/reform/entrance/">玄関まわりのリフォーム</a></li>\
<li><a href="' + path + '/reform/gate_fence/">門まわり・塀・フェンスのリフォーム</a></li>\
<li><a href="' + path + '/reform/carspace/">カースペースのリフォーム</a></li>\
<li><a href="' + path + '/reform/gardenspace/">ガーデンスペースのリフォーム</a></li>\
<li><a href="' + path + '/reform/veranda_balcony/">ベランダ・バルコニーのリフォーム</a></li>\
<li><a href="' + path + '/reform/solar_exterior_roof/">太陽光発電・外壁・屋根のリフォーム</a></li>\
<li><a href="http://tostem.lixil.co.jp/lineup/bldg/reform/" class="icon-drop-bill icon-blank" target="_blank">ビル・マンション（窓・玄関・手すり）のリフォーム</a></li>\
</ul>\
</div>\
<div class="lxl-footer-col">\
<h2><a href="' + path + '/showroom/">ショールーム</a></h2>\
<ul id="lxl-footer-showroom">\
<li><a href="' + path + '/showroom/guide/">ショールーム活用のコツ</a></li>\
<li><a href="' + path + '/showroom/before/">ショールームに行く前に</a></li>\
<li><a href="' + path + '/showroom/qa/">よくあるご質問</a></li>\
<li><a href="' + path + '/showroom/?area=hokkaido_map" title="北海道エリア">北海道エリア</a></li>\
<li><a href="' + path + '/showroom/?area=tohoku_map" title="東北エリア">東北エリア</a></li>\
<li><a href="' + path + '/showroom/?area=kanto_map" title="北関東エリア">北関東エリア</a></li>\
<li><a href="' + path + '/showroom/?area=tokyo_map" title="東京エリア">東京エリア</a></li>\
<li><a href="' + path + '/showroom/?area=saitama_map" title="埼玉エリア">埼玉エリア</a></li>\
<li><a href="' + path + '/showroom/?area=chiba_map" title="千葉エリア">千葉エリア</a></li>\
<li><a href="' + path + '/showroom/?area=kanagawa_map" title="神奈川エリア">神奈川エリア</a></li>\
<li><a href="' + path + '/showroom/?area=koushinetsu_map" title="甲信越エリア">甲信越エリア</a></li>\
<li><a href="' + path + '/showroom/?area=tokai_map" title="東海・北陸エリア">東海・北陸エリア</a></li>\
<li><a href="' + path + '/showroom/?area=kinki_map" title="近畿エリア">近畿エリア</a></li>\
<li><a href="' + path + '/showroom/?area=chugoku_map" title="中国エリア">中国エリア</a></li>\
<li><a href="' + path + '/showroom/?area=shikoku_map" title="四国エリア">四国エリア</a></li>\
<li><a href="' + path + '/showroom/?area=kyushu_map" title="九州・沖縄エリア">九州・沖縄エリア</a></li>\
</ul>\
</div>\
<div class="lxl-footer-col">\
<h2><a href="' + path + '/support/">お客さまサポート</a></h2>\
<ul id="lxl-footer-support">\
<li><a href="' + path + '/warnings/">重要なお知らせ</a></li>\
<li><a href="http://faq.lixil.co.jp/consumer/">Q&amp;A・お問い合わせ</a></li>\
<li><a href="' + path + '/inquiry/consumer/contact_tel.htm">お電話でのお問い合わせ</a></li>\
<li><a href="' + path + '/inquiry/consumer/contact.htm">お問い合わせフォーム</a></li>\
<li><a href="' + path + '/support/cs/">お客さまの声を活かす取り組み</a></li>\
</ul>\
<ul id="lxl-footer-corporate" class="lxl-last-child">\
<li><a href="' + path + '/corporate/">LIXILについて</a></li>\
<li><a href="' + path + '/feel_the_moment/">LIXIL 2020スペシャルサイト</a></li>\
<li><a href="' + path + '/corporate/recruit/">採用情報</a></li>\
<li><a href="http://www.biz-lixil.com/" target="_blank" class="icon-blank">ビジネス向け</a></li>\
<li><a href="http://www.lixil.com/jp/investor/" target="_blank" class="icon-blank">株主・投資家向け情報（IR）</a></li>\
<li class="l-spOn"><a href="' + path + '/privacy/">プライバシーポリシー</a></li>\
<li class="l-spOn"><a href="' + path + '/smp/">ソーシャルメディアポリシー</a></li>\
<li class="l-spOn"><a href="' + path + '/termsofuse/">サイト利用条件</a></li>\
<li class="l-spOn"><a href="' + path + '/sitemap.htm">サイトマップ</a></li>\
<li><a href="https://www.facebook.com/lixilcorporation" target="_blank" class="icon-blank"><img src="' + path + '/common/pic/icon_facebook_f.png" alt="Facebook">Facebookページ</a></li>\
<li><a href="https://www.instagram.com/lixil_official/" target="_blank" class="icon-blank"><img src="' + path + '/common/pic/icon_instagram_f.png" alt="instagram">Instagramページ</a></li>\
<li><a href="https://twitter.com/lixil_official" target="_blank" class="icon-blank"><img src="' + path + '/common/pic/icon_twitter_f.png" alt="twitter">Twitterページ</a></li>\
</ul>\
</div>\
<!--//#lxl-footer-sitemap --></div>\
<div id="lxl-footer-copyright" class="clearfix">\
<p class="copyright"><img src="' + path + '/common/pic/copyright.gif" width="285" height="11" alt="Copyright &copy; LIXIL Corporation. All Rights Reserved."></p>\
<p class="footer-logo"><a href="' + path + '/"><img src="' + path + '/common/pic/footer-logo.gif" alt="LIXIL"></a></p>\
</div>\
<!--//.lxl-footer-inner --></div>\
';


var pegeTop = '<div id="lxl-footer-pagetop"><a href="#lxl-header"><img src="' + path + '/common/pic/btn_pagetop.png" width="60" height="60" alt="ページの先頭へ"></a></div>';


$jq183("#lxl-footer").append(foot);
$jq183("body").append(pegeTop);