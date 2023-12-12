const obj1={1:"a",2:'b'};
const obj2={2:"a",3:'b'};
const obj3={4:"a",5:'b'};

let obj4=Object.assign({},obj1,obj2,obj3);
let obj5={...obj1,...obj2}
console.log(obj4)
console.log(obj5)

// console.log(Object.keys(obj4))
// console.log(Object.values(obj4))
// console.log(Object.entries(obj4))
console.log(obj4.hasOwnProperty('1'))