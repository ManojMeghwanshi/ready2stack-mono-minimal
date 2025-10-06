import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import teamMemberImg from "@/assets/team-member.jpg";

const About = () => {
  const { elementRef: introRef, isVisible: introVisible } = useScrollAnimation(0.2);
  const { elementRef: bioRef, isVisible: bioVisible } = useScrollAnimation(0.2);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow page-content pb-96">
        {/* Intro Text Section - Matches Homepage About */}
        <section 
          ref={introRef as React.RefObject<HTMLElement>}
          className={`px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 bg-transparent scroll-hidden ${introVisible ? 'scroll-visible' : ''}`}
        >
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-xs sm:text-sm font-normal mb-4 sm:mb-6 tracking-wide">
              About
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight tracking-tight">
              We create world class digital design and development products. Our ethos is to develop strong partner relationships with our clients. Smart digital strategy development, crafted design and platform agnostic, pragmatic tech solutions. We push our clients to create world class digital products.
            </p>
          </div>
        </section>

        {/* Bio Section - Split Layout */}
        <section 
          ref={bioRef as React.RefObject<HTMLElement>}
          className={`container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 scroll-hidden ${bioVisible ? 'scroll-visible' : ''}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left - Team Photo */}
            <div className="bg-muted">
              <img 
                src={teamMemberImg} 
                alt="Team member portrait" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Right - Bio Content */}
            <div className="bg-background border border-border p-8 sm:p-12 md:p-16 flex flex-col justify-center">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold mb-4 tracking-tight">
                Z.R.
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl mb-8 tracking-wide font-light">
                a bit about myself
              </h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  With over a decade of experience in digital design and development, I've had the privilege of working with some of the world's most innovative companies.
                </p>
                <p>
                  My approach combines strategic thinking with meticulous attention to detail, ensuring every project not only meets but exceeds expectations.
                </p>
                <p>
                  I believe in building lasting partnerships with clients, understanding their vision, and translating it into exceptional digital experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
