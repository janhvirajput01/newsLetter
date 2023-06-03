const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const submitBtn = document.querySelector("#submit");
const dismissBtn = document.getElementById("dismiss");
const submitEmail = document.getElementById("submit_email");
const emailIp = document.querySelector("input");
const error = document.getElementById("error");
const updateEmail = document.getElementById("submit_email");

function isvalid(e) {
  const reg = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  return reg.test(e);
}
function showError() {
  error.style.opacity = 1;
  emailIp.classList.add("error");
  emailIp.style.color = "hsl(4, 100%, 67%)";
}
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const emailVal = emailIp.value;
  if (isvalid(emailVal)) {
    card1.classList.add("hide");
    card2.classList.remove("hide");
    updateEmail.textContent = emailIp.value;
  } else {
    return showError();
  }
});

dismissBtn.addEventListener("click", (e) => {
  card1.classList.remove("hide");
  card2.classList.add("hide");
  location.reload();
});
