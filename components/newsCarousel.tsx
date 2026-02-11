import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { NewsDetail } from "@/lib/types";
import CarouselImage from "./carouselImage";

const NewsCarousel = ({ newsList }: { newsList: NewsDetail[] }) => {
  return (
    <Carousel className="w-full h-full" opts={{ loop: true }}>
      <CarouselContent className="w-full h-full ml-0">
        {newsList.map((news, index) => (
          <CarouselItem key={index} className="pl-0 h-full">
            <CarouselImage news={news} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 cursor-pointer" />
      <CarouselNext className="absolute right-4 cursor-pointer" />
    </Carousel>
  );
};

export default NewsCarousel;
