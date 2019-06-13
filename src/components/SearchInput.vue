<template>
  <div>
      <div class="search width-300px">
        <div class="search-title">Hero Search</div>
        <el-input @blur="search_hero" v-model="search_word"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  data(){
      return {
          search_word:""
      }
  },
  methods:{
    search_hero(){
      if(this.search_word)
      this.$emit("to_search",this.search_word);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .width-300px{
    width: 300px;
  }
</style>
