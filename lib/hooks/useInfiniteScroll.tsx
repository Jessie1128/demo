"use client";

import { useEffect, useRef, useCallback } from "react";
import { NewsDetail } from "../types";

type UseInfiniteScrollProps = {
  currentDataLength: number;
  originalList: NewsDetail[];
  modifyDisplayNews: (list: NewsDetail[]) => void;
  modifyLoading: (args: boolean) => void;
  isLoading: boolean;
  hasMore?: boolean;
};

const useInfiniteScroll = ({
  currentDataLength,
  originalList,
  modifyDisplayNews,
  modifyLoading,
  isLoading,
  hasMore = true,
}: UseInfiniteScrollProps) => {
  const observerRef = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback(
    async (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;

      if (target.isIntersecting && !isLoading && hasMore) {
        modifyLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 1200));
        const newData = originalList.map((news) => {
          const [prefix, dataId] = news.id.split("-");
          const newDataId = currentDataLength + Number(dataId);
          return {
            ...news,
            id: `${prefix}-${newDataId}`,
          };
        });

        modifyDisplayNews(newData);
        modifyLoading(false);
      }
    },
    [
      isLoading,
      hasMore,
      originalList,
      modifyLoading,
      modifyDisplayNews,
      currentDataLength,
    ],
  );

  useEffect(() => {
    const element = observerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.5,
    });

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleObserver]);

  return { observerRef };
};

export default useInfiniteScroll;
