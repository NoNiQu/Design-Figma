const joinBetaButton = document.getElementById('joinBetaButton');
const playDemo = document.getElementById('play');
const registrarseForm = document.getElementById('registrarse');

function toggleForm() {
  if (registrarseForm.classList.contains('hidden')) {
    registrarseForm.classList.remove('hidden');
    playDemo.classList.add('hidden');
  } else {
    registrarseForm.classList.add('hidden');
    playDemo.classList.remove('hidden');
  }
}

joinBetaButton.addEventListener('click', (event) => {
  event.preventDefault();
  toggleForm();
});

function closeFormOnClickOutside(event) {
  if (!registrarseForm.contains(event.target) && !joinBetaButton.contains(event.target)) {
    registrarseForm.classList.add('hidden');
    playDemo.classList.remove('hidden');
  }
}

document.addEventListener('click', closeFormOnClickOutside);
