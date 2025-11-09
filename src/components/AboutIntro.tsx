import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const AboutIntro = () => {
  const {
    elementRef,
    isVisible
  } = useScrollAnimation(0.2);
  return <section ref={elementRef as React.RefObject<HTMLElement>} className={`px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 bg-transparent scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-xs sm:text-sm font-normal mb-4 sm:mb-6 tracking-wide">
          About
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight tracking-tight">We are passionate about turning data into clear, insightful business case studies. Our research team carefully analyzes available data to present stories of real business challenges, strategies, and successes. We aim to empower professionals and entrepreneurs with reliable insights to inspire smarter decisions.</p>
      </div>
    </section>;
};
export default AboutIntro;