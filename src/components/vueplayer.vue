
<template>
  <div class="mainBox">
    <div class="fixBox">
          <div class="littleBall">

          </div>
          <div class="contentBox">
            <button>1</button><br>
            <button>2</button><br>
            <button>3</button><br>
            <button>4</button><br>
            <button>5</button><br>
          </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.fixBox{
  position: fixed;
  height: 300px;
  width: 60px;
  background-color: pink;
  right:0;
  top:200px;
  border-radius: 300px 0px 0px 300px;
  cursor: pointer;
  .littleBall{
    position: absolute;
    border-width:30px 30px 30px 0;
    border-style:solid;
    border-color:transparent #333 transparent transparent;/*透明 灰 透明 透明 */
    
  }
  .contentBox{
    display: none;
    height: 300px;
  width: 60px;
    background-color: #666;
  }
  &:hover .contentBox{
    display: block;
  }
}
</style>




 