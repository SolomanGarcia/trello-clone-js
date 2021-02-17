import setupDragAndDrop from "./dragAndDrop.js";
import { v4 as uuidV4 } from "uuid";

const STORAGE_PREFIX = "TRELLO_CLONE";
const LANES_STORAGE_KEY = `${STORAGE_PREFIX}-lanes`;
const DEFAULT_LANES = {
  backlog: [{ id: uuidV4, text: "Create your first task" }],
  doing: [],
  done: []
};
const lanes = loadLanes();

setupDragAndDrop(onDragComplete);

function onDragComplete(e) {}

function loadLanes() {
  const lanesJson = localStorage.getItem(LANES_STORAGE_KEY);
  return JSON.parse(lanesJson) || DEFAULT_LANES;
}
