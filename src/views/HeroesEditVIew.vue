<template>
  <div>
      <heroes :heroes="heroes" @clicknamebar="detailhero" @clickaddbutton="addhero" @clickdeletebutton="delhero"></heroes>
  </div>
</template>

<script>
import heroes from "@/components/Heroes"
export default {
  name: 'heroeseditview',
  components:{heroes},
  data () {
    return {
      heroedit: null,
    }
  },
  computed:{
    heroes:function(){
      return this.$store.state.heroes;
    }
  },
  methods:{
    addhero(hname){
      let id = this.$store.state.id;
      this.$store.commit("ADD_HERO",{name:hname,id:id+1});
      this.$store.commit("UPDATE_ID",id+1);
    },
    delhero(hid){
      this.$store.commit("DEL_HERO",hid);
    },
    detailhero(hid){
      this.$router.push({path:"/detail/"+hid});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
