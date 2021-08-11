    var allData = [{
	
        id: "d10",
        text: "放生池",
        x: "1530",
        y: "2392",
        markerFlag: true,
        sortIndex: '',
        title: "龙王殿",
        img: "images/d39_img.jpg", //图片地址
        audio: "images/d39_audio.mp3", //音频地址
        summary: "简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介", //简介
        content: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容", //内容
        longitude: "114.1662758718453", //经度
        latitude: "24.3443835255392", //纬度
	distance_user:'',
        }, {
            id: "d26",
            text: "弥勒佛像",
            x: "1764",
            y: "1906",
            markerFlag: true,
            sortIndex: '',
            title: "龙王殿",
            img: "images/d39_img.jpg", //图片地址
            audio: "images/d39_audio.mp3", //音频地址
            summary: "简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介", //简介
            content: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容", //内容
            longitude: "114.1670436188426", //经度
            latitude: "24.34445589923901", //纬度
	    distance_user:'',
        }, {
            id: "d30",
            text: "孝亲楼",
            x: "1575",
            y: "1610",
            markerFlag: true,
            sortIndex: '',
            title: "龙王殿",
            img: "images/d39_img.jpg", //图片地址
            audio: "images/d39_audio.mp3", //音频地址
            summary: "简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介", //简介
            content: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容", //内容
            longitude: "114.1677688568018", //经度
            latitude: "24.34437976044088", //纬度
	    distance_user:'',
        }, {
            id: "d32",
            text: "斋堂",
            x: "1770",
            y: "1664",
            markerFlag: true,
            sortIndex: '',
            title: "龙王殿",
            img: "images/d39_img.jpg", //图片地址
            audio: "images/d39_audio.mp3", //音频地址
            summary: "简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介", //简介
            content: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容", //内容
            longitude: "114.1680524160246", //经度
            latitude: "24.34408259496989", //纬度
	    distance_user:'',
        }, {
            id: "d39",
            text: "大雄宝殿",
            x: "2000",
            y: "1565",
            markerFlag: true,
            sortIndex: '',
            title: "大雄宝殿",
            img: "images/d39_img.jpg", //图片地址
            audio: "images/d39_audio.mp3", //音频地址
            summary: "简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介", //简介
            content: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容", //内容
            longitude: "114.1680356644548", //经度
            latitude: "24.34409677756745", //纬度
	    distance_user:'',
        },  {
            id: "d69",
            text: "正觉堂",
            x: "2346",
            y: "1005",
            markerFlag: true,
            sortIndex: '',
            title: "龙王殿",
            img: "images/d39_img.jpg", //图片地址
            audio: "images/d39_audio.mp3", //音频地址
            summary: "简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介", //简介
            content: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容", //内容
            longitude: "114.1692326337236", //经度
            latitude: "24.34345932813364", //纬度
	    distance_user:'',
        }, 
    ]


    var now_mp3 = ''; //当前播放音频
    var audioState = false; //播放状态
    //点击景点列表运动到当前景点
    function showInfo(id) {
        $(".jd_lists .lists").slideUp(100);
        var this_id = id;
        $("html,body").animate({
            scrollTop: $("#" + this_id).offset().top - $(window).height() / 2 + 10,
            scrollLeft: $("#" + this_id).offset().left - $(window).width() / 2
        })
        if (this_id) {
            var popupStr = '';
            $.each(allData, function(index, item) {
                //console.log(item);
                if (this_id == item.id) {
                    now_mp3 = item.audio;
                    //console.log(now_mp3);
                    popupStr += '<div class="mapcon_popup_inner">';
                    popupStr += '<div class="mapcon_popup_info">';
                    popupStr += '<h3 class="name" id="close"><span>' + item.text +item.longitude  +'</span><i></i></h3>';
                    popupStr += '<div class="info clearfix">';
                    popupStr += '<img class="coverimg" src="' + item.img + '" alt=""/>';
                    popupStr += '<div class="right">';
                    popupStr += '<p class="summary">' + item.summary + '</p>';
                    popupStr += '<div class="btns">';
                    popupStr += '<img id="play_img" class="btn_img play_bg" src="images/played_bg.png" alt="">';
                    popupStr += '<audio id="mp3_audio" type="audio/mpeg" src=""></audio>';
                    popupStr += '<img class="btn_img detail_bg" src="images/detail_bg.png" alt="">'
                    popupStr += '</div>';
                    popupStr += '</div>';
                    popupStr += '</div>';
                    popupStr += '</div>';
                    popupStr += '</div>';
                    $("#mapcon_modal").html(popupStr);
                }else{
                  audioState = false;
                }
            })

            $("#mapcon_modal").show();
            var modal_top = $("#mapcon_modal").height()+2;
            // console.log(modal_top);
            $("#mapcon_modal").animate({
                top: $("#" + this_id).offset().top - modal_top / 2,
                left: $("#" + this_id).offset().left

            })
        }
    }

    //关闭弹窗
    $("#mapcon_modal").on("click", "#close", function() {
        $("#mapcon_modal").hide();
        resetAudio();
    });

    // marker标记和文字动态铺陈
    var itemHtmlStr = '';
    $.each(allData, function(index, item) {
        itemHtmlStr += '<div class="mapcon_item item' + index + '" style="transform:translate3d(' + item.x + 'px,' + item.y + 'px,0px);z-index:100">';
        itemHtmlStr += '<div class="marker clearfix" id="' + item.id + '">';
        if (item.markerFlag) {
            itemHtmlStr += '<img data-name="' + item.id + '" class="marker_img" src="images/voice.png" alt="" style="display:block">';
        } else {
            itemHtmlStr += '<img data-name="' + item.id + '" class="marker_img" src="images/voice.png" alt="" style="display:none">';
        }
        itemHtmlStr += '<span class="marker_text">' + item.text + '</span>';
        itemHtmlStr += '</div>';
        itemHtmlStr += '</div>';
        $("#mapcon").html(itemHtmlStr);

    })

    var markerBtn = $("#mapcon .mapcon_item .marker .marker_img");
    //有图片标记
    $("#mapcon .mapcon_item .marker .marker_img").each(function() {
        var _this = $(this);
        _this.on('click', markerBtn, function(e) {
            console.log(e.target);
            console.log($(e.target).attr('data-name'));
            var mapId = $(e.target).attr('data-name');
            showInfo(mapId);

        })
    })
    //景点列表动态铺陈
    var jdLiStr = '';
    $.each(allData, function(index, item) {
        jdLiStr += '<li class="' + item.id + '">' + item.text + '</li>';
        $("#ul_lists").html(jdLiStr);

    })

    //点击景点列表
    var btnLi = $("#ul_lists li");
    $("#ul_lists li").each(function() {
        var _this = $(this);
        _this.on('click', btnLi, function(e) {
            //console.log(e.target);
            console.log($(e.target).attr('class'));
            var paramId = $(e.target).attr('class');
            showInfo(paramId);
        })
    })
//用文殊堂的long lat来作为开始的测试
var user_lon = '114.1691986785334';
var user_lat = '24.3437623233869';  //

    //点击景点列表bar显示和隐藏列表
$("#ft_tit").click(function() {
    $(".jd_lists .lists").slideToggle(100);
    alert(111);
    //add function to loop through a point and get distance between the user location and the points
    $.each(allData, function(index, item) {
        //console.log(item);
	//console.log(item.longitude);
	console.log(index);
	console.log(item.text);
	//variabla for calculating distances between user and points
	//ref: https://www.movable-type.co.uk/scripts/latlong.html
	//using Haversine formula
	earth_R = 6371e3;//Earth radius in meters
	phi1 = user_lat * Math.PI/180; //in radians
	phi2 = item.latitude * Math.PI/180;
	delta_phi = (item.latitude - user_lat) * Math.PI/180;
	delta_lamda = (item.longitude - user_lon) * Math.PI/180;
	dist_a = Math.sin(delta_phi / 2) * Math.sin(delta_phi/2)+Math.cos(phi1)*Math.cos(phi2)*Math.sin(delta_lamda/2)*Math.sin(delta_lamda/2);
	dist_c = 2*Math.atan2(Math.sqrt(dist_a),Math.sqrt(1-dist_a));
	item.distance_user = earth_R * dist_c;//in meters
	console.log(item.distance_user);
	//	console.log(Math.PI);
	
    })
    console.log('========sort the distance======');
    allData.sort((a,b)=>{
	return a.distance_user - b.distance_user;
    });
//    allData.forEach((e) => {
//	console.log(
    $.each(allData, function(index, item) {
	console.log(item.text);
	console.log(item.distance_user);
    })
    //distance calculation END
	if(navigator.geolocation){
	    navigator.geolocation.getCurrentPosition(onSuccess , onError);
	}else{
	    alert("您的浏览器不支持使用HTML 5来获取地理位置服务");
	}
	//定位数据获取成功响应
    function  onSuccess(position){
	user_lat = position.coords.latitude;
	user_lon = position.coords.longitude;
	console.log('user_lat=',user_lat);
	console.log('user_lon='+user_lon);
	
	    alert('纬度: '          + position.coords.latitude          + '\n' +
		  '经度: '         + position.coords.longitude         + '\n' +
		  '海拔: '          + position.coords.altitude          + '\n' +
		  '水平精度: '          + position.coords.accuracy          + '\n' +
		  '垂直精度: ' + position.coords.altitudeAccura)
	}
	//定位数据获取失败响应
	function onError(error) {
  switch(error.code)
	    {
		case error.PERMISSION_DENIED:
		alert("您拒绝对获取地理位置的请求");
    break;
    case error.POSITION_UNAVAILABLE:
    alert("位置信息是不可用的");
    break;
    case error.TIMEOUT:
    alert("请求您的地理位置超时");
    break;
    case error.UNKNOWN_ERROR:
    alert("未知错误");
      break;
  }
}
    })

    //点击图片关闭景点列表
    function hideList() {
        resetAudio();
        $(".jd_lists .lists").slideUp(100);
        $("#mapcon_modal").hide();
	//newly added to get location onClick
    }
    function playAudio() {
        var player = $("#mp3_audio")[0]; //将jquery对象转换成js对象
        if (audioState == true) {
            //console.log('1111');
            player.pause();
            $("#play_img").attr('src', 'images/played_bg.png');
            audioState = false;
        } else {
            //console.log('2222');
            player.src = now_mp3;
            player.load();
            player.play();
            $("#play_img").attr('src', 'images/playing_bg.gif');
            player.onended = function() {
                $("#play_img").attr('src', 'images/played_bg.png');
                audioState = false;
            }
            audioState = true;
        }
    }
    //播放
    $("#mapcon_modal").on("click", "#play_img", function() {
        //console.log('0000');
        playAudio();
    });

    //重置播放
    function resetAudio() {
        now_mp3 = '';
        audioState = false;
        var playBtn = $("#mp3_audio")[0]; //将jquery对象转换成js对象
        //console.log(playBtn,'9999');
        playBtn.pause();
        $("#play_img").attr('src', 'images/played_bg.png');
        
    }
