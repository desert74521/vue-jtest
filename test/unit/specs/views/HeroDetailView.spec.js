import { shallowMount, createLocalVue } from '@vue/test-utils'
import HeroDetailView from "@/views/HeroDetailView"
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)


describe('HeroDetailView.vue面向功能测试', () => {
    let $router;
    let $route;
    let mutations;
    let store;
    beforeEach(() => {
        mutations = {
            UPDATE_HERO: jest.fn()
        }
        mutations.UPDATE_HERO.mockReturnValue(true)
        store = new Vuex.Store({
            state: {
                id:1,
                heroes: [{name:"hero1",id:1}],
                logs:[]
            },
            mutations
        })
        $router = {
            go:jest.fn()
        }
        $router.go.mockReturnValue(true)
        $route = {
            params:{
                id:1
            }
        }
    })

    it('HeroDetailView是否能正常渲染', () => {
        const wrapper = shallowMount(HeroDetailView,{
            store, 
            localVue,
            mocks: { $router, $route}
        })
        expect(wrapper.contains('div')).toBe(true)
    })
   
    it('HeroDetailView的methods功能是否正常 --go_back', () => {
        const wrapper = shallowMount(HeroDetailView,{
            store, 
            localVue,
            mocks: { $router, $route}
        })
        wrapper.vm.go_back.call(wrapper.vm);
        //$router.go方法将被调用
        expect($router.go).toHaveBeenCalled();
    })

    it('HeroDetailView的methods功能是否正常 --update_hero', () => {
        const wrapper = shallowMount(HeroDetailView,{
            store, 
            localVue,
            mocks: { $router, $route}
        })
        wrapper.vm.update_hero.call(wrapper.vm,"hero_new",5);
        //$router.go方法将被调用
        expect($router.go).toHaveBeenCalled();
        //mutations.UPDATE_HERO方法将被调用
        expect(mutations.UPDATE_HERO).toHaveBeenCalled();
    })

})

describe('HeroDetailView.vue的computed功能是否正常', () => {
    let $router;
    let $route;
    let mutations;
    let store;
    beforeEach(() => {
        mutations = {
            UPDATE_HERO: jest.fn()
        }
        $router = {
            go:jest.fn()
        }
        $route = {
            params:{
                id:1
            }
        }
    })

    it('HeroDetailView的computed功能是否正常 --h_id', () => {
        store = new Vuex.Store({
            state: {
                id:1,
                heroes: [{name:"hero1",id:1}],
                logs:[]
            },
            mutations
        })
        const wrapper = shallowMount(HeroDetailView,{
            store, 
            localVue,
            mocks: { $router, $route}
        })
        //h_id
        expect(wrapper.vm.h_id).toBe(1);
    })
    it('HeroDetailView的computed功能是否正常 --h_name', () => {
        store = new Vuex.Store({
            state: {
                id:1,
                heroes: [{name:"hero1",id:1}],
                logs:[]
            },
            mutations
        })
        const wrapper = shallowMount(HeroDetailView,{
            store, 
            localVue,
            mocks: { $router, $route}
        })
        //h_name
        expect(wrapper.vm.h_name).toBe("hero1");
    })

    it('HeroDetailView的computed功能是否正常 --h_name 找不到时', () => {
        store = new Vuex.Store({
            state: {
                id:1,
                heroes: [{name:"hero1",id:4}],
                logs:[]
            },
            mutations
        })
        const wrapper = shallowMount(HeroDetailView,{
            store, 
            localVue,
            mocks: { $router, $route}
        })
        //h_name
        expect(wrapper.vm.h_name).toBe(undefined);
    })

})


