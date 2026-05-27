const createMemoryStorage = () => new Map();

const isStorageAvailable = (storageName) => {
  try {
    if (typeof window === "undefined" || !window[storageName]) {
      return false;
    }

    const testKey = "__j4turf_storage_test__";
    window[storageName].setItem(testKey, "ok");
    window[storageName].removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
};

const createSafeBrowserStorage = (storageName) => {
  const memoryStorage = createMemoryStorage();
  const storageAvailable = isStorageAvailable(storageName);

  return {
    getItem(key) {
      if (storageAvailable) {
        try {
          return window[storageName].getItem(key);
        } catch (error) {
          return memoryStorage.get(key) ?? null;
        }
      }

      return memoryStorage.get(key) ?? null;
    },

    setItem(key, value) {
      if (storageAvailable) {
        try {
          window[storageName].setItem(key, value);
          return;
        } catch (error) {
          // Fall back to in-memory storage for restrictive WebViews.
        }
      }

      memoryStorage.set(key, value);
    },

    removeItem(key) {
      if (storageAvailable) {
        try {
          window[storageName].removeItem(key);
        } catch (error) {
          // Keep cleanup best-effort only.
        }
      }

      memoryStorage.delete(key);
    },
  };
};

export const safeStorage = createSafeBrowserStorage("localStorage");
export const safeSessionStorage = createSafeBrowserStorage("sessionStorage");

export const createPersistStorage = () => ({
  getItem(key) {
    return Promise.resolve(safeStorage.getItem(key));
  },
  setItem(key, value) {
    safeStorage.setItem(key, value);
    return Promise.resolve(value);
  },
  removeItem(key) {
    safeStorage.removeItem(key);
    return Promise.resolve();
  },
});
