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
			} else{ document.getElementById('allTopics').innerHTML = '��������Υ֥饦���Ǥ������̤Τ��Τ餻�����ˤʤ뤳�Ȥ��Ǥ��ޤ���'; }
		}
		else{
			document.getElementById('allTopics').innerHTML = '��������Υ֥饦���Ǥ������̤Τ��Τ餻�����ˤʤ뤳�Ȥ��Ǥ��ޤ���';
		}
	}
}

function nowLoading(count) {
	if(count%3 != 0){
		document.getElementById('allTopics').innerHTML += '��';
	}else{
		document.getElementById('allTopics').innerHTML = '�ɤ߹����桦';
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
	var xml = new JKL.ParseXML( url );  // JKL.ParseXML���֥������Ȥ�����
	var func = function ( data )        // �ƤӽФ���ؿ����������
	{  
	  onloaded1( data );                //������Хå�
	}
	xml.async( func );                  // �ƤӽФ���ؿ�����ꤹ��
	xml.parse();                        // ��������ɡ����ϡ��ؿ��ƤӽФ�����
	
	
	
	/*var url = '/sample.rdf';
	var pars = 'someParameter=ABC';
	var myAjax = new Ajax.Updater( 'news', url, { method: 'get', parameters: pars });*/
}

//RSS��������˵�ư���륳����Хå��ؿ�
function onloaded1(xml)
{
	var data = "";
	
	//rdf:RDF���ǰʲ���item���Ǥ���֤˽���
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
		
		//������HTML����
		data += '<a href="'+xml["rdf:RDF"].item[i].link+'">';
		data += xml["rdf:RDF"].item[i].title;
		data += '</a>';
		data += '<br>';
		data += xml["rdf:RDF"].item[i].description+'<br>';
		data += xml["rdf:RDF"].item[i]["dc:date"]+' | '+xml["rdf:RDF"].item[i]["dc:subject"]+'<br><br>';
	}

	//����
	document.getElementById('allTopics').innerHTML = data;
}