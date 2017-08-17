window.onload=function(){
	search();
	secondkill();
};
/*头部搜索*/
var search=function(){
	/*搜索框对象*/
	var search=document.getElementsByClassName('jd_header_box')[0];
	/*搜索框对象*/
	var banner=document.getElementsByClassName('jd_nav')[0];
	/*高度*/
    var height=banner.offsetHeight;
    window.onscroll=function(){
    	var top=document.body.scrollTop;
    	/*当滚动高度大于banner的高度的时候颜色不变*/
    	if(top>height){
    		search.style.background="rgba(201,21,35,0.85)";
    	}else{
    		var op=top/height*0.85;
    		search.style.background="rgba(201,21,35,"+op+")";
    	}
    	
    };
};

/*秒杀倒计时*/
var secondkill=function(){
	/*首先获取显示时间的6个框*/
	/*父盒子*/
	var parentTime=document.getElementsByClassName('sk_time')[0];
	/*span时间*/
	var time_list=parentTime.getElementsByClassName('num');
	console.log(time_list.length);
		var times=4*60*60;
	setInterval(function(){
	 times--;
	 var h=Math.floor(times/(60*60));
	 var m=Math.floor((times/60)%60);
	 var s=times%60;
	 console.log(h+"-"+m+"-");
	 time_list[0].innerHTML=h>10?Math.floor(h/10):0;
	  time_list[1].innerHTML=h%10;
	  
	  time_list[2].innerHTML=m>10?Math.floor(m/10):0;
	  time_list[3].innerHTML=m%10;
	  
	  time_list[4].innerHTML=s>10?Math.floor(s/10):0;
	  time_list[5].innerHTML=s%10;
	},1000);
}
