<template>
  <div class="heroes-box">
      <div class="hero-title">My Heroes</div>
      <div class="input-width">
        <el-input placeholder="请输入内容" v-model="name">
          <template slot="prepend">name:</template>
          <el-button slot="append" type="info" @click="addNewHero">add</el-button>
        </el-input>
      </div>
      <div class="text item margin-5px" v-for="(hero,index) in heroes" :key="index">
        <el-button-group>
          <el-button type="primary">{{hero.id}}</el-button>
          <el-button class="width-fixed" type="default" icon="el-icon-edit" @click="todetail(hero.id)">{{hero.name}}</el-button>
          <el-button type="warning" @click="removeHero(hero.id)">X</el-button>
        </el-button-group>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Heroes',
  props:["heroes"],
  data () {
    return {
      name: ''
    }
  },
  methods:{
    todetail(id){
      this.$emit("clicknamebar",id);
    },
    removeHero(id){
      this.$emit("clickdeletebutton",id);
    },
    addNewHero(){
      if(!this.name) return;
      this.$emit("clickaddbutton",this.name);
      this.name="";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .input-width{
    width: 400px;
  }
  .margin-5px{
    margin: 5px 0;
  }
  .width-fixed{
    width:200px;
  }

</style>
