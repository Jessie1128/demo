"use client";

import MainPage from "@/components/mainPage";
import { mockEntertainmentNews } from "@/lib/constants";
import useInfiniteScroll from "@/lib/hooks/useInfiniteScroll";
import { NewsDetail } from "@/lib/types";
import { useState } from "react";

export default function EntertainmentPage() {
  const [displayNews, setDisplayNews] = useState<NewsDetail[]>(
    mockEntertainmentNews,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { observerRef } = useInfiniteScroll({
    currentDataLength: displayNews.length,
    originalList: mockEntertainmentNews,
    modifyDisplayNews: (data) => {
      setDisplayNews((prev) => [...prev, ...data]);
    },
    modifyLoading: setIsLoading,
    isLoading,
    hasMore: true,
  });

  return (
    <MainPage
      originalList={mockEntertainmentNews}
      newsList={displayNews}
      observerRef={observerRef}
    />
  );
}
