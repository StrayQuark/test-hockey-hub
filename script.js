const newsItems = [
  "Goalie stood on his head. Physics filed a complaint.",
  "Defense forgot how to defense. Film at 11.",
  "Power play finally scored. Fans demand parade.",
  "Ref missed an obvious call. In other news: water is wet.",
  "Someone dropped the gloves. Penalty box got crowded."
];

function renderNews() {
  const list = document.getElementById("news-list");
  list.innerHTML = "";
  newsItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizeStats() {
  document.getElementById("shots").textContent = randomInt(15, 52);
  document.getElementById("hits").textContent = randomInt(5, 30);
  document.getElementById("sticks").textContent = randomInt(0, 6);
}

document.addEventListener("DOMContentLoaded", () => {
  renderNews();
  randomizeStats();
  document
    .getElementById("randomize-btn")
    .addEventListener("click", randomizeStats);
});
