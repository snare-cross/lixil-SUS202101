//@charset Shift_jis
//
// ver 2016-02-20 22:00
//


var head;
var path = "";

head = '<div class="lxl-header-inner">\
<p id="logo"><a href="' + path + '/"><img src="' + path + '/common/pic/h_logo.png" alt="LIXIL"></a></p>\
\
<div id="lxl-utility-area">\
\
<div id="lxl-search-area">\
<link href="//c.marsflag.com/mf/mfx/1.0/css/mfx-sbox.css" type="text/css" rel="stylesheet" />\
<div class="mf_finder_container">\
<mf-search-box submit-text="検索" placeholder="サイト内検索" ajax-url="//mf2ap081.marsflag.com/lixil__all__customelement/x_search.x" serp-url="//www.lixil.co.jp/search.htm#/" doctype-hidden options-hidden></mf-search-box>\
</div>\
<!-- //#lxl-search-area--></div>\
\
<ul id="lxl-utility-nav">\
<li id="lxl-global"><a href="https://www.lixil.com" title="Global" target="_blank">Global</a></li>\
<li id="lxl-catalog"><a href="' + path + '/catalog/" title="カタログ">カタログ</a></li>\
<li id="lxl-faq"><a href="https://faq.lixil.co.jp/?site_domain=default" title="Q&amp;A・お問い合わせ">Q&amp;A・お問い合わせ</a></li>\
<!-- //#lxl-utility-nav--></ul>\
\
<ul id="lxl-global-nav">\
<li id="lxl-lineup">\
<p><a href="' + path + '/lineup/" title="商品ラインアップ">商品ラインアップ</a></p>\
<div id="lxl-lineup-child" class="lxl-mdd" style="display:none;">\
<div class="lxl-mdd-arw"></div>\
<div class="lxl-mdd-close"><a href="javascript:void(0);" class="gMenuCloseBtn"><img src="' + path + '/common/pic/icon_close.gif" width="23" height="23" alt="閉じる"></a></div>\
<div class="lxl-mdd-inner clearfix">\
<div class="lxl-mdd-col">\
<div class="col-space">\
<h2><a href="' + path + '/lineup/">空間から探す</a></h2>\
<ul class="clearfix">\
<li><a href="' + path + '/lineup/kitchen/" class="icon-drop-kitchen">キッチン</a></li>\
<li><a href="' + path + '/lineup/bathroom/" class="icon-drop-bathroom">浴室</a></li>\
<li><a href="' + path + '/lineup/toiletroom/" class="icon-drop-toiletroom">トイレ</a></li>\
<li class="last-child"><a href="' + path + '/lineup/powderroom/" class="icon-drop-powderroom">洗面化粧室</a></li>\
<li><a href="' + path + '/lineup/livingroom_bedroom/" class="icon-drop-livingroom_bedroom">リビング・寝室・居室<br></a></li>\
<li><a href="' + path + '/lineup/window/" class="icon-drop-window">窓まわり</a></li>\
<li><a href="' + path + '/lineup/entrance/" class="icon-drop-entrance">玄関まわり</a></li>\
<li class="last-child"><a href="' + path + '/lineup/gate_fence/" class="icon-drop-gate_fence">門まわり・塀・フェンス</a></li>\
<li><a href="' + path + '/lineup/carspace/" class="icon-drop-carspace">カースペース</a></li>\
<li><a href="' + path + '/lineup/gardenspace/" class="icon-drop-gardenspace">ガーデンスペース</a></li>\
<li><a href="' + path + '/lineup/veranda_balcony/" class="icon-drop-veranda_balcony">ベランダ・バルコニー</a></li>\
<li class="last-child"><a href="' + path + '/lineup/solar_roof_outerwall/" class="icon-drop-exterior_roof">太陽光発電・外壁・屋根</a></li>\
</ul>\
</div>\
<div class="col-category">\
<h2><a href="' + path + '/lineup/category/">カテゴリーから探す</a></h2>\
<ul class="clearfix">\
<li><a href="' + path + '/lineup/window_shutter/">窓・シャッター</a></li>\
<li><a href="' + path + '/lineup/door/">玄関ドア・引戸</a></li>\
<li><a href="' + path + '/lineup/interior/">インテリア建材</a></li>\
<li class="last-child"><a href="' + path + '/lineup/fabric/">インテリアファブリック</a></li>\
<li><a href="' + path + '/lineup/exterior/">エクステリア</a></li>\
<li><a href="' + path + '/lineup/tile/">タイル建材</a></li>\
<li><a href="' + path + '/lineup/kitchens/">キッチン</a></li>\
<li class="last-child"><a href="' + path + '/lineup/bath/">浴室</a></li>\
<li><a href="' + path + '/lineup/lavatory/">洗面化粧室</a></li>\
<li><a href="' + path + '/lineup/toilet/">トイレ</a></li>\
<li><a href="' + path + '/lineup/water_heater/">小型電気温水器</a></li>\
<li class="last-child"><a href="' + path + '/lineup/faucet/">水栓金具</a></li>\
<li><a href="' + path + '/lineup/accessory/">水まわりアクセサリー</a></li>\
<li><a href="' + path + '/lineup/utility/">水まわりユーティリティー</a></li>\
<li><a href="' + path + '/lineup/solar_roof_outerwalls/">太陽光発電・屋根・外壁</a></li>\
<li class="last-child"><a href="' + path + '/lineup/construction_method/">高性能住宅工法</a></li>\
<li><a href="' + path + '/lineup/building_apartment_store/">ビル・マンション・店舗</a></li>\
<li><a href="' + path + '/lineup/equipment/">各種施設用設備機器</a></li>\
<li><a href="' + path + '/lineup/public/">パブリック向け</a></li>\
<li class="last-child"><a href="' + path + '/lineup/fire_guard/">国土交通大臣認定防火戸FGシリーズ</a></li>\
</ul>\
</div>\
<div class="col-product">\
<h2 class="mb0"><a href="' + path + '/lineup/list/">商品名から探す</a></h2>\
</div>\
</div>\
</div>\
</div>\
<!--//#lxl-lineup --></li>\
<li id="lxl-reform">\
<p><a href="' + path + '/reform/" title="リフォーム">リフォーム</a></p>\
<div id="lxl-reform-child" class="lxl-mdd" style="display:none;">\
<div class="lxl-mdd-arw"></div>\
<div class="lxl-mdd-close"><a href="javascript:void(0);" class="gMenuCloseBtn"><img src="' + path + '/common/pic/icon_close.gif" width="23" height="23" alt="閉じる"></a></div>\
<div class="lxl-mdd-inner clearfix">\
<div class="lxl-mdd-col col-space">\
<div class="lxl-mdd-col">\
<h2 class="lg-first"><a href="' + path + '/reform/" title="リフォームを検討する">リフォームを検討する</a></h2>\
<ul>\
<li><a href="' + path + '/reform/case-rf/top/">リフォーム事例集</a></li>\
<li><a href="' + path + '/reform/patto/" target="_blank"><span class="icon-blank">短時間リフォームでパッと解決!</span></a></li>\
<li><a href="' + path + '/lineup/kitchen/go_sr/">ショールームを体験しよう</a></li>\
<li><a href="' + path + '/reform/solution/">お困りごとをリフォームで解決</a></li>\
<li><a href="' + path + '/reform/ud/">安心・快適な住まいづくりのポイント</a></li>\
<li><a href="' + path + '/reform/entrance/door/">玄関ドアを1dayリフォーム</a></li>\
<li><a href="' + path + '/lineup/gardenspace/s/garden_room/">＜ガーデンルーム＞スペシャルサイト</a></li>\
<li><a href="' + path + '/reform/basic/step/">リフォームの流れ</a></li>\
<li><a href="' + path + '/reform/qa/">リフォームのQ&amp;A</a></li>\
<li><a href="' + path + '/reform/yougo/">リフォーム用語集</a></li>\
</ul>\
</div>\
<div class="lxl-mdd-col">\
<h2 class="lg-first"><a href="' + path + '/reform/#RFend" title="リフォーム施工店を探す">リフォーム施工店を探す</a></h2>\
<ul>\
<li><a href="https://lixil-reformshop.jp/" target="_blank"><span class="icon-blank">LIXILリフォームショップ</span></a></li>\
<li><a href="https://www.lixil-reform.net/" target="_blank"><span class="icon-blank">LIXILリフォームネット</span></a></li>\
</ul>\
<h2><a href="' + path + '/reform/#RFend" title="商品の説明を聞く">WEBで相談する</a></h2>\
<ul>\
<li><a href="https://reform-contact.com/" target="_blank"><span class="icon-blank">リフォームコンタクト</span></a></li>\
</ul>\
<h2><a href="' + path + '/reform/#RFend" title="商品の説明を聞く">商品の説明を聞く</a></h2>\
<ul>\
<li><a href="' + path + '/showroom/">お近くのショールームを探す</a></li>\
</ul>\
<ul class="lxl-mdd-bnr">\
<li><a href="' + path + '/tpoint/"><img src="' + path + '/common/pic/mdd/bnr_tpoint_reform.gif" width="220" height="60" alt="LIXILならT-POINTが貯まります"></a></li>\
</ul>\
</div>\
</div>\
<div class="lxl-mdd-col col-bn">\
<h2 class="lg-first"><a href="' + path + '/reform/#RFspace" title="リフォーム空間からさがす">リフォーム空間からさがす</a></h2>\
<ul class="lxl-notes-Noidt">\
<li><a href="' + path + '/reform/kitchen/" class="icon-drop-kitchen">キッチンのリフォーム</a></li>\
<li><a href="' + path + '/reform/bathroom/" class="icon-drop-bathroom">浴室のリフォーム</a></li>\
<li><a href="' + path + '/reform/toiletroom/" class="icon-drop-toilet">トイレのリフォーム</a></li>\
<li><a href="' + path + '/reform/powderroom/" class="icon-drop-powderroom">洗面化粧室のリフォーム</a></li>\
<li><a href="' + path + '/reform/livingroom_bedroom/" class="icon-drop-living">リビング・寝室・居室のリフォーム<br></a></li>\
<li><a href="' + path + '/reform/window/" class="icon-drop-window">窓まわりのリフォーム</a></li>\
<li><a href="' + path + '/reform/entrance/" class="icon-drop-entrance">玄関まわりのリフォーム</a></li>\
<li><a href="' + path + '/reform/gate_fence/" class="icon-drop-gate">門まわり・塀・フェンスのリフォーム</a></li>\
<li><a href="' + path + '/reform/carspace/" class="icon-drop-car">カースペースのリフォーム</a></li>\
<li><a href="' + path + '/reform/gardenspace/" class="icon-drop-gardenspace">ガーデンスペースのリフォーム</a></li>\
<li><a href="' + path + '/reform/veranda_balcony/" class="icon-drop-veranda">ベランダ・バルコニーのリフォーム</a></li>\
<li><a href="' + path + '/reform/solar_exterior_roof/" class="icon-drop-solar">太陽光発電・屋根・外壁のリフォーム</a></li>\
<li><a href="https://tostem.lixil.co.jp/lineup/bldg/reform/" target="_blank" class="icon-drop-bill"><span class="icon-blank">ビル・マンション（窓・玄関・手すり）のリフォーム</span></a></li>\
</ul>\
</div>\
</div>\
</div>\
<!--//#lxl-reform --></li>\
<li id="lxl-showroom">\
<p><a href="' + path + '/showroom/" title="ショールーム">ショールーム</a></p>\
<div id="lxl-showroom-child" class="lxl-mdd" style="display:none;">\
<div class="lxl-mdd-arw"></div>\
<div class="lxl-mdd-close"><a href="javascript:void(0);" class="gMenuCloseBtn"><img src="' + path + '/common/pic/icon_close.gif" width="23" height="23" alt="閉じる"></a></div>\
<div class="lxl-mdd-inner clearfix">\
<div class="lxl-mdd-col col01">\
<div class="map">\
<h2><a href="' + path + '/showroom/" title="ショールーム">LIXILショールーム検索</a></h2>\
<p>お住まいの近くのエリアを<br>クリックしてください。</p>\
<img src="' + path + '/common/pic/mdd/drop_showroom_map.gif" width="403" height="300" alt="LIXILショールーム検索" usemap="#showroom_map">\
<map name="showroom_map" id="showroom_map">\
<area shape="rect" coords="198,24,256,44" href="' + path + '/showroom/?area=hokkaido_map" title="北海道" alt="北海道" />\
<area shape="rect" coords="294,220,353,240" href="' + path + '/showroom/?area=kanagawa_map" title="神奈川" alt="神奈川">\
<area shape="rect" coords="345,193,395,216" href="' + path + '/showroom/?area=saitama_map" title="埼玉" alt="埼玉">\
<area shape="rect" coords="355,221,403,240" href="' + path + '/showroom/?area=chiba_map" title="千葉" alt="千葉">\
<area shape="rect" coords="302,118,353,140" href="' + path + '/showroom/?area=tohoku_map" title="東北" alt="東北" />\
<area shape="rect" coords="293,169,356,190" href="' + path + '/showroom/?area=kanto_map" title="北関東" alt="北関東" />\
<area shape="rect" coords="294,193,342,215" href="' + path + '/showroom/?area=tokyo_map" title="東京" alt="東京" />\
<area shape="rect" coords="170,134,228,154" href="' + path + '/showroom/?area=koushinetsu_map" title="甲信越" alt="甲信越" />\
<area shape="rect" coords="205,239,286,259" href="' + path + '/showroom/?area=tokai_map" title="東海・北陸" alt="東海・北陸" />\
<area shape="rect" coords="137,173,185,193" href="' + path + '/showroom/?area=kinki_map" title="近畿" alt="近畿" />\
<area shape="rect" coords="144,265,192,285" href="' + path + '/showroom/?area=shikoku_map" title="四国" alt="四国" />\
<area shape="rect" coords="73,191,121,211" href="' + path + '/showroom/?area=chugoku_map" title="中国" alt="中国" />\
<area shape="rect" coords="0,223,81,243" href="' + path + '/showroom/?area=kyushu_map" title="九州・沖縄" alt="九州・沖縄" />\
</map>\
</div>\
<div class="lxl-mdd-SRSP">\
<ul>\
<li><a href="'+ path +'/showroom/hokkaido/" target="_blank">北海道</a></li>\
<li><a href="'+ path +'/showroom/tohoku/" target="_blank">東北</a></li>\
<li><a href="'+ path +'/showroom/koushinetsu/" target="_blank">甲信越</a></li>\
<li><a href="'+ path +'/showroom/kanto/" target="_blank">関東</a></li>\
<li><a href="'+ path +'/showroom/tokai/" target="_blank">東海・北陸</a></li>\
<li><a href="'+ path +'/showroom/kinki/" target="_blank">近畿</a></li>\
<li><a href="'+ path +'/showroom/chugoku/" target="_blank">中国</a></li>\
<li><a href="'+ path +'/showroom/shikoku/" target="_blank">四国</a></li>\
<li><a href="'+ path +'/showroom/kyushu/" target="_blank">九州・沖縄</a></li>\
</ul>\
</div>\
</div>\
<div class="lxl-mdd-col col02">\
<ul class="icon-list">\
<li><a href="' + path + '/showroom/guide/" class="icon-drop-utilizing">ショールーム活用のコツ</a></li>\
<li><a href="' + path + '/showroom/before/" class="icon-drop-preparation">ショールームに行く前に</a></li>\
<li><a href="/showroom/qa/" class="icon-drop-faq">よくあるご質問</a></li>\
<li><a href="' + path + '/catalog/" class="icon-drop-catalog">カタログの閲覧とご請求</a></li>\
</ul>\
</div>\
<div class="lxl-mdd-col col-bn">\
<ul>\
<li><a href="' + path + '/showroom/kanto/lixil_tokyo/"><img src="' + path + '/common/pic/mdd/drop_showroom_bn01.jpg" width="220" height="92" alt="LIXILショールーム東京"><br>LIXILショールーム東京</a></li>\
<li><a href="' + path + '/showroom/kinki/lixil_osaka/"><img src="' + path + '/common/pic/mdd/drop_showroom_bn02.jpg" width="220" height="92" alt="LIXILショールーム大阪"><br>LIXILショールーム大阪</a></li>\
</ul>\
</div>\
</div>\
</div>\
<!--//#lxl-showroom --></li>\
<li id="lxl-support">\
<p><a href="' + path + '/support/" title="お客さまサポート">お客さまサポート</a></p>\
<div id="lxl-support-child" class="lxl-mdd" style="display:none;">\
<div class="lxl-mdd-arw"></div>\
<div class="lxl-mdd-close"><a href="javascript:void(0);" class="gMenuCloseBtn"><img src="' + path + '/common/pic/icon_close.gif" width="23" height="23" alt="閉じる"></a></div>\
<div class="lxl-mdd-inner clearfix">\
<ul class="icon-list clearfix">\
<li><a href="https://faq.lixil.co.jp/?site_domain=default" class="icon-drop-faq">Q&amp;A</a></li>\
<li><a href="' + path + '/inquiry/consumer/contact_tel.htm" class="icon-drop-tel">お電話でのお問い合わせ</a></li>\
<li><a href="' + path + '/inquiry/consumer/contact.htm" class="icon-drop-form">お問い合わせフォーム</a></li>\
<li><a href="' + path + '/warnings/" class="icon-drop-warnings">重要なお知らせ</a></li>\
</ul>\
<div class="box-purpose lxl-mdd-col">\
<h2 class="mb10"><a href="' + path + '/support/purpose/">目的から探す</a></h2>\
<ul>\
<li><a href="https://owners.lixil.co.jp" target="_blank">リクシルオーナーズクラブ</a></li>\
<li><a href="' + path + '/support/purpose/safety.htm">ご使用上のご注意</a></li>\
<li><a href="' + path + '/support/purpose/clean.htm">お手入れ・お掃除方法</a></li>\
<li><a href="' + path + '/support/purpose/manual.htm">取扱説明書閲覧</a></li>\
<li><a href="https://faq.lixil.co.jp/?site_domain=default">Q&amp;A・お問い合わせ</a></li>\
<li><a href="' + path + '/support/purpose/fault_diagnosis.htm">トラブル診断</a></li>\
<li><a href="' + path + '/support/ecstore/">LIXIL公式通販サイト</a></li>\
<li><a href="' + path + '/support/purpose/repair.htm">修理依頼</a></li>\
<li><a href="' + path + '/support/purpose/cartridge.htm">交換カートリッジのご購入</a></li>\
</ul>\
</div>\
<div class="box-products lxl-mdd-col">\
<h2 class="mb10"><a href="' + path + '/support/product/">製品カテゴリーから探す</a></h2>\
<ul>\
<li class="box-left"><a href="' + path + '/support/product/window_shutter.htm">窓・シャッター</a></li>\
<li class="box-center"><a href="' + path + '/support/product/tile.htm">タイル建材</a></li>\
<li class="box-right"><a href="' + path + '/support/product/toiletroom.htm">トイレ</a></li>\
<li class="box-left"><a href="' + path + '/support/product/door.htm">玄関ドア・引戸</a></li>\
<li class="box-center"><a href="' + path + '/support/product/kitchen.htm">キッチン</a></li>\
<li class="box-right"><a href="' + path + '/support/product/water_heater.htm">小型電気温水器</a></li>\
<li class="box-left"><a href="' + path + '/support/product/interior.htm">インテリア建材</a></li>\
<li class="box-center"><a href="' + path + '/support/product/bathroom.htm">浴室</a></li>\
<li class="box-right"><a href="' + path + '/support/product/faucet.htm">水栓金具</a></li>\
</ul>\
<ul>\
<li class="box-left"><a href="' + path + '/support/product/exterior.htm">エクステリア</a></li>\
<li class="box-center"><a href="' + path + '/support/product/powderroom.htm">洗面化粧室</a></li>\
<li class="box-right"><a href="' + path + '/support/product/equipment.htm">各種施設用設備機器</a></li>\
</ul>\
</div>\
<div class="box-bnr lxl-mdd-col">\
<ul>\
<li><a href="' + path + '/support/disaster/" class="imgover"><img src="' + path + '/common/pic/mdd/icon_disaster.png" width="220" height="60" alt="災害対策ガイド"></a></li>\
<li><a href="https://owners.lixil.co.jp" class="imgover" target="_blank"><img src="' + path + '/common/pic/mdd/bnr_loc.gif" width="220" height="60" alt="所有者登録から新しくなった「リクシルオーナーズクラブ」"></a></li>\
<li><a href="' + path + '/support/longterm_warranty/" class="imgover"><img src="' + path + '/common/pic/mdd/bnr_longterm.gif" width="220" height="60" alt="LIXIL長期保証サービス"></a></li>\
</ul>\
</div>\
</div>\
</div>\
<!--//#lxl-support --></li>\
<li id="lxl-corporate">\
<p><a href="' + path + '/corporate/" title="LIXILについて">LIXILについて</a></p>\
<div id="lxl-corporate-child" class="lxl-mdd" style="display:none;">\
<div class="lxl-mdd-arw"></div>\
<div class="lxl-mdd-close"><a href="javascript:void(0);" class="gMenuCloseBtn"><img src="' + path + '/common/pic/icon_close.gif" width="23" height="23" alt="閉じる"></a></div>\
<div class="lxl-mdd-inner clearfix">\
<div class="brColAll">\
<div class="lxl-mdd-col brk01">\
<ul>\
<li><a href="https://www.lixil.com/jp/about/" target="_blank"><span class="icon-blank">LIXILについて</span></a></li>\
</ul>\
</div>\
<div class="lxl-mdd-col brk01">\
<ul>\
<li><a href="https://www.lixil.com/jp/business/" target="_blank"><span class="icon-blank">LIXILの事業</span></a></li>\
</ul>\
</div>\
<div class="lxl-mdd-col brk01">\
<ul>\
<li><a href="https://www.lixil.com/jp/investor/" target="_blank"><span class="icon-blank">株主・投資家向け情報</span></a></li>\
</ul>\
</div>\
</div>\
<div class="brColAll l-spOnly">\
<h2><a href="' + path + '/corporate/">LIXILについて</a></h2>\
</div>\
<div class="lxl-mdd-col brk01">\
<h2 class="mb10"><a href="' + path + '/corporate/brand/">LIXILブランド</a></h2>\
<h2 class="mb10"><a href="' + path + '/corporate/sustainability/">持続可能な社会を目指して</a></h2>\
<ul>\
<li><a href="' + path + '/corporate/sustainability/community/">地域社会の中で</a></li>\
<li class="mb0"><a href="' + path + '/corporate/sustainability/employee/">従業員とともに</a></li>\
</ul>\
</div>\
<div class="lxl-mdd-col brk02">\
<h2 class="mb10"><a href="https://www.livingculture.lixil/" target="_blank">文化活動</a></h2>\
<ul>\
<li><a href="https://www.livingculture.lixil/about/" target="_blank">文化活動のあゆみ</a></li>\
<li><a href="https://www.livingculture.lixil/gallery/" target="_blank">ギャラリー・出版活動</a></li>\
<li><a href="https://www.livingculture.lixil/ilm/" target="_blank">ミュージアム活動</a></li>\
</ul>\
</div>\
<div class="lxl-mdd-col brk03">\
<h2 class="mb10"><a href="' + path + '/corporate/recruit/">採用情報</a></h2>\
<ul>\
<li><a href="' + path + '/corporate/recruit/about/">LIXILを知る</a></li>\
<li><a href="' + path + '/corporate/recruit/newgrads/">新卒採用（大学・大学院卒）</a></li>\
<li><a href="' + path + '/corporate/recruit/tech-college/">新卒採用（高専・専門卒）</a></li>\
</ul>\
</div>\
<div class="lxl-mdd-col brk04">\
<ul class="bdr-none">\
<li><a href="https://www.lixil.com/jp/news/" target="_blank">ニュースリリース</a></li>\
<li><a href="' + path + '/corporate/fr/">決算公告</a></li>\
</ul>\
<ul class="bdr-none">\
<li><a href="' + path + '/s/sports/">LIXIL×SPORTS</a></li>\
<li><a href="' + path + '/feel_the_moment/">LIXIL 2020スペシャルサイト</a></li>\
</ul>\
</div>\
</div>\
</div>\
<!--//#lxl-corporate --></li>\
<li id="lxl-biz">\
<p><a href="https://www.biz-lixil.com/" title="ビジネス向け" target="_blank">ビジネス向け</a></p>\
<!--//#lxl-biz --></li>\
<!--//#lxl-global-nav --></ul>\
<!--//#lxl-utility-area --></div>\
<!--//.lxl-header-inner --></div>\
';

$jq183("#lxl-header").append(head);
var suggestClickFlg = false;
$jq183("#lxl-search-area").on("focus", ".mf_finder_searchBox_query_input",function(){
	if( $jq183("#lxl-utility-area").hasClass("l-spMenuOn") ){
		$jq183('#lxl-search-area').stop(true,true).animate({'width':'72%'},300,'');
	}else{
		$jq183('#lxl-search-area').addClass('on');
		$jq183('#lxl-search-area').stop(true,true).animate({'width':'280px'},300,'');
	}
});
$jq183("#lxl-search-area").on("blur", ".mf_finder_searchBox_query_input",function(){
	//サジェストがクリックする時、伸びらないように
	if( suggestClickFlg ){ return ; }
	$jq183('#lxl-search-area').removeClass('on');
	if( $jq183("#lxl-utility-area").hasClass("l-spMenuOn") ){
		$jq183('#lxl-search-area').stop(true,true).animate({'width':'120px'},300,'');
	}else{
		$jq183('#lxl-search-area').stop(true,true).animate({'width':'120px'},300,'');
	}
});
$jq183("#lxl-search-area").on("mousedown", ".mf_finder_searchBox_suggest_link",function(e){
	suggestClickFlg = true;
});
