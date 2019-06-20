<template>
  <div class="myVideoBox">
    <div class="videoBoxLeft"></div>
    <div class="videoBoxContral">
      <div class="cloudContral">
        <h3 @click="videoControl()">云台控制</h3>
        <div class="contralBox">
          <div class="cloudContralLeft">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="cloudContralRight">
            <div>
              <span></span>
              <span>调焦</span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span>聚焦</span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span>光圈</span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div class="downLoad">
        <h3>
          <span>下载</span>
          <span @click="videoDownload()" id="download">
            下载到本地
            <img src="../assets/images/download_ico.png" alt>
          </span>
        </h3>
        <div class="chooseTime">
          
          <el-form :inline="true" :model="dateForm" :rules="dateFormRules" ref="dateForm">
            <el-form-item prop="value" label="选择时间段">
              <el-date-picker
              v-model="dateForm.value"
                type="datetimerange"
                align="center"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['8:00:00', '12:00:00']"
              ></el-date-picker>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="videoTape"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dateForm: {
        value: ""
      },
      dateFormRules: {
        value: [{ required: true, message: "请选择录像事件", trigger: "blur" }]
      }
    };
  },
  methods: {
    videoDownload() {
      this.$refs.dateForm.validate(v=>{
        if(v){
      console.log("下载资源");
      console.log(this.dateForm.value);
      this.dateForm.value=""
        }
      })
      
    },
    videoControl(){
      if(true){
        this.axios.post('video/control',{cameraId:1,dwPTZCommand:2,dwStop:0}).then(res=>{
          console.log(res)
        })
      }
    }
  },
  beforeCreate() {
    console.log('beforeCreate1')
    setTimeout(() => {
      console.log('beforeCreate')
    }, 100);
  },
async created() {
    console.log('created1')
    console.log('created3')
    
    await ((()=>{
      console.log('created1.5')
      setTimeout(() => {
            console.log('awaitcreated2')
          });
    })())
    setTimeout(() => {
      console.log('4created')
    });
  },
  beforeMount() {
    console.log('beforeMount1')
    setTimeout(() => {
      console.log('beforeMount')
    }, 100);
  },
  mounted() {
    console.log('mounted')
    setTimeout(() => {
      console.log('mounted')
    }, 100);
  },
};
</script>
<style lang="less" scoped>
.myVideoBox {
  box-sizing: border-box;
  width: 100%;
  height: 600px;
  padding: 10px;
  background-color: rgb(27, 143, 172);
  display: flex;
  .videoBoxLeft {
    flex: 7;
    background-color: #fff;
    margin-right: 10px;
  }
  .videoBoxContral {
    flex: 2;
    display: flex;
    flex-direction: column;
    .cloudContral {
      flex: 4;
      background-color: #fff;
      margin-bottom: 10px;
      h3 {
        font-size: 20px;
        color: #8d8c8e;
        background-color: #212430;
        line-height: 35px;
      }
      .contralBox {
        display: flex;
        height: 190px;
        background-color: #1a1c26;
        .cloudContralLeft {
          flex: 3;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          height: 100%;
          justify-content: space-around;
          span {
            width: 40px;
            height: 40px;
            margin-top: 10px;
            border: 1.5px solid #2b3040;
            border-radius: 3px;
          }
          span:nth-of-type(1) {
            background: url(../assets/images/leftup_ico.png) no-repeat;
          }
          span:nth-of-type(2) {
            background: url(../assets/images/up_ico.png) no-repeat;
          }
          span:nth-of-type(3) {
            background: url(../assets/images/rightup_ico.png) no-repeat;
          }
          span:nth-of-type(4) {
            background: url(../assets/images/left_ico.png) no-repeat;
          }
          span:nth-of-type(5) {
            background: url(../assets/images/refresh_ico.png) no-repeat;
          }
          span:nth-of-type(6) {
            background: url(../assets/images/right_ico.png) no-repeat;
          }
          span:nth-of-type(7) {
            background: url(../assets/images/leftdown.png) no-repeat;
          }
          span:nth-of-type(8) {
            background: url(../assets/images/down_ico.png) no-repeat;
          }
          span:nth-of-type(9) {
            background: url(../assets/images/rightdown.png) no-repeat;
          }
          span:hover {
            border: 1.5px solid #54dff7;
          }
        }
        .cloudContralRight {
          flex: 2;
          div {
            height: 33.3%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            padding: 10px 10px;
            span {
              flex: 1;
              border: 1.5px solid #2b3040;
              border-radius: 3px;
              width: 40px;
              height: 40px;
              color: #a1a0a0;
              font-size: 12px;
              box-sizing: border-box;
              padding: 5px;
            }
            span:nth-of-type(1) {
              background: url(../assets/images/add_ico.png) no-repeat;
            }

            span:nth-of-type(2) {
              line-height: 40px;
              border: 0px solid #fff;
            }
            span:nth-of-type(3) {
              background: url(../assets/images/reduce_ico.png) no-repeat;
            }
            span:nth-of-type(1):hover {
              border: 1.5px solid #54dff7;
            }
            span:nth-of-type(3):hover {
              border: 1.5px solid #54dff7;
            }
          }
        }
      }
    }
    .downLoad {
      flex: 2;
      background-color: #1a1c26;
      margin-bottom: 10px;
      h3 {
        font-size: 20px;
        color: #8d8c8e;
        height: 35px;
        background-color: #212430;
        line-height: 35px;

        span {
          line-height: 35px;
        }
        span:nth-of-type(1) {
          float: left;
          margin-left: 10px;
        }
        span:nth-of-type(2) {
          float: right;
          margin-right: 10px;
          img {
            vertical-align: middle;
          }
        }
        span:nth-of-type(2):hover {
          cursor: pointer;
        }
      }
      .chooseTime {
        span {
          color: #fff;
        }
      }
    }
    .videoTape {
      flex: 4;
      background-color: #fff;
    }
  }
}
</style>

