import { mount } from '@vue/test-utils'
import Details from '@/components/Details'

describe('Details.vue面向功能测试', () => {
  //组件是否能正常渲染
  it('Details是否能正常渲染', () => {
    const wrapper = mount(Details)
    wrapper.setProps({ 
        h_id: 12 ,
        h_name:"test"
    });
    expect(wrapper.contains('.detail-title')).toBe(true)
  })
  //组件是否能响应事件
  it('Details组件go_back按钮是否能响应事件', () => {
    const goBackClickHandle = jest.fn();
    const wrapper = mount(Details)
    wrapper.setProps({ 
        h_id: 12 ,
        h_name:"test"
    });
    wrapper.setMethods({go_back:goBackClickHandle});
    let btnArray = wrapper.findAll('.go-back-btn')
    btnArray.at(0).trigger("click");
    //事件触发调用方法
    expect(goBackClickHandle).toHaveBeenCalled();
  })
  //组件是否能响应事件
  it('Details组件save按钮是否能响应事件', () => {
    const saveClickHandle = jest.fn();
    const wrapper = mount(Details)
    wrapper.setProps({ 
        h_id: 12 ,
        h_name:"test"
    });
    wrapper.setMethods({save:saveClickHandle});
    let btnArray = wrapper.findAll('.save-btn')
    btnArray.trigger("click");
    //事件触发调用方法
    expect(saveClickHandle).toHaveBeenCalled();
  })
})
describe('Details.vue面向细节方法测试', () => {
  //组件是否能响应事件
  it('Details组件中Method方法的测试--go_back', () => {
    const wrapper = mount(Details)
    wrapper.vm.go_back.call(wrapper.vm);
    //方法中的事件被触发
    expect(wrapper.emitted().click_go_back_button).toBeTruthy()
  })

  //组件是否能响应事件
  it('Details组件中Method方法的测试--save', () => {
    //输入框值不为空
    const wrapper = mount(Details)
    wrapper.setProps({ 
      h_id: 12 ,
      h_name:"name"
    });
    wrapper.setData({ 
      cur_hero_name:"test"
    });
    wrapper.vm.save.call(wrapper.vm);
    //方法中的事件被触发
    expect(wrapper.emitted().click_save_button).toBeTruthy()
    //且传递正确的参数
    expect(wrapper.emitted().click_save_button[0]).toEqual(["test",12])
    
    //------------------------------------------------------------------------
    //输入框值为空
    const wrapper2 = mount(Details)
    wrapper2.setProps({ 
      h_id: 12 ,
      h_name:"name"
    });
    //如果h_name为空，则不触发
    wrapper2.setData({ 
      cur_hero_name:""
    });
    wrapper2.vm.save.call(wrapper2.vm);
    //方法中的事件不被触发
    expect(wrapper2.emitted().click_save_button).toBe(undefined)
  })
  
})