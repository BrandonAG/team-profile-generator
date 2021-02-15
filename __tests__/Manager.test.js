const Manager = require("../lib/Manager")

test('Create Empleyee object', () => {
    // Create a new Engineer with name, id, email, and officeNumber
    const Jack = new Manager("Jack", 3, "jack@mail.com", 5);
  
    // Check if name and email are strings
    expect(Jack.name).toEqual(expect.any(String));
    expect(Jack.email).toEqual(expect.any(String));
    
  
    // Check if id and office are numbers
    expect(Jack.id).toEqual(expect.any(Number));
    expect(Jack.officeNumber).toEqual(expect.any(Number));
  
    // Check that the method call produce expected outputs
    expect(Jack.getName()).toEqual("Jack");
    expect(Jack.getId()).toEqual(3);
    expect(Jack.getEmail()).toEqual("jack@mail.com");
    expect(Jack.getOfficeNumber()).toEqual(5);
    expect(Jack.getRole()).toEqual("Manager");
    
});