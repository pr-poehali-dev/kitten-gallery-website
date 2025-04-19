import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const AstronautSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Звездный фон */}
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 40 }).map((_, index) => (
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
      
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Стань космонавтом новой эры
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Космическая отрасль развивается быстрее, чем когда-либо. С развитием частной космонавтики появляются новые возможности для исследователей, инженеров и мечтателей.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Узнайте о программах подготовки космонавтов, требованиях к кандидатам и ближайших наборах в отряд. Возможно, именно вы станете частью следующей миссии на Марс.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="px-6 rounded-full">
                Требования к кандидатам
              </Button>
              <Button variant="outline" className="px-6 rounded-full group">
                Узнать больше 
                <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="w-full aspect-square relative">
              <img 
                src="/placeholder.svg" 
                alt="Космонавт"
                className="rounded-2xl object-cover w-full h-full"
              />
              
              {/* Декоративный элемент */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-space-400 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-space-400 rounded-2xl -z-10"></div>
              
              {/* Светящийся эффект */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-space-500/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AstronautSection;