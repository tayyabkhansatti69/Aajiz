export function getLocalStorage(key: string): string | null {
  let data: string | null = null;

  if (typeof window !== "undefined") {
    const storedData = localStorage.getItem(key);
    if (storedData) {
      try {
        data = JSON.parse(storedData);
      } catch (error) {
        console.error("Failed to parse stored data:", error);
      }
    }
  }
  return data;
}

export function setLocalStorage(key: string, data): void {
  try {
    if (typeof window !== "undefined")
      localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
    /* empty */
  }
}

export function removeLocalStorage(key: string): void {
  try {
    if (typeof window !== "undefined") localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
    // If stored data is not a stringified JSON this might fail,
    // that's why we catch the error
  }
}

export function clearLocalStorage(): void {
  localStorage.clear();
}
