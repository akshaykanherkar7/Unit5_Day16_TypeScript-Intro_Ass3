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

let findWhich : (User & Admin) = {
    type: User,
    name: "Akshay",
    age: 26,
    role: "full-stact"
}