import { useState, useEffect } from "react";
export function useLocalStorageState(initalState, key) {
  const [value, setValue] = useState(() => {
    const stordValue = localStorage.getItem(key);
    return stordValue ? JSON.parse(stordValue) : initalState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
}
