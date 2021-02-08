
function TextInput(){
		data=("検索する内容を入力してください");
		nodata=("");
	if(document.SearchArea.query.value == data){
		document.SearchArea.query.value=("");
		document.getElementById('InputBox').style.color = "#555555";
		}
	else if(document.SearchArea.query.value == nodata){
		document.SearchArea.query.value=("検索する内容を入力してください");
		document.getElementById('InputBox').style.color = "#999999";
		}
}
function textcolor(){
	document.getElementById('InputBox').style.color = "#999999";
	}
window.onload = textcolor;