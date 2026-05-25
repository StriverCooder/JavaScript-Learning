let arr = [9,1,2,3,4,5];
console.log(arr);

arr.sort();
console.log(arr);

arr.reverse();
console.log(arr);


// Objects

let obj ={
    name:"Alpha",
    greet: function(){
        console.log(`Hello i am ${this.name}`);
    }
}


let k = Object.keys(obj);
console.log(k);

let v = Object.values(obj);
console.log(v);

for (const element in obj) {
    console.log(obj[element]);
}

let obj2 = {...obj};
console.log(obj2);



