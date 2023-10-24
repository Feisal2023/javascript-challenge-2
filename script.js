const generate = document.querySelector(".generate");
const number = document.querySelector(".number");

const generateNumber = () => {
  // generate Random Number
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  number.innerHTML = randomNumber;
};

generate.addEventListener("click", () => {
  generateNumber();
});

generateNumber();
