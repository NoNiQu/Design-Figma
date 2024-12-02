import "../style/main.scss";

document.addEventListener("DOMContentLoaded", (e) => {
  const joinBetaButton = document.getElementById("joinBetaButton");
  const playDemo = document.getElementById("play");
  const registrarseForm = document.getElementById("registrarse");

  function toggleForm() {
    if (registrarseForm.classList.contains("hidden")) {
      registrarseForm.classList.remove("hidden");
      playDemo.classList.add("hidden");
    } else {
      registrarseForm.classList.add("hidden");
      playDemo.classList.remove("hidden");
    }
  }

  joinBetaButton.addEventListener("click", (event) => {
    event.preventDefault();
    toggleForm();
  });

  function closeFormOnClickOutside(event) {
    if (
      !registrarseForm.contains(event.target) &&
      !joinBetaButton.contains(event.target)
    ) {
      registrarseForm.classList.add("hidden");
      playDemo.classList.remove("hidden");
    }
  }

  document.addEventListener("click", closeFormOnClickOutside);

  const volumeIcon = document.getElementById("volumeIcon");

  volumeIcon.addEventListener("click", function (event) {
    event.preventDefault();

    if (volumeIcon.querySelector("i").classList.contains("fa-volume-up")) {
      volumeIcon.querySelector("i").classList.remove("fa-volume-up");
      volumeIcon.querySelector("i").classList.add("fa-volume-off");
    } else {
      volumeIcon.querySelector("i").classList.remove("fa-volume-off");
      volumeIcon.querySelector("i").classList.add("fa-volume-up");
    }
  });
});
