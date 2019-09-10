const router = require('../app');

test('adds 1 + 2 to equal 3', () => {
    expect(router(1, 2)).toBe(3);
});