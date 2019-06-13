import { mount } from '@vue/test-utils'
import Heroes from '@/components/Heroes'

describe('Heroes.vue简单功能测试', () => {
  //组件是否能正常渲染
  it('Heroes是否能正常渲染', () => {
    const wrapper = mount(Heroes)
    wrapper.setProps({ 
        heroes: [
            {
                id:1,
                name:"hero1"
            }
        ] 
    });
    expect(wrapper.contains('.hero-title')).toBe(true)
    expect(wrapper.contains('.margin-5px')).toBe(true)
  })
  //组件是否能响应事件
  it('Heroes组件是否能响应事件--to_detail', () => {
    const toDetailClickMethod = jest.fn();
    const wrapper = mount(Heroes)
    wrapper.setProps({ 
        heroes: [
            {
                id:1,
                name:"hero1"
            }
        ]
    });
    wrapper.setMethods({to_detail:toDetailClickMethod});
    const btnArray = wrapper.findAll('.width-fixed');
    btnArray.at(0).trigger("click");
    //事件触发调用方法
    expect(toDetailClickMethod).toHaveBeenCalled();
    //且传递参数正确
    expect(toDetailClickMethod).toHaveBeenCalledWith(1);
  })
  //组件是否能响应事件
  it('Heroes组件是否能响应事件--remove_hero', () => {
    const removeHeroClickMethod = jest.fn();
    const wrapper = mount(Heroes)
    wrapper.setProps({ 
        heroes: [
            {
                id:1,
                name:"hero1"
            }
        ]
    });
    wrapper.setMethods({remove_hero:removeHeroClickMethod});
    const btnArray = wrapper.findAll('.el-button--warning');
    btnArray.at(0).trigger("click");
    //事件触发调用方法
    expect(removeHeroClickMethod).toHaveBeenCalled();
    //且传递参数正确
    expect(removeHeroClickMethod).toHaveBeenCalledWith(1);
  })
  //组件是否能响应事件
  it('Heroes组件是否能响应事件--add_new_hero', () => {
    const addHeroClickMethod = jest.fn();
    const wrapper = mount(Heroes)
    wrapper.setProps({ 
        heroes: [
            {
                id:1,
                name:"hero1"
            }
        ]
    });
    wrapper.setMethods({add_new_hero:addHeroClickMethod});
    const btnArray = wrapper.findAll('.el-button--info');
    btnArray.at(0).trigger("click");
    //事件触发调用方法
    expect(addHeroClickMethod).toHaveBeenCalled();
  })
})

describe('Heroes.vue面向细节方法测试', () => {
  //组件是否能响应事件
  it('Heroes组件中Method方法的测试--to_detail', () => {
    const wrapper = mount(Heroes)
    wrapper.setProps({ 
      heroes: [
          {
              id:1,
              name:"hero1"
          }
      ]
    });
    wrapper.vm.to_detail.call(wrapper.vm,1);
    //方法中的事件被触发
    expect(wrapper.emitted().click_name_bar).toBeTruthy()
    //且携带的参数是1
    expect(wrapper.emitted().click_name_bar[0]).toEqual([1])
  })

  //组件是否能响应事件
  it('Heroes组件中Method方法的测试--remove_hero', () => {
    const wrapper = mount(Heroes)
    wrapper.setProps({ 
      heroes: [
          {
              id:1,
              name:"hero1"
          }
      ]
    });
    wrapper.vm.remove_hero.call(wrapper.vm,1);
    //方法中的事件被触发
    expect(wrapper.emitted().click_delete_button).toBeTruthy()
    //且携带的参数是1
    expect(wrapper.emitted().click_delete_button[0]).toEqual([1])
  })

  //组件是否能响应事件
  it('Heroes组件中Method方法的测试--add_new_hero', () => {
    //输入框值不为空
    const wrapper = mount(Heroes)
    wrapper.setData({name:"newHero"})
    wrapper.vm.add_new_hero.call(wrapper.vm);
    //方法中的事件被触发
    expect(wrapper.emitted().click_add_button).toBeTruthy()
    //且携带的参数是"newHero"
    expect(wrapper.emitted().click_add_button[0]).toEqual(["newHero"])

    //----------------------------------------------------------------------
    //输入框值为空
    const wrapper2 = mount(Heroes)
    wrapper2.setData({name:""})
    wrapper2.vm.add_new_hero.call(wrapper2.vm);
    //方法中的事件被触发
    expect(wrapper2.emitted().click_add_button).toBe(undefined)
  })
})