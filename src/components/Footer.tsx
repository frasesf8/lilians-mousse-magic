import { Heart, ChefHat, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-mousse p-2 rounded-full">
                <ChefHat className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Lilian Inventando Arte</h3>
                <p className="text-primary-foreground/80 text-sm">Mousses Deliciosos</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Transformando ingredientes simples em experiências culinárias inesquecíveis. 
              Cada mousse é feito com amor e dedicação.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#receitas" className="text-primary-foreground/80 hover:text-primary-foreground transition-sweet">
                  Receitas
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-primary-foreground/80 hover:text-primary-foreground transition-sweet">
                  Sobre a Lilian
                </a>
              </li>
              <li>
                <a href="#contato" className="text-primary-foreground/80 hover:text-primary-foreground transition-sweet">
                  Contato
                </a>
              </li>
              <li>
                <a href="#dicas" className="text-primary-foreground/80 hover:text-primary-foreground transition-sweet">
                  Dicas e Truques
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-semibold mb-4">Siga a Lilian</h4>
            <div className="flex gap-3 mb-4">
              <Button variant="secondary" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="icon">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-2">
              📧 contato@lilianinventandoarte.com
            </p>
            <p className="text-primary-foreground/80 text-sm">
              📱 (11) 99999-9999
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 flex items-center justify-center gap-2">
            Feito com <Heart className="h-4 w-4 text-strawberry animate-bounce-gentle" /> 
            pela Lilian Inventando Arte © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;