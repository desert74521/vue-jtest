<template>
  <div class="link-box">
    <div class="page-title">
      <h3>{{title}}</h3>
    </div>
    <div class="link-box">
      <el-button type="info" size="small" plain v-for="(url_item,path) in url_obj_s" :key="path" @click="router_link_to(url_item.path)">{{url_item.name}}</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RouteLink',
  props:["title","url_obj_s"],
  data () {
    return {}
  },
  methods:{
    router_link_to(path){
      this.$emit("click_route_link",path);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .page-title{
   color: #369;
 }
</style>
