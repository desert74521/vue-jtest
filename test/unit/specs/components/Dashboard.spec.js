import { shallowMount } from '@vue/test-utils'
import Dashboard from '@/components/Dashboard'
describe('Dashboard.vue', () => {
  //组件卡片是否能正常渲染
  it('Dashboard卡片是否能正常渲染', () => {
    const wrapper = shallowMount(Dashboard)
    wrapper.setProps({ 
        listCmputed: [
        {
            id:1,
            name:"hero1"
        },
        {
            id:2,
            name:"hero2"
        }
        ] ,
        title:"test"
    });
    expect(wrapper.contains('.box-card')).toBe(true)
  })
  //组件是否能响应事件
  it('Dashboard组件是否能响应事件', () => {
    const wrapper = shallowMount(Dashboard)
    wrapper.setProps({ 
        listCmputed: [
        {
            id:1,
            name:"hero1"
        },
        {
            id:2,
            name:"hero2"
        }
        ] ,
        title:"test"
    });
    const divArray = wrapper.findAll('.box-card');
    divArray.at(0).trigger("click");
    expect(wrapper.emitted().clicknamebox).toBeTruthy()
  })
})