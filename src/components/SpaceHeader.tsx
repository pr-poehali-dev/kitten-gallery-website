import { Button } from "@/components/ui/button";
import { RocketIcon, ChevronDownIcon } from "lucide-react";

const SpaceHeader = () => {
  return (
    <header className="relative isolate overflow-hidden pt-10 md:pt-20">
      {/* Звезды на фоне (генерируются случайно) */}
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 50 }).map((_, index) => (
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
        
        {/* Туманности */}
        <div 
          className="nebula"
          style={{
            top: '15%',
            left: '10%',
            width: '500px',
            height: '500px',
          }}
        ></div>
        <div 
          className="nebula"
          style={{
            bottom: '10%',
            right: '5%',
            width: '400px',
            height: '400px',
          }}
        ></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-gradient-to-r from-blue-400 via-space-400 to-indigo-400 inline-block text-transparent bg-clip-text">
          КОСМОС
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
          Бескрайние просторы, удивительные миры и невероятные открытия. 
          Исследуйте тайны вселенной вместе с нами.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button className="px-8 py-6 text-base rounded-full">
            <RocketIcon className="mr-2" />
            Начать путешествие
          </Button>
          <Button variant="outline" className="px-8 py-6 text-base rounded-full">
            Узнать больше
          </Button>
        </div>
        
        <div className="mt-20 animate-bounce">
          <ChevronDownIcon className="mx-auto h-8 w-8 text-space-400" />
        </div>
      </div>
    </header>
  );
};

export default SpaceHeader;