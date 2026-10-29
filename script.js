document.documentElement.classList.add("js");

const projectDialog = document.querySelector(".project-dialog");
const projectDialogHeading = document.querySelector("#project-dialog-heading");
const projectDialogDescription = document.querySelector(".project-dialog-description");
const projectDialogClose = document.querySelector(".project-dialog-close");

document.querySelectorAll(".project-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const project = document.getElementById(button.dataset.projectTarget);
    const heading = project?.querySelector("h3");
    const description = project?.querySelector("p");

    if (!heading || !description || !projectDialog || !projectDialogHeading || !projectDialogDescription) {
      console.error("Unable to open project details: project content or dialog is missing.");
      return;
    }

    projectDialogHeading.textContent = heading.textContent;
    projectDialogDescription.textContent = description.textContent;
    projectDialog.showModal();
  });
});

projectDialogClose?.addEventListener("click", () => {
  projectDialog?.close();
});

projectDialog?.addEventListener("click", (event) => {
  if (event.target === projectDialog) {
    projectDialog.close();
  }
});
