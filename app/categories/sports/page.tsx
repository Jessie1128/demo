"use client";

import MainPage from "@/components/mainPage";
import { mockSportsNews } from "@/lib/constants";
import useInfiniteScroll from "@/lib/hooks/useInfiniteScroll";
import { NewsDetail } from "@/lib/types";
import { useState } from "react";

export default function SportsPage() {
  const [displayNews, setDisplayNews] = useState<NewsDetail[]>(mockSportsNews);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { observerRef } = useInfiniteScroll({
    currentDataLength: displayNews.length,
    originalList: mockSportsNews,
    modifyDisplayNews: (data) => {
      setDisplayNews((prev) => [...prev, ...data]);
    },
    modifyLoading: setIsLoading,
    isLoading,
    hasMore: true,
  });

  return (
    <MainPage
      originalList={mockSportsNews}
      newsList={displayNews}
      observerRef={observerRef}
    />
  );
}
