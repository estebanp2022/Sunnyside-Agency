const openBtn = document.querySelector(".open-button");
const navigation = document.querySelector(".nav-list");

openBtn.addEventListener("click", () => {
  navigation.classList.toggle("active");
});
