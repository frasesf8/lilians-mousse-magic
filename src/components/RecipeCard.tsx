import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Heart } from "lucide-react";

interface RecipeCardProps {
  title: string;
  description: string;
  image: string;
  prepTime: string;
  servings: string;
  difficulty: "Fácil" | "Médio" | "Difícil";
  flavor: "chocolate" | "strawberry" | "vanilla" | "orange";
}

const RecipeCard = ({ 
  title, 
  description, 
  image, 
  prepTime, 
  servings, 
  difficulty, 
  flavor 
}: RecipeCardProps) => {
  const flavorColors = {
    chocolate: "bg-chocolate text-primary-foreground",
    strawberry: "bg-strawberry text-primary-foreground", 
    vanilla: "bg-vanilla text-foreground",
    orange: "bg-orange text-primary-foreground"
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
            {flavor === "chocolate" && "Chocolate"}
            {flavor === "strawberry" && "Morango"}
            {flavor === "vanilla" && "Baunilha"}
            {flavor === "orange" && "Laranja"}
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
        
        <Button variant="mousse" className="w-full group">
          Ver Receita Completa
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;