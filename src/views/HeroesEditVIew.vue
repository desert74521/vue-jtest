<template>
  <div>
      <heroes :heroes="heroes" @click_name_bar="to_detail_hero" @click_add_button="add_hero" @clickdeletebutton="del_hero"></heroes>
  </div>
</template>

<script>
import heroes from "@/components/Heroes"
export default {
  name: 'heroeseditview',
  components:{heroes},
  data () {
    return {}
  },
  computed:{
    heroes:function(){
      return this.$store.state.heroes;
    }
  },
  methods:{
    add_hero(h_name){
      let id = this.$store.state.id;
      this.$store.commit("ADD_HERO",{name:h_name,id:id+1});
      this.$store.commit("UPDATE_ID",id+1);
    },
    del_hero(h_id){
      this.$store.commit("DEL_HERO",h_id);
    },
    to_detail_hero(h_id){
      this.$router.push({path:"/detail/"+h_id});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
