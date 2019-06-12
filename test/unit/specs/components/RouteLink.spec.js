import { shallowMount } from '@vue/test-utils'
import RouteLink from '@/components/RouteLink'
import { doesNotReject } from 'assert';

describe('RouteLink.vue', () => {
  //组件是否能正常渲染
  it('RouteLink是否能正常渲染', () => {
    const wrapper = shallowMount(RouteLink)
    wrapper.setProps({ 
        title: "3444",
        urlobj:[
            {
                path:"/222",
                name:"333"
            }
        ]
    });
    expect(wrapper.contains('.link-box')).toBe(true)
  })
  //组件是否能响应事件
  it('RouteLink组件是否能响应事件', () => {
    const wrapper = shallowMount(RouteLink)
    wrapper.setProps({ 
        title: "3444",
        urlobj:[
            {
                path:"/222",
                name:"333"
            }
        ]
    });
    wrapper.findAll('[type="info"]').at(0).trigger("click");
    // wrapper.vm.$nextTick(()=>{
    //   expect(wrapper.emitted().routerlinkto).toBeTruthy();
    //   expect(wrapper.vm.$router.length).toBe(1);
    //   done();
    // })
  })
})