let count = 0;
const countEl = document.getElementById("count-number");

const incrementBtn = document.getElementById("increment-btn");
const resetBtn = document.getElementById("reset-btn");

checkButtons();
incrementBtn.addEventListener("click", () => {
  count++;
  updateCount();
  checkButtons();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCount();
  checkButtons();
});

function updateCount() {
  countEl.innerHTML = count;
}

function checkButtons() {
  if (count >= 5) {
    disableBtn(incrementBtn);
    activateBtn(resetBtn);
  } else {
    disableBtn(resetBtn);
    activateBtn(incrementBtn);
  }
}

function activateBtn(btn) {
  if (btn.disabled) {
    btn.classList.remove("opacity-50");
    btn.classList.remove("cursor-not-allowed");
    btn.disabled = false;
  }
}

function disableBtn(btn) {
  if (!btn.disabled) {
    btn.disabled = true;
    btn.classList.add("opacity-50");
    btn.classList.add("cursor-not-allowed");
  }
}
