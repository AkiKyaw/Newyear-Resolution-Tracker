import {
  addGoalBox,
  changeBtn,
  editBox,
  editGoalInput,
  editTitle,
  goalInput,
  listGroup,
  listTemplate,
  title,
} from "./selector.js";

export const addBox = () => {
  addGoalBox.classList.remove("hidden");
  addGoalBox.classList.add("block");
};

export const hideBox = () => {
  title.value = "";
  addGoalBox.classList.add("hidden");
  editBox.classList.add("hidden");
};

export const createNewList = (currentTask, currentTaskTitle) => {
  const list = listTemplate.content.cloneNode(true);
  list.querySelector(".list").id = "list" + Date.now();
  list.querySelector(".goal-text").innerText = currentTask;
  list.querySelector(".title-text").innerText = currentTaskTitle;
  return list;
};

export const addGoal = (text, titleText) => {
  listGroup.append(createNewList(text, titleText));
  goalInput.value = null;
};

export const delGoal = (listId) => {
  const currentList = document.querySelector(`#${listId}`);
  if (window.confirm("Are you sure to delete this task?")) {
    currentList.remove();
  }
};

export const editGoal = (listId) => {
  editBox.classList.remove("hidden");
  editBox.classList.add("block");

  const currentList = document.querySelector(`#${listId}`);
  const titleText = currentList.querySelector(".title-text");
  const goalText = currentList.querySelector(".goal-text");

  editTitle.value = titleText.innerText;
  editGoalInput.value = goalText.innerText;
 
  changeBtn.addEventListener("click", () => {
    titleText.innerText = editTitle.value;
    goalText.innerText = editGoalInput.value;
    editBox.classList.add("hidden");
  });
};
