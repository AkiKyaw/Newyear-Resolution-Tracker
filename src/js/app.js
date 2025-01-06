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

export const goalSamples = [
  { title: "Financial Goals", description: "Save $5,000 this year." },
  { title: "Travel", description: "Visit Kyoto in spring." },
  { title: "Health", description: "Exercise 30 minutes, 3 times/week." },
];

export const saveGoalsToStorage = () => {
  const lists = listGroup.querySelectorAll('.list');
  const goals = Array.from(lists).map(list => ({
    id: list.id,
    title: list.querySelector('.title-text').innerText,
    description: list.querySelector('.goal-text').innerText,
    isDone: list.classList.contains('opacity-50')
  }));
  localStorage.setItem('goals', JSON.stringify(goals));
};

export const loadGoalsFromStorage = () => {
  const goals = JSON.parse(localStorage.getItem('goals')) || [];
  goals.forEach(goal => {
    const list = createNewList(goal.title, goal.description);
    list.querySelector('.list').id = goal.id;
    if (goal.isDone) {
      const currentList = list.querySelector('.list');
      const editBtn = currentList.querySelector('.edit-btn');
      const icon = currentList.querySelector('.icon');
      const iconDone = currentList.querySelector('.icon-done');
      
      icon.classList.toggle('hidden');
      iconDone.classList.toggle('hidden');
      currentList.classList.add('opacity-50', 'scale-90', 'duration-150');
      editBtn.classList.add('hidden');
    }
    listGroup.append(list);
  });
  
};


export const addBox = () => {
  addGoalBox.classList.remove("hidden");
  addGoalBox.classList.add("block");
  goalInput.focus();
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
  const text = currentList.querySelector(".goal-text");
  Swal.fire({
    title: "Are you sure?",
    text: `You are going to delete "${text.innerText}"`,
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
        saveGoalsToStorage();
      });
    }
  });
};

export const editGoal = (listId) => {
  editBox.classList.remove("hidden");
  editBox.classList.add("block");
  editGoalInput.focus();

  const currentList = document.querySelector(`#${listId}`);
  const titleText = currentList.querySelector(".title-text");
  const goalText = currentList.querySelector(".goal-text");

  editTitle.value = titleText.innerText;
  editGoalInput.value = goalText.innerText;

  changeBtn.addEventListener("click", () => {
    titleText.innerText = editTitle.value;
    goalText.innerText = editGoalInput.value;
    editBox.classList.add("hidden");
    saveGoalsToStorage(); 
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
  currentList.classList.add("duration-150");
  editBtn.classList.toggle("hidden");
  
  if(currentList.classList.contains("opacity-50")){
  Swal.fire(`Well done🎉` + `\n` + `You've completed a goal✨`);
  }
  saveGoalsToStorage(); 
};
