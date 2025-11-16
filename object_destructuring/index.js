
const people = [ 
    { 
        name: "Alice", 
            address: {
             city: "New York", 
                street: {
                 name: "Broadway", number: 123 
                } 
            } 
        }, 
    { 
        name: "Bob", 
            address: {
             city: "Los Angeles", 
                street: {
                 name: "Sunset Boulevard", number: 456 
                } 
            } 
        } 
];

let {name:name1, address:{ city:city1, street :{ name:tmp_name1, number:number1}}} = people[0];
let {name:name2, address:{ city:city2, street :{ name:tmp_name2, number:number2}}} = people[1];

// DEBUG
console.log(name1, name2);
console.log(city1, city2);
