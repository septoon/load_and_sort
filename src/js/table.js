const json = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.20,
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: 9.00,
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: 9.00,
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: 8.90,
    year: 1994,
  },
];

const table = document.querySelector('table');
const tbody = document.createElement('tbody');
tbody.setAttribute('id', 'tbody');

const createTable = () => {
  // eslint-disable-next-line no-restricted-syntax
  for (const i of json) {
    const tr = document.createElement('tr');
    tr.setAttribute('data-body', 'tr');
    tr.setAttribute('className', 'tr');

    // console.table(json)
    tr.innerHTML = `
    <td>${i.id}</td>
    <td>${i.title}</td>
    <td>${i.year}</td>
    <td>${i.imdb.toFixed(2)}</td>
    `;
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
};

const removeTable = () => {
  const tbodyEl = document.getElementById('tbody');
  tbodyEl.innerHTML = '';
  table.removeChild(tbodyEl);
};
export default json;
export { createTable, removeTable };
