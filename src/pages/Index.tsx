import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import AboutIntro from "@/components/AboutIntro";
import ProcessSteps from "@/components/ProcessSteps";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedWork />
        <AboutIntro />
        <ProcessSteps />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
