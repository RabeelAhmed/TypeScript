// Interface Concept <==============

// Defining an interface 'user' which acts as a blueprint for an object structure.
interface user {
    name: string,     
    email: string,   
    age: number  
}

// A function 'abcd' that accepts an object of type 'user'
function abcd(obj: user) {
    console.log(obj.name, obj.age, obj.email);
}

// Calling the 'abcd' function with an object that conforms to the 'user' interface.
abcd({ name: "Rabeel", email: "rabeel@gmail.com", age: 22 });


// Extended Interface Concept <==============

// Redefining the 'user' interface to include just 'name' and 'email' properties.
interface user {
    name: string, 
    email: string 
}

// Defining a new interface 'Admin' that extends the 'user' interface.
interface Admin extends user {
    isAdmin: boolean 
}

// A function 'details' that accepts an object of type 'Admin'.
function details(obj: Admin) {
    console.log(obj.isAdmin, obj.name, obj.email);
}

// Calling the 'details' function with an object that conforms to the 'Admin' interface.
details({ isAdmin: true, name: "Rabeel", email: "rabeel@gmail.com", age: 22 });
