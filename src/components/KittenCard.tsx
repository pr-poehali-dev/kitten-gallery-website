import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";
import { useState } from "react";

interface KittenCardProps {
  name: string;
  image: string;
  description: string;
}

const KittenCard = ({ name, image, description }: KittenCardProps) => {
  const [likes, setLikes] = useState(0);

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <CardHeader className="p-4">
        <CardTitle className="text-xl text-center">{name}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex-grow">
        <div className="aspect-square w-full relative">
          <img 
            src={image} 
            alt={`Котенок ${name}`} 
            className="object-cover w-full h-full"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
        </div>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          variant="outline" 
          className="w-full flex items-center gap-2"
          onClick={() => setLikes(likes + 1)}
        >
          <HeartIcon className="h-4 w-4 text-pink-500" />
          <span>Нравится ({likes})</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default KittenCard;