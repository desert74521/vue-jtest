<template>
  <div>
      <hdetails :hid="hid" :hname="hname" @clickgobackbutton="goback" @clicksavebutton="updatehero"></hdetails>
  </div>
</template>

<script>
import hdetails from "@/components/Details"
export default {
  name: 'heroedetailview',
  data () {
    return {
      msg: null,
    }
  },
  computed:{
    hid:function(){
      return this.$route.params.id;
    },
    hname:function(){
      for(let i = 0 ; i < this.$store.state.heroes.length ; i++){
        if(this.$store.state.heroes[i].id == this.$route.params.id){
            return this.$store.state.heroes[i].name;
        }
      }
    }
  },
  components:{hdetails},
  methods:{
    goback(){
      this.$router.go(-1);
    },
    updatehero(hname,hid){
      this.$store.commit("UPDATE_HERO",{id:hid,name:hname});
      this.$router.go(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>