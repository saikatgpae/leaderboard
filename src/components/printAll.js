const scores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HtZFWAylpVQ4SM74g7wP/scores/');
  const json = await response.json();
  const div = document.querySelector('.scores');
  json.result.forEach((element) => {
    const small = document.createElement('small');
    small.innerHTML = `${element.user} : ${element.score}`;
    div.appendChild(small);
  });
};

export default scores;
