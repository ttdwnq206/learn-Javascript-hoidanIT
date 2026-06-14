console.log("Học về event");

const element = document.getElementById("myButton");
console.log(element);

const handleButton = () => console.log("you click a button");

const element1 = document.getElementById("myBtn");
element1.addEventListener("click", () => console.log("click new button"));

const anotherWayHandleBtn = () => console.log("listener nma hàm không cần ()");
element1.addEventListener("click", anotherWayHandleBtn);

console.log(element1);

// Thay đổi text !!! -> innerText
console.log("=======================");
const btnChanger = document.getElementById("btnChanger");
const myText = document.getElementById("myText");
const btnReverse = document.getElementById("btnReverse");

btnChanger.addEventListener("click", () => {
  console.log("clicked");
  myText.innerText = "Thay đổi text p2";
});

btnReverse.addEventListener("click", () => {
  console.log("clicked comeback");
  myText.innerText = "Thay đổi text p1";
});

// Thay đổi text !!! (có thêm HTML) -> innerHTML
const btnNewHTML = document.getElementById("btnHTML");
btnNewHTML.addEventListener("click", () => {
  console.log("new form");
  myText.innerHTML = "<i>In nghiêng</i>";
});

// Thay đổi text !!! (CSS) --> Camel Case !!!
console.log("========================");
const btnNewCss = document.getElementById("btnCSS");
const myText2 = document.getElementById("textP2");
const btnReverse2 = document.getElementById("btnReverse2");

btnNewCss.addEventListener("click", () => (myText2.style.color = "blue"));
btnReverse2.addEventListener("click", () => (myText2.style.color = "black"));
