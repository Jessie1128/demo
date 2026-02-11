import {
  breakingNewsList,
  headerCategories,
  NewsCategoryLabels,
} from "@/lib/constants";
import Menu from "./menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 w-full h-24">
      <div className="w-full bg-demo-primary/95 backdrop-blur supports-[backdrop-filter]:bg-demo-primary/60 px-4 py-3 h-16 justify-between items-center flex">
        <div className="cursor-pointer text-white font-bold text-2xl px-2 py-1 bg-demo-secondary transform -skew-x-12 hover:scale-105 transition-transform">
          News
        </div>
        <nav className="hidden md:flex items-center gap-6 cursor-pointer">
          {headerCategories.map((item) => {
            const href = `/categories/${item}`;
            // 判斷是否為當前路徑
            const isActive = pathname === href;
            return (
              <div key={item}>
                <a
                  href={href}
                  className={cn(
                    isActive ? "text-white cursor-pointer" : "btn-link",
                    "text-lg font-medium tracking-wider btn-link",
                  )}
                >
                  {NewsCategoryLabels[item]}
                </a>
                <div
                  className={cn(
                    isActive && "border-b-[2px] border-demo-secondary",
                    "w-full h-[2px]",
                  )}
                />
              </div>
            );
          })}
        </nav>
        <Menu />
      </div>

      <div className="bg-demo-secondary h-8 flex text-white items-center overflow-hidden relative">
        <div className="bg-black px-4 tracking-wider h-full flex items-center z-20 font-bold text-sm absolute left-0 shadow-lg">
          最新
        </div>
        <div className="flex w-max animate-ticker whitespace-nowrap">
          <div className="flex gap-12 items-center px-6">
            {breakingNewsList.map((news, index) => {
              const { text, icon } = news;
              const Icon = icon;
              return (
                <span
                  className="flex items-center gap-2"
                  key={`${index}-${text}`}
                >
                  <Icon className="w-4 h-4 text-white" />
                  {text}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
