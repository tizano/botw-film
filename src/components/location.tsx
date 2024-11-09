import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { citiesData } from '@/data/citiesData';
import { Theme } from '@/data/data';
import { cn } from '@/lib/utils';
import * as motion from 'framer-motion/client';
import { Tickets } from 'lucide-react';
import { Cards } from './cards';
import { Container } from './container';
import { Countdown } from './countdown';

interface LocationProps {
  theme: Theme;
  className?: string;
}

export const Location: React.FC<LocationProps> = ({ theme, className }) => {
  const eventDate = new Date('2024-11-23'); // Date de l'événement

  return (
    <section
      className={cn(
        theme === 'blue'
          ? 'bg-gradient-to-b from-white to-primary-400'
          : 'bg-gradient-to-b from-white to-secondary-400',
        className,
        'py-[100px] overflow-hidden',
      )}
    >
      <Container htmlTag="div">
        <div className="flex-items-center justify-center mb-24">
          <Countdown eventDate={eventDate} key={Date.now()} />
        </div>
        <div className="flex justify-center gap-28 items-start">
          <Cards theme={theme} />
          <motion.div
            className="flex flex-col gap-10 min-w-96"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
          >
            <Accordion type="single" collapsible>
              {citiesData.map((city) => (
                <AccordionItem key={city.city} value={city.city}>
                  <AccordionTrigger className="text-fluid-lg font-normal transition-all hover:opacity-75 hover:no-underline py-2">
                    {city.city}
                  </AccordionTrigger>
                  <AccordionContent className="text-fluid-md mb-6">
                    <div className="flex flex-col gap-2">
                      <p>{city.address}</p>
                      <p>
                        {city.province}, {city.postalCode}
                      </p>
                      <a
                        href={theme === 'blue' ? city.website_blue : city.website_red}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 underline underline-offset-4 mt-6 transition-all hover:opacity-75"
                      >
                        <Tickets size={20} />
                        Book your ticket
                      </a>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
