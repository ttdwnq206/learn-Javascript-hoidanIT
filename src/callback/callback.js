const greeting = (name, callback) => {
  console.log("Hello " + name);
  callback();
};

const hello = () => {
  console.log("Hello");
};
const hi = () => {
  console.log("Hi");
};

greeting("Dũng", hello);
greeting("Dũng", hi);
