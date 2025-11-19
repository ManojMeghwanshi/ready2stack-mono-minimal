import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import teamMemberImg from "@/assets/palak-profile.jpg";

const About = () => {
  const { elementRef: introRef, isVisible: introVisible } = useScrollAnimation(0.2);
  const { elementRef: bioRef, isVisible: bioVisible } = useScrollAnimation(0.2);
  
  // Edit content directly here
  const aboutText = "We are passionate about turning data into clear, insightful business case studies. Our research team carefully analyzes available data to present stories of real business challenges, strategies, and successes. We aim to empower professionals and entrepreneurs with reliable insights to inspire smarter decisions.";
  
  const bioContent = {
    name: "Palak Bhatia",
    heading: "Hi, I'm Palak",
    para1: "I'm a full-time freelancer, an MBA student and a business aspirant. All at the same time? Let me explain For almost 2 years, I worked at a Digital Marketing Agency. I worked for 20+ brands and wore multiple hats like business strategy, marketing strategy, performance marketing, Google ads, Facebook ads, sales, and more.",
    para2: "After 2 years at this agency, I asked \"What next\"? A high-paying job was never on my mind. I always wanted to start a business. But there was a lot I still needed to learn. However, I wanted to start my business while learning, not after learning. I decided to take up an online MBA and start my freelancing business.",
    para3: "My aim with freelancing is to take limited clients at a time but deliver the best strategies and execution that bring actual results. In the end, I want to see my clients happy and satisfied. If you're looking for a marketing freelancer, who can wear multiple hats and deliver results, let's connect. Please email me at palakbhatia192000@gmail.com",
    para4: "If you're not, let's connect and have a quick chat, with all things professional."
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
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
              {aboutText}
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-8 tracking-wide font-semibold">
                {bioContent.heading}
              </h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>{bioContent.para1}</p>
                <p>{bioContent.para2}</p>
                <p>{bioContent.para3}</p>
                <p>{bioContent.para4}</p>
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
