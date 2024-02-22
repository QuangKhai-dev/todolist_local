export const saveLocalStorage = (key, value) => {
  const valueString = JSON.stringify(value);
  localStorage.setItem(key, valueString);
};

export const getLocalStorage = (key) => {
  const valueString = localStorage.getItem(key);
  if (valueString) {
    return JSON.parse(valueString);
  }
  return null;
};

export function generateRandomId() {
  return Math.floor(1000 + Math.random() * 9000);
}
