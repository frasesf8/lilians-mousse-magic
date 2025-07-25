import RecipeCard from "./RecipeCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Receitas de exemplo (serão substituídas pelas receitas reais da Lilian)
const sampleRecipes = [
  {
    title: "Mousse de Chocolate Clássico",
    description: "Um mousse cremoso e aveludado com chocolate meio amargo que derrete na boca.",
    image: "/placeholder.svg",
    prepTime: "30 min",
    servings: "6 porções",
    difficulty: "Fácil" as const,
    flavor: "chocolate" as const
  },
  {
    title: "Mousse de Morango Fresco",
    description: "Delicioso mousse com morangos frescos e um toque de baunilha.",
    image: "/placeholder.svg", 
    prepTime: "45 min",
    servings: "4 porções",
    difficulty: "Médio" as const,
    flavor: "strawberry" as const
  },
  {
    title: "Mousse de Baunilha Especial",
    description: "Mousse suave com essência de baunilha e um toque gourmet.",
    image: "/placeholder.svg",
    prepTime: "25 min", 
    servings: "8 porções",
    difficulty: "Fácil" as const,
    flavor: "vanilla" as const
  }
];

const RecipeSection = () => {
  return (
    <section id="receitas" className="py-20 bg-gradient-sweet">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-mousse bg-clip-text text-transparent">
              Receitas Especiais
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada receita é cuidadosamente criada pela Lilian, com ingredientes selecionados 
            e técnicas especiais para garantir o sabor perfeito.
          </p>
        </div>

        <Tabs defaultValue="todos" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="chocolate">Chocolate</TabsTrigger>
            <TabsTrigger value="frutas">Frutas</TabsTrigger>
            <TabsTrigger value="especiais">Especiais</TabsTrigger>
          </TabsList>

          <TabsContent value="todos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sampleRecipes.map((recipe, index) => (
                <RecipeCard key={index} {...recipe} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="chocolate">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sampleRecipes
                .filter(recipe => recipe.flavor === "chocolate")
                .map((recipe, index) => (
                  <RecipeCard key={index} {...recipe} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="frutas">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sampleRecipes
                .filter(recipe => recipe.flavor === "strawberry")
                .map((recipe, index) => (
                  <RecipeCard key={index} {...recipe} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="especiais">
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                Receitas especiais em breve! 🎂
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button variant="chocolate" size="lg">
            Ver Todas as Receitas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecipeSection;