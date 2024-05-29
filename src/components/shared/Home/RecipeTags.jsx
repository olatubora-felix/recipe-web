import { Link } from 'react-router-dom';
import { ArrowRight } from '../../../assets/icons/ArrowRight';

export const RecipeTags = () => {
  return (
    <section className="p-3 md:grid xl:grid-cols-5 md:grid-cols-4 grid-cols-4 gap-4 md:overflow-clip overflow-x-auto flex scroll-smooth">
      {recipeTags?.slice(0, 5).map((tag) => (
        <Link
          to={`/explore/${tag.name.toLowerCase()}`}
          className={`${tag.color} text-white flex justify-around items-center rounded-[10px] md:py-4  md:px-2 p-2  cursor-pointer font-medium md:text-base text-sm `}
          key={tag.id}
        >
          <span>{tag.name}</span>
          <ArrowRight />
        </Link>
      ))}
    </section>
  );
};

const recipeTags = [
  {
    name: 'Pizza',
    id: 1,
    color: 'bg-[#F6784C]',
  },
  {
    name: 'Vegetarian',
    id: 2,
    color: 'bg-[#C4D600]',
  },
  {
    name: 'Cookies',
    id: 3,
    color: 'bg-[#EAAA00]',
  },
  {
    name: 'Chicken',
    id: 4,
    color: 'bg-[#ED8B00]',
  },
  {
    name: 'Potatoes',
    id: 5,
    color: 'bg-[#84BD00]',
  },
];
