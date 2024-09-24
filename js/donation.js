// noakhali donation box
document.getElementById("noakhali-btn").addEventListener("click", function () {
  const noakhaliInput = getInputValue("noakhali-input");
  const currentBalance = getCurrentBalance("current-balance");
  const noakhaliBalance = getDonationAmount("noakhali-balance");
  
  if (noakhaliInput  >=1 && noakhaliInput <= currentBalance  ) {
    
    const noakhalitotal = noakhaliInput + noakhaliBalance;
    const totalBalance = currentBalance - noakhaliInput
    document.getElementById('current-balance').innerHTML = totalBalance
    document.getElementById("noakhali-balance").innerText = noakhalitotal;
    document.getElementById("my_modal_1").showModal();
    

  } else {
    alert("some this is wrong");
    

  }
});
// feni donation box
document.getElementById("feni-btn").addEventListener("click", function () {
  const noakhaliInput = getInputValue("feni-input");
  const currentBalance = getCurrentBalance("current-balance");
  const noakhaliBalance = getDonationAmount("feni-balance");
  
  if (noakhaliInput  >=1 && noakhaliInput <= currentBalance  ) {
    
    const noakhalitotal = noakhaliInput + noakhaliBalance;
    const totalBalance = currentBalance - noakhaliInput
    document.getElementById('current-balance').innerHTML = totalBalance
    document.getElementById("feni-balance").innerText = noakhalitotal;
    document.getElementById("my_modal_1").showModal();
    

  } else {
    alert("some this is wrong");
    

  }
});
// aid donation box
document.getElementById("aid-btn").addEventListener("click", function () {
  const noakhaliInput = getInputValue("aid-input");
  const currentBalance = getCurrentBalance("current-balance");
  const noakhaliBalance = getDonationAmount("aid-balance");
  
  if (noakhaliInput  >=1 && noakhaliInput <= currentBalance  ) {
    
    const noakhalitotal = noakhaliInput + noakhaliBalance;
    const totalBalance = currentBalance - noakhaliInput
    document.getElementById('current-balance').innerHTML = totalBalance
    document.getElementById("aid-balance").innerText = noakhalitotal;
    document.getElementById("my_modal_1").showModal();
    

  } else {
    alert("some this is wrong");
    

  }
});
