
// Asynchronous Generators and Iteration -->
// async generator => next() =>

async function* load() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
}

let l = load();
l.next().then((r)=>console.log(r));
l.next().then((r)=>console.log(r));
l.next().then((r)=>console.log(r));

// for await for loop
async function test(){
    for await (const value of load()){
        console.log(value)
    }
}

test()
console.log("completed");

// Object and Rest operator (...) -->

const student = {
    age:10,
    height:5,
    weight:50
 }
 const {age,...other} = student;
 console.log(age);
 console.log(other);

 //spread operator -->
 const obj1 = {a:10,b:20}
 const obj2 = {c:30}
 //clone obj1
 const clone_obj={...obj1}

 //combine obj1 and obj2
 const obj3 = {...obj1,...obj2}
 console.log(clone_obj);
 console.log(obj3);