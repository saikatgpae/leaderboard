const addNew = async () => {
  const name = document.querySelector('#name').value;
  const point = document.querySelector('#score').value;
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HtZFWAylpVQ4SM74g7wP/scores/', {
    method: 'POST',
    body: JSON.stringify({ user: name, score: point }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then((response) => response.json());
  window.location.reload();
  document.querySelector('#name').value = '';
  document.querySelector('#score').value = '';
};

export default addNew;