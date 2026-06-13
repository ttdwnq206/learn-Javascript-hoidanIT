// Duyệt mảng
let colors = ["green", "blue", "yellow"];

//1. for
for (let i = 0; i < colors.length; ++i) {
  console.log(`Index ${i}: ${colors[i]}`);
}

//2. forEach
colors.forEach(function (value, index) {
  console.log("value =", value, "index =", index);
});

console.log("==================");
colors.forEach((value, index) => {
  console.log("value =", value, "index =", index);
});

//Phương thức map() --> duyệt qua từng phần tử
// --> tạo ra một mảng mới (ko thay đổi mảng gốc)
// --> có thể thay đổi được từng phần tử
/*
    let newArray = array.map(function(element, index, array) {
        // return giá trị mới
    });
 */
console.log("==================");
let scores = [10, 9, 8, 7];
let newScores = scores.map((score, index) => {
  return score * 2;
});
let anotherScores = scores.map((element, index) => element * 2);
console.log(newScores);
console.log(anotherScores);

//Lọc phần tử mảng với filter()
/*
    let newArray = array.filter(function(element, index, array) {
        return điều_kiện_đúng; 
        // true giữ lại, false loại bỏ
    });
 */
console.log("===================");
const ages = [10, 20, 30, 40, 25, 12];
const agesX2 = ages.map((element) => element * 2);
const agesGreater20 = ages.filter((element) => element > 18);
console.log(`Origin: ${ages}`);
console.log(`New: ${agesX2}`);
console.log("Greater than 18:", agesGreater20);
