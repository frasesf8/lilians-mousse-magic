import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Heart className="h-6 w-6 text-strawberry animate-float" />
              <span className="text-strawberry font-medium">Sobre a Chef</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Conhece a 
              <span className="block bg-gradient-mousse bg-clip-text text-transparent">
                Lilian
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Apaixonada pela arte culinária desde criança, Lilian descobriu no mundo dos mousses 
              a perfeita combinação entre técnica e criatividade. Cada receita é uma expressão 
              de amor e dedicação à gastronomia.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Com anos de experiência e um toque especial, ela transforma ingredientes simples 
              em verdadeiras obras de arte comestíveis que encantam paladares e criam memórias inesquecíveis.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-strawberry/20 hover:shadow-sweet transition-sweet">
                <CardContent className="p-4 text-center">
                  <Award className="h-8 w-8 text-strawberry mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Receitas Criadas</div>
                </CardContent>
              </Card>
              
              <Card className="border-orange/20 hover:shadow-warm transition-sweet">
                <CardContent className="p-4 text-center">
                  <Users className="h-8 w-8 text-orange mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">1000+</div>
                  <div className="text-sm text-muted-foreground">Pessoas Felizes</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-sweet rounded-2xl p-8 text-center shadow-elegant">
              <div className="bg-gradient-mousse rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                <Sparkles className="h-16 w-16 text-primary-foreground animate-bounce-gentle" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Lilian Inventando Arte</h3>
              <p className="text-muted-foreground">
                "Cada mousse conta uma história, cada sabor desperta uma emoção."
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-strawberry rounded-full animate-bounce-gentle"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange rounded-full animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;