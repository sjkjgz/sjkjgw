// 百度地图API功能
window.onload = function() {
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(113.37945079496, 23.020108222084);
	map.centerAndZoom(point, 12);

	map.enableScrollWheelZoom(); //启用滚轮放大缩小，默认禁用
	map.enableContinuousZoom(); //启用地图惯性拖拽，默认禁用
	
	var myIcon1 = new BMap.Icon("./img/35.png", new BMap.Size(40,100));
	 //创建小狐狸
	var pt5 = new BMap.Point(113.37945079496, 23.020108222084);//E:总部
    var marker5 = new BMap.Marker(pt5,{icon:myIcon1});  // 创建标注
    map.addOverlay(marker5);  // 将标注添加到地图中
    var opts5 = {//总部
	  width : 260,     // 信息窗口宽度
	  height: 140,     // 信息窗口高度
	  title : "<h5 style='font-weight:900;'>广州尚捷科技有限公司</h5><br/>" , // 信息窗口标题
	  enableMessage:true,//设置允许信息窗发送短息
	  message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
	}
	var infoWindow5 = new BMap.InfoWindow("<strong>电话：</strong>020-84783532<br/><strong>地址：</strong>广州番禺区员岗大道东路10号7号小镇创意园D栋106 ", opts5);  // 创建信息窗口对象 
	marker5.addEventListener("click", function(){  
		map.centerAndZoom(pt5, 15);
		map.openInfoWindow(infoWindow5,pt5); //开启信息窗口
	});
	map.enableScrollWheelZoom(true); 

}