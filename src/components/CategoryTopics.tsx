import { Category } from "../App";
import CategoryTopic from "./CategoryTopic";
import Button from "./layout/Button";

type CategoryTopicsProps = {
  category: Category;
};

function CategoryTopics({ category }: CategoryTopicsProps) {
  return (
    <div className="px-4 pb-16">
      <div className="flex justify-between items-baseline pb-6">
        <h3 className="text-2xl mr-6 tracking-tight">{`${category.label}`}</h3>
        <div className="basis-3/4">
          <img src={category?.topicImg} alt={category.label} />
        </div>
        <Button onClick={() => console.log("Alle Topics ansehen")}>
          Alle&nbsp;ansehen
        </Button>
      </div>
      <div className="flex flex-wrap gap-y-6">
        {category?.topics?.map((topic, index) => (
          <CategoryTopic key={`topic-${index}`} topic={topic} index={index} />
        ))}
      </div>
    </div>
  );
}

export default CategoryTopics;
