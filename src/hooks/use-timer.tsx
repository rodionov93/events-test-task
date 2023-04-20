import {useCallback, useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';

enum TimerState {
  Running = 'running',
  Pausing = 'pausing',
  Refetching = 'refetching',
}

export default function useTimer(seconds: number, callback: () => void) {
  const [timerState, setTimerState] = useState(TimerState.Running);

  useFocusEffect(
    useCallback(() => {
      setTimerState(TimerState.Running);
      callback();

      return () => setTimerState(TimerState.Pausing);
    }, [callback]),
  );

  useEffect(() => {
    if (timerState === TimerState.Running) {
      const interval = setInterval(() => callback(), seconds * 1000);

      return () => clearInterval(interval);
    }

    if (timerState === TimerState.Refetching) {
      setTimerState(TimerState.Running);
    }
  }, [seconds, callback, timerState]);

  const manualRefresh = () => {
    setTimerState(TimerState.Refetching);
    callback();
  };

  return {manualRefresh};
}
