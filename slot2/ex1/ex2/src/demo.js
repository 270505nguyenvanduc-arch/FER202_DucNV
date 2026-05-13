let tong = (a,b) => a+ b;
console.log(tong(4,5));
let chao =() => console.log("chao cac ban");
chao();

let chao1 = (name) => console.log(`chao ${name}!`);

    chao1("Duc");

//let chao3 = (ten="duc") => console.log(`chao  + $(ten)!`);


let person = {
    id: 1,
    name: "Duc",
    age: 20,
    address: "Quang Nam",
}
let chao2 = (person) => console.log(`xin chao ${person.name}!`);
chao2(person);