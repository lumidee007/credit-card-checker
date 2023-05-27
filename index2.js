const form = document.querySelector("form");
const cardDetails = document.querySelector("#cardDetails");

const validateCardNumber = (arr) => {
  let ccLength = arr.length;
  // console.log(ccLength)
  let ccEON = arr.length - 3;
  let cardArr = [];
  // let ccValue = arr[ccEON];
  let ccSum = 0;

  if (typeof arr !== "object") {
    arr.split("");
  }

  for (let i = arr.length - 2; i >= 0; i -= 2) {
    let mul = arr[i] * 2;
    if (mul > 9) {
      mul -= 9;
      ccSum += mul;
      // cardArr.push(mul);
    } else {
      cardArr.push(mul);
      // ccSum += mul;
    }
    // console.log(cardArr)
    if (i != 0) {
      let pass = parseInt(arr[i - 1]);
      ccSum += pass;
      // cardArr.push(pass);
    }
  }

  ccSum += parseInt(arr[ccLength - 1]);

  console.log(ccSum);

  if (ccSum % 10 === 0) {
    // console.log(ccSum)
    return `The credit card is valid.`;
  } else {
    // console.log(ccSum)
    return `The credit card is invalid.`;
  }
};

function formatCardNumber(value) {
  var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  var matches = v.match(/\d{4,16}/g);
  var match = (matches && matches[0]) || "";
  var parts = [];

  for (i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}

const creditCardCompanies = (arr) => {
  let companyName = "";
  //   let arr = arr.split("");
  if (typeof arr !== "object") {
    arr.split("");
  }

  if (arr[0] == 3) {
    companyName = `American Express`;
  } else if (arr[0] == 4) {
    companyName = `Visa`;
  } else if (arr[0] == 5) {
    companyName = `Mastercard`;
  } else if (arr[0] == 6) {
    companyName = `Discover`;
  } else {
    companyName = `Company not found`;
  }
  return companyName;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cardNumberInput = document.querySelector("#cardNumber");
  const cardNumber = cardNumberInput.value.trim();
  //   console.log(typeof cardNumber);

  // Validate the card number and get the card type
  //   const { isValid, cardType } = validateCardNumber(cardNumber);
  const info = validateCardNumber(cardNumber);

  // Display the card details
  let html = "";
  if (true) {
    html += `<p>Card number: <span>${formatCardNumber(cardNumber)}</span></p>`;
    html += `<p>Company:<span> ${creditCardCompanies(cardNumber)}</span></p>`;
    html += `<p>Result: <span>${info}</span></p>`;
  } else {
    html += `<p>Try again</p>`;
  }
  cardDetails.innerHTML = html;
});

// 4716296206002041
// 4762233908738112
