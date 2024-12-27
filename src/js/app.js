import {
  addGoalBox,
  goalInput,
  listGroup,
  listTemplate,
} from "./selector.js";

export const addBox = () => {
  addGoalBox.classList.remove("hidden");
  addGoalBox.classList.add("block");
};

export const hideBox = () => {
  addGoalBox.classList.add("hidden");
};

export const createNewList = (currentTask, currentTaskTitle) => {
  const list = listTemplate.content.cloneNode(true);
  list.querySelector(".list").id = "list" + Date.now();
  list.querySelector(".goal-text").innerText = currentTask;
    list.querySelector(".title-text").innerText = currentTaskTitle;
  return list;
};

export const delGoal = (listId) => {
  const currentList = document.querySelector(`#${listId}`);
  if (window.confirm("Are you sure to delete this task?")) {
    currentList.classList.add("animate__animated", "animate__bounceOutRight");
    currentList.addEventListener("animationend", () => {
      currentList.remove();
      updateDoneTaskTotal();
      updateTaskTotal();
    });
  }
};

export const addGoal = (text, titleText) => {
  listGroup.append(createNewList(text, titleText));
  goalInput.value = null;
};
