import { ChangeEvent, ReactEventHandler } from "react";
import searchIcon from "../ assets/icons/search.svg";

interface Props {
  search: string;
  setSearch: (q: string) => void;
}

export default function Header({ search, setSearch }: Props) {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    return setSearch(e.target.value);
  };

  return (
    <header className="bg-black py-6 px-4">
      <h1 className="text-lime-500 text-3xl mb-4 text-center font-bold uppercase">
        Kölle Zoo
      </h1>
      <div>
        <form>
          <div className="relative text-gray-600 focus-within:text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-outline"
              >
                <img src={searchIcon} />
              </button>
            </span>
            <input
              type="search"
              name="q"
              className="py-3 pr-3 text-sm bg-white rounded-md pl-10 block w-full"
              placeholder="Alles zum Tier in unserem Blog"
              autoComplete="off"
              value={search}
              onChange={handleSearch}
            />
          </div>
        </form>
      </div>
    </header>
  );
}
