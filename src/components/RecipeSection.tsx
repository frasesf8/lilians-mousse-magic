import RecipeDetailCard from "./RecipeDetailCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import mousseAbacaxi from "@/assets/mousse-abacaxi.jpg";
import mousseMaracuja from "@/assets/mousse-maracuja.jpg";
import mousseMorango from "@/assets/mousse-morango.jpg";

// Receitas reais da Lilian
const lilianRecipes = [
  {
    title: "Mousse de Abacaxi",
    description: "Mousse tropical cremoso com polpa de abacaxi, finalizado com ganache de chocolate e coco ralado. Uma explosão de sabores refrescantes.",
    image: mousseAbacaxi,
    prepTime: "45 min",
    servings: "8 porções",
    difficulty: "Fácil" as const,
    flavor: "pineapple" as const,
    ingredients: {
      mousse: [
        "1 polpa de abacaxi (congelada ou natural)",
        "2 caixinhas de creme de leite",
        "1 xícara de leite em pó (a gosto)",
        "1 caixa de leite condensado",
        "1 sachê de suco em pó sabor abacaxi (Tang)"
      ],
      ganache: [
        "1 barra de chocolate branco ou meio amargo (Lacta 90g)",
        "1/2 caixinha de creme de leite"
      ],
      toppings: [
        "Abacaxi picado (a gosto)",
        "1 sachê de coco ralado sem açúcar (use a gosto)"
      ]
    },
    instructions: {
      mousse: [
        "Bata no liquidificador: as 2 caixinhas de creme de leite + a polpa de abacaxi + o leite em pó.",
        "Adicione o leite condensado e o suco em pó. Bata até a mistura ficar bem cremosa.",
        "Reserve na geladeira ou leve ao congelador por 30 minutos para firmar."
      ],
      ganache: [
        "Derreta o chocolate ainda na embalagem com um pequeno furo, em água fervente (sem ligar o fogo).",
        "Misture com 1/2 caixinha de creme de leite até virar uma ganache lisa.",
        "Despeje no fundo do recipiente antes de adicionar o mousse."
      ],
      notes: [
        "Cubra com o mousse já pronto e finalize com abacaxi picado e coco ralado por cima (opcional)."
      ]
    }
  },
  {
    title: "Mousse de Maracujá com Casquinha",
    description: "Mousse cremoso de maracujá com casquinha crocante de chocolate e geleia de maracujá. Uma combinação perfeita de texturas e sabores.",
    image: mousseMaracuja,
    prepTime: "50 min",
    servings: "6 porções", 
    difficulty: "Médio" as const,
    flavor: "passionfruit" as const,
    ingredients: {
      mousse: [
        "1 polpa de maracujá (natural ou congelada)",
        "2 caixinhas de creme de leite",
        "1 xícara de leite em pó (a gosto)",
        "1 cx de leite condensado",
        "1 sachê de suco em pó sabor maracujá (Tang)"
      ],
      ganache: [
        "1 barra de chocolate meio amargo (Lacta 90g)"
      ],
      toppings: [
        "Doce de leite (a gosto)"
      ],
      geleia: [
        "2 polpas de maracujá ou fruta (para a geleia)",
        "1 colher de sopa de açúcar"
      ]
    },
    instructions: {
      mousse: [
        "Bata no liquidificador: 2 cremes de leite + 1 polpa de maracujá + leite em pó.",
        "Adicione o leite condensado e o suco Tang, bata mais.",
        "Despeje num recipiente e leve ao congelador por 30 minutos."
      ],
      ganache: [
        "Derreta a barra de chocolate (ainda na embalagem, com furo pequeno) em água fervente.",
        "Espalhe sobre a mousse para formar uma casquinha.",
        "Aqueça o doce de leite e despeje sobre a casquinha de chocolate endurecida (opcional)."
      ],
      geleia: [
        "Cozinhe 2 polpas com 1 colher de açúcar até engrossar.",
        "Opcional: Bata com creme de leite para uma cobertura mais cremosa.",
        "Finalize cobrindo a sobremesa."
      ]
    }
  },
  {
    title: "Mousse de Morango com Geleia", 
    description: "Mousse de morango com casquinha de chocolate e geleia caseira de morango. O clássico que nunca sai de moda, feito com muito carinho.",
    image: mousseMorango,
    prepTime: "60 min",
    servings: "8 porções",
    difficulty: "Médio" as const,
    flavor: "strawberry" as const,
    ingredients: {
      mousse: [
        "1 polpa grande de morango",
        "3 caixinhas de creme de leite", 
        "1 xícara de leite em pó (a gosto)",
        "1 caixa de leite condensado",
        "1 sachê de suco em pó sabor morango (Tang ou Trink), Trink é muito ruim."
      ],
      ganache: [
        "1 barra de chocolate (Lacta 90g), o Hershey's é bem ruim de derreter."
      ],
      geleia: [
        "Meio pacote de morango congelado ou fresco (a gosto)",
        "Metade de um limão para conservar (a gosto)"
      ]
    },
    instructions: {
      ganache: [
        "Derreta a barra de chocolate ainda na embalagem com um furo pequeno, em água fervente (sem ligar o fogo).",
        "Corte a embalagem e despeje no fundo do recipiente onde montará a sobremesa.",
        "Leve à geladeira ou congelador por alguns minutos até endurecer."
      ],
      mousse: [
        "Bata no liquidificador: Polpa do morango + 3 caixinhas de creme de leite + leite em pó.",
        "Adicione o leite condensado e o suco em pó de morango. Bata até obter um creme.",
        "Despeje sobre a casquinha já firme e leve ao congelador por 30 minutos."
      ],
      geleia: [
        "Em uma panela antiaderente, cozinhe os morangos inteiros + suco do limão.",
        "Mexa em fogo baixo até engrossar e formar uma geleia (5–10 minutos).",
        "Deixe esfriar antes de despejar sobre o mousse."
      ],
      notes: [
        "Use leite condensado Italac para garantir consistência e evitar que fique aguado."
      ]
    }
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
              {lilianRecipes.map((recipe, index) => (
                <RecipeDetailCard key={index} {...recipe} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="chocolate">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center py-20 col-span-full">
                <p className="text-muted-foreground text-lg">
                  Receitas com chocolate em breve! 🍫
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="frutas">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lilianRecipes
                .filter(recipe => recipe.flavor === "strawberry" || recipe.flavor === "pineapple" || recipe.flavor === "passionfruit")
                .map((recipe, index) => (
                  <RecipeDetailCard key={index} {...recipe} />
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