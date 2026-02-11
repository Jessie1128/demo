"use client";

import MainPage from "@/components/mainPage";
import { mockTechNews } from "@/lib/constants";
import useInfiniteScroll from "@/lib/hooks/useInfiniteScroll";
import { NewsDetail } from "@/lib/types";
import { useState } from "react";

export default function TechPage() {
  const [displayNews, setDisplayNews] = useState<NewsDetail[]>(mockTechNews);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { observerRef } = useInfiniteScroll({
    currentDataLength: displayNews.length,
    originalList: mockTechNews,
    modifyDisplayNews: (data) => {
      setDisplayNews((prev) => [...prev, ...data]);
    },
    modifyLoading: setIsLoading,
    isLoading,
    hasMore: true,
  });

  return (
    <MainPage
      originalList={mockTechNews}
      newsList={displayNews}
      observerRef={observerRef}
    />
  );
}
