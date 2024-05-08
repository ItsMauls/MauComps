
import { useEffect } from "react";

export function useKeyDown(targetKey, callback) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === targetKey) {
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [targetKey, callback]);
}