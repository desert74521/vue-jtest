import { createLocalVue,mount } from '@vue/test-utils'
import RouteLink from '@/components/RouteLink'

describe('RouteLink.vue面向功能测试', () => {
  //组件是否能正常渲染
  it('RouteLink是否能正常渲染', () => {
    const wrapper = mount(RouteLink)
    wrapper.setProps({ 
        title: "3444",
        url_obj_s:[
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
    const linkButtonClickHandle = jest.fn();
    const wrapper = mount(RouteLink)
    wrapper.setProps({ 
        title: "3444",
        url_obj_s:[
            {
                path:"/222",
                name:"333"
            }
        ]
    });
    wrapper.setMethods({router_link_to:linkButtonClickHandle});
    let routeBtnS = wrapper.findAll('button');
    routeBtnS.at(0).trigger("click");
    //事件触发调用方法
    expect(linkButtonClickHandle).toHaveBeenCalled();
    //且传递参数正确
    expect(linkButtonClickHandle).toHaveBeenCalledWith("/222");
  })
})

describe('RouteLink.vue面向细节方法测试', () => {
  //组件是否能响应事件
  it('RouteLink组件中Method方法的测试--router_link_to', () => {
    const wrapper = mount(RouteLink)
    wrapper.vm.router_link_to.call(wrapper.vm,"/path_msg");
    //方法中的事件被触发
    expect(wrapper.emitted().click_route_link).toBeTruthy()
    //且携带的参数是"/path_msg"
    expect(wrapper.emitted().click_route_link[0]).toEqual(["/path_msg"])
  })
})