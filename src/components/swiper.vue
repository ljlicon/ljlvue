  <template>
  <div class="swiperBox">
    <md-card>
      <md-card-media>
        <!-- swiper -->
        <swiper :options="swiperOption">
          <swiper-slide>
            <div class="vBox">
              <div>
                <video controls="controls" name="media">
                  <source
                    src="https://vodkgeyttp8.vod.126.net/cloudmusic/eb79/core/5303/2a78ae2887ae7d9934bbd727028284f2.mp4?wsSecret=ca92e529a22077072d3060d0719421ad&wsTime=1554192339"
                    type="video/mp4"
                  >
                </video>
              </div>
              <h3>杭州市萧山区220kv变电工程线路项目现场监控1</h3>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="vBox">
              <div>
                <video controls="controls" name="media">
                  <source
                    src=""
                    type="video/mp4"
                  >
                </video>
              </div>
              <h3>杭州市萧山区220kv变电工程线路项目现场监控1</h3>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="vBox">
              <div>
                <video controls="controls" name="media">
                  <source
                    src=""
                    type="video/mp4"
                  >
                </video>
              </div>
              <h3>杭州市萧山区220kv变电工程线路项目现场监控1</h3>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="vBox">
              <div>
                <video controls="controls" name="media">
                  <source
                    src=""
                    type="video/mp4"
                  >
                </video>
              </div>
              <h3>杭州市萧山区220kv变电工程线路项目现场监控1</h3>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="vBox">
              <div>
                <video controls="controls" name="media">
                  <source
                    src=""
                    type="video/mp4"
                  >
                </video>
              </div>
              <h3>杭州市萧山区220kv变电工程线路项目现场监控1</h3>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="vBox">
              <div>
                <video controls="controls" name="media">
                  <source
                    src=""
                    type="video/mp4"
                  >
                </video>
              </div>
              <h3>杭州市萧山区220kv变电工程线路项目现场监控1</h3>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="vBox">
              <div>
                <video controls="controls" name="media">
                  <source
                    src=""
                    type="video/mp4"
                  >
                </video>
              </div>
              <h3>杭州市萧山区220kv变电工程线路项目现场监控1</h3>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="vBox">
              <div>
                <video controls="controls" name="media">
                  <source
                    src=""
                    type="video/mp4"
                  >
                </video>
              </div>
              <h3>杭州市萧山区220kv变电工程线路项目现场监控1</h3>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="vBox">
              <div>
                <video controls="controls" name="media">
                  <source
                    src=""
                    type="video/mp4"
                  >
                </video>
              </div>
              <h3>杭州市萧山区220kv变电工程线路项目现场监控1</h3>
            </div>
          </swiper-slide>
          
        </swiper>
      </md-card-media>
      <div class="swiper-button-prev" slot="button-prev" style="margin-top:140px;"></div>
      <div class="swiper-button-next" slot="button-next" style="margin-top:140px;"></div>
    </md-card>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label width="180"></el-table-column>

      <el-table-column prop="address" label></el-table-column>
      <el-table-column prop="reson" label></el-table-column>
      <el-table-column fixed="right" label width="150">
        <template>
          <el-button type="primary" size="small" @click="fullScreenHandle">查看</el-button>
          <el-button type="primary" size="small" @click="open">处理</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper /* { default global options } */);

// 导入格式化时间的插件
// import moment from 'moment'
// import { constants } from 'fs';
// //定义全局过滤器
// Vue.filter("dateFormat",function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
//  return  moment(dataStr).format(pattern)
// })

export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "fraction"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      tableData: [
        {
          date: "newDate",
          reson: "王小虎不小心把他的安全帽丢了",

          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "newDate",
          reson: "王小虎不小心把他的安全帽丢了",

          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "newDate",
          reson: "王小虎不小心把他的安全帽丢了",

          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "newDate",
          reson: "王小虎不小心把他的安全帽丢了",

          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    open() {
      this.$message("处理成功");
    },
    fullScreenHandle(player){
            console.log('111111')
            if(!this.player.isFullscreen()){  
                this.player.requestFullscreen();  
                this.player.isFullscreen(true);  
            }else{  
                this.player.exitFullscreen();  
                this.player.isFullscreen(false);  
            }  
        },
  }
};
</script>

<style lang='less' scoped>
.swiperBox {
  width: 90%;
  margin: 0 auto;
}
.swiper-container {
  height: auto !important;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
  height: 380px;
  background-color: #ccc;
  .vBox {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    div {
      flex: 9;
      video {
        width: 100%;
      }
    }
    h3 {
      flex: 1;
    }
  }
}
</style>
