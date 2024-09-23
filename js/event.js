//history section btn
document.getElementById("history-btn").addEventListener("click", function () {
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("donation-btn").classList.remove("primary-btn-css");
  document.getElementById("history-btn").classList.add("primary-btn-css");
  document.getElementById("history-section").classList.remove("hidden");
});
// donation section btn
document.getElementById("donation-btn").addEventListener("click", function () {
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById("donation-btn").classList.add("primary-btn-css");
  document.getElementById("history-btn").classList.remove("primary-btn-css");
  document.getElementById("donation-section").classList.remove("hidden");
});
