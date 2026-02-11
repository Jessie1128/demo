import { Clock } from "lucide-react";
import { NewsDetail } from "@/lib/types";
import Image from "next/image"; // 用於優化圖片
import { cn } from "@/lib/utils";

type NewsCardProps = {
  news: NewsDetail;
};

const NewsCard = ({ news }: NewsCardProps) => {
  const isLarge = news?.isLarge;

  return (
    <div
      className={cn(
        isLarge && "md:col-span-2",
        "transition-opacity duration-500",
      )}
    >
      <div
        className={`
          group overflow-hidden border border-border bg-card rounded-xl shadow-sm
          hover:border-primary/50 transition-all duration-300 cursor-pointer h-full flex flex-col
          ${isLarge ? "md:grid md:grid-cols-2 md:gap-6" : ""}
        `}
      >
        {/* 圖片 */}
        <div
          className={`relative overflow-hidden ${isLarge ? "h-64 md:h-full" : "h-48"}`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
          <Image
            src={news.image}
            alt={news.title}
            fill
            style={{ objectFit: "cover" }}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />

          {/* 標籤 */}
          <span className="absolute top-4 left-4 z-20 bg-demo-secondary text-white px-2.5 py-0.5 rounded-md text-xs font-bold uppercase tracking-wider">
            {news.category}
          </span>
          {/* 直播狀態 */}
          {news.isLive && (
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-red-500 font-bold uppercase text-[10px] tracking-widest">
                Live Update
              </span>
            </div>
          )}
          <div className="flex flex-col font-bold justify-end absolute bottom-4 text-[10px] right-4 text-white z-20">
            {news.source.map((item, index) => (
              <div key={`${news.id}-${index}`} className="">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* 內容區域 */}
        <div className="flex flex-col flex-1 p-5">
          <h3
            className={`
              font-bold leading-tight group-hover:text-primary mb-2
              ${isLarge ? "text-2xl md:text-4xl" : "text-xl"}
            `}
          >
            {news.title}
          </h3>
          <p
            className={`line-clamp-3 flex-1 ${isLarge ? "text-lg" : "text-sm"}`}
          >
            {news.summary}
          </p>

          {/* 底部資訊 */}
          <div className="pt-4 border-t border-border/50 mt-4 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {news.time}
            </div>
            <span className="font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest text-[10px]">
              Read More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
