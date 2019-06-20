<template>
  <div class="mainBox">
    <span>请输入内容:</span>
    <el-input
      placeholder="请输入是星期几"
      v-model="week"
      clearable 
      style="width:80%;margin:20px 0;">
    </el-input>
    <el-button slot="prepend" icon="el-icon-search" @click="addLi"></el-button>
    <h3 >{{title}}</h3>
    <header>
      <ul>
        <li>星期1</li>
        <li>星期2</li>
        <li>星期3</li>
        <li>星期4</li>
        <li>星期5</li>
        <li>星期6</li>
        <li>星期7</li>
      </ul>
    </header>
    <main>
      <ul id="moveLi">
        <li v-if="flag1"></li>
        <li v-if="flag2"></li>
        <li v-if="flag3"></li>
        <li v-if="flag4"></li>
        <li v-if="flag5"></li>
        <li v-if="flag6"></li>
        <li v-for="item in value" :key="item.index">
            {{item.data}}
            <p>
                <span>第一次进场时间:{{item.inTime}}</span><br>
                <span>出场时间时间:{{item.outTime}}</span>
            </p>
        </li>
      </ul>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "2019年6月",
      week:"",
      flag1:false,
      flag2:false,
      flag3:false,
      flag4:false,
      flag5:false,
      flag6:false,
      value: [
        {
          data: "2019-6-1",
          inTime: "2019-6-1 8:00",
          outTime: "2019-6-1 18:00"
        },
        {
          data: "2019-6-1",
          inTime: "2019-6-1 8:00",
          outTime: "2019-6-1 18:00"
        },
        {
          data: "2019-6-1",
          inTime: "2019-6-1 8:00",
          outTime: "2019-6-1 18:00"
        },
        {
          data: "2019-6-1",
          inTime: "2019-6-1 8:00",
          outTime: "2019-6-1 18:00"
        },
        {
          data: "2019-6-1",
          inTime: "2019-6-1 8:00",
          outTime: "2019-6-1 18:00"
        },
        {
          data: "2019-6-1",
          inTime: "2019-6-1 8:00",
          outTime: "2019-6-1 18:00"
        },
        {
          data: "2019-6-1",
          inTime: "2019-6-1 8:00",
          outTime: "2019-6-1 18:00"
        },
        {
          data: "2019-6-1",
          inTime: "2019-6-1 8:00",
          outTime: "2019-6-1 18:00"
        },
        {
          data: "2019-6-1",
          inTime: "2019-6-1 8:00",
          outTime: "2019-6-1 18:00"
        },
        {
          data: "2019-6-1",
          inTime: "2019-6-1 8:00",
          outTime: "2019-6-1 18:00"
        },
        {
          data: "2019-6-1",
          inTime: "2019-6-1 8:00",
          outTime: "2019-6-1 18:00"
        },
        {
          data: "2019-6-1",
          inTime: "2019-6-1 8:00",
          outTime: "2019-6-1 18:00"
        },
        {
          data: "2019-6-1",
          inTime: "2019-6-1 8:00",
          outTime: "2019-6-1 18:00"
        },
        {
          data: "2019-6-1",
          inTime: "2019-6-1 8:00",
          outTime: "2019-6-1 18:00"
        },
        {
          data: "2019-6-1",
          inTime: "2019-6-1 8:00",
          outTime: "2019-6-1 18:00"
        },
        {
          data: "2019-6-1",
          inTime: "2019-6-1 8:00",
          outTime: "2019-6-1 18:00"
        },
        {
          data: "2019-6-1",
          inTime: "2019-6-1 8:00",
          outTime: "2019-6-1 18:00"
        },
        {
          data: "2019-6-1",
          inTime: "2019-6-1 8:00",
          outTime: "2019-6-1 18:00"
        },
        {
          data: "2019-6-1",
          inTime: "2019-6-1 8:00",
          outTime: "2019-6-1 18:00"
        },
        {
          data: "2019-6-1",
          inTime: "2019-6-1 8:00",
          outTime: "2019-6-1 18:00"
        },
        {
          data: "2019-6-1",
          inTime: "2019-6-1 8:00",
          outTime: "2019-6-1 18:00"
        },
        {
          data: "2019-6-1",
          inTime: "2019-6-1 8:00",
          outTime: "2019-6-1 18:00"
        },
        {
          data: "2019-6-1",
          inTime: "2019-6-1 8:00",
          outTime: "2019-6-1 18:00"
        },
        {
          data: "2019-6-1",
          inTime: "2019-6-1 8:00",
          outTime: "2019-6-1 18:00"
        }
      ]
    };
  },
  mounted() {
      
  },
  methods: {
      addLi(){
            this.flag1=false
            this.flag2=false
            this.flag3=false
            this.flag4=false
            this.flag5=false
            this.flag6=false
          if(this.week=="星期1"){
            
          }
          if(this.week=="星期2"){
            this.flag1=true
            
          }
          if(this.week=="星期3"){
            this.flag1=true
            this.flag2=true
          }
          if(this.week=="星期4"){
            this.flag1=true
            this.flag2=true
            this.flag3=true
          }
          if(this.week=="星期5"){
            this.flag1=true
            this.flag2=true
            this.flag3=true
            this.flag4=true
          }
          if(this.week=="星期6"){
            this.flag1=true
            this.flag2=true
            this.flag3=true
            this.flag4=true
            this.flag5=true
          }
          if(this.week=="星期7"){
            this.flag1=true
            this.flag2=true
            this.flag3=true
            this.flag4=true
            this.flag5=true
            this.flag6=true
          }
          
      }
  },
};
</script>

<style lang="less" scoped>
.mainBox{
    width: 90%;
    border: 1px solid #800040;
    margin: auto;
    h3{
        font-size: 24px;
    }
    header{
        ul{
            display: flex;
            box-sizing:border-box;
            li{
                box-sizing:border-box;
                flex:1;
                height: 50px;
                text-align: center;
                line-height: 50px;
                border: 1px solid #666;
            }
        }
    }
    main{
        position: relative;
        div{
            position: absolute;
            top: 0;
            left: 20px;
            background-color: rgb(161, 58, 58);
            height: 80px;
            width: 200px;
            text-align: center;
            display: none;
        }
        ul{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            li{
                box-sizing:border-box;
                width: 14.285%;
                height: 80px;
                text-align: center;
                line-height: 50px;
                border: 1px solid #333;
                cursor: pointer;
                position: relative;
                p{
                    position: absolute;
                    display: none;
                    height: 100px;
                    width: 100%;
                    top: -80%;
                    left: -50%;
                    background-color: rgb(185, 55, 55);
                    span{
                        font-size: 14px;
                    }
                }
                &:hover p{
                    display: block;
                }
            }
        }
    }
}
</style>
