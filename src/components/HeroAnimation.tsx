const HeroAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Large soft blobs with gentle glow */}
      <div 
        className="absolute top-[10%] left-[15%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-40 animate-float-gentle"
        style={{
          background: 'radial-gradient(circle, hsl(var(--blob-cream)) 0%, hsl(var(--blob-cream) / 0.3) 70%, transparent 100%)'
        }}
      />
      
      <div 
        className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full blur-[140px] opacity-35 animate-float-drift"
        style={{
          background: 'radial-gradient(circle, hsl(var(--blob-white)) 0%, hsl(var(--blob-white) / 0.2) 70%, transparent 100%)'
        }}
      />
      
      <div 
        className="absolute bottom-[15%] left-[25%] w-[450px] h-[450px] rounded-full blur-[130px] opacity-30 animate-float-subtle"
        style={{
          background: 'radial-gradient(circle, hsl(var(--blob-grey)) 0%, hsl(var(--blob-grey) / 0.3) 70%, transparent 100%)'
        }}
      />
      
      {/* Medium floating blobs */}
      <div 
        className="absolute top-[40%] left-[5%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-25 animate-float-gentle-delayed"
        style={{
          background: 'radial-gradient(circle, hsl(var(--blob-white)) 0%, hsl(var(--blob-cream) / 0.2) 60%, transparent 100%)'
        }}
      />
      
      <div 
        className="absolute bottom-[25%] right-[20%] w-[380px] h-[380px] rounded-full blur-[110px] opacity-28 animate-float-delayed"
        style={{
          background: 'radial-gradient(circle, hsl(var(--blob-cream)) 0%, hsl(var(--blob-grey) / 0.25) 65%, transparent 100%)'
        }}
      />
      
      {/* Small accent blobs for depth */}
      <div 
        className="absolute top-[60%] right-[30%] w-[280px] h-[280px] rounded-full blur-[90px] opacity-20 animate-float-slow"
        style={{
          background: 'radial-gradient(circle, hsl(var(--blob-grey)) 0%, transparent 70%)'
        }}
      />
      
      <div 
        className="absolute top-[15%] left-[45%] w-[300px] h-[300px] rounded-full blur-[95px] opacity-22 animate-float-gentle"
        style={{
          background: 'radial-gradient(circle, hsl(var(--blob-white)) 0%, hsl(var(--blob-cream) / 0.15) 60%, transparent 100%)'
        }}
      />
      
      {/* Soft overlay gradient for warmth */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(ellipse at center top, hsl(var(--blob-cream) / 0.3) 0%, transparent 70%)'
        }}
      />
    </div>
  );
};

export default HeroAnimation;
