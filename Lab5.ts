function greetUser(name:string,title:string="Mr./Ms"):string{
    return "Hello,"+  title+name;
}
console.log(greetUser("suma"));
console.log(greetUser("summ"));