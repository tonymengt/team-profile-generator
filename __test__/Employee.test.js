const Employee = require('../lib/Employee');

test ("create employee name", () => {
    const employee = new Employee('Dave', 1 , "hello@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@' && '.'));
})

test("get the employee's name", () => {
    const employee = new Employee('Dave', 1, 'hello@gmail.com');

    expect(employee.getName()).toBe(employee.name);
})

test("get the employee's ID", () => {
    const employee = new Employee('Dave', 1, 'hello@gmail.com');

    expect(employee.getId()).toBe(employee.id);
})

test("get the employee's Email", () => {
    const employee = new Employee('Dave', 1, 'hello@gmail.com');

    expect(employee.getEmail()).toBe(employee.email);
})

test("get the employee's role", () => {
    const employee = new Employee('Dave', 1, 'hello@gmail.com');

    expect(employee.getRole()).toBe('Employee');
})