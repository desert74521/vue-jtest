<template>
  <div>
      <dashboard title="Top Heroes" :listCmputed="listCmputed" @clicknamebox="toherodetail"></dashboard>
      <searchinput @tosearch="tosearch"></searchinput>
  </div>
</template>

<script>
import searchinput from "@/components/SearchInput"
import dashboard from "@/components/Dashboard"
export default {
  name: 'dashboardview',
  data () {
    return {
      msg: null,
    }
  },
  components:{
    searchinput,
    dashboard
  },
  computed:{
    listCmputed:function(){
      if(this.$store.state.heroes.length>4){
          return this.$store.state.heroes.filter(function(item,i){
            return i<=3;
          });
        }
        return this.$store.state.heroes;
    }
  },
  methods:{
    toherodetail(hid){
      this.$router.push({path:"/detail/"+hid});
    },
    tosearch(searchword){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>