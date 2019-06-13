<template>
  <div>
      <hdetails :h_id="h_id" :h_name="h_name" @click_go_back_button="go_back" @click_save_button="update_hero"></hdetails>
  </div>
</template>

<script>
import hdetails from "@/components/Details"
export default {
  name: 'HeroeDetailView',
  data () {
    return {}
  },
  computed:{
    h_id:function(){
      return this.$route.params.id;
    },
    h_name:function(){
      for(let i = 0 ; i < this.$store.state.heroes.length ; i++){
        if(this.$store.state.heroes[i].id == this.$route.params.id){
            return this.$store.state.heroes[i].name;
        }
      }
    }
  },
  components:{hdetails},
  methods:{
    go_back(){
      this.$router.go(-1);
    },
    update_hero(hname,hid){
      this.$store.commit("UPDATE_HERO",{id:hid,name:hname});
      this.$router.go(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>