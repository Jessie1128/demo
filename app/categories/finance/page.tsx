"use client";

import MainPage from "@/components/mainPage";
import { mockFinanceNews } from "@/lib/constants";
import useInfiniteScroll from "@/lib/hooks/useInfiniteScroll";
import { NewsDetail } from "@/lib/types";
import { useState } from "react";

export default function FinancePage() {
  const [displayNews, setDisplayNews] = useState<NewsDetail[]>(mockFinanceNews);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { observerRef } = useInfiniteScroll({
    currentDataLength: displayNews.length,
    originalList: mockFinanceNews,
    modifyDisplayNews: (data) => {
      setDisplayNews((prev) => [...prev, ...data]);
    },
    modifyLoading: setIsLoading,
    isLoading,
    hasMore: true,
  });

  return (
    <MainPage
      originalList={mockFinanceNews}
      newsList={displayNews}
      observerRef={observerRef}
    />
  );
}
