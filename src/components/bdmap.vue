<template>
  <div>
    <div id="controller" align="center">
      <input id="follow" type="checkbox">
      <span style="font-size:12px;">画面跟随</span>
      
      <input id="play" type="button" value="播放" @click="play()" >
      <input id="pause" type="button" value="暂停" @click="pause()" disabled>
      <input id="reset" type="button" value="重置" @click="reset()" disabled>
    </div>
    <div id="container"></div>
  </div>
</template>
<script >
// var points = [
//   new BMap.Point(114.001, 22.55),
//   new BMap.Point(114.0013, 22.55),
//   new BMap.Point(114.0016, 22.55),
//   new BMap.Point(114.002, 22.55),
//   new BMap.Point(114.003, 22.5505),
//   new BMap.Point(114.004, 22.55),
//   new BMap.Point(114.005, 22.55),
//   new BMap.Point(114.00505, 22.5498),
//   new BMap.Point(114.0051, 22.55),
//   new BMap.Point(114.00515, 22.55),
//   new BMap.Point(114.00525, 22.5504),
//   new BMap.Point(114.00537, 22.5495)
// ];

var map; //百度地图对象
var car; //汽车图标
var label; //信息标签
var centerPoint;
var timer; //定时器
// var index = 0; //记录播放到第几个point

var followChk, playBtn, pauseBtn, resetBtn; //几个控制按钮

export default {
  data() {
    return {
      points :[
        new BMap.Point(114.001, 22.55),
        new BMap.Point(114.0013, 22.55),
        new BMap.Point(114.0016, 22.55),
        new BMap.Point(114.002, 22.55),
        new BMap.Point(114.003, 22.5505),
        new BMap.Point(114.004, 22.55),
        new BMap.Point(114.005, 22.55),
        new BMap.Point(114.00505, 22.5498),
        new BMap.Point(114.0051, 22.55),
        new BMap.Point(114.00515, 22.55),
        new BMap.Point(114.00525, 22.5504),
        new BMap.Point(114.00537, 22.5495)
      ],
      index :0,
    };
  },
  methods: {
    init() {
      followChk = document.getElementById("follow");
      playBtn = document.getElementById("play");
      pauseBtn = document.getElementById("pause");
      resetBtn = document.getElementById("reset");
      let points=this.points
      let index=this.index
      //初始化地图,选取第一个点为起始点
      map = new BMap.Map("container");
      let view = map.getViewport(eval(points));
      let mapZoom = view.zoom; 
      // let centerPoint = view.center;
      // map.centerAndZoom(centerPoint,mapZoom);
      map.centerAndZoom(points[0],mapZoom);
      map.enableScrollWheelZoom();
      map.addControl(new BMap.NavigationControl());
      map.addControl(new BMap.ScaleControl());
      map.addControl(new BMap.OverviewMapControl({ isOpen: true }));

      //通过DrivingRoute获取一条路线的point
      var driving = new BMap.DrivingRoute(map);
      driving.search(
        points[0],
        points[points.length]
      );
      driving.setSearchCompleteCallback(function() {
        //得到路线上的所有point
        // points = driving
        //   .getResults()
        //   .getPlan(0)
        //   .getRoute(0)
        //   .getPath();
        //画面移动到起点和终点的中间
        centerPoint = new BMap.Point(
          (points[0].lng + points[points.length - 1].lng) / 2,
          (points[0].lat + points[points.length - 1].lat) / 2
        );
        map.panTo(centerPoint);
        //连接所有点
        map.addOverlay(
          new BMap.Polyline(points, {
            strokeColor: "black",
            strokeWeight: 5,
            strokeOpacity: 0.6
          })
        );
        //显示小车子
        label = new BMap.Label("", { offset: new BMap.Size(-20, -20) });
        car = new BMap.Marker(points[0]);
        car.setLabel(label);
        map.addOverlay(car);

        //点亮操作按钮
        playBtn.disabled = false;
        resetBtn.disabled = false;
      });
    },
    play() {
      playBtn.disabled = true;
      pauseBtn.disabled = false;
      let points=this.points
      let index=this.index
      let point = points[index];
      if (index > 0) {
        map.addOverlay(
          new BMap.Polyline([points[index - 1], point], {
            strokeColor: "blue",
            strokeWeight: 1,
            strokeOpacity: 1
          })
        );
      }
      label.setContent("经度: " + point.lng + "<br>纬度: " + point.lat);
      car.setPosition(point);
      this.index = index++;  
      console.log(index); 
      console.log(points.length); 
      
      if (followChk.checked) {
        map.panTo(point);
      }
      if (index <= points.length) {
        
        timer= setTimeout(() => {
          this.play();
          this.index=index
        }, 200);
        
      } else {
        playBtn.disabled = true;
        pauseBtn.disabled = true;
        map.panTo(point);
      }
      if(index==points.length){
          // console.log(index+'111')
          // this.index = 0;
          // car.setPosition(points[0]);
          // map.panTo(centerPoint);
          // followChk.checked = false;
          // playBtn.disabled = false;
          // pauseBtn.disabled = true;
          this.reset()
        }

    },
    
    pause() {
      playBtn.disabled = false;
      pauseBtn.disabled = true;

      if (timer) {
        clearTimeout(timer)
      }
    },
    reset() {
      let points=this.points
      
      followChk.checked = false;
      playBtn.disabled = false;
      pauseBtn.disabled = true;
      if (timer) {
        clearTimeout(timer);
      }
      this.index = 0;
      car.setPosition(points[0]);
      map.panTo(centerPoint);
    }
  },
  created() {},
  mounted() {
    this.init();
  }
};
</script>
<style lang='less' scoped>
#controller {
  width: 100%;
  border-bottom: 3px outset;
  height: 30px;
  filter: alpha(Opacity=100);
  -moz-opacity: 1;
  opacity: 1;
  z-index: 10000;
  background-color: lightblue;
}
#container {
  height: 500px;
}
</style>