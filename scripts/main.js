const passeges = {
  Easy: ["EOne", "ETwo", "EThree"],
  Medium: ["MOne", "MTwo", "MThree"],
  Hard: ["HOne", "HTwo", "HThree"],
};

const levelBtns = document.querySelectorAll(".difficulty-btn-group button");
const levelDropdownBtn = document.querySelectorAll(
  "#difficulty-dropdown input[type=radio]",
);

const modeButtons = document.querySelectorAll(".modeBtn");
const resetBtn = document.querySelector(".retake-btn");

//Start Button click event
document.getElementById("startTestBtn").addEventListener("click", () => {
  document.querySelector(".blur").style.display = "none";
  const selected = document.querySelectorAll(".selectedBtn");
  const level = selected[0].textContent;
  const mode = selected[1].textContent;
  loadFileData(level);
});

//Restart button click event
resetBtn.addEventListener("click", () => {
    document.querySelector(".blur").style.display = "flex";
})


//Level button click event in desktop
levelBtns.forEach((elem) => {
  elem.addEventListener("click", () => {
    levelBtns.forEach((element) => {
      element.classList.remove("selectedBtn");
    });
    elem.classList.add("selectedBtn");
    const selected = document.querySelectorAll(".selectedBtn");
    const level = selected[0].textContent;
    loadFileData(level);
  });
});

//Level button click event in mobile
levelDropdownBtn.forEach((radio) => {
  radio.addEventListener("click", (e) => {
    loadFileData(e.target.value);
  });
});

//Mode button click event in desktop
modeButtons.forEach((elem) => {
  elem.addEventListener("click", () => {
    modeButtons.forEach((element) => {
      element.classList.remove("selectedBtn");
    });
    elem.classList.add("selectedBtn");
  });
});

async function loadFileData(level) {
  const random = Math.floor(Math.random() * 3);
  const randomPassage = passeges[level][random];

  fetch(`./Passages/${randomPassage}.txt`)
    .then((res) => res.text())
    .then((data) => {
      document.querySelector(".text-editor").innerHTML = data;
    })
    .catch((err) => console.log("Error occurred while loading the file data"));
}
