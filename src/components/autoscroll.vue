<template>
  <div class="scroll_box">
    <div id="scroll">
      <ul id="scrollBox">
        <li>
          <span>2019.03.12 12:00</span>
          <span>杭州市萧山区变电工程线路项目</span>
          <span>反光背心穿戴异常</span>
          <span>
            <span @click="look()">查看</span>
            <span @click="del()">处理</span>
          </span>
        </li>
        <li>
          <span>2019.03.12 12:00</span>
          <span>杭州市萧山区变电工程线路项目</span>
          <span>反光背心穿戴异常</span>
          <span>
            <span @click="look()">查看</span>
            <span @click="del()">处理</span>
          </span>
        </li>
        <li>
          <span>2019.03.12 12:00</span>
          <span>杭州市萧山区变电工程线路项目</span>
          <span>反光背心穿戴异常</span>
          <span>
            <span @click="look()">查看</span>
            <span @click="del()">处理</span>
          </span>
        </li>
        <li>
          <span>2019.03.12 12:00</span>
          <span>杭州市萧山区变电工程线路项目</span>
          <span>反光背心穿戴异常</span>
          <span>
            <span @click="look()">查看</span>
            <span @click="del()">处理</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      scrollTime: null
    };
  },
  beforeDestroy() {
    clearInterval(this.scrollTime);
  },
  mounted() {
    this.movedome();
  },
  methods: {
    //自动滚动操作
    movedome() {
      var margintop = 0; //上边距的偏移量
      var stop = false;
      this.scrollTime = setInterval(function() {
        if (stop == true) {
          return;
        }
        $("#scrollBox")
          .children("li")
          .first()
          .animate({ "margin-top": margintop-- }, 0, function() {
            var $li = $(this);
            if (!$li.is(":animated")) {
              //第一个li的动画结束时
              if (-margintop > $li.height()) {
                $li.css("margin-top", "0px").appendTo($("#scrollBox"));
                margintop = 0;
              }
            }
          });
      }, 100);

      //鼠标放到快递信息(ul)上时
      $("#scrollBox").hover(
        function() {
          $(this).css("cursor", "pointer");
          stop = true; //停止动画
        },
        function() {
          stop = false; //开始动画
        }
      );
    },
    look() {
      console.log("查看");
    },
    del() {
      console.log("处理");
    }
  }
};
</script>
<style lang="less" scoped>
.scroll_box {
  position: relative;
  padding: 2%;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  height: 30%;
  border: 1px solid red;
  background-color: #2fb0c7;
}
#scrollBox li {
  height: 50px;
  overflow: hidden;
  display: flex;

  span {
    flex: 1;
    display: flex;
    display: inline-block;
    text-align: center;
    overflow: hidden;
    line-height: 50px;
    span {
      flex: 1;
      display: inline-block;
      padding: 0 10px;
      color: aquamarine;
    }
  }
}

#scroll {
  width: 100%;
  height: 95%;
  overflow: hidden;
}
</style>

