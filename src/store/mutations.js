const mutations = {
	ADD_HERO(state, obj) {
        state.heroes.push(obj);
        state.logs.push("HeroService: add id="+obj.id);
    },
    DEL_HERO(state, id){
        for(let i = 0 ; i < state.heroes.length ; i++){
            if(state.heroes[i].id == id){
                state.heroes.splice(i, 1);
                state.logs.push("HeroService: delete id="+id);
                break;
            }
        }
    },
    UPDATE_HERO(state,obj){
        for(let i = 0 ; i < state.heroes.length ; i++){
            if(state.heroes[i].id == obj.id){
                state.heroes[i].name = obj.name;
                state.logs.push("HeroService: update id="+obj.id);
                break;
            }
        }
    },
    PRINT_LOG(state,logStr){
        state.logs.push("HeroService: " + logStr);
    },
    CLS_LOG(state){
        state.logs.splice(0,state.logs.length);
    },
    UPDATE_ID(state,id){
        state.id = id;
    }
}
export default mutations
