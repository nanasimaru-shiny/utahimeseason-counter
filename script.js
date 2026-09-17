let season = 3;
let weeks = 8;

const seasonElement = document.getElementById("season");
const weeksElement = document.getElementById("weeks");
const amountElement = document.getElementById("amount");

function getAmount() {
  if (season === 3) {
    if (weeks === 8) return "4万";
    return "5万";
  }

  if (weeks === 8) return "10万";
  if (weeks >= 5) return "20万";
  return "30万";
}

function updateDisplay() {
  seasonElement.textContent = `シーズン${season}`;

  weeksElement.innerHTML =
    `残り<span class="week-number">${weeks}</span>週`;

  amountElement.textContent = getAmount();

  // 通常は白背景
  document.body.style.backgroundColor = "white";

  // シーズン3・残り3週
  if (season === 3 && weeks === 3) {
    document.body.style.backgroundColor = "#9DD89D";
  }

  // シーズン4・残り6週
  if (season === 4 && weeks === 6) {
    document.body.style.backgroundColor = "#9DD89D";
  }
}

document.body.addEventListener("click", () => {
  if (weeks > 1) {
    weeks--;
  } else {
    if (season === 3) {
      season = 4;
    } else {
      season = 3;
    }

    weeks = 8;
  }

  updateDisplay();
});

updateDisplay();
