const password = document.body.querySelector(".password");
const confirmPassword = document.body.querySelector(".confirmpassword");
const errorText = document.body.querySelector(".error-text");

const checkPasswords = () => {
  if (password.value === confirmPassword.value) {
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
    errorText.style.visibility = "hidden";
  } else {
    password.classList.add("error");
    confirmPassword.classList.add("error");
    errorText.style.visibility = "initial";
  }
};

password.addEventListener("input", checkPasswords);
confirmPassword.addEventListener("input", checkPasswords);
