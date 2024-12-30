import { progressBar } from "./selector.js";

const updateProgressBar = () => {
  const totalGoals = document.querySelectorAll(".list");
  const doneGoals = document.querySelectorAll(".list.opacity-50");
  const progress =
    totalGoals.length === 0 ? 0 : (doneGoals.length / totalGoals.length) * 100;

  progressBar.style.width = `${progress}%`;

  const progressPercent = document.querySelector("#progressPercent");
  progressPercent.innerText = `${Math.round(progress)}%`;
};

export default updateProgressBar;
