<template>
  <div>
    <div id="container"></div>
      <div class="input-card" >
        <h3 style="line-height: 50px; color:#fff">轨迹回放控制</h3>
        <div class="input-item">
          <div>运动速度{{speedCount}}</div>
          <el-button type="primary" @click="startAnimation()" class="btn">开始回放</el-button>
          <el-button type="primary" @click="pauseAnimation" class="btn">暂停回放</el-button>
          <el-button type="primary" @click="resumeAnimation" class="btn">继续回放</el-button>
          <el-button type="primary" @click="stopAnimation" class="btn">停止回放</el-button>
          <el-button type="primary" @click="startAdd()" class="btn">运动加速</el-button>
          <el-button type="primary" @click="startRed()" class="btn">运动减速</el-button>
          <el-button type="primary" @click="printData()" class="btn">打印数据</el-button>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      h3tit: "人员轨迹",
      timer:null,
      lineArr: [
        [116.478935, 39.997761],
        [116.478939, 39.997825],
        [116.478912, 39.998549],
        [116.478912, 39.998549],
        [116.478998, 39.998555],
        [116.478998, 39.998555],
        [116.479282, 39.99856],
        [116.479658, 39.998528],
        [116.480151, 39.998453],
        [116.480784, 39.998302],
        [116.480784, 39.998302],
        [116.481149, 39.998184],
        [116.481573, 39.997997],
        [116.481863, 39.997846],
        [116.482072, 39.997718],
        [116.482362, 39.997718],
        [116.483633, 39.998935],
        [116.48367, 39.998968],
        [116.484648, 39.999861]
      ],
      marker: {},
      map: {},
      firstArr: [116.478935, 39.997761],
      polyline: {},
      passedPolyline: {},
      markerSpeed: 200,//运动速度
      speedCount: 1,//速度计数
      havePassedLine:[],//已经运动的点
      NoPassedLine:[],//未运动的点
      lineLength:null,
    };
  },
  mounted() {
    setTimeout(() => {
      this.initMap()
      this.initroad()
    }, 1000);
  },
  beforeDestroy(){
    
  },
  methods: {
    //打印数据
    printData(){
      console.log(this.lineLength);
      console.log(this.havePassedLine);
      console.log(this.NoPassedLine);
    },
    initroad(){
      // 绘制轨迹
      this.polyline = new AMap.Polyline({
        map: this.map,
        path: this.lineArr,
        showDir: true,
        strokeColor: "#28F", //线颜色
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 6 //线宽
        // strokeStyle: "solid"  //线样式
      });
      //绘制过的轨迹
      var passedPolyline = new AMap.Polyline({
        map: this.map,
        strokeColor: "#AF5", //线颜色
        //path: this.lineArr,
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 6 //线宽
        // strokeStyle: "solid"  //线样式
      });
      this.marker.on("moving", function(e) {
        // console.log(e.passedPath)
        setTimeout(() => {
          this.lineLength=e.passedPath.length
        this.havePassedLine=e.passedPath
        }, 100);
        console.log(e.passedPath.length)
        console.log(e.passedPath)
        passedPolyline.setPath(e.passedPath);
        
      });
      this.map.setFitView();//合适的视口
    },
    initMap() {
      this.map = new AMap.Map("container", {
        resizeEnable: true,//窗口大小调整
        center: this.firstArr,//中心
        zoom: 20
      });

      this.marker = new AMap.Marker({
        map: this.map,
        position: this.firstArr,
        icon: "https://webapi.amap.com/images/car.png",
        offset: new AMap.Pixel(-26, -13),//调整图片偏移
        autoRotation: true,//自动旋转
        angle:-90,//图片旋转角度
      });
    },
    startAnimation() {
      this.speedCount = 1;
      this.markerSpeed = 200;
      this.marker.moveAlong(this.lineArr, this.markerSpeed);
    },
    pauseAnimation() {
      this.marker.pauseMove();
    },
    resumeAnimation() {
      this.marker.resumeMove();
    },
    stopAnimation() {
      this.marker.stopMove();
    },
    
    //加速
    startAdd() {
      if (this.markerSpeed < 1000) {
        this.markerSpeed = 200;
        this.speedCount++;
        this.speedCount = this.speedCount++;
        this.markerSpeed = this.markerSpeed * this.speedCount;
        this.marker.moveAlong(this.lineArr, this.markerSpeed);
      } else {
        this.speedCount = 5;
      }
    },
    //减速
    startRed() {
      if (this.markerSpeed > 200) {
        this.markerSpeed = 200;
        this.speedCount--;
        this.speedCount = this.speedCount--;
        console.log(this.speedCount);
        this.markerSpeed = this.markerSpeed * this.speedCount;
        this.marker.moveAlong(this.lineArr, this.markerSpeed);
      } else {
        this.marker.moveAlong(this.lineArr, 200);
        this.speedCount = 1;
      }
    },
  }
}
</script>
<style lang="less">
#container {
  height: 500px;
  width: 100%;
}

.input-card .btn {
  margin-right: 1.2rem;
  width: 9rem;
}

.input-card .btn:last-child {
  margin-right: 0;
}
</style>


