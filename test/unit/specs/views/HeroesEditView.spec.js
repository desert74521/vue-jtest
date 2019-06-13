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
})
