let diemTB = (toan, van, anh) => {
  return (toan + van + anh) / 3;
};

let xepLoai = (diemTB) => {
  if (diemTB >= 9) {
    return "Xuất sắc";
  } else if (diemTB >= 8) {
    return "Giỏi";
  } else if (diemTB >= 6.5) {
    return "Khá";
  } else {
    return "Trung bình";
  }
};

const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;

console.log(`
Điểm trung bình: ${diemTB(diemToan, diemVan, diemAnh)}
Xếp loại: ${xepLoai(diemTB(diemToan, diemVan, diemAnh))}
`);
