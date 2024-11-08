import Image from 'next/image';
import './card.css';

interface CardProps {
  src: string;
  isSelected: boolean;
  onClick: (e: React.MouseEvent) => void;
  rotation: { x: number; y: number };
  zIndex: number;
}

export const Card: React.FC<CardProps> = ({ src, isSelected, onClick, rotation, zIndex }) => (
  <div className="card-container relative" onClick={onClick} style={{ zIndex: zIndex }}>
    <div
      className={`card ${isSelected ? 'selected' : ''}`}
      style={{
        transform: isSelected ? `scale(1.1) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` : 'scale(1)',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease', // Smooth transition
      }}
    >
      <Image src={src} alt="custom card" className="card-image" width={400} height={800} />
      <div className="card-overlay"></div>
    </div>
  </div>
);
