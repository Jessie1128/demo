"use client";

import MainPage from "@/components/mainPage";
import { mockFocusNews } from "@/lib/constants";
import useInfiniteScroll from "@/lib/hooks/useInfiniteScroll";
import { NewsDetail } from "@/lib/types";
import { useState } from "react";

export default function FocusPage() {
  const [displayNews, setDisplayNews] = useState<NewsDetail[]>(mockFocusNews);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { observerRef } = useInfiniteScroll({
    currentDataLength: displayNews.length,
    originalList: mockFocusNews,
    modifyDisplayNews: (data) => {
      setDisplayNews((prev) => [...prev, ...data]);
    },
    modifyLoading: setIsLoading,
    isLoading,
    hasMore: true,
  });

  return (
    <MainPage
      originalList={mockFocusNews}
      newsList={displayNews}
      observerRef={observerRef}
    />
  );
}
