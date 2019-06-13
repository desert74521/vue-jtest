import  state  from '@/store/state'
describe('state', () => {
    it('state is exists', () => {
        expect(typeof state).toBe("object");
    })
})