export const sortIdUp = (a, b) => {
  if (a.id < b.id) {
    return -1;
  }

  if (a.id > b.id) {
    // id.textContent = 'id ↑';
    return 1;
  }
  // id.textContent = 'id';
  return 0;
};

export const sortIdDown = (a, b) => {
  if (a.id > b.id) {
    return -1;
  }

  if (a.id < b.id) {
    // id.textContent = 'id ↓';
    return 1;
  }
  // id.textContent = 'id';
  return 0;
};


export const sortTitleUp = (a, b) => {
  if (a.title < b.title) {
    return -1;
  }

  if (a.title > b.title) {
    // title.textContent = 'title ↑';
    return 1;
  }
  return 0;
};

export const sortTitleDown = (a, b) => {
  if (a.title > b.title) {
    return -1;
  }

  if (a.title < b.title) {
    // title.textContent = 'title ↓';
    return 1;
  }
  return 0;
};

export const sortYearUp = (a, b) => {
  if (a.year < b.year) {
    return -1;
  }

  if (a.year > b.year) {
    // year.textContent = 'year ↑';
    return 1;
  }
  return 0;
};

export const sortYearDown = (a, b) => {
  if (a.year > b.year) {
    return -1;
  }

  if (a.year < b.year) {
    // year.textContent = 'year ↓';
    return 1;
  }
  return 0;
};

export const sortImdbUp = (a, b) => {
  if (a.imdb < b.imdb) {
    return -1;
  }

  if (a.imdb > b.imdb) {
    // imdb.textContent = 'imdb ↑';
    return 1;
  }
  return 0;
};

export const sortImdbDown = (a, b) => {
  if (a.imdb > b.imdb) {
    return -1;
  }

  if (a.imdb < b.imdb) {
    // imdb.textContent = 'imdb ↓';
    return 1;
  }
  return 0;
};
