import initialRender from "./initialRender.js";
import listener from "./listener.js";
import observer from "./observer.js";


class Tracker {
    init(){
        listener();
        observer();
        initialRender();
    }
}

export default Tracker;