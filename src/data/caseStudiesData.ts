export interface CaseStudy {
  id: number;
  title: string;
  summary: string;
  date: string;
  industry: string;
  image: string;
  challenge?: string;
  solution?: string;
  results?: string;
  metrics?: Array<{
    value: string;
    label: string;
  }>;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  additionalImages?: string[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    title: "Allianz drives end-to-end transformation for profitable growth and customer delight",
    summary: "In a competitive and commoditized supranational insurance provider didn't just want to regain market share. The goal was to reset the bar completely.",
    date: "August 29, 2025",
    industry: "Insurance",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    challenge: "Allianz faced increasing competition in a commoditized market where traditional insurance products were becoming undifferentiated. Customer expectations were rising rapidly, demanding seamless digital experiences and personalized services. The organization needed to transform its entire value chain while maintaining operational excellence and managing regulatory compliance across multiple markets.",
    solution: "We partnered with Allianz to implement a comprehensive digital transformation strategy. This included redesigning customer touchpoints with AI-powered personalization, automating claims processing with machine learning models, and building a modern microservices architecture. We also established an agile operating model and upskilled over 500 employees in digital capabilities.",
    results: "The transformation delivered significant business impact across all key metrics. Customer satisfaction scores improved dramatically, operational costs decreased substantially, and the company regained market leadership position.",
    metrics: [
      { value: "45%", label: "Increase in customer satisfaction" },
      { value: "30%", label: "Reduction in claims processing time" },
      { value: "€120M", label: "Annual cost savings" }
    ],
    testimonial: {
      quote: "This transformation has fundamentally changed how we operate and serve our customers. The results have exceeded our expectations, and we're now setting the standard for the industry.",
      author: "Dr. Klaus Werner",
      position: "Chief Digital Officer, Allianz"
    },
    additionalImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    ]
  },
  {
    id: 2,
    title: "Clinical Trials Access Collaborative: Expanding clinical trial participation for all",
    summary: "With the support of McKinsey, the organization launched an expansion of clinical trial capacity at research sites across the United States, enabling more than 20 new trials and reaching over 4,600 participants to date.",
    date: "August 21, 2025",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    challenge: "Clinical trial participation was historically limited by geographical barriers, lack of awareness, and complex enrollment processes. Many underserved communities had virtually no access to potentially life-saving clinical research opportunities. The organization needed to democratize access while ensuring scientific rigor and regulatory compliance.",
    solution: "We developed a comprehensive digital platform that connected patients with relevant clinical trials, streamlined the enrollment process, and enabled remote monitoring. The solution included a patient-facing mobile app, a research site management system, and an AI-powered matching algorithm to connect patients with appropriate trials based on their medical profiles.",
    results: "The platform dramatically expanded clinical trial access across underserved populations and accelerated the pace of medical research.",
    metrics: [
      { value: "4,600+", label: "Participants enrolled" },
      { value: "20+", label: "Active clinical trials" },
      { value: "85%", label: "Patient satisfaction rate" }
    ],
    testimonial: {
      quote: "This platform has revolutionized how we conduct clinical research. We're reaching populations that were previously excluded from trials, and the quality of data we're collecting has never been better.",
      author: "Dr. Sarah Martinez",
      position: "Director, Clinical Trials Access Collaborative"
    }
  },
  {
    id: 3,
    title: "How Apple is helping unearth a path toward increasing the global use of circular materials",
    summary: "As the need for recycled materials continues to grow, Apple worked with McKinsey to understand how expanding circular value chains could help meet the demand.",
    date: "July 23, 2025",
    industry: "Technology",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    challenge: "The electronics industry faces growing pressure to reduce environmental impact while meeting increasing demand. Traditional linear supply chains generate massive waste and deplete finite resources. Apple needed to pioneer a circular economy model that could be scaled across the industry while maintaining product quality and cost competitiveness.",
    solution: "We collaborated with Apple to design a comprehensive circular materials strategy. This included developing advanced recycling technologies, creating reverse logistics networks, and establishing partnerships across the value chain. We also built predictive models to optimize material recovery and designed new products specifically for circularity.",
    results: "The initiative established Apple as a leader in circular economy practices and demonstrated the commercial viability of sustainable manufacturing at scale.",
    metrics: [
      { value: "100%", label: "Recycled aluminum in products" },
      { value: "20%", label: "Reduction in carbon footprint" },
      { value: "50M+", label: "Devices recycled annually" }
    ],
    testimonial: {
      quote: "This partnership has helped us reimagine our entire approach to manufacturing. We're proving that sustainability and profitability can go hand in hand.",
      author: "Lisa Jackson",
      position: "VP of Environment, Policy and Social Initiatives, Apple"
    }
  },
  {
    id: 4,
    title: "Emirates Global Aluminium: Leading the industry with AI-driven transformation",
    summary: "How a top aluminum producer tapped the power of AI to transform the organization and scale impact across operations.",
    date: "May 2, 2025",
    industry: "Manufacturing",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
    challenge: "Emirates Global Aluminium needed to optimize complex manufacturing processes while reducing energy consumption and improving product quality. Traditional approaches to process optimization were reaching their limits, and the company needed to leverage advanced analytics and AI to maintain competitive advantage in a challenging market.",
    solution: "We implemented an end-to-end AI transformation program covering production optimization, predictive maintenance, energy management, and quality control. The solution included deploying hundreds of sensors, building advanced machine learning models, and creating a centralized data platform. We also established an AI Center of Excellence to build internal capabilities.",
    results: "The AI transformation delivered substantial operational improvements and positioned the company as an industry leader in smart manufacturing.",
    metrics: [
      { value: "15%", label: "Improvement in energy efficiency" },
      { value: "$80M", label: "Annual operational savings" },
      { value: "25%", label: "Reduction in unplanned downtime" }
    ],
    testimonial: {
      quote: "AI has transformed how we operate. We're now able to optimize processes in real-time and predict issues before they occur, giving us a significant competitive advantage.",
      author: "Abdulla Kalban",
      position: "Managing Director & CEO, Emirates Global Aluminium"
    }
  },
  {
    id: 5,
    title: "How Türkiye is transforming into a digital and sustainable manufacturing hub",
    summary: "Turkish Employers' Association of Metal Industries partnered with McKinsey to establish MEXT, a tech center that equips manufacturers with digital capabilities.",
    date: "April 28, 2025",
    industry: "Manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    challenge: "Turkish manufacturers needed to modernize operations to compete globally, but many small and medium enterprises lacked the resources and expertise to adopt advanced technologies. The industry association needed to create a collaborative platform that could accelerate digital adoption across the entire manufacturing sector.",
    solution: "We helped establish MEXT, a state-of-the-art technology center providing manufacturers with access to Industry 4.0 technologies, training programs, and innovation support. The center includes demonstration facilities for robotics, IoT, additive manufacturing, and AI applications, along with a comprehensive capability building program.",
    results: "MEXT has become a catalyst for manufacturing transformation across Türkiye, enabling hundreds of companies to modernize their operations.",
    metrics: [
      { value: "200+", label: "Manufacturers trained" },
      { value: "40%", label: "Average productivity gain" },
      { value: "€500M", label: "Investment attracted to sector" }
    ],
    testimonial: {
      quote: "MEXT has democratized access to advanced manufacturing technologies. We're seeing remarkable transformations across our membership, from small workshops to large factories.",
      author: "Özgür Burak Akkol",
      position: "CEO, Turkish Metal Employers Association"
    }
  },
  {
    id: 6,
    title: "Empowering telecom employees with personalized AI-powered training and coaching tools",
    summary: "Deutsche Telekom worked with McKinsey experts and QuantumBlack, AI by McKinsey, to build and launch a capability building engine.",
    date: "April 21, 2025",
    industry: "Telecommunications",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
    challenge: "Deutsche Telekom needed to rapidly upskill thousands of employees to handle increasingly complex customer interactions and new digital products. Traditional training programs were too slow, generic, and failed to adapt to individual learning needs. The company required a scalable solution that could personalize learning while measuring real business impact.",
    solution: "We built an AI-powered learning platform that personalizes training content based on individual performance, learning style, and business priorities. The system uses natural language processing to analyze customer interactions, identifies skill gaps, and delivers targeted micro-learning modules. Real-time coaching recommendations help employees improve during actual customer conversations.",
    results: "The platform transformed workforce development at Deutsche Telekom, accelerating skill acquisition and improving customer outcomes.",
    metrics: [
      { value: "60%", label: "Faster skill acquisition" },
      { value: "12%", label: "Increase in customer satisfaction" },
      { value: "10,000+", label: "Employees trained" }
    ],
    testimonial: {
      quote: "This AI-powered platform has revolutionized how we develop our people. Employees love the personalized approach, and we're seeing real business impact.",
      author: "Birgit Bohle",
      position: "Chief HR Officer, Deutsche Telekom"
    }
  },
  {
    id: 7,
    title: "Accelerating decarbonization across the farming supply chain",
    summary: "Agriculture equipment manufacturer AGCO worked with McKinsey to automate decarbonization cost curve building and planning efforts.",
    date: "February 4, 2025",
    industry: "Agriculture",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
    challenge: "AGCO faced pressure to reduce carbon emissions across its complex global supply chain while maintaining profitability. The company needed to identify the most cost-effective decarbonization initiatives among thousands of options across manufacturing, logistics, and product operations. Manual analysis was too slow and couldn't account for the dynamic nature of costs, technologies, and regulations.",
    solution: "We developed an automated platform that continuously generates and updates marginal abatement cost curves for AGCO's entire value chain. The system integrates data from multiple sources, models various decarbonization scenarios, and prioritizes initiatives based on cost-effectiveness and feasibility. Advanced analytics help identify synergies and optimize investment timing.",
    results: "The platform enabled AGCO to develop a clear, data-driven decarbonization roadmap and accelerate progress toward net-zero goals.",
    metrics: [
      { value: "35%", label: "Emissions reduction target by 2030" },
      { value: "€200M", label: "Decarbonization investment optimized" },
      { value: "50%", label: "Faster planning cycle" }
    ],
    testimonial: {
      quote: "This platform has given us clarity on our path to net zero. We can now make confident investment decisions and track progress in real-time.",
      author: "Eric Hansotia",
      position: "Chairman, President & CEO, AGCO"
    }
  },
  {
    id: 8,
    title: "Aviva: Rewiring the insurance claims journey with AI",
    summary: "By instilling a digital-first culture augmented by AI, Aviva is settling claims faster, more accurately, and with better outcomes.",
    date: "December 10, 2024",
    industry: "Insurance",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    challenge: "Aviva's claims process was slow, paper-intensive, and frustrating for customers. Complex cases required multiple handoffs between specialists, leading to delays and inconsistent outcomes. The company needed to transform the entire claims journey while managing risk and maintaining regulatory compliance.",
    solution: "We reimagined the claims process using AI and automation. Computer vision automatically assesses damage from photos, NLP extracts key information from documents, and machine learning models flag potential fraud. A unified digital platform gives adjusters real-time insights and recommended actions. We also redesigned the organizational model to support the new digital workflows.",
    results: "The AI-powered claims transformation dramatically improved speed, accuracy, and customer satisfaction while reducing costs.",
    metrics: [
      { value: "40%", label: "Faster claims settlement" },
      { value: "25%", label: "Reduction in claims costs" },
      { value: "90%", label: "Customer satisfaction rate" }
    ],
    testimonial: {
      quote: "AI has transformed our claims operation. We're now able to provide customers with faster, fairer outcomes while reducing costs and fighting fraud more effectively.",
      author: "Danny Harmer",
      position: "Chief Claims Officer, Aviva"
    }
  },
  {
    id: 9,
    title: "Adding a powerful new tool to the field medicine toolkit: AI",
    summary: "Accenture partnered with McKinsey and Salesforce to give service agents the capabilities and technology to work smarter and faster.",
    date: "November 13, 2024",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    challenge: "Field service engineers supporting medical equipment faced mounting pressure to resolve issues faster as hospitals became increasingly dependent on continuous equipment availability. Complex medical devices required deep technical knowledge, and engineers often needed to consult multiple information sources while on-site, leading to extended downtime and poor customer experiences.",
    solution: "We built an AI-powered field service platform that provides engineers with intelligent troubleshooting guidance, real-time access to technical documentation, and predictive insights about potential issues. Computer vision helps identify equipment models and error codes, while NLP enables natural language queries against the knowledge base. The system learns from each interaction to improve recommendations.",
    results: "The AI assistant transformed field service operations, dramatically improving first-time fix rates and customer satisfaction.",
    metrics: [
      { value: "50%", label: "Reduction in mean time to repair" },
      { value: "35%", label: "Improvement in first-time fix rate" },
      { value: "95%", label: "Engineer satisfaction with AI tools" }
    ],
    testimonial: {
      quote: "This AI assistant has become indispensable for our field engineers. It's like having an expert technician with them on every call.",
      author: "Michael Chen",
      position: "VP of Field Services, Medical Equipment Division"
    }
  },
  {
    id: 10,
    title: "How a UAE bank transformed to lead with AI and advanced analytics",
    summary: "Emirates NBD worked with McKinsey to identify growth opportunities and expand its AI capabilities, becoming an AI and advanced analytics-driven organization.",
    date: "October 21, 2024",
    industry: "Financial Services",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    challenge: "Emirates NBD faced intense competition from both traditional banks and fintech disruptors. Customer expectations for personalized, instant banking services were rising rapidly. The bank needed to leverage AI and analytics across all customer touchpoints and operations while navigating strict regulatory requirements and building internal capabilities.",
    solution: "We partnered with Emirates NBD to build an AI-first banking platform. This included implementing advanced analytics for personalized product recommendations, AI-powered chatbots for customer service, machine learning models for credit risk assessment, and real-time fraud detection systems. We also established an AI Academy to develop data science talent internally.",
    results: "The AI transformation positioned Emirates NBD as the most innovative bank in the region and delivered strong business results.",
    metrics: [
      { value: "40%", label: "Increase in digital engagement" },
      { value: "30%", label: "Improvement in cross-sell ratio" },
      { value: "60%", label: "Reduction in fraud losses" }
    ],
    testimonial: {
      quote: "AI has become central to how we serve customers and run the bank. We're now setting the standard for digital banking in the region.",
      author: "Abdulla Qassem",
      position: "Group COO, Emirates NBD"
    }
  },
  {
    id: 11,
    title: "Keeping companies safer by matching them with the right cybersecurity providers",
    summary: "Beach worked with McKinsey to develop and launch CyberCompass, a cybersecurity purchasing marketplace.",
    date: "September 28, 2024",
    industry: "Technology",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    challenge: "Small and medium businesses struggled to navigate the complex cybersecurity landscape, often selecting inadequate solutions or overpaying for unnecessary features. The fragmented market made it difficult to compare providers and assess which solutions matched specific business needs. Many companies remained vulnerable due to lack of expertise in evaluating cybersecurity options.",
    solution: "We designed and built CyberCompass, an intelligent marketplace that matches businesses with appropriate cybersecurity providers. The platform uses a proprietary assessment tool to understand each company's risk profile, then recommends solutions from vetted providers. Advanced matching algorithms consider industry, company size, budget, and specific security needs. The platform also provides ongoing monitoring and optimization recommendations.",
    results: "CyberCompass has made enterprise-grade cybersecurity accessible to thousands of small and medium businesses.",
    metrics: [
      { value: "5,000+", label: "Businesses protected" },
      { value: "40%", label: "Average cost savings vs DIY" },
      { value: "95%", label: "Customer satisfaction rate" }
    ],
    testimonial: {
      quote: "CyberCompass has democratized access to world-class cybersecurity. Small businesses can now protect themselves as effectively as large enterprises.",
      author: "David Cancel",
      position: "CEO, Beach"
    }
  }
];
