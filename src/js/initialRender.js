import { addGoal, goalSamples, loadGoalsFromStorage } from "./app.js";

const initialRender = () => {
    const savedGoals = localStorage.getItem('goals');
    if (savedGoals) {
        loadGoalsFromStorage();
    } else {
        goalSamples.forEach((goalSample) =>
            addGoal(goalSample.title, goalSample.description)
        );
        Swal.fire({
            title: 'Welcome!',
            text: "We've added some sample goals to help you get started. Feel free to edit or delete them!",
            icon: 'info',
            confirmButtonColor: '#23856D'
        });
    }
}

export default initialRender;