function toBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}
// window.onload = toBottom;
window.addEventListener("load", toBottom);

let popupButton = document.getElementById("closePopup");

popupButton.addEventListener("click", function (event) {
  document.getElementById("popup").style.display = "none";
  document.getElementById("background").style.display = "none";
});

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
  const scrollMin = 2550;
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;
  // Check if the user has scrolled beyond the minimum scroll position
  if (currentScroll < scrollMin) {
    window.scrollTo(0, scrollMin);
  }
  // Check if the user has scrolled horizontally
  if (window.scrollX !== 0) {
    window.scrollTo(0, window.scrollY);
  }
}
//animation for the overwhelmed part https://codepen.io/alvarotrigo/pen/eYEqPZa
const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2"),
};
const texts = ["Overwhelmed?", "Let us", "help."];
const morphTime = 1;
const cooldownTime = 0.25;
let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;
elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];
function doMorph() {
  morph -= cooldown;
  cooldown = 0;
  let fraction = morph / morphTime;
  if (fraction > 1) {
    cooldown = cooldownTime;
    fraction = 1;
  }
  setMorph(fraction);
}
function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}
function doCooldown() {
  morph = 0;
  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";
  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}
function animate() {
  requestAnimationFrame(animate);
  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;
  cooldown -= dt;
  if (cooldown <= 0) {
    if (shouldIncrementIndex) {
      textIndex++;
    }
    doMorph();
  } else {
    doCooldown();
  }
}
animate();
// Attach the scroll event listener
window.addEventListener("scroll", handleScroll);

// last animation
const swiftUpElement = document.querySelector(".phrase1 span");

const words = swiftUpElement.textContent.split(" ");
swiftUpElement.innerHTML = "";

words.forEach((el, index) => {
  words[index] = `<span><i>${words[index]}</i></span>`;
});

swiftUpElement.innerHTML = words.join(" ");

const children = document.querySelectorAll(".phrase1 span > span > i");
children.forEach((node, index) => {
  node.style.animationDelay = `${index * 0.2}s`;
});

setInterval(() => {
  children.forEach((node, index) => {
    node.style.animationDelay = `${index * 0.2}s`;
  });
}, 2500);

const specificSpan = document.querySelector(".specific-span");

function animateText() {
  const words = specificSpan.textContent.split(" ");
  specificSpan.innerHTML = "";

  words.forEach((el, index) => {
    words[index] = `<span><i>${words[index]}</i></span>`;
  });

  specificSpan.innerHTML = words.join(" ");

  const children = document.querySelectorAll(".specific-span span > i");
  children.forEach((node, index) => {
    node.style.animationDelay = `${index * 0.2}s`;
  });
}

animateText(); // Call the function once to animate the text initially

setInterval(animateText, 2500); // Call the function every 2.5 seconds to repeat the animation

window.addEventListener("scroll", handleScroll);
