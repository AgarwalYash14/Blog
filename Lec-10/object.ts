interface User {
    username: string;
    age: number;
}

let user: User = {
    username: "John",
    age: 25,
};

console.log(user.username);
user.age = 30;
console.log(user.age);

let string: string[] = ["Hello", "kkjjk"];

let numStr: number[] | string[] = [];
numStr[0] = 454;
numStr[1] = "Hello";
console.log(numStr);

interface Emp {
    id: number;
    ename: string;
    salary: number;
    dep: string;
    getName(): string;
}
interface Emp2 {
    id: number;
    ename: string;
    salary: number;
    dep: string;
    getSalary(): number;
}

let emp: Emp = {
    id: 1,
    ename: "John",
    salary: 25000,
    dep: "IT",
    getName: function () {
        return this.ename;
    },
};

let emp2: Emp2 = {
    id: 2,
    ename: "Mahesh",
    salary: 25000,
    dep: "IT",

    getSalary: function () {
        return this.salary;
    },
};


let emp3: Emp = {
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

function empname(em: Emp) {
    console.log(em.getName());
}

empname(emp);

let employee: Emp[] = [emp, emp3];

console.log(employee);

interface User2 {
    id: number,
    email: string,
    password: string,
}

let users: User2[] = [
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
]

console.log(users);


// OR |

let some: number | string;
let arr2: number[] | string[] = [1, 5];
let arr3: (number | string)[] = [1, "Hello"];