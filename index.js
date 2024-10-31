let icons = document.querySelectorAll(".menu i");
let circle = document.querySelector(".circle");

icons.forEach((item) => {
  item.addEventListener("click", function () {
    icons.forEach((item) => item.classList.remove("active"));
   
    this.classList.add("active");
   
  });
});
