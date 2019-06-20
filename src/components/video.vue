  <template>
  <div class="vvv">
    <video
      id="myPlay"
      class="video-js vjs-default-skin vjs-big-play-centered"
      preload="auto"
    >
      <source src="rtmp://192.168.9.15/live/test" type="rtmp">
    </video>
    <el-button type="primary" @click="fullScreen" style="margin-top:30px;">全屏</el-button>
  </div>
</template>

<script>
//视频插件包
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-flash";
import SWF_URL from "videojs-swf/dist/video-js.swf";
videojs.options.flash.swf = SWF_URL; // 设置flash路径，Video.js会在不支持html5的浏览中使用flash播放视频文件

export default {
  data() {
    return {
      mytime: null,
      VideoOptions: {
        //监控控件
        autoplay: true, // 是否自动播放
        muted: false, // 是否静音
        // controls: true,
        fluid: true, // 宽高自适应
        techOrder: ["flash"]
      }
    };
  },
  methods: {
    fullScreen() {
      let width = window.screen.width;
      let height = window.screen.height;
      let elem = document.getElementById("myPlay");
      this.requestFullScreen(elem);
    },
    requestFullScreen(element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      }
      //FireFox
      else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      }
      //Chrome等
      else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
      }
      //IE11
      else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
  },

  mounted() {
    this.player1 = videojs("myPlay", this.VideoOptions);
    this.mytime = setInterval(() => {
      this.player1.player();
    }, 1000);
  },
  destroyed() {
    clearInterval(this.mytime);
    this.player1.dispose();
  }
};
</script>
<style lang='less' scoped>
video {
  width: 100%;
  box-sizing: border-box;
  padding: 20px 20px;
  height: 100%;
}
.vjs-tech {
  pointer-events: none;
}
.vvv {
  width: 800px;
  margin: auto;
}
</style>