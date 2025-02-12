import { useCallback, useEffect, useState } from "react";

export const useAsync = (asyncFunction, shouldRun) => {
  const [state, setState] = useState({
    result: null,
    error: null,
    status: 'idle'
  });

  const run = useCallback(async () => {
    await new Promise(r => setTimeout(r, 1000));
    setState({
      result: null,
      error: null,
      status: 'pending'
    });

    return asyncFunction().then(response => {
      setState({
        result: response,
        error: null,
        status: 'settled'
      });
    }).catch(error => {
      setState({
        result: null,
        error: error,
        status: 'error'
      });
    });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRun) {
      run();
    }
  }, [run, shouldRun]);

  return [run, state.result, state.error, state.status];
};
