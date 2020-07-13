const { interpret } = require("xstate");
const { machine } = require("./machine");
const incrementBtn = document.getElementById("increment-btn");
const resetBtn = document.getElementById("reset-btn");

const incrementService = interpret(machine)
  .onTransition((state) => {
    updateButtons(state.value);
    updateCount(state.context.count);
  })
  .start();

incrementBtn.addEventListener(
  "click",
  () => void incrementService.send("INCREMENT")
);
resetBtn.addEventListener("click", () => void incrementService.send("RESET"));

function updateCount(value) {
  const countEl = document.getElementById("count-number");
  countEl.innerHTML = value;
}

function updateButtons(stateValue) {
  if (stateValue === "disabled") {
    disableBtn(incrementBtn);
    activateBtn(resetBtn);
  } else if (stateValue === "active") {
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
