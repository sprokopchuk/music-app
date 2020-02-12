const getFromLocalStorage = (key) => {
  return global.localStorage.getItem(key);
};

const saveToLocalStorage = (key, value) => {
  return global.localStorage.setItem(key, value);
};

export {
  getFromLocalStorage,
  saveToLocalStorage
}

