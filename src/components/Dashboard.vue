<template>
  <div class="heroes-box">
      <div class="title">{{title}}</div>
      <el-row>
        <el-col :span="6"  v-for="(hero,id) in listCmputed" :key="id">
          <div @click="todetail(hero.id)">
            <el-card class="box-card" >
              {{hero.name}}
            </el-card>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  props:["listCmputed","title"],
  data () {
    return {
      thisd:null
    }
  },
  methods:{
    todetail(id){
      this.$emit("clicknamebox",id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box-card{
    padding: 30px 0;
    margin:20px;
    text-align: center;
    color: aliceblue;
    background: rgb(41, 41, 104);
  }
  .box-card:hover{
    cursor: pointer;
    margin:20px;
    text-align: center;
    color: black;
    background: rgb(192, 192, 218);
  }
  .width-300px{
    width: 300px;
  }
</style>
