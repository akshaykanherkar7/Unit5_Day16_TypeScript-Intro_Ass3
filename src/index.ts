interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

function getUserType(obj : User | Admin):string{
    return obj.type
}

let Person1 : User = {
    type: "user",
    name: "Akshay",
    age: 26,
    occupation: "full-stact"
}

let Person2 : Admin = {
    type: "admin",
    name: "Admin",
    age: 26,
    role: "full-stact"
}

console.log(getUserType(Person1))
console.log(getUserType(Person2)) 