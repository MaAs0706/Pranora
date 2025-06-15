

document.getElementById('reportForm').addEventListener('submit', function (e) {
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

const form = document.getElementById('reportForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const location = document.getElementById('location').value;
  const description = document.getElementById('description').value;

  const reportPreview = document.createElement('div');
  reportPreview.innerHTML = `
    <h3>Report Summary</h3>
    <p><strong>Location:</strong> ${location}</p>
    <p><strong>Description:</strong> ${description}</p>
  `;

  document.body.appendChild(reportPreview);
});