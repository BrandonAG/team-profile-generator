const Employee = require("../lib/Employee")

test('Create Empleyee object', () => {
    // Create a new Employee with name, id, and email
    const Jack = new Employee("Jack", 3, "jack@mail.com");
  
    // Check if name and email are strings
    expect(Jack.name).toEqual(expect.any(String));
    expect(Jack.email).toEqual(expect.any(String));
  
    // Check if id is a number
    expect(Jack.id).toEqual(expect.any(Number));
  
    // Check that the method call produce expected outputs
    expect(Jack.getName()).toEqual("Jack");
    expect(Jack.getId()).toEqual(3);
    expect(Jack.getEmail()).toEqual("jack@mail.com");
    expect(Jack.getRole()).toEqual("Employee");
    
});