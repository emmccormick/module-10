const Employee = require('../lib/Employee');

test('employee file is created with correct properties', () => {
    const employee = new Employee("Emily", 2, "emily@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
})