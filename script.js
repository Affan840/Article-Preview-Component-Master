let btn = document.querySelector("#container .content .footer .share button");
let btnimg = document.querySelector("#container .content .footer .share button svg path");

let count = 1;
let count1 = 1;
btn.addEventListener("click", function () {
  document.querySelector(".socials").classList.toggle("display");
    console.log(count);
      if (count1 % 2 == 0) {
        console.log("hi");
        btnimg.setAttribute("fill", "#6E8098");
      }
      if (count1 % 2 != 0) {
        btnimg.setAttribute("fill", "white");
      }
      count1++;
  btn.classList.toggle("color");
  if (window.screen.width < 500) {
    document
      .querySelector("#container .content .footer .profile")
      .classList.toggle("display-none");
    btn.style.left = "650%";
    btn.style.top = "20px";
      console.log(count);
      if (
        count % 2 == 0
      ) {
        btn.style.left = "0%";
        btn.style.bottom = "100%";
        btn.style.top = "0";
      }
      count++;
  }
});

  if (window.screen.width < 500) {
    document.querySelector("#container").style.overflow = "hidden";
    document.querySelector("#container").style.borderradius = "5rem";
  }
