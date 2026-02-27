function greetUser(name, title) {
    if (title) {
        return "Hello, ".concat(title, " ").concat(name, "!");
    }
    else {
        return "Hello, ".concat(name, "!");
    }
}
console.log(greetUser("Suma"));
console.log(greetUser("Suma", "Ms."));
