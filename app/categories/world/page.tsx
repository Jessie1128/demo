"use client";

import MainPage from "@/components/mainPage";
import { mockWorldNews } from "@/lib/constants";
import useInfiniteScroll from "@/lib/hooks/useInfiniteScroll";
import { NewsDetail } from "@/lib/types";
import { useState } from "react";

export default function WorldPage() {
  const [displayNews, setDisplayNews] = useState<NewsDetail[]>(mockWorldNews);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { observerRef } = useInfiniteScroll({
    currentDataLength: displayNews.length,
    originalList: mockWorldNews,
    modifyDisplayNews: (data) => {
      setDisplayNews((prev) => [...prev, ...data]);
    },
    modifyLoading: setIsLoading,
    isLoading,
    hasMore: true,
  });

  return (
    <MainPage
      originalList={mockWorldNews}
      newsList={displayNews}
      observerRef={observerRef}
    />
  );
}
