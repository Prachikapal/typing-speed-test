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
  let level;
  let mode;
  if (
    window.getComputedStyle(document.querySelector(".desktop-dropdown"))
      .display != "none"
  ) {
    var selected = document.querySelectorAll(".selectedBtn");
    level = selected[0].textContent;
    mode = selected[1].textContent;
  } else {
    level = document.querySelector("#selected-text").textContent;
    mode = document.querySelector("#selected-mode").textContent;
  }
  if (mode === "Timed (60)") {
    startTimer();
  }
  loadFileData(level);
});

//Restart button click event
resetBtn.addEventListener("click", () => {
  document.querySelector(".blur").style.display = "flex";
});

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
    if (
      elem.innerText === "Timed (60)" &&
      document.querySelector(".blur").style.display == "none"
    ) {
      startTimer();
    }
  });
});

//Add event listiner in mobile timer mode
document.getElementById("timerMode").addEventListener("click", (e) => {
  if (document.querySelector(".blur").style.display == "none") {
    startTimer();
  }
});

//Start 60sec timer
const startTimer = () => {
  console.log("timer Started");
  let counter = document.getElementById("counter");
  let i = 60;
  const timer = setInterval(() => {
    i--;
    if (i >= 10) {
      counter.textContent = i;
    } else if (i >= 0) {
      counter.textContent = "0" + i;
    } else {
      clearInterval(timer);
    }
  }, 1000);
};

//Load passage from the .txt file
async function loadFileData(level) {
  const random = Math.floor(Math.random() * 3);
  const randomPassage = passeges[level][random];

  fetch(`./Passages/${randomPassage}.txt`)
    .then((res) => res.text())
    .then((data) => {
      document.querySelector(".text-editor").value = "";
      const removeDiv = document.querySelector(".static-text");
      if (removeDiv) {
        document.querySelector(".editor-container").removeChild(removeDiv);
      }
      const div = document.createElement("div");
      div.innerText = data;
      div.classList.add("static-text");

      document.querySelector(".editor-container").appendChild(div);
    })
    .catch((err) =>
      console.log("Error occurred while loading the file data", err),
    );
}
