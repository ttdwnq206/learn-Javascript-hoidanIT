console.log("Arrow function");

function sum(a, b) {
  return a + b;
}

console.log(sum(10, 5));

//arrow function (chỉ cần tham số và khối lệnh)
const sum1 = (a, b) => {
  return a + b;
};

console.log(`sum1 = ${sum1(5, 5)} dùng arrow function`);

//function không cần đặt tên, chạy luôn
(function () {
  console.log("say hi chay ngay di");
})();
