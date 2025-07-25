import { Button } from "@/components/ui/button";
import { ChefHat, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-mousses.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="h-6 w-6 text-strawberry animate-float" />
            <span className="text-strawberry font-medium">Bem-vindos à Arte Doce</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">Mousses</span>
            <span className="block bg-gradient-mousse bg-clip-text text-transparent">
              Irresistíveis
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Descubra o mundo mágico dos mousses com as receitas especiais da Lilian. 
            Cada criação é uma obra de arte que desperta seus sentidos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="mousse" size="lg" className="group">
              <ChefHat className="h-5 w-5 group-hover:animate-bounce-gentle" />
              Explorar Receitas
            </Button>
            <Button variant="outline" size="lg">
              Sobre a Lilian
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="w-32 h-32 bg-gradient-sweet rounded-full opacity-30 animate-float"></div>
      </div>
      <div className="absolute top-20 right-1/4 hidden lg:block">
        <div className="w-16 h-16 bg-strawberry/20 rounded-full animate-bounce-gentle"></div>
      </div>
    </section>
  );
};

export default Hero;