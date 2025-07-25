import { Button } from "@/components/ui/button";
import { ChefHat, Heart, BookOpen } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-mousse p-2 rounded-full animate-bounce-gentle">
              <ChefHat className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-mousse bg-clip-text text-transparent">
                Lilian Inventando Arte
              </h1>
              <p className="text-sm text-muted-foreground">Mousses Deliciosos</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="#receitas" 
              className="text-foreground hover:text-strawberry transition-sweet flex items-center gap-2"
            >
              <BookOpen className="h-4 w-4" />
              Receitas
            </a>
            <a 
              href="#sobre" 
              className="text-foreground hover:text-strawberry transition-sweet flex items-center gap-2"
            >
              <Heart className="h-4 w-4" />
              Sobre a Lilian
            </a>
          </nav>

          {/* CTA Button */}
          <Button variant="mousse" className="hidden sm:flex">
            Ver Receitas
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;