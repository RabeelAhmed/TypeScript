// // Interface Concept <==============

// // Defining an interface 'user' which acts as a blueprint for an object structure.
// interface user {
//     name: string,     
//     email: string,   
//     age: number  
// }

// // A function 'abcd' that accepts an object of type 'user'
// function abcd(obj: user) {
//     console.log(obj.name, obj.age, obj.email);
// }

// // Calling the 'abcd' function with an object that conforms to the 'user' interface.
// abcd({ name: "Rabeel", email: "rabeel@gmail.com", age: 22 });


// // Extended Interface Concept <==============

// // Redefining the 'user' interface to include just 'name' and 'email' properties.
// interface user {
//     name: string, 
//     email: string 
// }

// // Defining a new interface 'Admin' that extends the 'user' interface.
// interface Admin extends user {
//     isAdmin: boolean 
// }

// // A function 'details' that accepts an object of type 'Admin'.
// function details(obj: Admin) {
//     console.log(obj.isAdmin, obj.name, obj.email);
// }

// // Calling the 'details' function with an object that conforms to the 'Admin' interface.
// details({ isAdmin: true, name: "Rabeel", email: "rabeel@gmail.com", age: 22 });


// Type Aliases Concept <==============

// Creating a type alias 'value' which represents the 'String' type.
// type value = String

// let a: value

// a = "Rabeel"

// console.log(typeof(a))

// //  OR

// // Creating a type alias 'num' which can be either 'String' or 'number'.
// type num = String | number

// let b: num

// b = 22

// console.log(typeof(b))


// // Intersection Types Concept <==============

// // Defining a 'user' type with 'name' and 'email' properties.
// type user = {
//     name: String, 
//     email: String, 
// }

// // Defining an 'Admin' type that is an intersection of 'user' and an additional method.
// type Admin = user & {
//     getDetails(user: String): void
// }

// // A function 'abcd' that accepts an object of type 'Admin'.
// function abcd(a: Admin) {
//     console.log(a.email)
// }



// Class & Object with Constructor Concept <==============

// Defining a class 'Device' with a constructor that initializes 'name', 'company', 'type', and 'price'.
// class Device {
//     constructor(public name: String, public company: String, public type: String, public price: number) {}
// }


// let d1 = new Device("Rolex GMT-Master", "Rolex", "digital", 120000);


// // Class & Object with Getters and Setters Concept <==============

// // Defining a class 'User' with a private property '_name' and methods to get and set its value.
// class User {
//     // Constructor to initialize the '_name' property.
//     constructor(public _name: string) {}

//     // Getter method to return the value of '_name'.
//     get name() {
//         return this._name;
//     }

//     // Setter method to modify the value of '_name'.
//     set name(value: string) {
//         this._name = value;
//     }
// }

// let u1 = new User("Rabeel");


// Class & Object with Static Members Concept <==============

// Defining a class 'hero' with static members.
// Static properties and methods belong to the class itself, not to instances.
class hero {
    // A static property 'version' that belongs to the class 'hero'.
    static version = 1.0

    // A static method 'getRandom' that returns a random number.
    static getRandom() {
        return Math.random();
    }
}

// Static members can be accessed directly from the class without creating an instance.

// Function Overloading Concept <==============

// Function overloading allows multiple function signatures for one function.

function temp(a: string): void;

// The secondtemp signature accepts a string and a number, returning a number.
function temp(a: string, b: number): number;

// The actual implementation of 'temp' function using optional parameters and type checks.
function temp(a: any, b?: any): any {
    if (typeof a === "string" && typeof b === "undefined") {
        
        console.log("first function");
    } else if (typeof a === "string" && typeof b === "number") {
        
        console.log("second function");
        return b;
    } else {
        
        throw new Error("there is something wrong");
    }
}

// Function calls based on the signatures defined.
temp("Rabeel");           
temp("Ahmed", 12);        
// Generics in Functions Concept <==============

// Defining a generic function 'test' that can handle any type 'T'.
function test<T>(a: T) {
   
    console.log(typeof a);
}


test(12); 

// Generics in Interface Concept <==============

// Defining a generic interface 'halwa' with a type parameter 'T'.
interface halwa<T> {
    name: String, 
    age: number,    
    key: T,       
}

// A function 'abcd' that takes an object conforming to 'halwa' with 'key' being a String.
function abcd(obj: halwa<String>) {
   
    console.log(obj.key);
}

abcd({ name: "Rabeel", age: 22, key: "123nkasak12" });
