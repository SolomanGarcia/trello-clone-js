import addGlobalEventListener from "./utils/addGlobalEventListener.js";

export default function setup() {
  addGlobalEventListener("mousedown", "[data-draggable]", (e) => {
    console.log("mouse down");
  });
}
