const volumeIcon = document.getElementById('volumeIcon');

volumeIcon.addEventListener('click', function(event) {
  event.preventDefault();

  if (volumeIcon.querySelector('i').classList.contains('fa-volume-up')) {
    volumeIcon.querySelector('i').classList.remove('fa-volume-up');
    volumeIcon.querySelector('i').classList.add('fa-volume-off');
  } else {
    volumeIcon.querySelector('i').classList.remove('fa-volume-off');
    volumeIcon.querySelector('i').classList.add('fa-volume-up');
  }
});
