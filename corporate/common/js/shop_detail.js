//------------------------------------------

//  Definition of getCategory

//------------------------------------------
window.onload = function() {
	infoListObj = document.getElementById('info-list').getElementsByTagName('dl');
	for(i=0;i<infoListObj.length;i++){
		targetObj = infoListObj[i].parentNode.getElementsByTagName('ul')[0];
		infoListPObj = infoListObj[i].getElementsByTagName('p');
		infoListPObj[infoListPObj.length-1].innerHTML=infoListPObj[infoListPObj.length-1].innerHTML.replace(/\d\d\d\dǯ\d\d��\d\d�� ��/,'');
		categoryList = infoListPObj[infoListPObj.length-1].innerHTML.split(/<a[^>]+>/i);
		for(j in categoryList){
			categoryList[j]=categoryList[j].replace('</a>','');
			categoryList[j]=categoryList[j].replace('</A>','');
			categoryList[j]=categoryList[j].replace("��","");
			categoryList[j]=categoryList[j].replace(" ","");
			switch(categoryList[j]){
				case "���٥��":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic02.gif" width="48" height="16"></li>'; break;
				case "���Τ餻":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic03.gif" width="48" height="16"></li>'; break;
/*				case "�����":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic04.gif" width="48" height="16"></li>'; break;
				case "����":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic05.gif" width="48" height="16"></li>'; break;
				case "�����ǥ�":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic06.gif" width="48" height="16"></li>'; break;
				case "�ں�":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic07.gif" width="48" height="16"></li>'; break;
				case "�ź�":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic08.gif" width="48" height="16"></li>'; break;
				case "��ʪ":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic09.gif" width="48" height="16"></li>'; break;
				case "�緿����":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic10.gif" width="48" height="16"></li>'; break;
				case "�ġ���ǥ�":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic11.gif" width="48" height="16"></li>'; break;
				case "DIY����":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic12.gif" width="48" height="16"></li>'; break;
				case "����":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic13.gif" width="48" height="16"></li>'; break;
				case "����":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic14.gif" width="48" height="16"></li>'; break;
				case "���ۻ��":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic15.gif" width="48" height="16"></li>'; break;
				case "���Ȼ��":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic16.gif" width="48" height="16"></li>'; break;
				case "��ƻ����":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic17.gif" width="48" height="16"></li>'; break;
				case "�������":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic18.gif" width="48" height="16"></li>'; break;
				case "��������":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic19.gif" width="48" height="16"></li>'; break;
				case "�ɺ�����":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic20.gif" width="48" height="16"></li>'; break;
				case "������":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic21.gif" width="48" height="16"></li>'; break;
				case "������":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic22.gif" width="48" height="16"></li>'; break;
				case "�ڥå�":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic23.gif" width="48" height="16"></li>'; break;
				case "������":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic24.gif" width="48" height="16"></li>'; break;
				case "��������":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic25.gif" width="48" height="16"></li>'; break;
				case "��������":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic26.gif" width="48" height="16"></li>'; break;
				case "��ž��":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic27.gif" width="48" height="16"></li>'; break;
				case "����ƥꥢ":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic28.gif" width="48" height="16"></li>'; break;
				case "�����ƥ�":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic29.gif" width="48" height="16"></li>'; break;
				case "�ɻ�":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic30.gif" width="48" height="16"></li>'; break;
				case "�����������":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic31.gif" width="48" height="16"></li>'; break;
				case "����":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic32.gif" width="48" height="16"></li>'; break;
				case "����":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic33.gif" width="48" height="16"></li>'; break;
				case "����":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic34.gif" width="48" height="16"></li>'; break;
				case "��̳Ź��":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic35.gif" width="48" height="16"></li>'; break;
				case "�쥸�㡼":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic36.gif" width="48" height="16"></li>'; break;
				case "�ڲ�":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic37.gif" width="48" height="16"></li>'; break;
				case "�������":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic38.gif" width="48" height="16"></li>'; break;
				case "��ʪ":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic39.gif" width="48" height="16"></li>'; break;
				case "��ݻ��":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic40.gif" width="48" height="16"></li>'; break;
				case "���":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic41.gif" width="48" height="16"></li>'; break;
				case "����¾":  targetObj.innerHTML += '<li><img src="/common/images/shop_ic42.gif" width="48" height="16"></li>'; break;*/
				default: break;
			}
		}
		
		/*if(infoListPObj[infoListPObj.length-1].innerHTML.match(/���٥��/i)){
			infoListObj[i].className = 'event';
		}else{
			infoListObj[i].className = 'info';
		}*/
	}
	MM_preloadImages('../common/images/head_bt10on.gif','../common/images/head_bt11on.gif','../common/images/head_bt12on.gif','../common/images/head_bt13on.gif','../common/images/head_bt14on.gif');
	if(document.getElementById('allTopics'))
		feedLoad();
}
