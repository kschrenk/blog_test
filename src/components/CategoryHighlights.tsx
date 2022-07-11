import { Swiper, SwiperSlide } from "swiper/react";
import { Category } from "../App";
import CategoryHighlight from "./CategoryHighlight";
import Button from "./layout/Button";

type CategoryHighlightsProps = {
  category: Category;
};

function CategoryHighlights({ category }: CategoryHighlightsProps) {
  return (
    <>
      <div className="px-4 pb-6">
        <div className="flex justify-between">
          <h3 className="uppercase text-2xl tracking-tight">{`${category.label} Highlights`}</h3>
          <Button onClick={() => console.log("Alle Highlights ansehen")}>
            Alle&nbsp;ansehen
          </Button>
        </div>
      </div>
      {category?.highlights && (
        <div className="pl-4">
          <Swiper spaceBetween={20} slidesPerView={1.2}>
            {category.highlights.map((highlight, index) => (
              <SwiperSlide key={`highlight-${index}`}>
                <CategoryHighlight highlight={highlight} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}

export default CategoryHighlights;
