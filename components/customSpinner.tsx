import { LoaderIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type CustomSpinnerProps = {
  className?: string;
};

const Spinner = ({ className, ...props }: React.ComponentProps<"svg">) => {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-6 animate-spin text-white", className)}
      {...props}
    />
  );
};

const CustomSpinner = ({ className }: CustomSpinnerProps) => {
  return (
    <div className="flex items-center gap-4">
      <Spinner className={className} />
    </div>
  );
};

export default CustomSpinner;
