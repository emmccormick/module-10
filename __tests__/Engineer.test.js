// test the extra piece of data (github)
const Engineer = require('../lib/Engineer');

test('engineer file is created with correct properties', () => {
    const engineer = new Engineer("Emily", 2, "emily@gmail.com", "github.com");

    expect(engineer.github).toEqual(expect.any(String));
})