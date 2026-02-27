interface User{
    readonly id:number;
    name:string;
    age?:number;
};
let User1:User={
    id: 55,
    name:"suma",
    age:19
};
console.log("ID:",User1.id);
console.log("Name:",User1.name);
console.log("Age:",User1.age);
