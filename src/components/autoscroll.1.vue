<template>
    <div class="duty_box">
        <h5 class="h5_title">新闻动态</h5>
        <div id="duty">
          <ul id="express">
            <li>
              <img src="./img/map_box.png">
              <span>8月20日，李明于9:32从梁垛河闸出海执行3#风机基础防腐蚀检</span>
            </li>
            <li>
              <img src="./img/map_box.png">
              <span>8月20日，李明于9:32从梁垛河闸出海执行3#风机基础防腐蚀检</span>
            </li>
            <li>
              <img src="./img/map_box.png">
              <span>8月20日，李明于9:32从梁垛河闸出海执行3#风机基础防腐蚀检</span>
            </li>
            <li>
              <img src="./img/map_box.png">
              <span>8月20日，李明于9:32从梁垛河闸出海执行3#风机基础防腐蚀检</span>
            </li>
            <li>
              <img src="./img/map_box.png">
              <span>8月20日，李明于9:32从梁垛河闸出海执行3#风机基础防腐蚀检</span>
            </li>
            <li>
              <img src="./img/map_box.png">
              <span>8月20日，李明于9:32从梁垛河闸出海执行3#风机基础防腐蚀检</span>
            </li>
            <li>
              <img src="./img/map_box.png">
              <span>8月20日，李明于9:32从梁垛河闸出海执行3#风机基础防腐蚀检</span>
            </li>
            <li>
              <img src="./img/map_box.png">
              <span>8月20日，李明于9:32从梁垛河闸出海执行3#风机基础防腐蚀检</span>
            </li>

          </ul>
        </div>
      </div>
</template>
<script>
import $ from "jquery";
var scrollTime;
export default {
  data() {
    return {};
  },
  beforeDestroy() {
    clearInterval(scrollTime);
  },
  mounted() {
    this.movedome();
  },
  methods: {
    movedome() {
      var margintop = 0; //上边距的偏移量
      var stop = false;
      scrollTime = setInterval(function() {
        if (stop == true) {
          return;
        }
        $("#express")
          .children("li")
          .first()
          .animate({ "margin-top": margintop-- }, 0, function() {
            var $li = $(this);
            if (!$li.is(":animated")) {
              //第一个li的动画结束时
              if (-margintop > $li.height()) {
                $li.css("margin-top", "0px").appendTo($("#express"));
                margintop = 0;
              }
            }
          });
      }, 100);

      //鼠标放到快递信息(ul)上时
      $("#express").hover(
        function() {
          $(this).css("cursor", "pointer");
          stop = true; //停止动画
        },
        function() {
          stop = false; //开始动画
        }
      );
    } //新闻动态
  }
};
</script>
<style lang="less" scoped>
.duty_box {
  position: relative;
  padding: 1%;
  position: absolute;
  top: 38%;
  width: 100%;
  box-sizing: border-box;
  height: 31%;
  border: 1px solid red;
}
.duty_box .h5_title {
  position: absolute;
  left: 12px;
  top: 4px;
}
.h5_title {
  width: auto;
  font-size: 15px;
  color: #000;
  line-height: 20px;
  text-align: center;
}
#express li {
  height: 40px;
  overflow: hidden;
}
#express li img {
  width: 30px;
  height: 30px;
  float: left;
  margin-top: 5px;
}
#express li span {
  display: inline-block;
  float: left;
  line-height: 40px;
  font-size: 16px;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 80%;
  margin-left: 3%;
}
#duty {
  width: 100%;
  height: 95%;
  margin-top: 1%;
  overflow: hidden;
}
</style>

