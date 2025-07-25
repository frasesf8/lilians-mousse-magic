import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Heart, ChefHat } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface RecipeDetailProps {
  title: string;
  description: string;
  image: string;
  prepTime: string;
  servings: string;
  difficulty: "Fácil" | "Médio" | "Difícil";
  flavor: "chocolate" | "strawberry" | "vanilla" | "orange" | "pineapple" | "passionfruit";
  ingredients: {
    mousse: string[];
    ganache?: string[];
    toppings?: string[];
    geleia?: string[];
  };
  instructions: {
    mousse: string[];
    ganache?: string[];
    geleia?: string[];
    notes?: string[];
  };
}

const RecipeDetailCard = ({ 
  title, 
  description, 
  image, 
  prepTime, 
  servings, 
  difficulty, 
  flavor,
  ingredients,
  instructions
}: RecipeDetailProps) => {
  const flavorColors = {
    chocolate: "bg-chocolate text-primary-foreground",
    strawberry: "bg-strawberry text-primary-foreground", 
    vanilla: "bg-vanilla text-foreground",
    orange: "bg-orange text-primary-foreground",
    pineapple: "bg-orange text-primary-foreground",
    passionfruit: "bg-orange text-primary-foreground"
  };

  const flavorNames = {
    chocolate: "Chocolate",
    strawberry: "Morango",
    vanilla: "Baunilha",
    orange: "Laranja",
    pineapple: "Abacaxi",
    passionfruit: "Maracujá"
  };

  return (
    <Card className="group hover:shadow-sweet transition-sweet transform hover:-translate-y-2 overflow-hidden">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-sweet"
        />
        <div className="absolute top-3 left-3">
          <Badge className={flavorColors[flavor]}>
            {flavorNames[flavor]}
          </Badge>
        </div>
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute top-3 right-3 bg-background/80 hover:bg-background"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-strawberry transition-sweet">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {prepTime}
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {servings}
          </div>
          <Badge variant="outline">{difficulty}</Badge>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="mousse" className="w-full group">
              <ChefHat className="h-4 w-4 group-hover:animate-bounce-gentle" />
              Ver Receita Completa
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh]">
            <DialogHeader>
              <DialogTitle className="text-2xl bg-gradient-mousse bg-clip-text text-transparent">
                {title}
              </DialogTitle>
              <DialogDescription>
                {description}
              </DialogDescription>
            </DialogHeader>
            
            <ScrollArea className="h-[70vh] pr-4">
              <div className="space-y-6">
                {/* Imagem */}
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                
                {/* Ingredientes */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-strawberry">📝 Ingredientes</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium mb-2">Para a mousse:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {ingredients.mousse.map((ingredient, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-strawberry">•</span>
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {ingredients.ganache && (
                      <div>
                        <h4 className="font-medium mb-2">Para a casquinha/ganache:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {ingredients.ganache.map((ingredient, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-strawberry">•</span>
                              {ingredient}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {ingredients.geleia && (
                      <div>
                        <h4 className="font-medium mb-2">Para a geleia:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {ingredients.geleia.map((ingredient, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-strawberry">•</span>
                              {ingredient}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {ingredients.toppings && (
                      <div>
                        <h4 className="font-medium mb-2">Coberturas (opcional):</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {ingredients.toppings.map((ingredient, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-strawberry">•</span>
                              {ingredient}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                
                <Separator />
                
                {/* Modo de Preparo */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-strawberry">🍮 Modo de Preparo</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2 text-chocolate">1. Mousse:</h4>
                      <ol className="space-y-2 text-sm text-muted-foreground">
                        {instructions.mousse.map((step, index) => (
                          <li key={index} className="flex gap-3">
                            <span className="bg-strawberry text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                              {index + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    
                    {instructions.ganache && (
                      <div>
                        <h4 className="font-medium mb-2 text-chocolate">2. Casquinha/Ganache:</h4>
                        <ol className="space-y-2 text-sm text-muted-foreground">
                          {instructions.ganache.map((step, index) => (
                            <li key={index} className="flex gap-3">
                              <span className="bg-chocolate text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                                {index + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                    
                    {instructions.geleia && (
                      <div>
                        <h4 className="font-medium mb-2 text-chocolate">3. Geleia:</h4>
                        <ol className="space-y-2 text-sm text-muted-foreground">
                          {instructions.geleia.map((step, index) => (
                            <li key={index} className="flex gap-3">
                              <span className="bg-orange text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                                {index + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                    
                    {instructions.notes && (
                      <div className="bg-cream p-4 rounded-lg border border-orange/20">
                        <h4 className="font-medium mb-2 text-chocolate">💡 Dicas da Lilian:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {instructions.notes.map((note, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-orange">•</span>
                              {note}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default RecipeDetailCard;