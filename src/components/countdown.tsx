'use client';
import { cn } from '@/lib/utils';
import * as motion from 'framer-motion/client';
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
        <motion.span
          className="block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Enjoy the film from
        </motion.span>
        <motion.span
          className="text-fluid-lg font-bold block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          November 23, 2024
        </motion.span>
      </h2>
      <div className="flex">
        {Object.entries(timeLeft).map(([unit, value], index) => (
          <div key={unit} className="flex items-start justify-center relative">
            <motion.div
              className={cn(
                'flex flex-col items-center justify-center relative after:content-[":"] after:top-[1.75rem] after:right-0 after:absolute',
                index === 3 && 'after:hidden',
              )}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <span className="text-fluid-xl px-8">{value < 10 ? `0${value}` : value}</span>
              <span className="text-fluid-sm">{unit}</span>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
