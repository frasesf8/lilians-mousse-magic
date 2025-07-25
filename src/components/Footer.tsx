import { Heart, ChefHat } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          {/* Brand */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-gradient-mousse p-2 rounded-full">
              <ChefHat className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Lilian Inventando Arte</h3>
              <p className="text-primary-foreground/80 text-sm">Mousses Deliciosos</p>
            </div>
          </div>
          
          <p className="text-primary-foreground/80 leading-relaxed max-w-md mx-auto mb-8">
            Receitas especiais de mousses feitas com amor e dedicação.
          </p>

          {/* Bottom */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-primary-foreground/80 flex items-center justify-center gap-2">
              Feito com <Heart className="h-4 w-4 text-strawberry animate-bounce-gentle" /> 
              pela Lilian Inventando Arte © 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;