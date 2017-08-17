window.onload=function(){
	checkBox();
	deleteFuc();
}
/*复选框*/
var checkBox=function(){
	var checkBoxList=document.getElementsByClassName("jd_check_box");
	console.log(checkBoxList.length);
	for (var i=0; i<checkBoxList.length;i++){
		checkBoxList[i].onclick=function(){
			var hasChecked=this.getAttribute('checked');
			if(hasChecked!==null){
				this.removeAttribute('checked');
			}else{
				this.setAttribute('checked','');
			}
		}
	}
}
/*点删除弹出动画*/
var deleteFuc=function(){
	/*取到删除按钮的集合*/
	var deleteList=document.getElementsByClassName('delete_box');
	/*弹出层*/
	var win=document.getElementsByClassName('jd_win')[0];
	/*弹出层的子盒子*/
	var winBox=document.getElementsByClassName('jd_win_box')[0];
	var up;
	for (var i=0;i<deleteList.length;i++){
		deleteList[i].onclick=function(){
			win.style.display='block';
			winBox.className='jd_win_box jumpOut';
			
			deleteObj=this;
			/*把up设为全局变量*/
		    up = deleteObj.getElementsByClassName('delete_top')[0];
			var down= deleteObj.getElementsByClassName('delete_bot')[0];
			console.log(up);
			up.style.transition='all 1s ease 0s';
			up.style.webkitTransition='all 1s ease 0s';
			up.style.transform='translateY(-5px) translateX(-2px) rotate(-45deg)';
			up.style.webkitTransform='translateY(-5px) translateX(-2px) rotate(-45deg)';
		}
	}
	/*点取消隐藏。并且垃圾箱状态改变*/
	winBox.getElementsByClassName('cancel')[0].onclick=function(){
		win.style.display='none';
		winBox.className='jd_win_box';
		/*点击了该对象up才存在，否则不存在*/
		if(up){
			up.style.transform='translateY(-5px) translateX(-2px) rotate(0deg)';
			up.style.webkitTransform='translateY(-5px) translateX(-2px) rotate(0deg)';
			}
	}
	winBox.getElementsByClassName('submit')[0].onclick=function(){
		
	}
}
