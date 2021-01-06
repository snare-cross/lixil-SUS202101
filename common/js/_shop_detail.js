//------------------------------------------
//  Definition of getCategory
//------------------------------------------

window.onload = function() {
	infoListObj = document.getElementById('info-list').getElementsByTagName('dl');
	//alert(infoListObj.length);
	
	for(i=0;i<infoListObj.length;i++){
		infoListPObj = infoListObj[i].getElementsByTagName('p');
		if(infoListPObj[infoListPObj.length-1].innerHTML.match(/ƒCƒxƒ“ƒg/i)){
			infoListObj[i].className = 'event';
		}else{
			infoListObj[i].className = 'info';
		}
	}
	
	MM_preloadImages('../common/images/head_bt10on.gif','../common/images/head_bt11on.gif','../common/images/head_bt12on.gif','../common/images/head_bt13on.gif','../common/images/head_bt14on.gif');
	
	if(document.getElementById('allTopics'))
		feedLoad();
}