import  mutations  from '@/store/mutations'
describe('mutations', () => {
  it('ADD_HERO', () => {
    const state = {
        id:1,
        heroes: [],
        logs:[]
    }
    mutations.ADD_HERO(state,{
        id:1,
        name:"hero1"
    })
    expect(state.heroes.length).toBe(1);
  })
  it('DEL_HERO', () => {
    const state = {
        id:1,
        heroes: [{id:1,name:"hero1"}],
        logs:[]
    }
    mutations.DEL_HERO(state,2)
    expect(state.heroes.length).toBe(1);
    mutations.DEL_HERO(state,1)
    expect(state.heroes.length).toBe(0);
  })
  it('UPDATE_HERO', () => {
    const state = {
        id:1,
        heroes: [{id:1,name:"hero1"}],
        logs:[]
    }
    mutations.UPDATE_HERO(state,{
      id:2,
      name:"hero2"
    })
    expect(state.heroes[0].name).toBe("hero1");
    mutations.UPDATE_HERO(state,{
        id:1,
        name:"hero2"
    })
    expect(state.heroes[0].name).toBe("hero2");
  })
  it('PRINT_LOG', () => {
    const state = {
        id:1,
        heroes: [],
        logs:[]
    }
    mutations.PRINT_LOG(state,"log")
    expect(state.logs[0]).toBe("HeroService: log");
  })
  it('CLS_LOG', () => {
    const state = {
        id:1,
        heroes: [],
        logs:["log"]
    }
    mutations.CLS_LOG(state)
    expect(state.logs.length).toBe(0);
  })
  it('UPDATE_ID', () => {
    const state = {
        id:1,
        heroes: [],
        logs:[]
    }
    mutations.UPDATE_ID(state,2)
    expect(state.id).toBe(2);
  })
  
})
