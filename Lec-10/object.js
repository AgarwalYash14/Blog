"use strict";
let user = {
    username: "John",
    age: 25,
};
console.log(user.username);
user.age = 30;
console.log(user.age);
let string = ["Hello", "kkjjk"];
let numStr = [];
numStr[0] = 454;
numStr[1] = "Hello";
console.log(numStr);
let emp = {
    id: 1,
    ename: "John",
    salary: 25000,
    dep: "IT",
    getName: function () {
        return this.ename;
    },
};
let emp2 = {
    id: 2,
    ename: "Mahesh",
    salary: 25000,
    dep: "IT",
    getSalary: function () {
        return this.salary;
    },
};
let emp3 = {
    id: 3,
    ename: "Vinayak",
    salary: 25000,
    dep: "IT",
    getName: function () {
        return this.ename;
    },
};
console.log(emp.getName());
console.log(emp2.getSalary());
function empname(em) {
    console.log(em.getName());
}
empname(emp);
let employee = [emp, emp3];
console.log(employee);
let users = [
    {
        id: 1,
        email: "dssd@gmail.com",
        password: "1234"
    },
    {
        id: 2,
        email: "lklkl@gmail.com",
        password: "1234"
    },
    {
        id: 3,
        email: "hhih@gmail.com",
        password: "1234"
    }
];
console.log(users);
