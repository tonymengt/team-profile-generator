const Intern = require('../lib/Intern');

test("create intern's school information", () => {
    const intern = new Intern('Dave', 1 , "hello@gmail.com", 'university of toronto');

    expect(intern.school).toEqual(expect.any(String));
})

test("get intern's role", () => {
    const intern = new Intern('Dave', 1 , "hello@gmail.com", 'university of toronto');

    expect(intern.role).toBe('Intern');
})

test("get intern's school information", () => {
    const intern = new Intern('Dave', 1 , "hello@gmail.com", 'university of toronto');

    expect(intern.getSchool()).toBe('university of toronto');
})