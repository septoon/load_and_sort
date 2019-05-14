import json, { createTable, removeTable } from './table';
import {
  sortIdUp,
  sortIdDown,
  sortTitleUp,
  sortTitleDown,
  sortYearUp,
  sortYearDown,
  sortImdbUp,
  sortImdbDown,
} from './sort';

const id = document.querySelector('[data-head=id]');
const title = document.querySelector('[data-head=title]');
const year = document.querySelector('[data-head=year]');
const imdb = document.querySelector('[data-head=imdb]');

function sortTable() {
  let counter = 0;

  setInterval(() => {
    setTimeout(() => {
      json.sort(sortIdUp);
      id.textContent = 'id ↑';
      createTable();
    }, counter);

    setTimeout(() => {
      removeTable();
      json.sort(sortIdDown);
      id.textContent = 'id ↓';
      createTable();
    }, counter += 2000);

    setTimeout(() => {
      removeTable();
      id.textContent = 'id';
      title.textContent = 'title ↑';
      json.sort(sortTitleUp);
      createTable();
    }, counter += 2000);

    setTimeout(() => {
      removeTable();
      title.textContent = 'title ↓';
      json.sort(sortTitleDown);
      createTable();
    }, counter += 2000);

    setTimeout(() => {
      removeTable();
      title.textContent = 'title';
      year.textContent = 'year ↑';
      json.sort(sortYearUp);
      createTable();
    }, counter += 2000);

    setTimeout(() => {
      removeTable();
      json.sort(sortYearDown);
      year.textContent = 'year ↓';
      createTable();
    }, counter += 2000);

    setTimeout(() => {
      removeTable();
      year.textContent = 'year';
      imdb.textContent = 'imdb ↑';
      json.sort(sortImdbUp);
      createTable();
    }, counter += 2000);

    setTimeout(() => {
      removeTable();
      imdb.textContent = 'imdb ↓';
      json.sort(sortImdbDown);
      createTable();
    }, counter += 2000);

    setTimeout(() => {
      imdb.textContent = 'imdb';
      removeTable();
    }, counter += 2000);
  }, counter);
}

export default sortTable;
