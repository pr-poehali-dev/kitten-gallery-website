import SpaceHeader from "@/components/SpaceHeader";
import PlanetGallery from "@/components/PlanetGallery";
import SpaceFacts from "@/components/SpaceFacts";
import AstronautSection from "@/components/AstronautSection";
import SpaceFooter from "@/components/SpaceFooter";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SpaceHeader />
      
      <main className="container mx-auto px-4">
        <PlanetGallery />
        
        <Separator className="my-16 bg-space-800/50" />
        
        <SpaceFacts />
        
        <AstronautSection />
      </main>
      
      <SpaceFooter />
    </div>
  );
};

export default Index;