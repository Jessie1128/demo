"use client";

import React from "react";
import Image from "next/image";
import NewsList from "./newsList";
import NewsCarousel from "./newsCarousel";
import { NewsCategory, NewsCategoryType, NewsDetail } from "@/lib/types";
import { usePathname } from "next/navigation";

const NewsBanner = ({ newsList }: { newsList: NewsDetail[] }) => {
  const pathname = usePathname();

  const categories = pathname.split("/").at(-1);

  const images: Partial<Record<NewsCategoryType, string>> = {
    [NewsCategory.FOCUS]: "/images/banner/focus.png",
    [NewsCategory.WORLD]: "/images/banner/world.png",
    [NewsCategory.TECH]: "/images/banner/tech.png",
    [NewsCategory.SPORTS]: "/images/banner/sports.png",
    [NewsCategory.FINANCE]: "/images/banner/finance.png",
    [NewsCategory.ENTERTAINMENT]: "/images/banner/entertainment.png",
  };

  return (
    <section className="relative w-full h-[800px] md:h-[600px] overflow-hidden bg-demo-primary py-8 md:py-0 px-8 lg:px-16">
      {/* 背景主播圖 */}
      <Image
        src={categories ? images[categories as NewsCategoryType] || "" : ""}
        alt="banner"
        fill
        className="object-cover opacity-40 z-10" // 確保背景在最底層
        priority
      />

      <div className="relative z-10 mx-auto grid md:grid-cols-[1fr_auto] h-full w-full items-center justify-center gap-y-8 md:gap-x-8 xl:gap-x-16 max-w-[1440px]">
        <div className="md:max-w-[1200px] w-full h-[300px]  md:h-[500px] rounded-lg overflow-hidden shadow-[0_0_24px_2px_rgba(255,255,255,0.3)] shrink-0">
          <NewsCarousel newsList={newsList} />
        </div>

        <div className="md:max-w-[400px] w-auto h-[400px] md:h-[500px] flex items-center rounded-lg overflow-hidden shadow-[0_0_24px_2px_rgba(255,255,255,0.3)] shrink-0">
          <NewsList newsList={newsList} />
        </div>
      </div>
    </section>
  );
};

export default NewsBanner;
