import { Button } from "@/components/ui/button";
import { ChefHat, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-sweet">
      {/* Content */}
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="h-6 w-6 text-strawberry animate-float" />
            <span className="text-strawberry font-medium">Bem-vindos à Arte Doce</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-mousse bg-clip-text text-transparent">
              Lilian Inventando Arte
            </span>
          </h1>
          
          <p className="text-2xl text-muted-foreground mb-8 leading-relaxed">
            Receitas especiais de mousses deliciosos
          </p>
          
          <div className="flex justify-center">
            <Button variant="mousse" size="lg" className="group">
              <ChefHat className="h-5 w-5 group-hover:animate-bounce-gentle" />
              Ver Receitas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;