import { addBtnHandler, addGoalBoxBtnHandler, crossBtnHandler, delBtnHandler } from "./handlers.js";
import {  addBtn, addGoalBoxBtn, crossBtn, delBtn } from "./selector.js"

const listener = () => {
    addGoalBoxBtn.addEventListener("click",addGoalBoxBtnHandler);
    crossBtn.addEventListener("click", crossBtnHandler);
    addBtn.addEventListener("click", addBtnHandler);
}

export default listener;