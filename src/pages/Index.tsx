import KittenGallery from "@/components/KittenGallery";
import KittenPageHeader from "@/components/KittenPageHeader";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <KittenPageHeader />
      
      <div className="container mx-auto px-4">
        <KittenGallery />
        
        <div className="py-10 text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Почему котята так прекрасны?
          </h2>
          <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 space-y-3">
            <p>
              Котята не только милые и пушистые, но и обладают особой магией, которая делает их идеальными домашними питомцами.
            </p>
            <p>
              Их любопытство, игривость и способность дарить тепло и уют никого не оставят равнодушным.
            </p>
            <p>
              Исследования показывают, что общение с котятами помогает снизить уровень стресса и улучшить настроение.
            </p>
          </div>
        </div>
      </div>
      
      <footer className="bg-pink-100 dark:bg-pink-900/30 py-6">
        <div className="container mx-auto text-center text-gray-600 dark:text-gray-300">
          <p>© 2023 Мир Милых Котят. Все права защищены.</p>
          <p className="mt-2 text-sm">С любовью к котятам и их хозяевам ❤️</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;