"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="fixed bottom-0 left-0 w-full z-50 flex flex-col items-center"
    >
      <div
        className={cn(
          "flex flex-col items-center w-full transition-all duration-300 backdrop-blur-xl bg-demo-secondary/60",
          !isOpen && "bg-transparent backdrop-blur-none",
        )}
      >
        <CollapsibleTrigger asChild>
          <div
            className={cn(
              "h-6 w-20 flex items-center justify-center rounded-t-sm text-white transition-all cursor-pointer",
              !isOpen ? "bg-demo-secondary" : "bg-transparent",
            )}
          >
            {isOpen ? (
              <ChevronDownIcon className="size-6" />
            ) : (
              <ChevronUpIcon className="size-6" />
            )}
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="tracking-widest w-full overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
          <div className="w-full py-8 border-t border-white/10">
            <div className="flex w-full items-center justify-center text-xs gap-x-6 btn-link">
              <a href="" className="btn-link">
                服務條款
              </a>
              <a href="" className="btn-link">
                隱私權政策
              </a>
              <a href="" className="btn-link">
                服務聲明
              </a>
            </div>
            <div className="text-center text-[10px] mt-4 uppercase text-white">
              © 2026 Created by Jessie | For Demo
            </div>
          </div>
        </CollapsibleContent>
      </div>

      {/* 下方原本那條橫線 */}
      {!isOpen && <div className="w-full h-1 bg-demo-secondary" />}
    </Collapsible>
  );
};

export default Footer;
