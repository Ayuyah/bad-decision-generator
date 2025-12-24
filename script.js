const adviceList = [
  { text: "Text your ex. Right now. At 2 a.m.", regret: "Catastrophic" },
  { text: "Quit your job with no backup plan.", regret: "Catastrophic" },
  { text: "Invest all your money in something you don’t understand.", regret: "Catastrophic" },
  { text: "Ignore all deadlines. Pressure is a myth.", regret: "High" },
  { text: "Argue with strangers online. They’ll definitely listen.", regret: "Medium" },
  { text: "Sleep less. Productivity comes from exhaustion.", regret: "High" },
  { text: "Trust anyone who says 'trust me.'", regret: "High" },
  { text: "Make decisions while angry. It saves time.", regret: "High" },
  { text: "Post that message. Overthinking is for cowards.", regret: "Medium" },
  { text: "Procrastinate today. Panic tomorrow.", regret: "Low" }
];

const adviceText = document.getElementById("advice");
const regretText = document.getElementById("regret");
const counterText = document.getElementById("counter");
const button = document.getElementById("generate");

// Load counter from localStorage
let counter = localStorage.getItem("badDecisionCount") || 0;
counterText.textContent = `Bad decisions generated: ${counter}`;

button.addEventListener("click", () => {
  adviceText.classList.add("fade-out");

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * adviceList.length);
    const selected = adviceList[randomIndex];

    adviceText.textContent = selected.text;
    regretText.textContent = `Regret Level: ${selected.regret}`;

    counter++;
    localStorage.setItem("badDecisionCount", counter);
    counterText.textContent = `Bad decisions generated: ${counter}`;

    adviceText.classList.remove("fade-out");
  }, 400);
});
