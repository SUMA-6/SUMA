enum Direction {
  Up,
  Down,
  Left,
  Right
}

enum Status {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED"
}

function printStatusOrDirection(value: Direction | Status): void {
  console.log("Value:", value);
}

let d: Direction = Direction.Right;
let s: Status = Status.SUCCESS;

console.log("Direction variable =", d);
console.log("Status variable =", s);

printStatusOrDirection(d);
printStatusOrDirection(s);