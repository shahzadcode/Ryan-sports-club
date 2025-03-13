
// Navbar list open and close 
const btns = document.querySelectorAll(".btns");

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.stopPropagation(); // Yeh prevent karega list ko turant band hone se

    const list = btn.parentElement.querySelector(".list");

    // Pehle sab lists ko hide kar do
    document.querySelectorAll(".list").forEach((l) => {
      if (l !== list) {   
        l.style.display = "none";
      }
    });

    // Click hone par sirf selected list toggle hogi
    list.style.display = list.style.display === "block" ? "none" : "block";
  });
});

// Document pe click karne se sab lists band ho jayengi
document.addEventListener("click", () => {
  document.querySelectorAll(".list").forEach((list) => {
    list.style.display = "none";
  });
});

// Navbar list open and close 

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
