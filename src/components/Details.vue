<template>
  <div>
    <div class="detail-title">{{cur_hero_name}} Details</div>
    <span>id: {{h_id}}</span>
    <div class="width-300px">
      <el-input placeholder="请输入内容" v-model="cur_hero_name">
        <template slot="prepend">name：</template>
      </el-input>
    </div>
    <div class="routerlink-box">
      <el-button type="primary" class="go-back-btn" @click="go_back">goback</el-button>
      <el-button type="primary" class="save-btn" @click="save">save</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props:["h_id","h_name"],
  data () {
    return {
      cur_hero_name: this.h_name
    }
  },
  methods:{
    go_back(){
      this.$emit("click_go_back_button");
    },
    save(){
      if(!this.cur_hero_name) return;
      this.$emit("click_save_button",this.cur_hero_name,this.h_id);
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
