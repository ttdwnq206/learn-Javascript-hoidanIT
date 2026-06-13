/*
    let obj_name = {
            key: value
    };
*/
const person = {
  name: "Dũng",
  age: 20,
};

// Truy cập thuộc tính trong Object
console.log("person before:", person);
console.log("age:", person.age);
console.log("name:", person["name"]);
console.log("age p2:", person["age"]);

// Thêm thuộc tính mới
person.address = "Thái Nguyên";
person["nationality"] = "Vietnam";

delete person.name;
console.log("person after:", person);

// Lặp object
const sinhvien = [
  (sv1 = {
    username: "Dũng",
    score: 7,
  }),
  (sv2 = {
    username: "Bangbang",
    score: 10,
  }),
  (sv3 = {
    username: "bla bla",
  }),
];
console.log(sinhvien);

// In ra tên các sinh viên
sinhvien.forEach((sv) => console.log(sv.username));

// for in duyệt qua thuộc tính
// for (let key in object) {
//     console.log(key, object[key]);
// }

const person2 = {
  name: "TTD",
  gender: "Male",
};

for (let key in person2) {
  console.log(key, person2[key]);
}

// for of duyệt qua giá trị
for (let value of Object.values(person2)) {
  console.log(value);
}

for (let value of Object.entries(person2)) {
  console.log(value);
}
