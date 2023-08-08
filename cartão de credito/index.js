const name = document.getElementById("name");
const number = document.getElementById("number");
const cvc = document.getElementById("cvc");
const month = document.getElementById("month");
const year = document.getElementById("year");
const CardName = document.getElementById("CardName");
const CardNumber = document.getElementById("CardNumber");
const cardYear = document.getElementById("CardYear");
const cardMonth = document.getElementById("CardMonth");
const CardCvc = document.getElementById("cod");

const confirmBtn = document.getElementById("confirm");

const preencherName = () => {
  const letters = name.value;
  const lettersOnly = letters.replace(/[^a-zA-Z ]/g, "");
  if (letters !== lettersOnly) {
    nameError();
  } else {
    nameCorrect();
  }
  name.value = lettersOnly;
  CardName.innerText = name.value;
};

const nameError = () => {
  const error = document.getElementById("erroName");
  error.textContent = "invalid character!";
  error.style.color = "#e31227";
  error.style.fontSize = "12px";
};

const nameCorrect = () => {
  const error = document.getElementById("erroName");
  error.textContent = "";
};

const preencherNumber = () => {
  const numbers = number.value;
  const numbersOnly = numbers.replace(/[^0-9]/g, "");
  if (numbers !== numbersOnly) {
    numberError();
  } else {
    numberCorrect();
  }
  number.value = numbersOnly;
  const formattedText = formatTextWithSpaces(number.value, 4);
  CardNumber.innerText = formattedText;
};

const formatTextWithSpaces = (text, spacing) => {
  const regex = new RegExp(`\\B(?=(\\d{${spacing}})+(?!\\d))`, "g");
  return text.replace(regex, " ");
};

const numberError = () => {
  const error = document.getElementById("erroNumber");
  error.textContent = "invalid character!";
  error.style.color = "#e31227";
  error.style.fontSize = "12px";
};

const numberCorrect = () => {
  const error = document.getElementById("erroNumber");
  error.textContent = "";
};

const menssegeError = () => {
  const error = document.getElementById("error");
  error.textContent = "invalid character!";
  error.style.color = "#e31227";
  error.style.fontSize = "12px";
  error.style.alignSelf = "center";
};

const Correct = () => {
  const error = document.getElementById("error");
  error.textContent = "";
};

const preencherMonth = () => {
  const numbers = month.value;
  const numbersOnly = numbers.replace(/[^0-9]/g, "");
  if (numbers !== numbersOnly) {
    menssegeError();
  } else {
    Correct();
  }
  month.value = numbersOnly;
  cardMonth.innerText = month.value;
};

const preencherYear = () => {
  const numbers = year.value;
  const numbersOnly = numbers.replace(/[^0-9]/g, "");
  if (numbers !== numbersOnly) {
    menssegeError();
  } else {
    Correct();
  }
  year.value = numbersOnly;
  cardYear.innerText = year.value;
};

const preencherCvc = () => {
  const numbers = cvc.value;
  const numbersOnly = numbers.replace(/[^0-9]/g, "");
  if (numbers !== numbersOnly) {
    menssegeError();
  } else {
    Correct();
  }
  cvc.value = numbersOnly;
  CardCvc.innerText = cvc.value;
};

const confirmation = (ev) => {
  ev.preventDefault;

  if (
    name.value &&
    number.value &&
    cvc.value &&
    month.value &&
    year.value !== ""
  ) {
    const section = document.getElementById("transiton");
    section.dataset.information = "completed";
    section.innerHTML = "";
    section.style.gap = "2.5em";
    section.style.alignItems = "center";
    const img = document.createElement("img");
    img.src = "./images/icon-complete.svg";
    img.alt = "Ícone de Confirmação";
    img.id = "imgComplete";
    const button = document.createElement("button");
    button.innerText = "continue";
    button.id = "confirm";

    const mainText = document.createElement("h1");
    mainText.style.fontSize = "2.5em";
    mainText.innerText = "THANK YOU!";

    const text = document.createElement("span");
    text.innerText = "we've added your card details";
    text.style.color = "#807E74";
    text.style.fontSize = "1.5em";

    section.appendChild(img);
    section.appendChild(mainText);
    section.appendChild(text);
    section.appendChild(button);
    button.addEventListener("click", () => {
      location.reload();
    });
  } else {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((option) => {
      if (option.value === "") {
        option.style.borderColor = "#DB2A2A";
        const error = document.getElementById("error");
        error.innerText = "must fill in all fields!";
        error.style.color = "#e31227";
        error.style.fontSize = "12px";
        error.style.alignSelf = "center";
      }
    });
  }
};

name.addEventListener("input", preencherName);

number.addEventListener("input", preencherNumber);

month.addEventListener("input", preencherMonth);

year.addEventListener("input", preencherYear);

cvc.addEventListener("input", preencherCvc);

confirmBtn.addEventListener("click", confirmation);
