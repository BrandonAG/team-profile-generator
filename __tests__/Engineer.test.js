const Engineer = require("../lib/Engineer")

test('Create Empleyee object', () => {
    // Create a new Engineer with name, id, email, and github
    const Jack = new Engineer("Jack", 3, "jack@mail.com", "jack");
  
    // Check if name and email are strings
    expect(Jack.name).toEqual(expect.any(String));
    expect(Jack.email).toEqual(expect.any(String));
    expect(Jack.github).toEqual(expect.any(String));
  
    // Check if id is a number
    expect(Jack.id).toEqual(expect.any(Number));
  
    // Check that the method call produce expected outputs
    expect(Jack.getName()).toEqual("Jack");
    expect(Jack.getId()).toEqual(3);
    expect(Jack.getEmail()).toEqual("jack@mail.com");
    expect(Jack.getGithub()).toEqual("jack");
    expect(Jack.getRole()).toEqual("Engineer");
    
});