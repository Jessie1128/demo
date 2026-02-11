import { Menu as MenuIcon, XIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { headerCategories, NewsCategoryLabels } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const pathname = usePathname(); // 取得當前網址

  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setTimeout(() => {
      setOpen(false);
    }, 500);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="p-2 text-white/80 hover:text-white rounded-md transition-colors">
          <MenuIcon className="h-6 w-6" />
        </button>
      </SheetTrigger>

      <SheetContent
        showCloseButton={false}
        side="right"
        className="bg-demo-primary border-white/10 text-white"
      >
        <SheetHeader className="flex flex-row items-center justify-between p-4 border-b border-white/10">
          <SheetTitle className="text-white text-xl">分類</SheetTitle>

          <SheetClose className="p-2">
            <XIcon className="size-6 btn-link" />
          </SheetClose>
        </SheetHeader>
        <div className="flex flex-col gap-x-4 gap-y-8 mt-8 px-4">
          {headerCategories.map((item) => {
            const href = `/categories/${item}`;
            // 判斷是否為當前路徑
            const isActive = pathname === href;
            return (
              <Link
                key={item}
                href={href}
                onClick={handleLinkClick}
                className={cn(
                  isActive ? "text-white" : "btn-link",
                  "text-lg font-medium",
                )}
              >
                <div
                  className={cn(
                    isActive && "border-b-4 border-b-demo-secondary",
                    "w-fit",
                  )}
                >
                  {NewsCategoryLabels[item]}
                </div>
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
