import { PlayCircle } from "lucide-react";
import Image from "next/image";
import { NewsDetail } from "@/lib/types";

const NewsList = ({ newsList }: { newsList: NewsDetail[] }) => {
  return (
    <div className="flex flex-col border border-border p-4 bg-background w-full h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-6 w-1.5 bg-primary"></div>
        <h2 className="text-xl font-display font-bold uppercase tracking-tight text-foreground">
          熱門新聞
        </h2>
      </div>

      <div className="flex-1 space-y-6 overflow-y-auto max-h-[500px] pr-2 scrollbar-thin scrollbar-thumb-primary/20">
        {newsList.map((news) => (
          <div key={news.id} className="flex gap-4 group cursor-pointer">
            <div className="w-24 h-24 shrink-0 overflow-hidden rounded-md border border-border">
              <Image
                src={news.image}
                alt={news.title}
                width={96}
                height={96}
                style={{ objectFit: "cover" }}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="flex grow flex-col py-0.5">
              <div className="grow">
                <span className="bg-demo-secondary mb-1 flex w-fit text-white px-2.5 py-0.5 rounded-md text-xs uppercase tracking-wider">
                  {news.category}
                </span>

                <h3 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2 uppercase text-foreground">
                  {news.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono">
                <span>{news.time}</span>
                {news.isLive && (
                  <>
                    <span className="h-1 w-1 bg-border rounded-full"></span>
                    <span className="text-primary font-bold animate-pulse">
                      LIVE
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="cursor-pointer inline-flex items-center justify-between gap-2 whitespace-nowrap text-sm font-medium hover-elevate active-elevate-2 border-t border-border mt-6 w-full py-4 group hover:text-primary transition-colors">
        <span className="text-xs font-bold uppercase tracking-widest">
          Read more
        </span>
        <PlayCircle className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default NewsList;
