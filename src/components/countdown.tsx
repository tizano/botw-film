'use client';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface CountdownProps {
  className?: string;
  eventDate: Date;
}

export const Countdown: React.FC<CountdownProps> = ({ eventDate, className }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(eventDate);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <div
      className={cn(
        'relative flex flex-col items-center justify-center after:content-[""] after:absolute after:-bottom-10 after:left-[25%] after:h-[2px] after:w-[50%] after:bg-gradient-to-r after:from-transparent after:via-foreground after:to-transparent',
        className,
      )}
    >
      <h2 className="text-fluid-md text-center font-normal mb-4">
        Profitez du film à partir
        <br />
        <span className="text-fluid-lg font-bold">du 23 novembre 2024</span>
      </h2>
      <div className="flex">
        {Object.entries(timeLeft).map(([unit, value], index) => (
          <div key={unit} className="flex items-start justify-center relative">
            <div
              className={cn(
                'flex flex-col items-center justify-center relative after:content-[":"] after:top-[1.75rem] after:right-0 after:absolute',
                index === 3 && 'after:hidden',
              )}
            >
              <span className="text-fluid-xl px-8">{value < 10 ? `0${value}` : value}</span>
              <span className="text-fluid-sm">{unit}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
