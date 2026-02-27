function formatValue(x: string | number): void {
    if (typeof x === "string") {
        console.log("It is a string");
    } else {
        console.log("It is a number");
    }
}

formatValue("hello");
formatValue(42);