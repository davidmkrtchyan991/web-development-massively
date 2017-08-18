var menuIds=['id1','id2','id3'];

function showMenu(clickedHref,divID){	
	for(var i=0;i<menuIds.length;i++){
		if(menuIds[i]!=divID){
			document.getElementById(menuIds[i]).style.display='none';
		}
	}
	document.getElementById(divID).style.display='block';
}
