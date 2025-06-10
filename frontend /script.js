

ocument.getElementById('reportForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const photo = document.getElementById('photo').files[0];
  const location = document.getElementById('location').value;
  const description = document.getElementById('description').value;

  console.log({
    photo,
    location,
    description
  });

  alert('Report submitted! (Logged to console for now)');
});