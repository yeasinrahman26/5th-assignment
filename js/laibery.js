// current balance function

function getCurrentBalance(id) {
  const currentBalance = document.getElementById(id).innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  return currentBalanceNumber;
}

// get donated amount function
function getDonationAmount(id) {
  const donationAmount = document.getElementById(id).innerText;
  const donationAmountNumber = parseFloat(donationAmount);
  return donationAmountNumber;
}

// get input function

function getInputValue(id) {
  const inputValue = document.getElementById(id).value;
  const inputValueNumber = parseFloat(inputValue);
  return inputValueNumber;
}

// history function
