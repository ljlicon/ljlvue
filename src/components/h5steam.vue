<template>
  <div>
    <div class="h5videodiv">
      <video class="h5video" id="h5sVideo1" autoplay webkit-playsinline playsinline></video>
      <div class="playpause" id="playpause1"></div>
    </div>

    <div class="h5videodiv">
      <video class="h5video" id="h5sVideo2" autoplay webkit-playsinline playsinline></video>
      <div class="playpause" id="playpause2"></div>
    </div>

    <div class="h5videodiv">
      <video class="h5video" id="h5sVideo3" autoplay webkit-playsinline playsinline></video>
      <div class="playpause"></div>
    </div>

    <div class="h5videodiv">
      <video class="h5video" id="h5sVideo4" autoplay webkit-playsinline playsinline></video>
      <div class="playpause"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      v1: {}
    };
  },
  methods: {
    createH5Video() {
      let conf1 = {
        videoid: "h5sVideo1",
        protocol: this.$store.state.config.H5_STREAM_SERVER_PROTOCOL,
        host: this.$store.state.config.H5_STREAM_SERVER_HOST,
        rootpath: "rtsp://admin:ad53937301@192.168.8.63:554",
        token: "token1",
        hlsver: "v1",
        session: "c1782caf-b670-42d8-ba90-2342340ee83"
      };
      this.v1 = H5sPlayerCreate(conf1);
      this.v1.connect();
    },
    closeH5Video() {
      if (this.v1) {
        this.v1.disconnect();
        this.v1 = null;
        $(".h5video")
          .get(0)
          .pause();
      }
    }
  }
};
</script>
<style lang="less" scoped>
.h5video {
  width: 576px;
  height: 320px;
  border: 1px solid black;
  background-color: #000000;
}

.h5video1 {
  width: 100%;
  height: 100%;
  border: 1px solid black;
  background-color: #000000;
}

.h5videodiv {
  display: inline-block;
  position: relative;
}

.h5videodiv1 {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #000000;
}

.playpause {
  background-image: url(/img/media_play_pause_resume.png);
  background-repeat: no-repeat;
  width: 25%;
  height: 25%;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  margin: auto;
  background-size: contain;
  background-position: center;
}
</style>
