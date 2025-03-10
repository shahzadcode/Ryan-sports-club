const btns = document.querySelectorAll(".btns");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Pehle sabhi lists ko band karo
    document.querySelectorAll(".list").forEach((list) => {
      list.style.display = "none";
      // list.style.display =
    });

    // Ab sirf clicked button ki list toggle karo
    const list = btn.parentElement.querySelector(".list");
    list.style.display = list.style.display === "block" ? "none" : "block";
  });
});

// Click outside to close dropdown
document.addEventListener("mouseover", (event) => {
  if (!event.target.closest("nav")) {
    document.querySelectorAll(".list").forEach((list) => {
      list.style.display = "none";
    });
  }
});

// function hamburger_click() {
//   const select = document.querySelector(".second_nav");
//   if (select.style.display === "none") {
//     select.style.display = "block";
// } else {
//     select.style.display = "none";
//   }
// }
function hamburger_click() {
    const select = document.querySelector(".second_nav");
    const btn = document.querySelector(".hamburger-btn");

    select.classList.toggle("show");
    btn.classList.toggle("fix");

   
}
