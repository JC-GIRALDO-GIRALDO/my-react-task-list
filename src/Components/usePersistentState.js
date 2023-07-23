import { useState, useEffect } from "react";

// Hook personalizado para manejar el almacenamiento persistente en localStorage
function usePersistentState(key, initialState) {
  const [state, setState] = useState(() => {
    const storedState = localStorage.getItem(key);
    return storedState ? JSON.parse(storedState) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistentState;
