import { Button } from "@/components/ui/button";

const SpaceFooter = () => {
  return (
    <footer className="bg-black/60 backdrop-blur-md pt-16 pb-10 border-t border-space-800/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-space-300 mb-4">КОСМОС</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Веб-портал о Вселенной, астрономии и космических исследованиях. 
              Исследуйте бескрайние просторы космоса вместе с нами.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="rounded-full text-gray-400 hover:text-white">
                🌍
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full text-gray-400 hover:text-white">
                🚀
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full text-gray-400 hover:text-white">
                ⭐
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full text-gray-400 hover:text-white">
                🌠
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-space-300 mb-4">Исследования</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-space-300 transition-colors">Планеты</a></li>
              <li><a href="#" className="text-gray-400 hover:text-space-300 transition-colors">Галактики</a></li>
              <li><a href="#" className="text-gray-400 hover:text-space-300 transition-colors">Чёрные дыры</a></li>
              <li><a href="#" className="text-gray-400 hover:text-space-300 transition-colors">Звёзды</a></li>
              <li><a href="#" className="text-gray-400 hover:text-space-300 transition-colors">Экзопланеты</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-space-300 mb-4">Ресурсы</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-space-300 transition-colors">Блог</a></li>
              <li><a href="#" className="text-gray-400 hover:text-space-300 transition-colors">Новости</a></li>
              <li><a href="#" className="text-gray-400 hover:text-space-300 transition-colors">Астрофотографии</a></li>
              <li><a href="#" className="text-gray-400 hover:text-space-300 transition-colors">Космические миссии</a></li>
              <li><a href="#" className="text-gray-400 hover:text-space-300 transition-colors">Контакты</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-space-800/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2023 КОСМОС. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-space-300 text-sm">Условия использования</a>
            <a href="#" className="text-gray-500 hover:text-space-300 text-sm">Политика конфиденциальности</a>
            <a href="#" className="text-gray-500 hover:text-space-300 text-sm">Карта сайта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SpaceFooter;