const difficultyBtn = document.getElementById("difficulty-selected");
const difficultyDropdown = document.getElementById("difficulty-dropdown");

const modeBtn = document.getElementById("mode-selected");
const modeDropdown = document.getElementById("mode-dropdown");

const difficultydropdownBtn = document.querySelectorAll(
  "#difficulty-dropdown input[type=radio]",
);
const modedropdownBtn = document.querySelectorAll(
  "#mode-dropdown input[type=radio]",
);

const selectedText = document.getElementById("selected-text");
const selectedMode = document.getElementById("selected-mode");


difficultyBtn.addEventListener("click", () => {
  if (difficultyDropdown.classList.contains("hide")) {
    difficultyDropdown.classList.remove("hide");
  } else {
    difficultyDropdown.classList.add("hide");
  }
});

modeBtn.addEventListener("click", () => {
  if (modeDropdown.classList.contains("hide")) {
    modeDropdown.classList.remove("hide");
  } else {
    modeDropdown.classList.add("hide");
  }
});

difficultydropdownBtn.forEach((radio) => {
  radio.addEventListener("click", (e) => {
    selectedText.innerText = e.target.value;
  });
});

modedropdownBtn.forEach((radio) => {
  radio.addEventListener("click", (e) => {
    selectedMode.innerText = e.target.value;
  });
});
