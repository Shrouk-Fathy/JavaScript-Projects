// Create Tasks
let taskId = 1; // Initialize a counter for generating unique IDs

const inputTask = document.getElementById("inputTask");

function addTask() {
  if (inputTask.value.trim() !== "") {
    let taskContainer = document.createElement("div");
    let checkBox = document.createElement("input");
    let taskName = document.createElement("input");
    let doneButton = document.createElement("button");

    // set the type of checkBoxInput
    checkBox.type = "checkbox";
    checkBox.style.marginRight = "3px";
    checkBox.id = "checkBox" + taskId; // Unique ID for each checkbox
    checkBox.addEventListener("click", () => check(checkBox.id));

    // set the value of doneButton
    doneButton.innerText = "Done";
    doneButton.id = "doneButton";
    doneButton.style.padding = ".2em .3em";
    doneButton.addEventListener("click", () => update(taskContainer));

    // set the name of tasks
    taskName.value = inputTask.value;
    taskName.id = "taskName" + taskId; // Unique ID for each taskName
    taskName.readOnly = true;
    taskName.style.border = "none";
    taskName.style.outline = "none";
    taskName.style.fontSize = "1.2rem";
    taskName.style.width = "60%";

    // taskContainer Style
    taskContainer.style.width = "95%";
    taskContainer.style.display = "flex";
    taskContainer.style.justifyContent = "center";
    taskContainer.style.alignItems = "center";
    taskContainer.style.marginTop = "20px";

    // append taskContainer children
    taskContainer.append(checkBox);
    taskContainer.append(taskName);
    taskContainer.append(doneButton);
    taskContainer.id = "taskContainer" + taskId; // Unique ID for each taskContainer

    // append task to the incomplete tasks section
    document.querySelector(".incomp-tasks").append(taskContainer);

    inputTask.value = ""; // Clear the input field
    taskId++; // Increment the task ID counter
  }
}

function check(checkboxId) {
  const checkbox = document.getElementById(checkboxId);
  const taskNameId = checkboxId.replace("checkBox", "taskName");
  const taskName = document.getElementById(taskNameId);
  const doneButton = checkbox.nextElementSibling;

  if (checkbox.checked) {
    taskName.readOnly = false;
    taskName.focus();
    doneButton.innerText = "Update";
  } else {
    taskName.readOnly = true;
    doneButton.innerText = "Done";
    taskName.style.outline = "none";
  }
}

function update(taskContainer) {
  const doneButton = taskContainer.querySelector("button");
  const checkbox = taskContainer.querySelector("input[type='checkbox']");
  const taskName = taskContainer.querySelector("input[type='text']");
  const incompTasks = document.querySelector(".incomp-tasks");
  const compTasks = document.querySelector(".comp-tasks");

  if (doneButton.innerText === "Update") {
    taskName.readOnly = true;
    doneButton.innerText = "Done";
    taskName.style.outline = "none";
    checkbox.checked = false;
  } else if (doneButton.innerText === "Done") {
    checkbox.remove();
    doneButton.innerText = "Delete";
    compTasks.append(taskContainer);
    incompTasks.removeChild(taskContainer);
  } else {
    compTasks.removeChild(taskContainer);
  }
}



