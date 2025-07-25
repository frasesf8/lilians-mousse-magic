import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RecipeSection from "@/components/RecipeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <RecipeSection />
      <Footer />
    </div>
  );
};

export default Index;
