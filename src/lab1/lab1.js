const fullName = "Triệu Tài Dũng";
const birthYear = 2006;
let isStudent = true;
let today = new Date();
let currentYear = today.getFullYear();

//Cách 1
console.log(`Tên: ${fullName}`);
console.log(`Tuổi: ${currentYear - birthYear}`);
console.log(`Sinh viên: ${isStudent}`);

//Cách 2
console.log(`Tên: ${fullName}
Tuổi: ${currentYear - birthYear}
Sinh viên: ${isStudent}`);
