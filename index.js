// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];
// console.log(batch[0]) // return 15

// Add your functions below:

const validateCred = (arr) => {
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

  // console.log(ccSum);

  if (ccSum % 10 === 0) {
    // console.log(ccSum)
    return `The credit card is valid.`;
  } else {
    // console.log(ccSum)
    return `The credit card is invalid.`;
  }
};

console.log(validateCred(invalid1));
console.log(validateCred(invalid2));
console.log(validateCred(invalid3));
console.log(validateCred(invalid4));
console.log(validateCred(invalid5));

const findInvalidCards = (arr) => {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    let array = validateCred(arr[i]);
    if (array === "The credit card is invalid.") {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

// checking for invalid cards
// console.log(findInvalidCards(batch));

const idInvalidCardCompanies = (arr) => {
  let Company = [];
  let NoCompanyFound = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j == 1) {
        break;
      }
      if (arr[i][j] == 3) {
        Company.push(`American Express`);
      } else if (arr[i][j] == 4) {
        Company.push(`Visa`);
      } else if (arr[i][j] == 5) {
        Company.push(`Mastercard`);
      } else if (arr[i][j] == 6) {
        Company.push(`Discover`);
      } else {
        NoCompanyFound.push(`Company not found`);
      }
      // }
    }
  }
  const uniqueCompany = [...new Set(Company)];
  return uniqueCompany;
};
console.log(idInvalidCardCompanies(findInvalidCards(batch)));
