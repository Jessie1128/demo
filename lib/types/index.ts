export type NewsDetail = {
  id: string;
  category: string;
  title: string;
  summary: string;
  image: string;
  time: string;
  source: string[];
  isLarge?: boolean;
  isLive?: boolean;
};

export enum NewsCategory {
  FOCUS = "focus",
  FINANCE = "finance",
  SPORTS = "sports",
  TECH = "tech",
  WORLD = "world",
  MEDICAL = "medical",
  ENTERTAINMENT = "entertainment",
  LIFESTYLE = "lifestyle",
  ENVIRONMENT = "environment",
  LOCAL = "local",
  AEROSPACE = "aerospace",
}
export type NewsCategoryType = NewsCategory;
