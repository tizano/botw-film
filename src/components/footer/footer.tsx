import { Theme } from '@/data/data';
import { Container } from '../container';
import './footer.css';

interface FooterProps {
  theme: Theme;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ theme }) => (
  <footer
    className={`footer overflow-hidden min-h-[560px] w-full relative flex items-center justify-center pb-10 ${theme}`}
  >
    <Container className="relative z-10 flex flex-col items-center justify-center">
      <h3 className="text-fluid-lg mb-4">
        <span className="text-white">A Japanese animated film originally authored by &quot;Otono Yomoji&quot;</span>
      </h3>
      <p className="text-foreground translate-y-[120px] opacity-50 text-fluid-md">&copy; BotwFilm_2024</p>
    </Container>
  </footer>
);
