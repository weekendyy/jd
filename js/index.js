// 代码开始

window.onload=function()
{			
//顶部小广告
		$("#J_event>div>p").on("click",function(){
			$("#J_event").animate({
				height:0
			}); 
		})
//右侧滚动栏事件
		var listH=$(".h");
		var listHs=[];
		for (var k = 0; k < listH.length; k++) {
			listHs.push(listH[k].offsetTop);
		};
		$(".modulTwo").hide();
	window.onscroll=function()
	{
		var seckillTop=$("#seckill").offsetTop;//搜索栏位置
		var centerTop=$("#center").offsetTop;//享品质位置
		var searchs=$("#searchs");//搜索栏
		var leftList=$("#list");
		var nowScroll=scrollTop();//滚动位置

		// if (nowScroll>=seckillTop) //搜索栏
		// {searchs.style.display="block"}
		// else
		// {searchs.style.display="none"}

		// if (nowScroll>=centerTop) //滚动位置
		// {leftList.style.display="block"}
		// else
		// {leftList.style.display="none"}

		// 						//滚动位置颜色
		// if (listHs[0]<=nowScroll&&nowScroll<=listHs[1]) {

		// };
	}
// ---------------大广告------------大广告-----------------大广告----------------------------------------------
		var box=$("#fs_col2");
		var dir_l=$(".dir")[0];
		var dir_r=$(".dir")[1];
		var fsList=$("#fs_col2>ul>li");
		var fsImg=$("#fs_col2>img");
		var images = ["./images/01.jpg","images/02.jpg","images/03.jpg","images/04.jpg","images/05.jpg","images/06.jpg"];
		var indexBig=0;
						// 鼠标切换广告图
for (var i = 0; i < fsList.length; i++) {
	fsList[i].onmouseover=function()
	{
		clearInterval(timer);
		
		fsImg.attr("src",images[$(this).index()]);
		$(this).addClass('fs_first').siblings().removeClass("fs_first");
		indexBig=$(this).index();
	}
}; 
//-----------------------促销----公告-----------------------------------
	$(".j_news_head>a").on("mouseover",function(){
		$(".j_news_move").animate({
			left:$(this).position().left+8
		});
		if($(this).position().left==45){
			$(".modulOne").hide();
			$(".modulTwo").show();
		}else if($(this).position().left==0){
			$(".modulOne").show();
			$(".modulTwo").hide();
		}
	})
//方向显示与隐藏
box.onmouseover=function()
{
	dir_l.style.display="block";
	dir_r.style.display="block";
}
box.onmouseout=function()
{
	dir_l.style.display="none";
	dir_r.style.display="none";
}
dir_l.onmouseover=function()
{
	dir_l.style.backgroundColor="rgba(0,0,0,0.6)";
}
dir_l.onmouseout=function()
{
	dir_l.style.backgroundColor="rgba(0,0,0,0.1)";
}

dir_r.onmouseover=function()
{
	dir_r.style.backgroundColor="rgba(0,0,0,0.6)";
}
dir_r.onmouseout=function()
{
	dir_r.style.backgroundColor="rgba(0,0,0,0.1)";
}
// 话费----------------------------------------------------------------
var service=["话费","机票","酒店","游戏","企业购","电影票","加油卡","火车票","众筹","理财","礼品卡","白条"]
// var serviceImg=["0 -88px","0 -44px","-44px -88px","-88px 0","-88px -44px","0 0","-44px -44px","-88px -88px","-132px 0","-132px -44px","-132px -88px","-44px 0"]
var j_service_list=$("#j_service_list>ul>li");


for (var i = 0; i < j_service_list.length; i++) {
	j_service_list[i].children[1].innerHTML=service[i];
	// j_service_list[i].children[0].backgroundPosition="0 0";
};
// 京东秒杀------------------------------------------------------------------------------------------	
	var seckillLeft=$(".seckill-box-left")[0];
	var seckillRight=$(".seckill-box-right")[0];
	var skul=$(".sk_list_wrapper")[0].children[0];
	seckillLeft.onclick=function()//ul左移动
	{
		anim(skul,{"left":0})
	}
	seckillRight.onclick=function()//ul右移动
	{
		anim(skul,{"left":-1005})
	}
	var skli=skul.children;
	// for (var i = 0; i < skli.length; i++) {//小图片上下移动
	// 	skli[i].a=i;
	// 	skli[i].onmouseover=function()
	// 	{
	// 		var skImg=skli[this.a].children[0];
	// 		anim(skImg,{"top":-10})
	// 		// console.log(skImg)
	// 	}
	// 	skli[i].onmouseout=function()
	// 	{
	// 		var skImg=skli[this.a].children[0];
	// 		anim(skImg,{"top":0})
	// 		// console.log(skImg)
	// 	}
	// };
// 排行榜------------------------------------------------------------------------------------------	
var topMove=$("#top_tab_head_move");
var topUl=$(".top_tab_content")[0].children;
var topList=$(".top_tab_head")[0].children[0].children;
for (var i = 0; i < topList.length; i++) {
	topList[i].a=i;
	topList[i].onmouseover=function()
	{
		for (var i = 0; i < topList.length; i++) {
			topUl[i].className="none";
		};
		var locationMove=75*this.a;
		anim(topMove,{"left":locationMove})
		topUl[this.a].className="";
	}
};
$(".top_tab_head>ul>li").on("mouseover",function(){
	var left=$(this).position().left;
	$("#top_tab_head_move").animate({
		left:left
	},100);
})
// 领卷中心------------------------------------------------------------------------------------------
var couponList=$("#coupon>div>ul>li");
for (var i = 0; i < couponList.length; i++) {
	couponList[i].a=i;
	couponList[i].onmouseover=function()
	{
		var couponImg=couponList[this.a].children[0].children[1];
		anim(couponImg,{"right":0})
	}
	couponList[i].onmouseout=function()
	{
		var couponImg=couponList[this.a].children[0].children[1];
		anim(couponImg,{"right":15})
	}
};
//排行版------------------------------------------------------------
//导航栏------------------------------------------------------------------------------------------	
var lis=$("#list>ul>li");
var timer=null;
for (var i = 0; i < lis.length; i++) {
	lis[i].index=i;
	lis[i].onmouseover=function()
	{
		lis[this.index].className="list_no";
	}
}
for (var i = 0; i < lis.length; i++) {
	lis[i].index=i;
	lis[i].onmouseout=function()
	{
		lis[this.index].className="";
	}
}
// 导航栏滚动

	//执行移动
var at=0;
for (var i = 0; i < lis.length; i++) {
	lis[i].index=i;
	lis[i].onclick=function()
	{
		clearInterval(timer);
		at=scrollTop();
		var target= sum(this.index);
		timer=setInterval(function()
			{
				
				at+=(target-at)/10;
				window.scrollTo(0, at);
				if(parseInt(target-at)== 0)
				{
					clearInterval(timer);
				}
			},30)
	}
};
//返回
var ret=$("#ret");
ret.onclick=function()
{	
	target=1779;
	clearInterval(timer);
	timer=setInterval(function()
	{
			at+=(target-at)/10;
			window.scrollTo(0, at);
		if(parseInt(target-at)== 0)
		{
			clearInterval(timer);
		}
	},30)
}
	// 计算高度
function sum(i,listHs)
{
	var listH=$(".h");

	//储存高
	var listHs=[];
	for (var k = 0; k < listH.length; k++) {
		listHs.push(listH[k].offsetTop);
	};
	var res=listHs[i]
	
	return res;
}
//图片移动
var img=$("#img1>img");
for (var i = 0; i < img.length; i++) {
	img[i].index=i;
	img[i].onmouseover=function()
	{
		img[this.index].style.marginLeft="-10px";
	}
}
for (var i = 0; i < img.length; i++) {
	img[i].index=i;
	img[i].onmouseout=function()
	{
		img[this.index].style.marginLeft=0;
	}
	}
//---------------优品专辑-----------------------------
	$(".sup_list>li").on("mouseover",function(){
		$(this).addClass('no').siblings().removeClass('no');
		$(".sup_ul").css({
			left:-($(this).index())*380 
		});
		console.log(($(this).index())*380);
	})
}
//基本函数
function getElementsByClassName(ClassNmae)//getElementsByClassName ie6 7 8兼容
{
	if(document.getElementsByClassName)
	{
		return document.getElementsByClassName(ClassNmae);
	}
	else
	{
		var arrEles=[];//定义空数组
		//属于ie6，7，8，
		var allEles=document.getElementsByTagName("*");
		for (var i = 0; i < allEles.length; i++)
		{ 
			if (allEles[i].className==ClassNmae) 
			{
				arrEles.push(allEles[i]);
			}
		}
		return arrEles;
	}
}

function constant(ele,target)//匀速运动方法ele==ID，target==目标位置
{
	clearInterval(ele.timer);
	ele.timer=setInterval(function()
	{
		var step=ele.offsetLeft<target?10:-10;
		ele.style.left=ele.offsetLeft+step+"px";
		if(Math.abs(ele.offsetLeft-target)<10)
		{
			ele.style.left=target+"px";
			clearInterval(ele.timer);
		}
	},10)
}

function chenge(ele,attrName,target)// 单属性  变速运动
{

	clearInterval(ele.timer);
	ele.timer=setInterval(function()
	{
		var step=target<parseInt(getAttr(ele,attrName))?Math.floor((target-parseInt(getAttr(ele,attrName)))/10):Math.ceil((target-parseInt(getAttr(ele,attrName)))/10);
		
		ele.style[attrName]=parseInt(getAttr(ele,attrName))+step+"px";
		if(parseInt(getAttr(ele,attrName))-target==0)
		{
			clearInterval(ele.timer);
		}
	},10)
}

function anim(ele,json,func)//多属性同时变速运动 func回调函数
{
	clearInterval(ele.timer);
	ele.timer=setInterval(function()
	{
		var isStop=true;
		for(var attrName in json)
		{
			var step=null;
			if(attrName=="opacity")//判断是否为透明度
			{
				step = (json[attrName]*100-getAttrs(ele,attrName)*100)/10;
			}
			else
			{
				step = (json[attrName]-parseInt(getAttrs(ele,attrName)))/10;
			}

			step = step>0?Math.ceil(step):Math.floor(step);
			if(attrName=="opacity")//判断是否为透明度为期赋值。
			{
				ele.style[attrName]=(getAttrs(ele,attrName*100)+step)/100;
			}
			else if (attrName=="z-index")
			{
				ele.style.zIndex=json[attrName];
			}
			else
			{
				ele.style[attrName]=parseInt(getAttrs(ele,attrName))+step+"px";
			}
			var compare=(attrName=="opacity")?getAttrs(ele,attrName):parseInt(getAttrs(ele,attrName));//为停止计时器做准备
			if(compare!=json[attrName])
			{
				isStop=false;
			}
		}
			if(isStop)
			{
				clearInterval(ele.timer);
				if(func!=null)
				{
					func();//为回调函数 提供入口
				}
			}
	},10)
}

function getAttrs(ele,attrName)//获取外部样式值
{
	if (window.getComputedStyle(ele)[attrName]!=null)
	{
		 return window.getComputedStyle(ele)[attrName];
	}
	else
	{
		 return ele.currentStyle[attrName];
	}
}

function exclude(ele)//排除思想
{
	for (var i = 0; i < ele.length; i++) 
	{
		ele[i].className="";
	}
}
function scrollTop()//
	{//滚动兼容性
		if(window.pageYOffset!=null)
		{
			return window.pageYOffset;//ie9以上
		}
		else
		{
			return document.documentElement.scrollTop;//ie678;
		}
	}
