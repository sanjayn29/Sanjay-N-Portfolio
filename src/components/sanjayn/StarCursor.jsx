import { useEffect, useRef, useState } from 'react';

const StarCursor = () => {
  const [trails, setTrails] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const rafIdRef = useRef(0);
  const latestMouseRef = useRef({ x: 0, y: 0 });
  const trailIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      latestMouseRef.current = { x: e.clientX, y: e.clientY };

      if (rafIdRef.current) {
        return;
      }

      rafIdRef.current = window.requestAnimationFrame(() => {
        rafIdRef.current = 0;
        const { x, y } = latestMouseRef.current;
        setMousePos({ x, y });

        // Create a new trail particle
        const newTrail = {
          id: trailIdRef.current++,
          x,
          y,
          size: Math.random() * 6 + 3,
          opacity: Math.random() * 0.5 + 0.5,
        };

        setTrails((prev) => [...prev.slice(-15), newTrail]);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafIdRef.current) {
        window.cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  // Clean up old trails
  useEffect(() => {
    const interval = setInterval(() => {
      setTrails((prev) => (prev.length > 0 ? prev.slice(1) : prev));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Trail particles */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="absolute"
          style={{
            left: trail.x,
            top: trail.y,
            transform: 'translate(-50%, -50%)',
            opacity: (index / trails.length) * trail.opacity,
            transition: 'opacity 0.1s ease-out',
          }}
        >
          {/* Star shape */}
          <svg
            width={trail.size}
            height={trail.size}
            viewBox="0 0 24 24"
            style={{
              filter: `drop-shadow(0 0 ${trail.size}px hsl(189 86% 53% / 0.8))`,
            }}
          >
            <path
              d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z"
              fill={index % 2 === 0 ? '#22D3EE' : '#60A5FA'}
            />
          </svg>
        </div>
      ))}

      {/* Main cursor glow */}
      <div
        className="absolute w-6 h-6 rounded-full"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, hsl(189 86% 53% / 0.3) 0%, transparent 70%)',
          boxShadow: '0 0 20px hsl(189 86% 53% / 0.4), 0 0 40px hsl(217 91% 68% / 0.2)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default StarCursor;
