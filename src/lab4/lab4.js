const btn = document.getElementById("button");
const username = document.getElementById("ten");
const password = document.getElementById("mkhau");

btn.addEventListener("click", () => {
  if (
    username.value === "trieutaidung0506@gmail.com" &&
    password.value === "123456"
  ) {
    alert("Đăng nhập thành công!");
    window.location.href = "success.html";
  } else {
    alert("Tài khoản hoặc mật khẩu sai");
    username.style.borderColor = "red";
    password.style.borderColor = "red";
  }
});
