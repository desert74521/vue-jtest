<template>
  <div class="heroes-box">
    <div class="detail-title">{{thisname}} Details</div>
    <span>id: {{hid}}</span>
    <div class="width-300px">
      <el-input placeholder="请输入内容" v-model="thisname">
        <template slot="prepend">name：</template>
      </el-input>
    </div>
    <div class="routerlink-box">
      <el-button type="primary" @click="goback">goback</el-button>
      <el-button type="primary" @click="save">save</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props:["hid","hname"],
  data () {
    return {
      thisname: this.hname
    }
  },
  methods:{
    goback(){
      this.$emit("clickgobackbutton");
    },
    save(){
      if(!this.thisname) return;
      this.$emit("clicksavebutton",this.thisname,this.hid);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .detail-title{
    font-size: 20px;
    font-weight: bolder;
    margin: 20px 0;
  }
  .input-title{
    color: #607D8B;
    font-weight: bolder;
  }
  .routerlink-box{
    margin: 10px 0;
  }
  .width-300px{
    width: 300px;
  }
</style>
