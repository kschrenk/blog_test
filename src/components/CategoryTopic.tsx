import { Topic } from "../App";
import { isOdd } from "../util/functions";

type CategoryTopicProps = {
  index: number;
  topic: Topic;
};

function CategoryTopic({ topic, index }: CategoryTopicProps) {
  return (
    <div className="basis-1/2">
      <div
        className={`shadow cursor-pointer rounded-xl bg-center bg-contain bg-no-repeat h-28 ${
          isOdd(index) ? "ml-2" : "mr-2"
        }`}
        style={{ backgroundImage: `url('${topic.img}')` }}
        onClick={() => console.log(`Go to topic: ${topic.title}`)}
      >
        <div className="w-full max-w-[114px] pt-3 pl-2">
          <h4 className="text-xl break-words leading-5">{topic.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default CategoryTopic;
