import { shallowMount } from '@vue/test-utils'
import Details from '@/components/Details'

describe('Details.vue', () => {
  //组件是否能正常渲染
  it('Details是否能正常渲染', () => {
    const wrapper = shallowMount(Details)
    wrapper.setProps({ 
        hid: 12 ,
        hname:"test"
    });
    expect(wrapper.contains('.detail-title')).toBe(true)
  })
  //组件是否能响应事件
  it('Details组件是否能响应事件', () => {
    const wrapper = shallowMount(Details)
    wrapper.setProps({ 
        hid: 12 ,
        hname:"test"
    });
    wrapper.findAll('[type="primary"]').at(0).trigger("click");
    // expect(wrapper.emitted().clickgobackbutton).toBeTruthy()
    
    wrapper.findAll('[type="primary"]').at(1).trigger("click");
    // expect(wrapper.emitted().clicksavebutton).toBeTruthy()
    
  })
})