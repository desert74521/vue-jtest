'use strict';
import  timerGame  from '@/utils/utils'
jest.useFakeTimers();

test('waits 1 second before ending the game', () => {
    const callback = jest.fn();

    timerGame(callback);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    jest.runAllTimers();
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
});