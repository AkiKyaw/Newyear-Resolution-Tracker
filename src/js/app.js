import Swal from "sweetalert2";
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
import { v4 as uuidv4 } from "uuid";

export const goals = [
  { title: "Financial Goals", description: "Save $5,000 this year." },
  { title: "Travel", description: "Visit Kyoto in spring." },
  { title: "Health", description: "Run a 5K in under 30 minutes." },
];

export const addBox = () => {
  addGoalBox.classList.remove("hidden");
  addGoalBox.classList.add("block");
};

export const hideBox = () => {
  title.value = "";
  addGoalBox.classList.add("hidden");
  editBox.classList.add("hidden");
};

export const createNewList = (currentTaskTitle, currentTask) => {
  const list = listTemplate.content.cloneNode(true);
  list.querySelector(".list").id = "list" + uuidv4();
  list.querySelector(".goal-text").innerText = currentTask;
  list.querySelector(".title-text").innerText = currentTaskTitle;
  return list;
};

export const addGoal = (titleText, text) => {
  listGroup.append(createNewList(titleText, text));
  goalInput.value = null;
};

export const delGoal = (listId) => {
  const currentList = document.querySelector(`#${listId}`);
  Swal.fire({
    title: "Are you sure?",
    text: "You will not be able to undo this action!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#23856D",
    cancelButtonColor: "#CD1624",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      currentList.classList.add("animate__animated", "animate__flipOutX");
      currentList.addEventListener("animationend", () => {
        currentList.remove();
      });
    }
  });
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

export const doneGoal = (listId) => {
  const currentList = document.querySelector(`#${listId}`);
  const editBtn = currentList.querySelector(".edit-btn");
  const icon = currentList.querySelector(".icon");
  const iconDone = currentList.querySelector(".icon-done");

  icon.classList.toggle("hidden");
  iconDone.classList.toggle("hidden");

  currentList.classList.toggle("opacity-50");
  currentList.classList.toggle("scale-90");

  editBtn.classList.toggle("hidden");
};
