import { shallowMount } from '@vue/test-utils'
import Logger from '@/components/Logger'

describe('Logger.vue', () => {
  //组件是否能正常渲染
  it('Logger是否能正常渲染', () => {
    const wrapper = shallowMount(Logger)
    wrapper.setProps({ 
        logs: ["3444"]
    });
    expect(wrapper.contains('.msg-class')).toBe(true)
  })
  //组件是否能响应事件
  it('Logger组件是否能响应事件', () => {
    const wrapper = shallowMount(Logger)
    wrapper.setProps({ 
        logs: ["3444"]
    });
    const btns = wrapper.findAll('.clear-button');
    wrapper.setMethods({ clearlog: jest.fn() })
    btns.at(0).trigger("click");
    
    expect(wrapper.clearlog).toHaveBeenCalled()
  })
})