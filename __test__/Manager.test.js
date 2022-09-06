const Manager = require('../lib/Manager');

test('create manager office number', () => {
    const manager = new Manager('Dave', 1 , "hello@gmail.com", 1);

    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('get manager role', () => {
    const manager = new Manager('Dave', 1 , "hello@gmail.com", 1);

    expect(manager.getRole()).toBe('Manager');
})