// 1st way to measure execution time
// const startTime = performance.now();

// for(let i = 0; i <= 60000; i++)
// {
//     console.log(i);
// }

// const endTime = performance.now();

// console.log(`Execution time: ${endTime - startTime} milliseconds`);

// 2nd way to measure execution time
// console.time("loop time");

// for (let i = 0; i <= 60000; i++) {
//   console.log(i);
// }

// console.timeEnd("loop time");
 
const  firstElement = [];
const  secondElement = [];

for(let i=1; i<=600000; i++)
{
    if(i<=300000) firstElement.push(i);

    secondElement.push(i);
}

// console.log("First Element Length: ", firstElement.length);
// console.log("Second Element Length: ", secondElement.length);

const firstUserList = firstElement.map((value)=> ({userId:value}));
const secondUserList = secondElement.map((value)=>({userId:value}));


console.time("task1");

const User1 = firstUserList.find((user)=>(user.userId == 20000));

console.timeEnd("task1");



console.time("task2");

 const User2 = secondUserList.find((user)=>(user.userId == 200000));

console.timeEnd("task2");