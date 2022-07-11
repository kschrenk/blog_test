import { useEffect } from "react";
import { Category } from "../App";
import { useCategory } from "../store/category-context";

type CategorySlideProps = {
  value: string;
  category: Category;
};

function CategorySlide({ category, value }: CategorySlideProps) {
  const { setActive } = useCategory();

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        style={{ backgroundImage: `url("${category.url}")` }}
        className={`w-20 h-20 bg-no-repeat bg-center bg-contain rounded-full cursor-pointer`}
        onClick={() => setActive(value)}
      />
      <p className="font-serif">{category.label}</p>
    </div>
  );
}

export default CategorySlide;
