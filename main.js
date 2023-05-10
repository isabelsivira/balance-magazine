function toBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}
// window.onload = toBottom;
window.addEventListener("load", toBottom);
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
//The following lines of code were run through ChatGPT to debug
// Prevents from scrolling past a certain point
function handleScroll() {
  const scrollMin = 5000; 
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Check if the user has scrolled beyond the minimum scroll position
  if (currentScroll < scrollMin) {
    window.scrollTo(0, scrollMin);
  }

  // Check if the user has scrolled horizontally
  if (window.scrollX !== 0) {
    window.scrollTo(0, window.scrollY);
  }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);


