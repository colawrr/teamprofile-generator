const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Jim', 1, 'jim@gmail.com', 'colawrr', 'BSU');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets employee intern school', () => {
    const intern = new Intern('Jim', 1, 'jim@gmail.com', 'colawrr', 'BSU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee intern', () => {
    const intern = new Intern('Jim', 1, 'jim@gmail.com', 'colawrr', 'BSU');

    expect(intern.getRole()).toEqual("Intern");
}); 