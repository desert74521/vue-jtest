<template>
  <div>
      <dashBoard title="Top Heroes" :top_heroes="top_heroes" @click_name_box="to_hero_detail"></dashBoard>
      <searchInput @to_search="to_search"></searchInput>
  </div>
</template>

<script>
import searchInput from "@/components/SearchInput"
import dashBoard from "@/components/Dashboard"
export default {
  name: 'DashboardView',
  data () {
    return {}
  },
  components:{
    searchInput,
    dashBoard
  },
  computed:{
    top_heroes:function(){
      if(this.$store.state.heroes.length>4){
          return this.$store.state.heroes.filter(function(item,i){
            return i<=3;
          });
        }
        return this.$store.state.heroes;
    }
  },
  methods:{
    to_hero_detail(h_id){
      this.$router.push({path:"/detail/"+h_id});
    },
    to_search(search_word){
      if(search_word){
        this.$store.commit("PRINT_LOG","search hero "+search_word);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>