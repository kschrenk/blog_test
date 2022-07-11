import { Highlight } from "../App";

type CategoryHighlightProps = {
  highlight: Highlight;
};

function CategoryHighlight({ highlight }: CategoryHighlightProps) {
  return (
    <div
      style={{ backgroundImage: `url('${highlight.img}')` }}
      onClick={() => console.log(`Go to highlight: ${highlight.title}`)}
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
  );
}

export default CategoryHighlight;
