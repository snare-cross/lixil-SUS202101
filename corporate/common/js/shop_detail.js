//------------------------------------------

//  Definition of getCategory

//------------------------------------------
window.onload = function() {
	infoListObj = document.getElementById('info-list').getElementsByTagName('dl');
	for(i=0;i<infoListObj.length;i++){
		targetObj = infoListObj[i].parentNode.getElementsByTagName('ul')[0];
		infoListPObj = infoListObj[i].getElementsByTagName('p');
		infoListPObj[infoListPObj.length-1].innerHTML=infoListPObj[infoListPObj.length-1].innerHTML.replace(/\d\d\d\d年\d\d月\d\d日 │/,'');
		categoryList = infoListPObj[infoListPObj.length-1].innerHTML.split(/<a[^>]+>/i);
		for(j in categoryList){
			categoryList[j]=categoryList[j].replace('</a>','');
			categoryList[j]=categoryList[j].replace('</A>','');
			categoryList[j]=categoryList[j].replace("・","");
			categoryList[j]=categoryList[j].replace(" ","");
			switch(categoryList[j]){
				case "イベント":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic02.gif" width="48" height="16"></li>'; break;
				case "お知らせ":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic03.gif" width="48" height="16"></li>'; break;
/*				case "生活館":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic04.gif" width="48" height="16"></li>'; break;
				case "資材館":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic05.gif" width="48" height="16"></li>'; break;
				case "ガーデン":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic06.gif" width="48" height="16"></li>'; break;
				case "木材":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic07.gif" width="48" height="16"></li>'; break;
				case "電材":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic08.gif" width="48" height="16"></li>'; break;
				case "金物":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic09.gif" width="48" height="16"></li>'; break;
				case "大型機械":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic10.gif" width="48" height="16"></li>'; break;
				case "ツールデポ":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic11.gif" width="48" height="16"></li>'; break;
				case "DIY教室":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic12.gif" width="48" height="16"></li>'; break;
				case "工具":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic13.gif" width="48" height="16"></li>'; break;
				case "塗料":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic14.gif" width="48" height="16"></li>'; break;
				case "建築資材":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic15.gif" width="48" height="16"></li>'; break;
				case "農業資材":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic16.gif" width="48" height="16"></li>'; break;
				case "水道用品":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic17.gif" width="48" height="16"></li>'; break;
				case "ワーク用品":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic18.gif" width="48" height="16"></li>'; break;
				case "防犯用品":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic19.gif" width="48" height="16"></li>'; break;
				case "防災用品":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic20.gif" width="48" height="16"></li>'; break;
				case "タイル":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic21.gif" width="48" height="16"></li>'; break;
				case "日用品":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic22.gif" width="48" height="16"></li>'; break;
				case "ペット":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic23.gif" width="48" height="16"></li>'; break;
				case "アクア":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic24.gif" width="48" height="16"></li>'; break;
				case "飲料食品":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic25.gif" width="48" height="16"></li>'; break;
				case "カー用品":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic26.gif" width="48" height="16"></li>'; break;
				case "自転車":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic27.gif" width="48" height="16"></li>'; break;
				case "インテリア":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic28.gif" width="48" height="16"></li>'; break;
				case "カーテン":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic29.gif" width="48" height="16"></li>'; break;
				case "壁紙":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic30.gif" width="48" height="16"></li>'; break;
				case "畳･襖･障子":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic31.gif" width="48" height="16"></li>'; break;
				case "家電":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic32.gif" width="48" height="16"></li>'; break;
				case "照明":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic33.gif" width="48" height="16"></li>'; break;
				case "時計":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic34.gif" width="48" height="16"></li>'; break;
				case "事務店舗":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic35.gif" width="48" height="16"></li>'; break;
				case "レジャー":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic36.gif" width="48" height="16"></li>'; break;
				case "切花":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic37.gif" width="48" height="16"></li>'; break;
				case "園芸用品":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic38.gif" width="48" height="16"></li>'; break;
				case "植物":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic39.gif" width="48" height="16"></li>'; break;
				case "園芸資材":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic40.gif" width="48" height="16"></li>'; break;
				case "園芸":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic41.gif" width="48" height="16"></li>'; break;
				case "その他":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic42.gif" width="48" height="16"></li>'; break;*/
				default: break;
			}
		}
		
		/*if(infoListPObj[infoListPObj.length-1].innerHTML.match(/イベント/i)){
			infoListObj[i].className = 'event';
		}else{
			infoListObj[i].className = 'info';
		}*/
	}
	MM_preloadImages('../common/images/head_bt10on.gif','../common/images/head_bt11on.gif','../common/images/head_bt12on.gif','../common/images/head_bt13on.gif','../common/images/head_bt14on.gif');
	if(document.getElementById('allTopics'))
		feedLoad();
}
