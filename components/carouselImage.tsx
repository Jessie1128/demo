import Image from "next/image";
import { NewsDetail } from "@/lib/types";
import { defaultImageString } from "@/lib/constants";

const CarouselImage = ({ news }: { news: NewsDetail }) => {
  return (
    <div className="relative h-full w-full flex flex-col justify-end text-white">
      <Image
        placeholder="blur"
        blurDataURL={defaultImageString}
        src={news.image}
        alt={news.title}
        className="object-cover"
        fill
        priority
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <h3 className="text-xl font-bold mb-2">{news.title}</h3>
        <p className="text-sm line-clamp-2 text-gray-200">{news.summary}</p>
      </div>
    </div>
  );
};

export default CarouselImage;
