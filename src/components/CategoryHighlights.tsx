import { Swiper, SwiperSlide } from "swiper/react";
import { Category } from "../App";
import Button from "./layout/Button";

type CategoryHighlightsProps = {
  category: Category;
};

export default function CategoryHighlights({
  category,
}: CategoryHighlightsProps) {
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
            {category.highlights.map((highlight) => (
              <SwiperSlide>
                <div
                  style={{ backgroundImage: `url('${highlight.img}')` }}
                  onClick={() =>
                    console.log(`Go to highlight: ${highlight.title}`)
                  }
                  className="h-48 pl-3 pr-8 pb-2 flex flex-col justify-end bg-no-repeat bg-center bg-cover rounded-xl relative cursor-pointer"
                >
                  <div className="relative z-20">
                    <h4 className="text-2xl mb-2 text-white tracking-tight">
                      {highlight.title}
                    </h4>
                    <p className="font-serif text-white">{highlight.teaser}</p>
                  </div>
                  <div className="absolute w-full h-full bottom-0 left-0 z-10 bg-gradient-to-b from-transparent to-black opacity-80 rounded-b-xl"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}
