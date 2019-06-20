<template>
  <div class="main">
    <el-dialog
      title="增加英雄"
      :visible.sync="dialog"
      :close-on-click-modal="false"
      :before-close="resetFrom"
      width="50%"
      center
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        :inline="true"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="输入名称:" prop="name" placeholder="请输入英雄名字">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="输入性别:" prop="gender">
          <el-select v-model="ruleForm.gender" placeholder="请选择英雄性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialog = false">取 消</el-button>
        <el-button type="primary" @click="addNewHero">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 编辑详情 -->
    <el-dialog title="收货地址" :visible.sync="dialogFlag" >
      <el-form :model="form">
        <el-form-item label="英雄名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" ></el-input>
        </el-form-item>
        <el-form-item label="英雄性别" :label-width="formLabelWidth">
          <el-select v-model="form.gender" placeholder="选择性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFlag = false">取 消</el-button>
        <el-button type="primary" @click="updatahero">确 定</el-button>
      </div>
    </el-dialog>

    <h3>英雄列表</h3>
    <el-button
      style="float:right;margin-bottom:10px;"
      type="primary"
      size="small"
      @click="addHero"
    >增加英雄</el-button>
    <el-table :data="tableData" style="width: 100%;" class="mycss">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="gender" label="性别"></el-table-column>
      <el-table-column prop="ctime" label="创建时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="gethero(scope.row)">编辑</el-button>
          <el-button type="success" size="small" @click="truedelhero(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[2, 5, 8, 10]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      class="mycss"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pageSize: 2,
      total: 0,
      dialog: false, //新增框
      dialogFlag: false, //编辑框
      
      ruleForm: {
        name: "",
        gender: ""
      },
      form: {
          name: '',
          gender:'',
          id:""
        },
      formLabelWidth: '120px',
      rules: {
        name: [
          { required: true, message: "请输入英雄名称", trigger: "blur" },
          { min: 1, max: 5, message: "长度在 1 到 5 个字符", trigger: "blur" }
        ],
        gender: [{ required: true, message: "请选择性别", trigger: "change" }]
      }
    };
  },

  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.getHeroList();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.getHeroList();
    },
    //获取所有英雄
    getHeroList() {
      this.axios
        .get("getallhero", {
          params: {
            pageSize: this.pageSize,
            currentPage: this.currentPage,
            total: this.total
          }
        })
        .then(res => {
          console.log(res);
          if (res.data.status == 200) {
            this.total = res.data.data[1][0].total;
            this.tableData = res.data.data[0];
          }
        });
    },
    //添加英雄
    addHero() {
      this.dialog = true;
    },
    // 添加英雄确认按钮
    addNewHero() {
      console.log(this.$refs);
      this.$refs.ruleForm.validate(v => {
        if (v) {
          this.axios
            .post("addhero", {
              name: this.ruleForm.name,
              gender: this.ruleForm.gender
            })
            .then(res => {
              console.log(res);
              this.$notify({
                title: "添加成功",
                message: this.ruleForm.name,
                type: "success"
              });
              this.getHeroList();
              this.resetFrom();
            });
        }
      });
    },
    //编辑获取英雄信息
    gethero(val) {
      this.dialogFlag = true;
      this.axios.get("/gethero/" + val.id).then(res => {
        this.form.name = res.data.data[0].name;
        this.form.gender = res.data.data[0].gender;
        this.form.id = res.data.data[0].id;
      });
    },
    //修改按钮确认更新
    updatahero(){
      this.axios.post("/updatehero/"+this.form.id,this.form).then(res=>{
        console.log(res)
        if(res.data.status==200){
            this.dialogFlag = false
            this.getHeroList();
            this.$message({
              message: '内容修改成功',
              type: 'success'
            });
        }
      })
    },
    //真删除
    truedelhero(val){
      this.axios.get('/truedelhero/'+val.id).then(res=>{
        console.log(res)
        if(res.status==200){
          this.$message({
              message: '真删除成功',
              type: 'success'
            });
          this.getHeroList()
        }
      })
    },
    // 关闭窗口的回调函数before-close 用来清空表单内容或者重置表单
    resetFrom() {
      this.dialog = false;
      this.ruleForm.name = "";
      this.ruleForm.gender = "";
    }
  },
  created() {},
  mounted() {
    this.getHeroList();
  }
};
</script>
<style lang="less" scoped>
.main {
  box-sizing: border-box;
  width: 80%;
  margin: auto;
  padding-bottom: 30px;
}
.mycss {
  margin-top: 10px;
  border: 1px solid rgb(22, 230, 178);
  border-radius: 5px;
}
</style>


