import { useEffect, useState } from 'react';

const useCountdown = (numSeconds: number) => {

  const [timeLeft, setTimeLeft] = useState(numSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [numSeconds]);

  return getReturnValues(timeLeft);
};

const getReturnValues = (timeLeft: number) => {
  // calculate time left
  const oneMinute = 60;
  const oneHour = oneMinute * oneMinute;
  const oneDay = oneHour * 24;
  const days = Math.floor(timeLeft / (oneDay));
  const hours = Math.floor(
    (timeLeft % oneDay) / oneHour
  );
  const minutes = Math.floor((timeLeft % oneHour) / oneMinute);
  const seconds = Math.floor((timeLeft % oneMinute));

  return [days, hours, minutes, seconds];
};

export { useCountdown };
