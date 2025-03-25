import React, { useEffect, useState } from "react";
import styles from "../styles/CountdownBanner.module.css";

const CountdownBanner: React.FC = () => {
  const [now, setNow] = useState<Date | null>(null); // Start with null to ensure it doesn't render SSR time
  const [saleStartTime, setSaleStartTime] = useState<Date | null>(null);

  useEffect(() => {
    // Initialize both `now` and `saleStartTime` on the client
    setNow(new Date());
    const startTime = new Date();
    startTime.setHours(startTime.getHours() + 3);
    setSaleStartTime(startTime);

    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getCountdown = (): string => {
    if (!now || !saleStartTime) return "Loading...";

    const timeDifference = saleStartTime.getTime() - now.getTime();

    if (timeDifference <= 0) return "00:00:00";

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  };

  const padZero = (num: number): string => num.toString().padStart(2, "0");

  return (
    <div className={styles.banner}>
      <div className={styles.caption}>
        <h1 className={styles.bannerTitle}>Mega Swag Sale!</h1>
        <p>Time left: {getCountdown()}</p>
      </div>
    </div>
  );
};

export default CountdownBanner;
