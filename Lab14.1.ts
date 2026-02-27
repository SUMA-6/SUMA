class Student {
  readonly id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

let s = new Student(1, "Bhavana");

console.log(s.id);
