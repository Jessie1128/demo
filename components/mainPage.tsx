import { NewsDetail } from "@/lib/types";
import CustomSpinner from "./customSpinner";
import NewsCard from "./newsCard";
import NewsBanner from "./ui/newsBanner";
import { RefObject } from "react";

type MainPageProps = {
  originalList: NewsDetail[];
  newsList: NewsDetail[];
  observerRef: RefObject<HTMLDivElement | null>;
};

const MainPage = ({ originalList, newsList, observerRef }: MainPageProps) => {
  return (
    <div className="relative">
      <NewsBanner newsList={originalList} />
      <div className="p-8 sm:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {newsList.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>

      <div
        ref={observerRef}
        className="flex w-full items-center justify-center mb-13"
      >
        <CustomSpinner />
      </div>
    </div>
  );
};

export default MainPage;
