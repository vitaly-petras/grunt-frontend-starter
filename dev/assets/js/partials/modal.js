document.addEventListener("show.bs.modal", function() {
  document.documentElement.classList.add("modal-opened");
});

document.addEventListener("hidden.bs.modal", function() {
  document.documentElement.classList.remove("modal-opened");
});
