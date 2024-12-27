import { addBox, addGoal, delGoal, hideBox } from "./app.js";
import { goalInput, title } from "./selector.js";

export const addGoalBoxBtnHandler = (event) => {
  addBox();
};

export const crossBtnHandler = (event) => {
  hideBox();
};



export const addBtnHandler = (event) => {
  if (!goalInput.value.trim() || !title.value) {
    alert("Both category and goal must be input");
  } else {
    addGoal(goalInput.value, title.value);
    hideBox();
  }
};
