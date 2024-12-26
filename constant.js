const a = {
   name:"pradeep",
   age:20,
};

//This is change the name and age
console.log(a.name="vgp",a.age="22");

//Next code;
const value={
   name:"pradeep",
   age:20,
   number:1234567890,
};

//To add the extra value 
const {name,age,number,mail="pradeep@gmail.com"}=value;
console.log(name);
console.log(age);
console.log(number);
console.log(mail);

/*overall output is;
vgp 22
pradeep
20
1234567890
pradeep@gmail.com
*/