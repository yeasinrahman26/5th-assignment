// noakhali donation box
document.getElementById("noakhali-btn").addEventListener("click", function () {
  const noakhaliInput = getInputValue("noakhali-input");
  const currentBalance = getCurrentBalance("current-balance");
  const noakhaliBalance = getDonationAmount("noakhali-balance");

  if (noakhaliInput >= 1 && noakhaliInput <= currentBalance) {
    const noakhalitotal = noakhaliInput + noakhaliBalance;
    const totalBalance = currentBalance - noakhaliInput;
    document.getElementById("current-balance").innerHTML = totalBalance;
    document.getElementById("noakhali-balance").innerText = noakhalitotal;
    document.getElementById("my_modal_1").showModal();

    // add to transaction history
    const entry = document.createElement("p");
    entry.innerHTML = `<h1 class=" mx-auto mt-5 text-1xl px-5 py-5 font-bold border-2 rounded-lg">
          ${noakhaliInput}  Taka is Donated for Flood at Noakhali, Bangladesh        
        </h1> `;
    document.getElementById("history-container").appendChild(entry);
    
   
  }
  
  else {
    alert("something is wrong");
  }
});
// feni donation box
document.getElementById("feni-btn").addEventListener("click", function () {
  const noakhaliInput = getInputValue("feni-input");
  const currentBalance = getCurrentBalance("current-balance");
  const noakhaliBalance = getDonationAmount("feni-balance");

  if (noakhaliInput >= 1 && noakhaliInput <= currentBalance) {
    const noakhalitotal = noakhaliInput + noakhaliBalance;
    const totalBalance = currentBalance - noakhaliInput;
    document.getElementById("current-balance").innerHTML = totalBalance;
    document.getElementById("feni-balance").innerText = noakhalitotal;
    document.getElementById("my_modal_1").showModal();
    // add to transaction history
    const entry = document.createElement("p");
    entry.innerHTML = `<h1 class=" mx-auto mt-5 text-1xl px-5 py-5 font-bold border-2 rounded-lg">
          ${noakhaliInput}  Taka is Donated for Flood Relief in Feni, Bangladesh        
        </h1> `;
    document.getElementById("history-container").appendChild(entry);
  } else {
    alert("something is wrong");
  }
});
// aid donation box
document.getElementById("aid-btn").addEventListener("click", function () {
  const noakhaliInput = getInputValue("aid-input");
  const currentBalance = getCurrentBalance("current-balance");
  const noakhaliBalance = getDonationAmount("aid-balance");

  if (noakhaliInput >= 1 && noakhaliInput <= currentBalance) {
    const noakhalitotal = noakhaliInput + noakhaliBalance;
    const totalBalance = currentBalance - noakhaliInput;
    document.getElementById("current-balance").innerHTML = totalBalance;
    document.getElementById("aid-balance").innerText = noakhalitotal;
    document.getElementById("my_modal_1").showModal();
    // add to transaction history

    const entry = document.createElement("p");
    entry.innerHTML = `<h1 class=" mx-auto mt-5 text-1xl px-5 py-5 font-bold border-2 rounded-lg">
          ${noakhaliInput}  Taka is Donated for Injured in the Quota Movement        
        </h1> `;
    document.getElementById("history-container").appendChild(entry);
    
    
  } else {
    alert("something is wrong");
  }
});
