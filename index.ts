//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "Muhmmad hamad";

//show in LowerCase
let lowercaseName: string = personName.toLowerCase();
console.log(lowercaseName)

//show in UpperCase
let uppercaseName: string = personName.toUpperCase();
console.log(uppercaseName)

//show in title case
let word:string[] = personName.split(" ");
let titlecaseName:string = ""
for (let i = 0 ; i < word.length; i++){
    titlecaseName +=word[i].charAt(0).toUpperCase()+word[i].slice(1).toLowerCase()+" "
    }
    console.log(titlecaseName) 
