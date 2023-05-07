// function toBottom() {
//   window.scrollTo(0, document.body.scrollHeight);
// }
// window.onload = toBottom;
// window.addEventListener("load", toBottom);
// // Add an event listener to each content box
// // debug chat GPT

const contentBox = document.querySelectorAll("#content-box");

contentBox.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.querySelector("h2").style.color = "yellow";
    box.querySelector("#number1").style.color = "white";
  });

  box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "";
    box.querySelector("h2").style.color = "";
    box.querySelector("#number1").style.color = "";
  });
});
