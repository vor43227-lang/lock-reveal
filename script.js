let pin = "";
const maxDigits = 4;
const dots = document.querySelectorAll(".dots span");

document.querySelectorAll(".key").forEach(btn => {
  btn.addEventListener("click", () => {
    if (pin.length < maxDigits) {
      pin += btn.textContent;
      dots[pin.length - 1].classList.add("active");
    }
  });
});

// 🔐 GESTO SECRETO – mantener esquina superior izquierda
let holdTimer;

const secretZone = document.getElementById("secret-zone");

secretZone.addEventListener("touchstart", () => {
  holdTimer = setTimeout(() => {
    vibratePin();
  }, 4000);
});

secretZone.addEventListener("touchend", () => {
  clearTimeout(holdTimer);
});

function vibratePin() {
  if (!navigator.vibrate) return;

  let pattern = [];
  for (let digit of pin) {
    let pulses = parseInt(digit);
    for (let i = 0; i < pulses; i++) {
      pattern.push(150, 100);
    }
    pattern.push(400);
  }

  navigator.vibrate(pattern);
}
