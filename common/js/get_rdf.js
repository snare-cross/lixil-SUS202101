// JavaScript Document
var timerID=0;
var count=0;
function feedLoad(){
	if(count != 6){
		count++;
		timerID = setTimeout('nowLoading(count)',500);
	}
	else{
		UA = getUserAgent();
		if(UA){
			if(document.getElementById('allTopics')){
				getRDF();
			} else{ document.getElementById('allTopics').innerHTML = 'ご使用中のブラウザでは全国共通のお知らせをご覧になることができません。'; }
		}
		else{
			document.getElementById('allTopics').innerHTML = 'ご使用中のブラウザでは全国共通のお知らせをご覧になることができません。';
		}
	}
}

function nowLoading(count) {
	if(count%3 != 0){
		document.getElementById('allTopics').innerHTML += '・';
	}else{
		document.getElementById('allTopics').innerHTML = '読み込み中・';
	}
	clearTimeout(timerID);
	feedLoad();
}

function getUserAgent() {
	/* user agent */
	var _agent = navigator.userAgent.toLowerCase();
	var _an    = navigator.appName;
	var _ua    = navigator.userAgent;
	
	/* platform */
	var _win = (_agent.indexOf('win') != -1);
	var _mac = (_agent.indexOf('mac') != -1);
	
	/* browser version */
	var _major = parseInt(navigator.appVersion);
	var _minor = parseFloat(navigator.appVersion);
	
	/* internet explorer */
	var _ie    = (_agent.indexOf('msie ') != -1);
	
	/* netscape */
	var _ns    = ((_agent.indexOf('mozilla') != -1) && (_agent.indexOf('compatible') == -1));
	var _ns4   = (_ns && (_major == 4));
	
	/* safari */
	var _saf   = (_ua.indexOf("Safari") != -1);
	
	/* opera */
	var _opera  = (_agent.indexOf('opera') != -1);
	
	/* Mac OS */
	var _mac_os10_ie = (_ua.indexOf('MSIE 5.2') != -1) || ((_ua.indexOf('mozilla') != -1) && (_ua.indexOf('Mac OS X') != -1));
	var _mac_os10_ns = (_ua.indexOf('Mac OS X') != -1);
	
	/* result */
	if(((_win||_mac) && _ns4) || (_mac && _ie && (!_opera)) || (_ua.match(/opera 7/i)) || (_ua.match(/Netscape6/i)))
		return false;
		
	else
		return true;
}

function getRDF()	{
	var url = '/sample.rdf';
	var xml = new JKL.ParseXML( url );  // JKL.ParseXMLオブジェクトを生成
	var func = function ( data )        // 呼び出し先関数を定義する
	{  
	  onloaded1( data );                //コールバック
	}
	xml.async( func );                  // 呼び出し先関数を指定する
	xml.parse();                        // ダウンロード〜解析〜関数呼び出しする
	
	
	
	/*var url = '/sample.rdf';
	var pars = 'someParameter=ABC';
	var myAjax = new Ajax.Updater( 'news', url, { method: 'get', parameters: pars });*/
}

//RSSを受信時に起動するコールバック関数
function onloaded1(xml)
{
	var data = "";
	
	//rdf:RDF要素以下のitem要素を順番に処理
	for(i=0;i<xml["rdf:RDF"].item.length-1;i++)
	{
		
		var dd = new Date();
		dd.setW3CDTF( xml["rdf:RDF"].item[i]["dc:date"] );
		var min = ""+dd.getMinutes();
		if ( min.length < 2 ) min = "0" + min;
		var hour = ""+dd.getHours();
		if ( hour.length < 2 ) hour = "0" + hour;
		var date = dd.getFullYear() + "/" + (dd.getMonth()+1) + "/" +
							 dd.getDate() + " " + hour + ":" + min;
		xml["rdf:RDF"].item[i]["dc:date"] = date;
		
		//出力用HTMLを作る
		data += '<a href="'+xml["rdf:RDF"].item[i].link+'">';
		data += xml["rdf:RDF"].item[i].title;
		data += '</a>';
		data += '<br>';
		data += xml["rdf:RDF"].item[i].description+'<br>';
		data += xml["rdf:RDF"].item[i]["dc:date"]+' | '+xml["rdf:RDF"].item[i]["dc:subject"]+'<br><br>';
	}

	//出力
	document.getElementById('allTopics').innerHTML = data;
}