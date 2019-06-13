import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from "@/App"
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
            CLS_LOG: jest.fn()
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
        const wrapper = shallowMount(App,{
            store, 
            localVue,
            mocks: { $router, $route},
            stubs: ['router-link', 'router-view']
        })
        expect(wrapper.contains('div')).toBe(true)
    })
})
