import { useState } from "react";
import PlanetCard from "./PlanetCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon, FilterIcon } from "lucide-react";

const planets = [
  {
    id: 1,
    name: "Марс",
    image: "/placeholder.svg",
    type: "Планета земной группы",
    distance: "54.6 млн. км",
    description: "Четвёртая по удалённости от Солнца и седьмая по размеру планета Солнечной системы. Названа в честь древнеримского бога войны Марса.",
    features: ["Красная планета", "Полярные шапки", "Каньоны"]
  },
  {
    id: 2,
    name: "Сатурн",
    image: "/placeholder.svg",
    type: "Газовый гигант",
    distance: "1.2 млрд. км",
    description: "Шестая планета от Солнца и вторая по размерам планета в Солнечной системе. Сатурн известен своими яркими кольцами из льда и пыли.",
    features: ["Кольца", "Множество спутников", "Гексагон"]
  },
  {
    id: 3,
    name: "Венера",
    image: "/placeholder.svg",
    type: "Планета земной группы",
    distance: "41 млн. км",
    description: "Вторая по удалённости от Солнца планета Солнечной системы. Наиболее близкая к Земле, а также самый яркий после Солнца и Луны объект на небе.",
    features: ["Парниковый эффект", "Вулканы", "Плотная атмосфера"]
  },
  {
    id: 4,
    name: "Юпитер",
    image: "/placeholder.svg",
    type: "Газовый гигант",
    distance: "588 млн. км",
    description: "Крупнейшая планета Солнечной системы, пятая по удалённости от Солнца. Юпитер имеет массу в 318 раз больше земной.",
    features: ["Большое красное пятно", "Магнитное поле", "Радиационные пояса"]
  },
  {
    id: 5,
    name: "Нептун",
    image: "/placeholder.svg",
    type: "Ледяной гигант",
    distance: "4.3 млрд. км",
    description: "Восьмая и самая дальняя планета Солнечной системы. Нептун — четвёртая по диаметру и третья по массе планета.",
    features: ["Голубая планета", "Сильные ветры", "Тёмные пятна"]
  },
  {
    id: 6,
    name: "Европа",
    image: "/placeholder.svg",
    type: "Спутник Юпитера",
    distance: "628 млн. км",
    description: "Шестой спутник Юпитера, наименьший из четырёх галилеевых спутников. Предполагается, что под ледяной поверхностью находится океан жидкой воды.",
    features: ["Ледяная поверхность", "Подповерхностный океан", "Геологическая активность"]
  }
];

const PlanetGallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredPlanets = planets.filter(
    planet => planet.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
              planet.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-space-100">Исследуйте космические объекты</h2>
        <div className="max-w-lg mx-auto flex gap-2">
          <div className="relative flex-grow">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              className="pl-10 bg-black/30 border-space-700"
              placeholder="Поиск по названию или типу..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" className="border-space-700 text-space-200">
            <FilterIcon className="h-4 w-4 mr-2" />
            Фильтры
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlanets.length > 0 ? (
          filteredPlanets.map((planet) => (
            <PlanetCard 
              key={planet.id}
              name={planet.name}
              image={planet.image}
              type={planet.type}
              distance={planet.distance}
              description={planet.description}
              features={planet.features}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-xl text-gray-400">Космические объекты не найдены</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanetGallery;