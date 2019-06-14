import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from "@/App"
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)


describe('App.vue面向功能测试', () => {
    let $router;
    let $route;
    let mutations;
    let store;
    let clearLogMethod;
    beforeEach(() => {
        clearLogMethod = jest.fn();
        mutations = {
            CLS_LOG: function(state){
                state.logs = [];
                clearLogMethod();
            }
        }
        store = new Vuex.Store({
            state: {
                id:1,
                heroes: [{name:"hero1",id:1}],
                logs:[]
            },
            mutations
        })
        $router = []
        $route = {
            params:{
                id:1
            }
        }
    })

    it('App是否能正常渲染', () => {
        const wrapper = shallowMount(App,{
            store, 
            localVue,
            mocks: { $router, $route},
            stubs: ['router-link', 'router-view']
        })
        expect(wrapper.contains('div')).toBe(true)
    })

    it('App的methods方法测试 --clear_log', () => {
        const wrapper = shallowMount(App,{
            store, 
            localVue,
            mocks: { $router, $route},
            stubs: ['router-link', 'router-view']
        })
        wrapper.vm.clear_log.call(wrapper.vm);
        expect(clearLogMethod).toBeCalled();
        expect(wrapper.vm.$store.state.logs.length).toBe(0);
    })

    it('App的methods方法测试 --link_to', () => {
        const wrapper = shallowMount(App,{
            store, 
            localVue,
            mocks: { $router, $route},
            stubs: ['router-link', 'router-view']
        })
        wrapper.vm.link_to.call(wrapper.vm,"/target_path");
        expect(wrapper.vm.$router.length).toBe(1);
        expect(wrapper.vm.$router[0].path).toBe("/target_path");
    })
})
