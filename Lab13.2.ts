class Student {
  public name: string;     
  private rollNo: number;  
  constructor(name: string, rollNo: number) {
    this.name = name;
    this.rollNo = rollNo;
  }
  showRollNo(): void {
    console.log("Roll No:", this.rollNo);
  }
}
let s2 = new Student("suma", 101);
console.log("Name:", s2.name); 
s2.showRollNo();      