//object spread
const value={
   name:"pradeep G",
   age:20,
};
const value1={
   number:1234567890,
   mail:"xxxxxxxx@gmail.com",
};
const merged={...value, ...value1};
console.log(merged);

//ARRAY SPREAD
const arr1=[1,2,3,4];
const arr2=[5,6,7];
const arr3=[8,9,10];
const arraymerged=[...arr1, ...arr2, ...arr3];
console.log(arraymerged);