function greetUser(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}
console.log(greetUser("Suma"));          
console.log(greetUser("Suma", "Ms."));   
