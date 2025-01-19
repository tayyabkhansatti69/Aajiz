export function getSessionStorage(key: string): string | null {
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

export function setSessionStorage(key: string, data: any): void {
  try {
    if (typeof window !== "undefined")
      sessionStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
    /* empty */
  }
}

export function removeSessionStorage(key: string): void {
  try {
    if (typeof window !== "undefined") sessionStorage.removeItem(key);
  } catch (error) {
    console.log(error);
    // If stored data is not a stringified JSON this might fail,
    // that's why we catch the error
  }
}

export function clearSessionStorage(): void {
  sessionStorage.clear();
}
