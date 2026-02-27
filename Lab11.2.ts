type Student = {
  name: string;
  marks: number;
};

type StudentList = {
  students: Student[];
};

let studentData: StudentList = {
  students: [
    { name: "Santhosh", marks: 85 },
    { name: "Ajay", marks: 90 },
    { name: "Dharithri", marks: 78 }
  ]
};

studentData.students.forEach((s) => {
  console.log("Name:", s.name, "Marks:", s.marks);
});
