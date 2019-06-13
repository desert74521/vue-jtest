import { mount } from '@vue/test-utils'
import Logger from '@/components/Logger'

describe('Logger.vue面向功能测试', () => {
  //组件是否能正常渲染
  it('Logger是否能正常渲染', () => {
    const wrapper = mount(Logger)
    wrapper.setProps({ 
        logs: ["3444"]
    });
    expect(wrapper.contains('.msg-class')).toBe(true)
  })
  //组件是否能响应事件
  it('Logger组件是否能响应事件', () => {
    const clearLogClickMethod = jest.fn();
    const wrapper = mount(Logger)
    wrapper.setProps({ 
        logs: ["3444"]
    });
    wrapper.setMethods({clear_log:clearLogClickMethod});
    const btnArray = wrapper.findAll('.el-button--info');
    btnArray.at(0).trigger("click");
    //事件触发调用方法
    expect(clearLogClickMethod).toHaveBeenCalled();
  })
})

describe('Logger.vue面向细节方法测试', () => {
  //组件是否能响应事件
  it('Logger组件中Method方法的测试--clear_log', () => {
    const wrapper = mount(Logger)
    wrapper.vm.clear_log.call(wrapper.vm);
    //方法中的事件被触发
    expect(wrapper.emitted().clear_button_click).toBeTruthy()
  })
})