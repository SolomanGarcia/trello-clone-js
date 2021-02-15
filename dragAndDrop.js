import addGlobalEventListener from "./utils/addGlobalEventListener.js";

export default function setup() {
  addGlobalEventListener("mousedown", "[data-draggable]", (e) => {
    const selectedItem = e.target;
    const itemClone = selectedItem.cloneNode(true);
    const originalRect = selectedItem.getBoundingClientRect();
    const offset = {
      x: e.clientX - originalRect.left,
      y: e.clientY - originalRect.top
    };
    itemClone.style.width = `${originalRect.width}px`;
    itemClone.classList.add("dragging");
    positionClone(itemClone, e, offset);
    document.body.append(itemClone);
    selectedItem.classList.add("hide");

    const mouseMoveFunction = (e) => {
      positionClone(itemClone, e, offset);
    };

    document.addEventListener("mousemove", mouseMoveFunction);
    document.addEventListener(
      "mouseup",
      () => {
        document.removeEventListener("mousemove", mouseMoveFunction);
        selectedItem.classList.remove("hide");
        itemClone.remove();
      },
      { once: true }
    );
  });
}

function positionClone(itemClone, mousePosition, offset) {
  itemClone.style.top = `${mousePosition.clientY - offset.y}px`;
  itemClone.style.left = `${mousePosition.clientX - offset.x}px`;
}
