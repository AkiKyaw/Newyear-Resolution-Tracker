import updateProgressBar from "./progress.js";
import { listGroup } from "./selector.js";

const observer = () => {
  const job = () => {
    updateProgressBar();
  };
  const observerOptions = {
    childList: true,
    subtree: true,
    attributes: true,
  };
  const goalObserver = new MutationObserver(job);
  goalObserver.observe(listGroup, observerOptions);
};

export default observer;