// test the extra piece of data (school)
const Intern = require('../lib/Intern');

test('intern file is created with correct properties', () => {
    const intern = new Intern("Emily", 2, "emily@gmail.com", "UW Milwaukee");

    expect(intern.school).toEqual(expect.any(String));
})