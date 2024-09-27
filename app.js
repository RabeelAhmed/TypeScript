// Interface Concept <==============
// A function 'abcd' that accepts an object of type 'user'
function abcd(obj) {
    console.log(obj.name, obj.age, obj.email);
}
// Calling the 'abcd' function with an object that conforms to the 'user' interface.
abcd({ name: "Rabeel", email: "rabeel@gmail.com", age: 22 });
// A function 'details' that accepts an object of type 'Admin'.
function details(obj) {
    console.log(obj.isAdmin, obj.name, obj.email);
}
// Calling the 'details' function with an object that conforms to the 'Admin' interface.
details({ isAdmin: true, name: "Rabeel", email: "rabeel@gmail.com", age: 22 });
