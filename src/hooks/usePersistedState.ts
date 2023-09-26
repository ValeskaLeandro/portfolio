/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

interface PersistedState {
  state: any;
  checked: boolean;
}

function usePersistedState(key: string, initialState: any, initialChecked: boolean) {
  const storedData = localStorage.getItem(key);
  const initialData: PersistedState = storedData ? JSON.parse(storedData) : { state: initialState, checked: initialChecked };

  const [state, setState] = useState(initialData.state);
  const [checked, setChecked] = useState(initialData.checked);

  useEffect(() => {
    const dataToStore: PersistedState = { state, checked };
    localStorage.setItem(key, JSON.stringify(dataToStore));
  }, [state, checked, key]);

  return [state, setState, checked, setChecked];
}

export default usePersistedState;
