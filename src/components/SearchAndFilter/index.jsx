import { SearchIcon } from '../../assets/icons/SearchIcon';

export const SearchAndFilter = () => {
  return (
    <section className=" items-center border border-gray-100 bg-gray-100 rounded-md md:flex hidden">
      <div className="pr-2">
        <select className="p-2 bg-transparent border-none outline-none text-gray-light text-sm">
          <option value="">All Categories</option>
          <option value="">Melon</option>
          <option value="">Ogbolo</option>
        </select>
      </div>
      <div className="h-4 w-[2px] bg-gray-300"></div>
      <input
        type="text"
        placeholder="Search for recipes..."
        className=" bg-transparent p-2 border-none outline-none text-sm text-[#ADADAD] "
      />
      <button className="bg-primary p-2 h-full">
        <SearchIcon
          heigh="24"
          width="24"
        />
      </button>
    </section>
  );
};
