import { addBtnHandler, addGoalBoxBtnHandler, crossBtnHandler, listGroupHandler } from "./handlers.js";
import {  addBtn, addGoalBoxBtn, crossBtn, editCrossBtn, listGroup } from "./selector.js"

const listener = () => {
    addGoalBoxBtn.addEventListener("click",addGoalBoxBtnHandler);
    crossBtn.addEventListener("click", crossBtnHandler);
    addBtn.addEventListener("click", addBtnHandler);
    listGroup.addEventListener("click", listGroupHandler);
    editCrossBtn.addEventListener("click", crossBtnHandler)
}

export default listener;