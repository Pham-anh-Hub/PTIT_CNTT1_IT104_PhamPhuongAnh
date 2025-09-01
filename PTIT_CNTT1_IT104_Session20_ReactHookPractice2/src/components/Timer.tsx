import React, { useEffect, useState } from "react";

export default function Timer() {
  const [timerId, setTimerId] = useState<number | undefined>(undefined);
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    setTimerId(
      setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000)
    );
    return () => {
      clearInterval(timerId);
    };
  }, []);
  return (
    <div className="exercise05">
      <h2>Timer: {timer}</h2>
    </div>
  );
}
