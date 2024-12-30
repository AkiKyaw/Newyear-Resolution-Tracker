import { addGoal, goals } from "./app.js";

const initialRender = () => {
    goals.forEach((goal) => addGoal(goal.title, goal.description));
}

export default initialRender;