<template>
  <div>
    <div id="container"></div>
      <div class="input-card" >
        <h3 style="line-height: 50px; color:#fff">轨迹回放控制</h3>
        <div class="input-item">
          <el-button type="primary" @click="startAnimation()" class="btn">开始回放</el-button>
          <el-button type="primary" @click="pauseAnimation" class="btn">暂停回放</el-button>
          <el-button type="primary" @click="resumeAnimation" class="btn">继续回放</el-button>
          <el-button type="primary" @click="stopAnimation" class="btn">停止回放</el-button>
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
      
      
      flag:false,
      
      
      
    };
  },
  mounted() {
   
    // this.currentAnimation();
    
    this.initMap()
    
  },
  beforeDestroy(){
    if(this.timer){
      window.clearInterval(this.timer)
    }
  },
  methods: {
  
    // sure_click() {
    //   this.$refs.dateForm.validate(valid => {
    //     if (valid) {
    //       linePersonnelLocus([
    //         window.hy.db.cookie.getValue("appId"),
    //         {
    //           safeHatNum: 1062001,
    //           startTime: this.dateForm.value1,
    //           endTime: this.dateForm.value2
    //         }
    //       ]).then(data => {
    //         if (data.statusCode == 200) {
    //           window.clearInterval(this.timer)
    //           this.h3tit = "历史人员轨迹";
    //           this.flag=true
    //           this.datecr = false;
    //           this.resetForm();
    //           this.lineArr = [];
    //           this.firstArr = [];
    //           data.result.forEach(item => {
    //             this.lineArr.push([item.lng, item.lat]);
    //             this.firstArr.push(data.result[0].lng, data.result[0].lat);
    //           });
    //           this.initMap();
    //           this.startAnimation();
    //         }
    //       });
    //     }
    //   });
    // },
    // chuxian() {
    //   this.datecr = true;
    //   window.clearInterval(this.timer)
    // },
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

      var passedPolyline = new AMap.Polyline({
        map: this.map,
        strokeColor: "#AF5", //线颜色
        //path: this.lineArr,
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 6 //线宽
        // strokeStyle: "solid"  //线样式
      });
      this.marker.on("moving", function(e) {
        passedPolyline.setPath(e.passedPath);
      });
      this.map.setFitView();
    },
    initMap() {
      this.map = new AMap.Map("container", {
        resizeEnable: true,//窗口大小调整
        center: this.firstArr,
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

      var passedPolyline = new AMap.Polyline({
        map: this.map,
        strokeColor: "#AF5", //线颜色
        //path: this.lineArr,
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 6 //线宽
        // strokeStyle: "solid"  //线样式
      });
      this.marker.on("moving", function(e) {
        passedPolyline.setPath(e.passedPath);
      });
      this.map.setFitView();
    },
    startAnimation() {
      this.marker.moveAlong(this.lineArr, 200);
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
    // currentAnimation() {
    //   this.flag=false;
    //   lineCurrentPosition([
    //       window.hy.db.cookie.getValue("appId"),
    //       { safeHatNum: 1062001 }
    //     ]).then(data => {
    //       if (data.statusCode == 200) {
    //         this.h3tit = "实时人员轨迹";
    //         this.lineArr = [];
    //         this.firstArr = [];
    //         data.result.forEach(item => {
    //           this.lineArr.push([item.lng, item.lat]);
    //           this.firstArr.push(data.result[0].lng, data.result[0].lat);
    //         })
    //         this.initMap();
    //         this.startAnimation();

    //       }
    //     });
    //     if(this.firstArr.length>0) {
    //       this.timer = setInterval(() => {
    //         lineCurrentPosition([
    //           window.hy.db.cookie.getValue("appId"),
    //           {safeHatNum: 1062001}
    //         ]).then(data => {
    //           if (data.statusCode == 200) {
    //             this.lineArr=[]
    //             data.result.forEach(item => {
    //               this.lineArr.push([item.lng, item.lat]);
    //             });
    //             this.initroad();
    //             this.startAnimation();
    //           }
    //         });
    //       }, 2000)

    //     }
    // }
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


