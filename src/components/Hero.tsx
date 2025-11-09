import HeroAnimation from "./HeroAnimation";
const Hero = () => {
  return <section className="relative container mx-auto px-4 sm:px-6 py-24 sm:py-32 md:py-40 lg:py-48 overflow-hidden">
      <HeroAnimation />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 tracking-tighter leading-tight animate-fade-in">Research. Analyze. 
Reveal.
        <br />
          Excellence
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in px-4" style={{
        animationDelay: '0.2s',
        animationFillMode: 'both'
      }}>We breakdown complex business data into informative casestudies by research and analyze</p>
      </div>
    </section>;
};
export default Hero;