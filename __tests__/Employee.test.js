const Employee = require('../lib/Employee');

test('employee file is created with correct properties', () => {
    const employee = new Employee();

    expect(employee.name).toEqual(expect.any(String));
})