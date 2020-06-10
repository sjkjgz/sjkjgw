// tab切换
$(function () {
    $('#rav a:first').tab('show');
})
$('#rav a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
})
// 地图
var mp = new BMap.Map("container");
mp.centerAndZoom(new BMap.Point(116.3964, 39.9093), 10);
mp.enableScrollWheelZoom();
var canvasLayer = new BMap.CanvasLayer({
    update: update
});
function update() {
    var ctx = this.canvas.getContext("2d");

    if (!ctx) {
        return;
    }

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    var temp = {};
    ctx.fillStyle = "rgba(50, 50, 255, 0.7)";
    ctx.beginPath();
    var data = [
        new BMap.Point(116.297047, 39.979542),
        new BMap.Point(116.321768, 39.88748),
        new BMap.Point(116.494243, 39.956539)
    ];

    for (var i = 0, len = data.length; i < len; i++) {
        var pixel = mp.pointToPixel(data[i]);
        ctx.fillRect(pixel.x, pixel.y, 30, 30);
    }
}
mp.addOverlay(canvasLayer);
// 百度地图API功能
// var map = new BMap.Map("container");
// var point = new BMap.Point(116.331398,39.897445);
// map.centerAndZoom(point,12);

// var geolocation = new BMap.Geolocation();
// geolocation.getCurrentPosition(function(r){
// 	if(this.getStatus() == BMAP_STATUS_SUCCESS){
// 		var mk = new BMap.Marker(r.point);
// 		map.addOverlay(mk);
// 		map.panTo(r.point);
// 		// alert('您的位置：'+r.point.lng+','+r.point.lat);
// 	}
// 	else {
// 		// alert('failed'+this.getStatus());
// 	}        
// },{enableHighAccuracy: true})
//加入我们
// $(function () {
//     var $lis = $('.clearfix li'), $content = $('.content'),
//         $items = $('.itemBox');
//     $lis.on('click', function () {
//         $lis.removeClass('active');
//         $(this).addClass('active');
//         $content.removeClass('active').eq($(this).index()).addClass('active');
//     });
//     $items.find('h3').on('click', function () {
//         var $parent = $(this).closest('.itemBox');
//         if ($parent.hasClass('active')) {
//             $parent.removeClass('active');
//         } else {
//             $items.removeClass('active');
//             $parent.addClass('active');
//         }
//     });
// })