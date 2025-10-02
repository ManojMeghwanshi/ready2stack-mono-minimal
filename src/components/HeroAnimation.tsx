const HeroAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      {/* Animated flowing lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Flowing curved lines */}
        <path
          d="M 0,200 Q 200,150 400,200 T 800,200 T 1200,200"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-flow-line"
        />
        <path
          d="M 0,400 Q 250,350 500,400 T 1000,400 T 1500,400"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-flow-line-delayed"
        />
        
        {/* Milestone nodes */}
        <circle cx="200" cy="200" r="6" fill="hsl(var(--muted-foreground))" filter="url(#glow)" className="animate-pulse-slow" />
        <circle cx="600" cy="200" r="6" fill="hsl(var(--muted-foreground))" filter="url(#glow)" className="animate-pulse-slow-delayed" />
        <circle cx="1000" cy="200" r="6" fill="hsl(var(--muted-foreground))" filter="url(#glow)" className="animate-pulse-slow" />
        
        <circle cx="250" cy="400" r="5" fill="hsl(var(--muted-foreground))" filter="url(#glow)" className="animate-pulse-slow-delayed" />
        <circle cx="750" cy="400" r="5" fill="hsl(var(--muted-foreground))" filter="url(#glow)" className="animate-pulse-slow" />
      </svg>
      
      {/* Floating abstract nodes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-muted-foreground/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-muted-foreground/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute bottom-1/3 left-1/3 w-36 h-36 bg-muted-foreground/10 rounded-full blur-3xl animate-float-slow" />
    </div>
  );
};

export default HeroAnimation;
