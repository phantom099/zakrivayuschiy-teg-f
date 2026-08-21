const saveButton = document.querySelector(".save-button");
const saveDialog = document.querySelector(".dialog");
const closeDialogButton = saveDialog.querySelector(".dialog__button");

saveButton.addEventListener("click", () => saveDialog.showModal());
closeDialogButton.addEventListener("click", () => saveDialog.close());
