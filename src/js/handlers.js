import { addBox, addGoal, delGoal, doneGoal, editGoal, hideBox } from "./app.js";
import { editBox, goalInput, title } from "./selector.js";

// add add-your-goal box
export const addGoalBoxBtnHandler = (event) => {
  addBox();
};

// hide add-your-goal box
export const crossBtnHandler = (event) => {
  hideBox();
};

// add new goal
export const addBtnHandler = (event) => {
  if (!goalInput.value.trim() || !title.value) {
    alert("Both category and goal must be input");
  } else {
    addGoal(goalInput.value, title.value);
    hideBox();
  }
};

export const listGroupHandler = (event) => {
  const list = event.target.closest(".list");

  if (event.target.classList.contains("del-btn")) {
    delGoal(event.target.closest(".list").id);
  }

  if (event.target.classList.contains("edit-btn")) {
    editBox.classList.remove("hidden");
    editBox.classList.add("block");
    editGoal(event.target.closest(".list").id);
  }

  if (event.target.classList.contains("done-btn")) {
    doneGoal(event.target.closest(".list").id);
  }
};
