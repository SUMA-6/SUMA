interface StudentList {
    name: string;
    marks: number;
}

let students: StudentList[] = [
    { name: "Anjali", marks: 85 },
    { name: "Ravi", marks: 78 },
    { name: "Sita", marks: 92 }
];

for (let i = 0; i < students.length; i++) {
    console.log("Name:", students[i].name);
    console.log("Marks:", students[i].marks);
    console.log("-------------");
}
