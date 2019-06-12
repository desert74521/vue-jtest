<template>
  <div id="app">
      <routeLink :title="title" :urlobj="urlobj" ></routeLink>
      <logprint :logs="logs" @clearbuttonclick="clearlog"></logprint>
  </div>
</template>

<script>
import routeLink from "@/components/RouteLink"
import logprint from "@/components/Logger"

export default {
  data(){
    return {
      title:"Tour of Heroes",
      urlobj:[
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
    clearlog(){
      this.$store.commit("CLS_LOG");
    }
  },
  name: 'App',
  components:{routeLink,logprint}
}
</script>

<style>
  #app{
    margin: 20px;
  }
</style>
