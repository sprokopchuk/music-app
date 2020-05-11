export const saveToLocalStorage = (key, value) => {
  global.localStorage.setItem(key, value);
};

export const getFromLocalStorage = key => {
  return global.localStorage.getItem(key);
};
