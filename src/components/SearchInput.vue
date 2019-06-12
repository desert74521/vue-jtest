<template>
  <div>
      <div class="search width-300px">
        <div class="search-title">Hero Search</div>
        <el-input @blur="searchhero" v-model="searchword"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'searchinput',
  data(){
      return {
          searchword:""
      }
  },
  methods:{
    searchhero(){
      if(this.searchword)
      this.$emit("tosearch",this.searchword);
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
