const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Jim', 1, 'jim@gmail.com', 'colawrr');
    expect(engineer.github).toEqual(expect.any(String));
});

test('gets github', () => {
    const engineer = new Engineer('Jim', 1, 'jim@gmail.com', 'colawrr');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Jim', 1, 'jim@gmail.com', 'colawrr');

    expect(engineer.getRole()).toEqual("Engineer");
});