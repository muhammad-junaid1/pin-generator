// Hiding the message
const notifySection = document.querySelectorAll("#notify");
notifySection[0].children[0].classList.add("hide");
notifySection[0].children[1].classList.add("hide");

//
const generatePinInput = document.querySelector("#generate-pin-input");

const generatePinBtn = document.querySelector("#generate-pin-btn");

const submitInput = document.querySelector("#submit-input");
const actionLeft = document.querySelector(".action-left");

// Generate New Pin

// global variable;
let randomNumber;
let finalValue = "";

generatePinBtn.addEventListener("click", (e) => {
  randomNumber = Math.floor(Math.random() * 9000);
  if (randomNumber < 1000) {
    randomNumber = Math.floor(Math.random() * 9000);
  }
  // Now set the value to the input field
  generatePinInput.disabled = true;
  generatePinInput.value = randomNumber;
});

// calc row
const calcRow = document.querySelectorAll(".calc-button-row");
calcRow.forEach((row) => {
  row.childNodes.forEach((child) => {
    child.addEventListener("click", (e) => {
      // Submit input

      let userValue = e.target.innerText;
      if (userValue === "<") {
        let newValue = finalValue.slice(0, -1);
        finalValue = newValue;
        submitInput.value = finalValue;
      } else if (userValue === "C") {
        finalValue = "";
        submitInput.value = finalValue;
      } else {
        finalValue += userValue;
        submitInput.value = finalValue;
      }
    });
  });
});

// submit button
let tryLeft = 3;
const submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", (e) => {
  submitInput.value = "";
  if (randomNumber === parseInt(finalValue)) {
    finalValue = "";
    notifySection[0].children[1].classList.remove("hide");
    notifySection[0].children[0].classList.add("hide");
    generatePinBtn.disabled = true;
    submitBtn.disabled = true;
  } else {
    finalValue = "";
    notifySection[0].children[0].classList.remove("hide");
    tryLeft--;
    tryLeftString = `${tryLeft} try left`;
    actionLeft.textContent = tryLeftString;
    "remaining:tryLeft : " + tryLeft;

    if (tryLeft === 0) {
      submitBtn.disabled = true;
    }
  }
});
