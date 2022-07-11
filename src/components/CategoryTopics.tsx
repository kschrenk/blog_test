import { Category } from "../App";
import { isOdd } from "../util/functions";
import Button from "./layout/Button";

type CategoryTopicsProps = {
  category: Category;
};

export default function CategoryTopics({ category }: CategoryTopicsProps) {
  return (
    <div className="px-4 pb-16">
      <div className="flex justify-between items-baseline pb-6">
        <h3 className="text-2xl mr-6 tracking-tight">{`${category.label}`}</h3>
        <div className="basis-3/4">
          <img src={category?.topicImg} />
        </div>
        <Button onClick={() => console.log("Alle Topics ansehen")}>
          Alle&nbsp;ansehen
        </Button>
      </div>
      <div className="flex flex-wrap gap-y-6">
        {category?.topics &&
          category.topics.map((topic, index) => (
            <div key={`topic-${index}`} className="basis-1/2">
              <div
                className={`shadow cursor-pointer rounded-xl bg-center bg-contain bg-no-repeat h-28 ${
                  isOdd(index) ? "ml-2" : "mr-2"
                }`}
                style={{ backgroundImage: `url('${topic.img}')` }}
                onClick={() => console.log(`Go to topic: ${topic.title}`)}
              >
                <div className="w-full max-w-[114px] pt-3 pl-2">
                  <h4 className="text-xl break-words leading-5">
                    {topic.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
