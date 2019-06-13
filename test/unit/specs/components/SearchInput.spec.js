import { mount } from '@vue/test-utils'
import SearchInput from '@/components/SearchInput'

describe('SearchInput.vue面向功能测试', () => {
  //组件是否能正常渲染
  it('SearchInput是否能正常渲染', () => {
    const wrapper = mount(SearchInput)
    expect(wrapper.contains('.search-title')).toBe(true)
  })
  //组件是否能响应事件
  it('SearchInput组件是否能响应事件', () => {
    const blurMethod = jest.fn();
    const wrapper = mount(SearchInput)
    wrapper.setData({search_word:"3434"})
    wrapper.setMethods({search_hero:blurMethod})
    const input = wrapper.findAll(".el-input__inner");
    input.at(0).trigger("blur");
    //事件触发调用方法
    expect(blurMethod).toHaveBeenCalled();
  })
})

describe('SearchInput.vue面向细节方法测试', () => {
  //组件是否能响应事件
  it('SearchInput组件中Method方法的测试--search_hero', () => {
    //case输入框值为空时
    const wrapper = mount(SearchInput)
    wrapper.setData({search_word:"3434"})
    wrapper.vm.search_hero.call(wrapper.vm);
    //方法中的事件被触发
    expect(wrapper.emitted().to_search).toBeTruthy()
    //且携带的参数是"3434"
    expect(wrapper.emitted().to_search[0]).toEqual(["3434"])

    //--------------------------------------------------------------------

    //case输入框值为空时
    const wrapper2 = mount(SearchInput)
    wrapper2.setData({search_word:""})
    wrapper2.vm.search_hero.call(wrapper2.vm);
    //方法中的事件被触发
    expect(wrapper2.emitted().to_search).toBe(undefined)
  })
})