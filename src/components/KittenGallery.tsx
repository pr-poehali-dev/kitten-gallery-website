import KittenCard from "./KittenCard";

const kittens = [
  {
    id: 1,
    name: "Мурзик",
    image: "/placeholder.svg",
    description: "Игривый рыжий котенок с веселым характером. Любит играть с мячиками и гоняться за лазерной указкой."
  },
  {
    id: 2,
    name: "Пушинка",
    image: "/placeholder.svg",
    description: "Пушистая белая красавица с голубыми глазами. Очень ласковая и любит сидеть на коленях."
  },
  {
    id: 3,
    name: "Барсик",
    image: "/placeholder.svg",
    description: "Полосатый котенок с любопытным характером. Исследует каждый уголок дома и обожает лазить по высоким местам."
  },
  {
    id: 4,
    name: "Соня",
    image: "/placeholder.svg",
    description: "Серая малышка, которая большую часть дня спит в уютных местах. Любит теплые места и мурлыкать."
  },
  {
    id: 5,
    name: "Тимоша",
    image: "/placeholder.svg",
    description: "Черно-белый котенок с зелеными глазами. Очень умный и быстро учится новым трюкам."
  },
  {
    id: 6,
    name: "Василиса",
    image: "/placeholder.svg",
    description: "Трехцветная красавица с независимым характером. Любит наблюдать за происходящим из укромных мест."
  }
];

const KittenGallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {kittens.map((kitten) => (
        <KittenCard 
          key={kitten.id}
          name={kitten.name}
          image={kitten.image}
          description={kitten.description}
        />
      ))}
    </div>
  );
};

export default KittenGallery;