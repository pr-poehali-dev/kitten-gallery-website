import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";

interface PlanetCardProps {
  name: string;
  image: string;
  type: string;
  distance: string;
  description: string;
  features: string[];
}

const PlanetCard = ({ 
  name, 
  image, 
  type, 
  distance, 
  description,
  features
}: PlanetCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col bg-black/40 backdrop-blur-sm border-space-800/50 transition-transform duration-300 hover:scale-[1.02]">
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl text-space-200">{name}</CardTitle>
          <Badge variant="outline" className="bg-space-900/50 text-space-200">
            {type}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-0 flex-grow">
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
          <div className="absolute bottom-2 right-2">
            <Badge variant="secondary" className="bg-black/60 backdrop-blur-sm text-white">
              {distance} от Земли
            </Badge>
          </div>
        </div>
        
        <div className="p-4">
          <p className="text-sm text-gray-300 mb-3">{description}</p>
          
          <div className="flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <Badge key={index} variant="secondary" className="bg-space-800/40">
                {feature}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button variant="outline" className="w-full border-space-700 text-space-200 hover:bg-space-900">
          <InfoIcon className="h-4 w-4 mr-2" />
          Подробнее
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlanetCard;