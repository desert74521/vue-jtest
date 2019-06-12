<template>
  <div class="link-box">
    <div class="page-title">
      <h3>{{title}}</h3>
    </div>
    <div class="link-box">
      <el-button type="info" size="small" plain v-for="(urlitem,path) in urlobj" :key="path" @click="routerlinkto(urlitem.path)">{{urlitem.name}}</el-button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'RouteLink',
  props:["title","urlobj"],
  data () {
    return {
      routelink: null,
    }
  },
  methods:{
    routerlinkto(e){
      this.$router.push({path:e});
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
