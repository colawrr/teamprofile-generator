const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Jim', 35, 'jim@gmail.com');

    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Jimmy', 1, 'jimmy@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee email address', () => {
    const employee = new Employee('Jimmy', 1, 'jimmy@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets employee ID', () => {
    const employee = new Employee('Jimmy', 1, 'jimmy@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const employee = new Employee('Jimmy', 1, 'jimmy@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 