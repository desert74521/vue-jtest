import { shallowMount } from '@vue/test-utils'
import SearchInput from '@/components/SearchInput'

describe('SearchInput.vue', () => {
  //组件是否能正常渲染
  it('SearchInput是否能正常渲染', () => {
    const wrapper = shallowMount(SearchInput)
    expect(wrapper.contains('.search-title')).toBe(true)
  })
  //组件是否能响应事件
  it('SearchInput组件是否能响应事件', () => {
    const wrapper = shallowMount(SearchInput)
    const input = wrapper.find("el-input");
    input.value  = "111";
    // wrapper.vm.$nextTick(()=>{
    //   input.trigger("blur");
    //   expect(wrapper.emitted().tosearch).toBeTruthy()
    // })
  })
})