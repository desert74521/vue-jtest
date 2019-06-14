import { shallowMount, createLocalVue } from '@vue/test-utils'
import HeroesEditView from "@/views/HeroesEditView"
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)


describe('HeroesEditView.vue面向功能测试', () => {
    let $router;
    let $route;
    let mutations;
    let store;
    beforeEach(() => {
        mutations = {
            UPDATE_ID: jest.fn(),
            ADD_HERO:jest.fn(),
            DEL_HERO:jest.fn()
        }
        store = new Vuex.Store({
            state: {
                id:1,
                heroes: [{name:"hero1",id:1}],
                logs:[]
            },
            mutations
        })
        $router = {
            go:jest.fn(),
            push:jest.fn()
        }
        $route = {
            params:{
                id:1
            }
        }
    })

    it('HeroesEditView是否能正常渲染', () => {
        const wrapper = shallowMount(HeroesEditView,{
            store, 
            localVue,
            mocks: { $router, $route}
        })
        expect(wrapper.contains('div')).toBe(true)
    })

    it('HeroesEditView的methods方法测试  --add_hero', () => {
        const wrapper = shallowMount(HeroesEditView,{
            store, 
            localVue,
            mocks: { $router, $route}
        })
        wrapper.vm.add_hero.call(wrapper.vm,"new_hero")
        expect(mutations.ADD_HERO).toBeCalled();
        expect(mutations.UPDATE_ID).toBeCalled();
    })

    it('HeroesEditView的methods方法测试  --del_hero', () => {
        const wrapper = shallowMount(HeroesEditView,{
            store, 
            localVue,
            mocks: { $router, $route}
        })
        wrapper.vm.del_hero.call(wrapper.vm,1)
        expect(mutations.DEL_HERO).toBeCalled();
    })

    it('HeroesEditView的methods方法测试  --to_detail_hero', () => {
        const wrapper = shallowMount(HeroesEditView,{
            store, 
            localVue,
            mocks: { $router, $route}
        })
        wrapper.vm.to_detail_hero.call(wrapper.vm,1)
        expect($router.push).toBeCalled();
    })
})
