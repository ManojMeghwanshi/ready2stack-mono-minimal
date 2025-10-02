import HeroAnimation from "./HeroAnimation";

const Hero = () => {
  return <section className="relative container mx-auto px-4 sm:px-6 sm:py-32 md:py-48 py-[300px] overflow-hidden">
      <HeroAnimation />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 tracking-tighter leading-tight animate-fade-in">
          Crafting Digital
          <br />
          Excellence
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          We transform ambitious ideas into powerful digital experiences that drive growth and innovation.
        </p>
      </div>
    </section>;
};
export default Hero;