import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const caseStudiesData = [
  {
    id: 1,
    title: "Allianz drives end-to-end transformation for profitable growth and customer delight",
    summary: "In a competitive and commoditized supranational insurance provider didn't just want to regain market share. The goal was to reset the bar completely.",
    date: "August 29, 2025",
    industry: "Insurance",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
  },
  {
    id: 2,
    title: "Clinical Trials Access Collaborative: Expanding clinical trial participation for all",
    summary: "With the support of McKinsey, the organization launched an expansion of clinical trial capacity at research sites across the United States, enabling more than 20 new trials and reaching over 4,600 participants to date.",
    date: "August 21, 2025",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
  },
  {
    id: 3,
    title: "How Apple is helping unearth a path toward increasing the global use of circular materials",
    summary: "As the need for recycled materials continues to grow, Apple worked with McKinsey to understand how expanding circular value chains could help meet the demand.",
    date: "July 23, 2025",
    industry: "Technology",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80"
  },
  {
    id: 4,
    title: "Emirates Global Aluminium: Leading the industry with AI-driven transformation",
    summary: "How a top aluminum producer tapped the power of AI to transform the organization and scale impact across operations.",
    date: "May 2, 2025",
    industry: "Manufacturing",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80"
  },
  {
    id: 5,
    title: "How Türkiye is transforming into a digital and sustainable manufacturing hub",
    summary: "Turkish Employers' Association of Metal Industries partnered with McKinsey to establish MEXT, a tech center that equips manufacturers with digital capabilities.",
    date: "April 28, 2025",
    industry: "Manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
  },
  {
    id: 6,
    title: "Empowering telecom employees with personalized AI-powered training and coaching tools",
    summary: "Deutsche Telekom worked with McKinsey experts and QuantumBlack, AI by McKinsey, to build and launch a capability building engine.",
    date: "April 21, 2025",
    industry: "Telecommunications",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
  },
  {
    id: 7,
    title: "Accelerating decarbonization across the farming supply chain",
    summary: "Agriculture equipment manufacturer AGCO worked with McKinsey to automate decarbonization cost curve building and planning efforts.",
    date: "February 4, 2025",
    industry: "Agriculture",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80"
  },
  {
    id: 8,
    title: "Aviva: Rewiring the insurance claims journey with AI",
    summary: "By instilling a digital-first culture augmented by AI, Aviva is settling claims faster, more accurately, and with better outcomes.",
    date: "December 10, 2024",
    industry: "Insurance",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
  },
  {
    id: 9,
    title: "Adding a powerful new tool to the field medicine toolkit: AI",
    summary: "Accenture partnered with McKinsey and Salesforce to give service agents the capabilities and technology to work smarter and faster.",
    date: "November 13, 2024",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80"
  },
  {
    id: 10,
    title: "How a UAE bank transformed to lead with AI and advanced analytics",
    summary: "Emirates NBD worked with McKinsey to identify growth opportunities and expand its AI capabilities, becoming an AI and advanced analytics-driven organization.",
    date: "October 21, 2024",
    industry: "Financial Services",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
  },
  {
    id: 11,
    title: "Keeping companies safer by matching them with the right cybersecurity providers",
    summary: "Beach worked with McKinsey to develop and launch CyberCompass, a cybersecurity purchasing marketplace.",
    date: "September 28, 2024",
    industry: "Technology",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
  }
];

const CaseStudies = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.15);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 tracking-tight">
              Case Studies
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Our clients around the world are achieving enduring change in their capabilities and performance. 
              Leading with technology, we partner with them to see new potential for growth, innovate to net zero, and 
              build capabilities across their entire organization, creating impact that goes beyond financial and 
              operational performance improvements. Here's what that looks like.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section 
          ref={elementRef as React.RefObject<HTMLElement>}
          className={`container mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {caseStudiesData.map((study) => (
              <Card 
                key={study.id}
                className="group cursor-pointer border border-border hover:border-foreground transition-all duration-300 overflow-hidden hover:shadow-lg"
              >
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-3">
                      {study.summary}
                    </p>
                    <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                      <span>{study.date}</span>
                      <span className="font-medium">{study.industry}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
