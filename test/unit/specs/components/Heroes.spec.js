import { shallowMount } from '@vue/test-utils'
import Heroes from '@/components/Heroes'

describe('Heroes.vue', () => {
  //组件是否能正常渲染
  it('Heroes是否能正常渲染', () => {
    const wrapper = shallowMount(Heroes)
    wrapper.setProps({ 
        heroes: [
            {
                id:1,
                name:"hero1"
            },
            {
                id:2,
                name:"hero2"
            }
        ] 
    });
    expect(wrapper.contains('.hero-title')).toBe(true)
    expect(wrapper.contains('.margin-5px')).toBe(true)
  })
  //组件是否能响应事件
  it('Heroes组件是否能响应事件', () => {
    const wrapper = shallowMount(Heroes)
    wrapper.setProps({ 
        heroes: [
            {
                id:1,
                name:"hero1"
            },
            {
                id:2,
                name:"hero2"
            }
        ]
    });
    const divArray = wrapper.findAll('[icon="el-icon-edit"]');
    divArray.at(0).trigger("click");
    // wrapper.vm.$nextTick(()=>{
    //     expect(wrapper.emitted().clicknamebar).toBeTruthy()
    // })
  })
  //组件的删除功能
  it('Heroes组件的删除功能', () => {
    const wrapper = shallowMount(Heroes)
    wrapper.setProps({ 
        heroes: [
            {
                id:1,
                name:"hero1"
            },
            {
                id:2,
                name:"hero2"
            }
        ]
    });
    const divArray = wrapper.findAll('[type="warning"]');
    expect(divArray.length).toBe(2)
    let buttondel = divArray.at(0);
    buttondel.trigger("click");
    // wrapper.vm.$nextTick(()=>{
    //     expect(wrapper.emitted().removeHero).toBeTruthy()
    //     expect(divArray.length).toBe(1)
    // })
  })
  //组件的添加功能
  it('Heroes组件的添加功能', () => {
    const wrapper = shallowMount(Heroes)
    wrapper.setProps({ 
        heroes: [
            {
                id:1,
                name:"hero1"
            }
        ]
    });
    const divArray = wrapper.findAll('[type="warning"]');
    expect(divArray.length).toBe(1)
    let addBtn = wrapper.find('[type="info"]');
    const input = wrapper.find('el-input')
    input.value = "100";
    addBtn.trigger('click')
    // wrapper.vm.$nextTick(()=>{
    //     expect(wrapper.emitted().addNewHero).toBeTruthy()
    //     expect(divArray.length).toBe(2)
    // })
  })
})