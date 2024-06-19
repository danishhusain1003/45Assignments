// Name Cases: Store a person’s name in a variable, and then print that person’s 
// name in lowercase, uppercase, and titlecase.
function toTitlecase (str:string): string {
    return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}
let name1:string = "Danish"
console.log(name1.toLowerCase())
console.log(name1.toUpperCase())
console.log(toTitlecase(name1))




