function getUserType(obj) {
    return obj.type;
}
var Person1 = {
    type: "user",
    name: "Akshay",
    age: 26,
    occupation: "full-stact"
};
var Person2 = {
    type: "admin",
    name: "Admin",
    age: 26,
    role: "full-stact"
};
console.log(getUserType(Person1));
console.log(getUserType(Person2));
