const hamburgarMenu = document.querySelector(".hamburger-menu-area");
const options = document.getElementById("options");
// Carousal Functionalities
const slideButtons = document.querySelectorAll(".slide-button");
const closeBtn = document.querySelector(".close-icon");
const blackScreen = document.querySelector(".black-screen");
const container = document.querySelector(".container");
const html = document.querySelector("html");
const locationModal = document.querySelector(".location-popup-area");
const devliverLocation = document.querySelector(".deliver-location");
const locationDoneButton = document.querySelector(
  ".location-popUp .content .done-btn"
);
const locationSelect = document.querySelector(
  ".location-popUp .content select"
);
const country = document.querySelector(".location .country");
let index = 1;
slideButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const images = document.querySelectorAll(".carousal-slides img");

    if (btn.classList.contains("next-button")) {
      if (index <= images.length) {
        index++;
      }
      if (index === 7) {
        index = 1;
      }
    } else {
      if (index >= 1) {
        index -= 1;
      }
      if (index === 0) {
        index = images.length;
      }
    }

    images.forEach((img) => {
      if (img.dataset.index === `${index}`) {
        img.classList.add("active");
      } else {
        img.classList.remove("active");
      }
    });
  });
});

// Hamburgar menu click
// hamburgarMenu.addEventListener("click", () => {
//   options.style.transform = "translateX(0)";
// });
let isClicked;

document.addEventListener("click", (e) => {
  if (e.target.closest(".hamburger-menu-area") != null) {
    options.style.transform = "translateX(0)";
    closeBtn.style.opacity = "1";
    blackScreen.style.display = "block";
    html.style.overflow = "hidden";
  } else if (!e.target.closest(".options")) {
    options.style.transform = "translateX(-100%)";
    closeBtn.style.opacity = "0";
    blackScreen.style.display = "none";
    html.style.overflow = "auto";
  }

  // if (e.target.closest(".control-expand")) {
  //   document.querySelectorAll(".hidden-items").forEach((hiddenItem) => {
  //     hiddenItem.style.height = "auto";
  //   });
  // }

  if (e.target.closest(".control-expand")) {
    const controlExpand = e.target.closest(".control-expand");
    const expandArrow = controlExpand.children[1].children[0];
    const hiddenSection = controlExpand.parentNode.parentNode.children[2];
    if (hiddenSection.style.height != "auto") {
      hiddenSection.style.height = "auto";
      expandArrow.style.transform = "rotate(270deg)";
    } else {
      hiddenSection.style.height = "0";
      expandArrow.style.transform = "rotate(90deg)";
    }
  }

  // Location modal functionalities
  if (e.target.closest(".deliver-location")) {
    locationModal.style.display = "block";
  } else if (!e.target.closest(".location-popUp")) {
    locationModal.style.display = "none";
  }

  if (e.target === locationDoneButton) {
    locationModal.style.display = "none";
    country.innerText = locationSelect.value;
  }
});
