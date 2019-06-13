import { mount } from '@vue/test-utils'
import Dashboard from '@/components/Dashboard'
describe('Dashboard.vue面向功能测试', () => {
  //组件卡片是否能正常渲染
  it('Dashboard卡片是否能正常渲染', () => {
    const wrapper = mount(Dashboard)
    wrapper.setProps({ 
      top_heroes: [
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
    //渲染卡片存在
    expect(wrapper.contains('.box-card')).toBe(true)
    //且是两个
    expect(wrapper.findAll('.box-card').length).toBe(2)
  })
  //组件是否能响应事件
  it('Dashboard组件中每个卡片点击时触发点击事件并携带正确的参数', () => {
    const clickMethod = jest.fn();
    const wrapper = mount(Dashboard)
    wrapper.setProps({ 
      top_heroes: [
        {
            id:1,
            name:"hero1"
        }
        ] ,
        title:"test"
    });
    wrapper.setMethods({
      to_detail:clickMethod
    })
    const divArray = wrapper.findAll('.box-card');
    divArray.at(0).trigger("click");
    //事件触发调用方法
    expect(clickMethod).toHaveBeenCalled();
    //且传递参数正确
    expect(clickMethod).toHaveBeenCalledWith(1);
  })
})

describe('Dashboard.vue面向细节方法测试', () => {
  //组件是否能响应事件
  it('Dashboard组件中Method方法的测试--to_detail', () => {
    const wrapper = mount(Dashboard)
    wrapper.vm.to_detail.call(wrapper.vm,1);
    //方法中的事件被触发
    expect(wrapper.emitted().click_name_box).toBeTruthy()
    //且携带的参数是1
    expect(wrapper.emitted().click_name_box[0]).toEqual([1])
  })
})