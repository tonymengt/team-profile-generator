
const Engineer = require('../lib/Engineer');

test("create engineer's github user name", () => {
    const engineer = new Engineer('Dave', 1 , "hello@gmail.com", 'davydave');

    expect(engineer.github).toEqual(expect.any(String));
})

test("get engineer github username", () => {
    const engineer = new Engineer('Dave', 1 , "hello@gmail.com", 'davydave');

    expect(engineer.getGithub()).toBe(`https://github.com/${engineer.github}`);
})

test("get engineer role", () => {
    const engineer = new Engineer('Dave', 1 , "hello@gmail.com", 'davydave');

    expect(engineer.getRole()).toBe('Engineer');
})

