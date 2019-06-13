import  getters  from '@/store/getters'
const state = {
    id:1,
    heroes: [],
    logs:[]
}
describe('getters', () => {
    it('getters is exists', () => {
        expect(typeof getters).toBe("object");
    })
    it('getters value', () => {
        expect(getters.id(state)).toBe(1);
        expect(getters.heroes(state).length).toBe(0);
        expect(getters.logs(state).length).toBe(0);
    })
})