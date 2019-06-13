<template>
  <div>
      <div class="msg-class">Messages</div>
      <el-button slot="append" type="info"  @click="clear_log"><span class="clear-button">clear log</span></el-button>
      <div v-for="(str,index) in logs" :key="index" class="text item">
        {{str}}
      </div>
  </div>
</template>

<script>
export default {
  name: 'Logger',
  props:["logs"],
  methods:{
    clear_log(){
      this.$emit("clear_button_click");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .msg-class{
    margin: 10px 0;
    color:red;
    font-weight: bolder;
    font-size: 20px;
  }
  li{
    list-style-type:none;
    margin: 10px 0;
    padding: 0;
  }
</style>
