import { addBtnHandler, addGoalBoxBtnHandler, crossBtnHandler, delAllBtnHandler, doneAllBtnHandler, listGroupHandler } from "./handlers.js";
import {  addBtn, addGoalBoxBtn, crossBtn, delAllBtn, doneAllBtn, editCrossBtn, listGroup } from "./selector.js"

const listener = () => {
    addGoalBoxBtn.addEventListener("click",addGoalBoxBtnHandler);
    crossBtn.addEventListener("click", crossBtnHandler);
    addBtn.addEventListener("click", addBtnHandler);
    listGroup.addEventListener("click", listGroupHandler);
    editCrossBtn.addEventListener("click", crossBtnHandler);
    delAllBtn.addEventListener("click", delAllBtnHandler);
    doneAllBtn.addEventListener("click", doneAllBtnHandler);
}

export default listener;