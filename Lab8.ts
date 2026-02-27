type point = {
    x: number;
    y: number;
};
function printPoint(p: point): void {
    console.log(`x: ${p.x},y: ${p.y}`);
}
printPoint({ x:10, y:20});