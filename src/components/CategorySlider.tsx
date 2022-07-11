import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CategorySlide from "./CategorySlide";

type Props = {
  categories: {
    [key: string]: {
      label: string;
      url: string;
    };
  };
};

function CategorySlider({ categories }: Props) {
  return (
    <div className="pl-4">
      <Swiper spaceBetween={10} slidesPerView={4.5}>
        {Object.keys(categories).map((category, index) => {
          return (
            <SwiperSlide key={`category-${index}`}>
              <CategorySlide value={category} category={categories[category]} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default CategorySlider;
