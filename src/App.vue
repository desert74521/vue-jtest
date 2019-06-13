<template>
  <div id="app">
      <routeLink :title="title" :url_obj_s="url_obj_s" @click_route_link="link_to"></routeLink>
      <router-view/>
      <logPrint :logs="logs" @clear_button_click="clear_log"></logPrint>
  </div>
</template>

<script>
import routeLink from "@/components/RouteLink"
import logPrint from "@/components/Logger"

export default {
  data(){
    return {
      title:"Tour of Heroes",
      url_obj_s:[
        {
          path:"/dashboard",
          name:"dashboard"
        },
        {
          path:"/heroes",
          name:"heroes"
        }
      ]
    }
  },
  computed:{
    logs:function(){
      return this.$store.state.logs
    }
  },
  methods:{
    clear_log(){
      this.$store.commit("CLS_LOG");
    },
    link_to(path){
      this.$router.push({path:path});
    }
  },
  name: 'App',
  components:{routeLink,logPrint}
}
</script>

<style>
  #app{
    margin: 20px;
  }
</style>
