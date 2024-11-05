import { useEffect, useRef } from 'react';

interface AnimatedLinesProps {
  numberOfLines: number;
  color: string;
}

const AnimatedLines: React.FC<AnimatedLinesProps> = ({ numberOfLines, color }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svgEl = svgRef.current;

    const randomRange = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lineDataArr: any[] = [];

    const createPathString = () => {
      let completedPath = '';
      const comma = ',';
      const ampl = 20;

      for (let i = 0; i < numberOfLines; i++) {
        const path = lineDataArr[i];

        const current = {
          x: ampl * Math.sin(path.counter / path.sin),
          y: ampl * Math.cos(path.counter / path.cos),
        };

        const newPathSection = `M${path.startX}${comma}${path.startY} Q${path.pointX}${comma}${(
          current.y * 1.5
        ).toFixed(3)} ${(current.x / 10 + path.centerX).toFixed(3)}${comma}${(current.y / 5 + path.centerY).toFixed(
          3,
        )} T${path.endX}${comma}${path.endY}`;

        path.counter++;
        completedPath += newPathSection;
      }

      return completedPath;
    };

    const createLines = () => {
      const newPathEl: SVGPathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const minSpeed = 120;
      const maxSpeed = 150;
      newPathEl.setAttribute('stroke', color);

      for (let i = 0; i < numberOfLines; i++) {
        const lineDataObj = {
          counter: randomRange(1, 500),
          startX: randomRange(-220, -240),
          startY: randomRange(50, 70),
          endX: randomRange(320, 340),
          endY: randomRange(20, 40),
          sin: randomRange(minSpeed, maxSpeed),
          cos: randomRange(minSpeed, maxSpeed),
          pointX: randomRange(-20, -55),
          centerX: randomRange(90, 120),
          centerY: randomRange(55, 65),
        };

        lineDataArr.push(lineDataObj);
      }

      const animLoop = () => {
        newPathEl.setAttribute('d', createPathString());
        requestAnimationFrame(animLoop);
      };
      if (svgEl) {
        svgEl.appendChild(newPathEl);
      }
      animLoop();
    };

    createLines();
  }, [color, numberOfLines]);

  return (
    <svg
      className="animated-lines"
      ref={svgRef}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 120"
    ></svg>
  );
};

export default AnimatedLines;
