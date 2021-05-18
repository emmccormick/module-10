const Manager = require('../lib/Manager');

test('manager file is created with correct properties', () => {
    const manager = new Manager("Emily", 2, "emily@gmail.com", 33);

    expect(manager.officeNumber).toEqual(expect.any(Number));
})