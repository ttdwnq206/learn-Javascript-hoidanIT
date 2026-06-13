const products = [
  (product1 = {
    name: "Bánh bao",
    price: 100,
    inStock: true,
  }),
  (product2 = {
    name: "Chuối",
    price: 500,
    inStock: true,
  }),
  (product3 = {
    name: "Gạo",
    price: 250,
    inStock: false,
  }),
  (product4 = {
    name: "Bơ",
    price: 50,
    inStock: true,
  }),
  (product5 = {
    name: "Dầu ăn",
    price: 100,
    inStock: false,
  }),
];

console.log("Origin:", products);

//1. In ra tên sản phẩm đầu tiên
console.log(`Tên sản phẩm đầu tiên: ${products[0].name}`);

//2. Thay đổi giá sản phẩm thứ hai thành 150
// và in danh sách tất cả sản phẩm
const products2 = [
  product1,
  {
    name: product2.name,
    price: 150,
    inStock: product2.inStock,
  },
  product3,
  product4,
  product5,
];
console.log(products2);

//3. Thêm một sản phẩm mới vào cuối mảng
// và in ra danh sách tất cả sản phẩm
const products3 = [product1, product2, product3, product4, product5];
products3.push(
  (product6 = {
    name: "Nước lọc",
    price: 20,
    inStock: true,
  }),
);
console.log(products3);

//4. Xóa sản phẩm cuối cùng
// và in ra danh sách tất cả sản phẩm
products.pop();
console.log(products);

//5. dùng forEach() in ra tất cả tên sản phẩm
products.forEach((item) => console.log(item.name));

//6. dùng map() tạo mảng mới chỉ chứa giá sản phẩm
const priceProducts = products.map((item) => item.price);
console.log(priceProducts);

//7. dùng filter() để lấy các sản phẩm còn hàng
const inStockProducts = products.filter((item) => item.inStock === true);
console.log(inStockProducts);

//8. dùng for in để duyệt qua thuộc tính của sản phẩm đầu tiên
for (let key in products[0]) {
  console.log(key, products[0][key]);
  console.log(`Sản phẩm đầu tiên: ${products[0][key]}`);
}
