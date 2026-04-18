const SpaceBackground = () => {
  // Generate random stars across the entire viewport
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    delay: `${Math.random() * 3}s`,
    duration: `${Math.random() * 2 + 2}s`,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Galaxy gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 20%, hsl(189 86% 53% / 0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, hsl(217 91% 68% / 0.05) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, hsl(217 91% 68% / 0.03) 0%, transparent 70%)
          `,
        }}
      />

      {/* Stars distributed across viewport */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: star.size > 2 
              ? 'linear-gradient(135deg, hsl(189 86% 53% / 0.8), hsl(217 91% 68% / 0.8))' 
              : 'hsl(215 25% 84% / 0.6)',
            animation: `twinkle ${star.duration} ease-in-out infinite`,
            animationDelay: star.delay,
            boxShadow: star.size > 2 
              ? '0 0 6px hsl(189 86% 53% / 0.5)' 
              : 'none',
          }}
        />
      ))}

      {/* Moon - top right */}
      <div 
        className="absolute right-[8%] top-[12%] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, hsl(215 25% 94%), hsl(215 25% 74%), hsl(215 25% 54%))',
          animation: 'moon-glow 4s ease-in-out infinite',
        }}
      >
        {/* Moon craters */}
        <div 
          className="absolute w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full opacity-30"
          style={{
            background: 'hsl(215 25% 44%)',
            top: '20%',
            left: '25%',
          }}
        />
        <div 
          className="absolute w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full opacity-25"
          style={{
            background: 'hsl(215 25% 44%)',
            top: '50%',
            left: '60%',
          }}
        />
        <div 
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full opacity-20"
          style={{
            background: 'hsl(215 25% 44%)',
            top: '65%',
            left: '30%',
          }}
        />
      </div>

      {/* Rocket - left side */}
      <div 
        className="absolute left-[3%] sm:left-[5%] top-[45%] sm:top-[50%]"
        style={{
          animation: 'rocket-float 4s ease-in-out infinite',
        }}
      >
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
          style={{ transform: 'rotate(-45deg)' }}
        >
          {/* Rocket body */}
          <path 
            d="M12 2C12 2 8 6 8 12C8 15 9 18 12 22C15 18 16 15 16 12C16 6 12 2 12 2Z" 
            fill="url(#rocketGradient)"
            stroke="hsl(189 86% 53%)"
            strokeWidth="0.5"
          />
          {/* Rocket window */}
          <circle 
            cx="12" 
            cy="10" 
            r="2" 
            fill="hsl(217 91% 68%)"
            opacity="0.8"
          />
          {/* Left fin */}
          <path 
            d="M8 14L5 18L8 16V14Z" 
            fill="hsl(189 86% 53%)"
            opacity="0.8"
          />
          {/* Right fin */}
          <path 
            d="M16 14L19 18L16 16V14Z" 
            fill="hsl(189 86% 53%)"
            opacity="0.8"
          />
          {/* Flame */}
          <path 
            d="M10 20C10 20 11 23 12 24C13 23 14 20 14 20C13 21 11 21 10 20Z" 
            fill="url(#flameGradient)"
          />
          <defs>
            <linearGradient id="rocketGradient" x1="8" y1="2" x2="16" y2="22">
              <stop offset="0%" stopColor="hsl(215 25% 84%)" />
              <stop offset="100%" stopColor="hsl(215 25% 64%)" />
            </linearGradient>
            <linearGradient id="flameGradient" x1="12" y1="20" x2="12" y2="24">
              <stop offset="0%" stopColor="hsl(189 86% 53%)" />
              <stop offset="50%" stopColor="hsl(217 91% 68%)" />
              <stop offset="100%" stopColor="hsl(280 80% 60%)" />
            </linearGradient>
          </defs>
        </svg>
        {/* Rocket trail */}
        <div 
          className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 w-1 h-6 sm:h-8 opacity-50"
          style={{
            background: 'linear-gradient(to bottom, hsl(189 86% 53% / 0.6), transparent)',
            filter: 'blur(2px)',
          }}
        />
      </div>

      {/* Second Rocket - right side, lower */}
      <div 
        className="absolute right-[4%] sm:right-[6%] bottom-[25%] sm:bottom-[30%]"
        style={{
          animation: 'rocket-float 5s ease-in-out infinite',
          animationDelay: '2s',
        }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="sm:w-8 sm:h-8 md:w-10 md:h-10"
          style={{ transform: 'rotate(45deg)' }}
        >
          <path 
            d="M12 2C12 2 8 6 8 12C8 15 9 18 12 22C15 18 16 15 16 12C16 6 12 2 12 2Z" 
            fill="url(#rocketGradient2)"
            stroke="hsl(217 91% 68%)"
            strokeWidth="0.5"
          />
          <circle cx="12" cy="10" r="2" fill="hsl(189 86% 53%)" opacity="0.8" />
          <path d="M8 14L5 18L8 16V14Z" fill="hsl(217 91% 68%)" opacity="0.8" />
          <path d="M16 14L19 18L16 16V14Z" fill="hsl(217 91% 68%)" opacity="0.8" />
          <path d="M10 20C10 20 11 23 12 24C13 23 14 20 14 20C13 21 11 21 10 20Z" fill="url(#flameGradient2)" />
          <defs>
            <linearGradient id="rocketGradient2" x1="8" y1="2" x2="16" y2="22">
              <stop offset="0%" stopColor="hsl(215 25% 74%)" />
              <stop offset="100%" stopColor="hsl(215 25% 54%)" />
            </linearGradient>
            <linearGradient id="flameGradient2" x1="12" y1="20" x2="12" y2="24">
              <stop offset="0%" stopColor="hsl(217 91% 68%)" />
              <stop offset="100%" stopColor="hsl(280 80% 60%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Shooting Stars */}
      <div 
        className="absolute top-[15%] left-[15%] w-1 h-1 bg-foreground rounded-full"
        style={{
          animation: 'shooting-star 6s linear infinite',
          animationDelay: '1s',
        }}
      >
        <div 
          className="absolute w-16 h-px -left-16 top-1/2 -translate-y-1/2"
          style={{
            background: 'linear-gradient(to right, transparent, hsl(215 25% 84% / 0.6))',
          }}
        />
      </div>

      <div 
        className="absolute top-[35%] left-[55%] w-1 h-1 bg-foreground rounded-full"
        style={{
          animation: 'shooting-star 8s linear infinite',
          animationDelay: '4s',
        }}
      >
        <div 
          className="absolute w-12 h-px -left-12 top-1/2 -translate-y-1/2"
          style={{
            background: 'linear-gradient(to right, transparent, hsl(189 86% 53% / 0.5))',
          }}
        />
      </div>

      <div 
        className="absolute top-[70%] left-[30%] w-1 h-1 bg-foreground rounded-full"
        style={{
          animation: 'shooting-star 7s linear infinite',
          animationDelay: '7s',
        }}
      >
        <div 
          className="absolute w-10 h-px -left-10 top-1/2 -translate-y-1/2"
          style={{
            background: 'linear-gradient(to right, transparent, hsl(217 91% 68% / 0.5))',
          }}
        />
      </div>

      {/* Floating planets/orbs */}
      <div 
        className="absolute right-[15%] top-[60%] w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle at 30% 30%, hsl(217 91% 68%), hsl(217 91% 48%))',
          animation: 'float 6s ease-in-out infinite',
          boxShadow: '0 0 20px hsl(217 91% 68% / 0.3)',
        }}
      />
      
      <div 
        className="absolute left-[12%] top-[20%] w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle at 30% 30%, hsl(189 86% 53%), hsl(189 86% 33%))',
          animation: 'float 5s ease-in-out infinite',
          animationDelay: '1s',
          boxShadow: '0 0 15px hsl(189 86% 53% / 0.3)',
        }}
      />

      <div 
        className="absolute left-[25%] bottom-[15%] w-4 h-4 sm:w-5 sm:h-5 rounded-full opacity-35"
        style={{
          background: 'radial-gradient(circle at 30% 30%, hsl(280 80% 60%), hsl(280 80% 40%))',
          animation: 'float 7s ease-in-out infinite',
          animationDelay: '2s',
          boxShadow: '0 0 15px hsl(280 80% 60% / 0.3)',
        }}
      />

      <div 
        className="absolute right-[30%] top-[80%] w-3 h-3 sm:w-4 sm:h-4 rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle at 30% 30%, hsl(189 86% 63%), hsl(189 86% 43%))',
          animation: 'float 4s ease-in-out infinite',
          animationDelay: '3s',
          boxShadow: '0 0 12px hsl(189 86% 53% / 0.3)',
        }}
      />
    </div>
  );
};

export default SpaceBackground;
