const recentScores = [
  { name: 'name', score: 100 },
  { name: 'name', score: 20 },
  { name: 'name', score: 50 },
  { name: 'name', score: 78 },
  { name: 'name', score: 125 },
  { name: 'name', score: 77 },
  { name: 'name', score: 42 },
];

const displayRecentScores = (parentContainer, element) => {
  const container = document.querySelector(parentContainer);
  if (!container) return;

  const fragment = document.createDocumentFragment();

  recentScores.forEach((item) => {
    const newItem = document.createElement(element);
    newItem.innerHTML = `${item.name}: ${item.score}`;
    fragment.appendChild(newItem);
  });

  container.appendChild(fragment);
};

export default displayRecentScores;