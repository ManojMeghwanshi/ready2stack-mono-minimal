import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import teamMemberImg from "@/assets/team-member.jpg";
import { supabase } from "@/integrations/supabase/client";

const About = () => {
  const { elementRef: introRef, isVisible: introVisible } = useScrollAnimation(0.2);
  const { elementRef: bioRef, isVisible: bioVisible } = useScrollAnimation(0.2);
  const [aboutText, setAboutText] = useState("");
  const [bioContent, setBioContent] = useState({
    initials: "Z.R.",
    subtitle: "a bit about myself",
    para1: "With over a decade of experience in digital design and development, I've had the privilege of working with some of the world's most innovative companies.",
    para2: "My approach combines strategic thinking with meticulous attention to detail, ensuring every project not only meets but exceeds expectations.",
    para3: "I believe in building lasting partnerships with clients, understanding their vision, and translating it into exceptional digital experiences."
  });

  useEffect(() => {
    fetchAboutContent();
  }, []);

  const fetchAboutContent = async () => {
    try {
      const { data, error } = await supabase
        .from('site_content')
        .select('key, content')
        .in('key', ['about_intro_text', 'about_bio_initials', 'about_bio_subtitle', 'about_bio_para1', 'about_bio_para2', 'about_bio_para3']);

      if (error) throw error;
      
      if (data) {
        const contentMap: Record<string, string> = {};
        data.forEach(item => {
          contentMap[item.key] = item.content;
        });
        
        if (contentMap.about_intro_text) setAboutText(contentMap.about_intro_text);
        
        setBioContent({
          initials: contentMap.about_bio_initials || bioContent.initials,
          subtitle: contentMap.about_bio_subtitle || bioContent.subtitle,
          para1: contentMap.about_bio_para1 || bioContent.para1,
          para2: contentMap.about_bio_para2 || bioContent.para2,
          para3: contentMap.about_bio_para3 || bioContent.para3
        });
      }
    } catch (error) {
      console.error("Error fetching about content:", error);
    }
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
              {aboutText || "We are passionate about turning data into clear, insightful business case studies. Our research team carefully analyzes available data to present stories of real business challenges, strategies, and successes. We aim to empower professionals and entrepreneurs with reliable insights to inspire smarter decisions."}
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
                {bioContent.initials}
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl mb-8 tracking-wide font-light">
                {bioContent.subtitle}
              </h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>{bioContent.para1}</p>
                <p>{bioContent.para2}</p>
                <p>{bioContent.para3}</p>
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
