// var scrollbox = document.getElementById("control-scrollbox");
// var scrollCircle = document.getElementByClass("circle-scroll");
// var content = document.getElementsByClassName("content");

// scrollbox.addEventListener("scroll", function () {
//   content.style.top = "-" + scrollbox.scrollTop + "px";
//   scrollCircle.style.paddingTop = scrollbox.scrollTop * 2 + "px";
// });

const scrollbox = document.querySelector(".visual-box");
const scrollCircle = document.querySelector(".circle-scroll");
const content = document.querySelector(".content");

const output = document.querySelector(".output");

scrollbox.addEventListener("scroll", function () {
  console.log(scrollbox.scrollTop);
  content.style.top = `-${scrollbox.scrollTop}px`;
  scrollCircle.style.paddingTop = `${scrollbox.scrollTop * 2}px`;
});

/*https://codepen.io/wbrueske/pen/NVXExd*/
