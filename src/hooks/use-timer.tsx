import {useCallback, useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';

const INTERVAL_TIME = 1000;

export default function useTimer(seconds: number, callback: () => void) {
  const [counter, setCounter] = useState(seconds);
  const [isPausing, setIsPausing] = useState(false);

  const runCallback = useCallback(() => {
    setCounter(seconds);
    callback();
  }, [seconds, callback]);

  useFocusEffect(
    useCallback(() => {
      setIsPausing(false);
      runCallback();

      return () => setIsPausing(true);
    }, [runCallback]),
  );

  useEffect(() => {
    if (!isPausing) {
      const interval = setInterval(
        () => setCounter(value => value - 1),
        INTERVAL_TIME,
      );

      return () => {
        clearInterval(interval);
      };
    }
  }, [isPausing]);

  useEffect(() => {
    if (counter <= 0) {
      runCallback();
    }
  }, [counter, runCallback]);

  return {manualRefresh: runCallback};
}
