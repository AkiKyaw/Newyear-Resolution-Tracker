import Swal from "sweetalert2";
import {
  addBox,
  addGoal,
  delGoal,
  doneGoal,
  editGoal,
  hideBox,
} from "./app.js";
import { editBox, goalInput, listGroup, title } from "./selector.js";

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
    Swal.fire("Both category and goal must be input");
  } else {
    addGoal(title.value, goalInput.value);
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

export const delAllBtnHandler = (event) => {
  const lists = listGroup.querySelectorAll(".list");
  if (lists.length !== 0) {
    Swal.fire({
      title: "Are you sure?",
      text: `You are going to delete all goals`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#23856D",
      cancelButtonColor: "#CD1624",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        lists.forEach((list) => {
          list.classList.add("animate__animated", "animate__flipOutX");
          list.addEventListener("animationend", () => {
            list.remove();
          });
        });
      }
    });
  } else {
    Swal.fire("There is nothing to delete");
  }
};

export const doneAllBtnHandler = () => {
  const lists = listGroup.querySelectorAll(".list");
  if (lists.length !== 0) {
    lists.forEach((list) => {
      if (!list.classList.contains("opacity-50")) {
       Swal.fire({
         title: "Are you sure?",
         text: `You are going to mark as complete all goals`,
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#23856D",
         cancelButtonColor: "#CD1624",
         confirmButtonText: "Yes",
       }).then((result) => {
         if (result.isConfirmed) {
           lists.forEach((list) => {
             if (!list.classList.contains("opacity-50")) {
               doneGoal(list.id);
             }
           });
         }
       });
      }else{
        Swal.fire("All lists are marked as completed");
      }
    });
    
  } 
};
