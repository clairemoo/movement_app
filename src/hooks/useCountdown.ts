import { useEffect, useState } from 'react';

const useCountdown = (numSeconds: number) => {
  const [timeLeft, setTimeLeft] = useState(numSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prev) => prev > 0 ? prev - 1 : 0);
      }
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
  const hours = Math.floor((timeLeft % oneDay) / oneHour);
  const minutes = Math.floor((timeLeft % oneHour) / oneMinute);
  const seconds = Math.floor(timeLeft % oneMinute);

  return {hours, minutes, seconds};
};

export { useCountdown };
