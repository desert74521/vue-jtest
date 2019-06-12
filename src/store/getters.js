// 通常通过getters取数据 (this.$store.getters.news;)
const getters = {
    id: state => state.id,
    heroes: state => state.heroes,
    logs: state => state.logs
  }
export default getters