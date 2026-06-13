console.log("Video 21");
console.error("My fault");
console.warn("test warning");

let name = "Dũng";
let age = 20;

//Không nên: cộng chuỗi dễ sai
console.log("Name: " + name + ", Age: " + age);

//Dùng dấu phẩy, tự động thêm dấu cách sau dấu phẩy !
console.log("Name:", name, ", Age:", age);
console.log(name, age);

//Tô màu cho console.log() bằng %c
console.log(
  "%cCảnh báo!",
  "color: red; font-weight: bold; font-size: x-large;",
);
