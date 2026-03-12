export const getStorageItem = <T>(key: string): T | null => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

export const setStorageItem = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeStorageItem = (key: string) => {
  localStorage.removeItem(key);
};
