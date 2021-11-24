const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Jim', 1, 'jim@gmail.com', 5);

    expect(manager.number).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Jim', 1, 'jim@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
});