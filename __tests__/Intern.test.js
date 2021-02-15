const Intern = require("../lib/Intern")

test('Create Empleyee object', () => {
    // Create a new Engineer with name, id, email, and school
    const Jack = new Intern("Jack", 3, "jack@mail.com", "Stanford");
  
    // Check if name, email, and school are strings
    expect(Jack.name).toEqual(expect.any(String));
    expect(Jack.email).toEqual(expect.any(String));
    expect(Jack.school).toEqual(expect.any(String));
  
    // Check if id is a number
    expect(Jack.id).toEqual(expect.any(Number));
  
    // Check that the method call produce expected outputs
    expect(Jack.getName()).toEqual("Jack");
    expect(Jack.getId()).toEqual(3);
    expect(Jack.getEmail()).toEqual("jack@mail.com");
    expect(Jack.getSchool()).toEqual("Stanford");
    expect(Jack.getRole()).toEqual("Intern");
    
});