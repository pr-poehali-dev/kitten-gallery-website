import { Card, CardContent } from "@/components/ui/card";
import { 
  GlobeIcon, 
  MoonIcon, 
  RocketIcon, 
  MoveIcon, 
  AtomIcon,
  ClockIcon 
} from "lucide-react";

const factsData = [
  {
    icon: <MoonIcon className="h-6 w-6 text-space-400" />,
    title: "13.8 млрд. лет",
    description: "Примерный возраст нашей Вселенной, возникшей в результате Большого взрыва."
  },
  {
    icon: <GlobeIcon className="h-6 w-6 text-space-400" />,
    title: "100 млрд. галактик",
    description: "Оценочное количество галактик в наблюдаемой Вселенной."
  },
  {
    icon: <MoveIcon className="h-6 w-6 text-space-400" />,
    title: "299 792 458 м/с",
    description: "Скорость света в вакууме — абсолютная скоростная граница во Вселенной."
  },
  {
    icon: <RocketIcon className="h-6 w-6 text-space-400" />,
    title: "12 апреля 1961 года",
    description: "Юрий Гагарин стал первым человеком, совершившим полёт в космическое пространство."
  },
  {
    icon: <AtomIcon className="h-6 w-6 text-space-400" />,
    title: "70% тёмной энергии",
    description: "Считается, что Вселенная на 70% состоит из тёмной энергии, природа которой до сих пор неизвестна."
  },
  {
    icon: <ClockIcon className="h-6 w-6 text-space-400" />,
    title: "4 минуты 22 секунды",
    description: "Время, за которое свет от Солнца достигает Земли, преодолевая около 150 миллионов километров."
  }
];

const SpaceFacts = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 -z-10">
        {/* Звезды */}
        {Array.from({ length: 30 }).map((_, index) => (
          <div
            key={index}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite ease-in-out`,
            }}
          ></div>
        ))}
      </div>
      
      <h2 className="text-3xl font-bold text-center mb-10 text-space-100">Удивительные факты о космосе</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {factsData.map((fact, index) => (
          <Card key={index} className="bg-black/40 backdrop-blur-sm border-space-800/50 hover:border-space-700/70 transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-space-900/80 mb-4">
                {fact.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-space-200">{fact.title}</h3>
              <p className="text-gray-400">{fact.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SpaceFacts;