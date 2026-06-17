import { useEffect, useState } from "react";

const UseCountDown = (targetDate, onExpire) => {
  const [timeOut, setTimeOut] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    deconds: 0,
  });

  const [expired, setExpired] = useState(false);
  useEffect(() => {
    const calculate = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeOut({
          days: Math.floor(difference / (1000 * 60 * 60 * 24))
            .toString()
            .padStart(2, "0"),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
            .toString()
            .padStart(2, "0"),
          minutes: Math.floor((difference / (1000 * 60)) % 60)
            .toString()
            .padStart(2, "0"),
          seconds: Math.floor((difference / 1000) % 60)
            .toString()
            .padStart(2, "0"),
        });
        setExpired(false);
      } else {
        setTimeOut({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        setExpired((prev) => {
          if (!prev) {
            onExpire?.();
            return true;
          }
        });
      }
    };
    calculate();
    const interval = setInterval(calculate, 1000);

    return () => clearInterval(interval);
  }, []);
  return { ...timeOut, expired };
};

export default UseCountDown;
