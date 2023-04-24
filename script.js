let SignupBtn = document.getElementById("SignupBtn");
let SigninBtn = document.getElementById("SigninBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let lostPass = document.getElementById("lostPass");

SigninBtn.onclick = function () {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  SignupBtn.classList.add("disable");
  SigninBtn.classList.remove("disable");
  lostPass.style.display = "block";
};

SignupBtn.onclick = function () {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  SignupBtn.classList.remove("disable");
  SigninBtn.classList.add("disable");
  lostPass.style.display = "none";
};
lostPass.style.display = "none";
