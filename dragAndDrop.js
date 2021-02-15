import addGlobalEventListener from "./utils/addGlobalEventListener.js";

export default function setup() {
  addGlobalEventListener("mousedown", "[data-draggable]", (e) => {
    const selectedItem = e.target;
    const itemClone = selectedItem.cloneNode(true);
    selectedItem.classList.add("hide");

    const mouseMoveFunction = () => {};

    document.addEventListener("mousemove", mouseMoveFunction);
    document.addEventListener(
      "mouseup",
      () => {
        document.removeEventListener("mousemove", mouseMoveFunction);
        selectedItem.classList.remove("hide");
      },
      { once: true }
    );
  });
}

function positionClone() {}
