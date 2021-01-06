/*--------------------------------------------------
 初期設定
 --------------------------------------------------*/
/*{{{*/

var resUrl           = "http://search.lixil.co.jp/";
var sIsearchJs       = resUrl + "common/js/";                 // 関連js設置場所
var sIsearchCss      = resUrl + "common/css/";                // 関連css設置場所
var sIsearchAcApi    = resUrl + "i_search_assist.php";        // データ取得先
var sIsearchAcTarget = ".searchBox";                                        // 対象inputタグ
var sIsearchAcLang   = "all";                                               // 言語 (all)
var bIsearchAcLower  = false;                                                // 小文字に変換 (true | false)
/*}}}*/

/*--------------------------------------------------
 初期化
 --------------------------------------------------*/
/*{{{*/
document.write('<link   type="text/css"        href="'+ sIsearchCss +'ac.css" rel="stylesheet">');
document.write('<script type="text/javascript" src="'+  sIsearchJs  +'jquery-ui-1.8.2.custom.min.js"></script>');

jQuery(function() {
    jQuery(sIsearchAcTarget).autocomplete({
        source: function(request, response) {
            jQuery.ajax({
                    url: sIsearchAcApi,
                    dataType: "jsonp",
                    data: {
                    ie:  'utf8',
                    max: '10',
                    la:  sIsearchAcLang,
                    q:   request.term
                },
                success: function(data) {
                    response(jQuery.map(data, function(item) {
                            if (bIsearchAcLower) {
                                return {
                                    label: item.word.toLowerCase(),
                                    value: item.word.toLowerCase()
                                }
                            } else {
                                return {
                                    label: item.word,
                                    value: item.word
                                }
                            }
                    }))
                }
            })
        }
    });
});
/*}}}*/

// vim: set syntax=javascript fdm=marker sw=4 ts=4:
