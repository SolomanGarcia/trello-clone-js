import addGlobalEventListener from "./utils/addGlobalEventListener.js";

export default function setup() {
  addGlobalEventListener("mousedown", "[data-draggable]", (e) => {
    console.log("down");
    const mouseMoveFunction = () => {
      console.log("moved");
    };

    document.addEventListener("mousemove", mouseMoveFunction);
    document.addEventListener(
      "mouseup",
      () => {
        document.removeEventListener("mousemove", mouseMoveFunction);
        console.log("up");
      },
      { once: true }
    );
  });
}
