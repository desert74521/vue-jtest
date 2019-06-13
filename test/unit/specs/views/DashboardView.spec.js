import { shallowMount, createLocalVue } from '@vue/test-utils'
import DashboardView from "@/views/DashboardView"
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)


describe('DashboardView.vue面向功能测试', () => {
    let $router;
    let mutations;
    let store;
    beforeEach(() => {
        mutations = {
            PRINT_LOG: jest.fn()
        }
        store = new Vuex.Store({
            state: {
                id:1,
                heroes: [],
                logs:[]
            },
            mutations
        })
        $router = [{
            path: '/some/path'
        }]
    })

    it('DashboardView是否能正常渲染', () => {
        const wrapper = shallowMount(DashboardView,{
            store, 
            localVue,
            mocks: { $router }
        })
        expect(wrapper.contains('div')).toBe(true)
    })
    it('DashboardView中methods方法--to_hero_detail', () => {
        const wrapper = shallowMount(DashboardView,{
            store, 
            localVue,
            mocks: { $router }
        })
        wrapper.vm.to_hero_detail.call(wrapper.vm,1);
        //$route的path会变成/detail/1
        expect(wrapper.vm.$router[1].path).toBe("/detail/1");
    })
    it('DashboardView中methods方法--to_search search_word为空', () => {
        const wrapper = shallowMount(DashboardView,{
            store, 
            localVue,
            mocks: { $router }
        })
        wrapper.vm.to_search.call(wrapper.vm,"");
        //mutations.PRINT_LOG方法将不被调用
        expect(mutations.PRINT_LOG).not.toHaveBeenCalled();
    })
    it('DashboardView中methods方法--to_search search_word不为空', () => {
        const wrapper = shallowMount(DashboardView,{
            store, 
            localVue,
            mocks: { $router }
        })
        wrapper.vm.to_search.call(wrapper.vm,"222");
        //mutations.PRINT_LOG方法将被调用
        expect(mutations.PRINT_LOG).toHaveBeenCalled();
    })

})

describe('DashboardView.vue面向计算属性测试', () => {
    let mutations;
    let store;

    it('DashboardView中computed属性计算--top_heroes  数组为0', () => {
        store = new Vuex.Store({
            state: {
                id:1,
                heroes: [],
                logs:[]
            }
        })
        const wrapper = shallowMount(DashboardView,{
            store, 
            localVue
        })
        let arr = wrapper.vm.top_heroes;
        //结果数组长度为0
        expect(arr.length).toBe(0);
    })

    it('DashboardView中computed属性计算--top_heroes 数组大于4', () => {
        store = new Vuex.Store({
            state: {
                id:1,
                heroes: [
                    {name:"1",id:1},
                    {name:"1",id:2},
                    {name:"1",id:3},
                    {name:"1",id:4},
                    {name:"1",id:5}
                ],
                logs:[]
            }
        })
        const wrapper = shallowMount(DashboardView,{
            store, 
            localVue
        })
        let arr = wrapper.vm.top_heroes;
        //结果数组长度为0
        expect(arr.length).toBe(4);
    })

})
