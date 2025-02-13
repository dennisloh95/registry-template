import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 rounded-xl font-medium border-transparent transition-colors focus-visible:outline-none  disabled:cursor-not-allowed [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "[&:not(:disabled)]:hover:bg-t-700 [&:not(:disabled)]:active:bg-t-800 [&:not(:disabled)]:bg-t-600-main [&:not(:disabled)]:text-n-900 disabled:bg-n-600 disabled:text-n-400-t3",
        secondary:
          "disabled:bg-n-600 disabled:text-n-400-t3 [&:not(:disabled)]:bg-t-1000 [&:not(:disabled)]:text-t-600-main [&:not(:disabled)]:hover:bg-t-600-main [&:not(:disabled)]:hover:text-n-900 [&:not(:disabled)]:active:bg-t-700 [&:not(:disabled)]:active:text-n-900",
        outlined:
          "border bg-black disabled:border-n-600 disabled:text-n-500-t4 [&:not(:disabled)]:border-n-500-t4 [&:not(:disabled)]:text-n-0-t1 [&:not(:disabled)]:hover:border-t-600-main [&:not(:disabled)]:hover:text-t-600-main [&:not(:disabled)]:active:border-t-700 [&:not(:disabled)]:active:text-t-700",
        ghost:
          "disabled:text-n-500-t4 [&:not(:disabled)]:text-t-600-main [&:not(:disabled)]:hover:text-t-700 !p-0 !w-fit !h-fit",
        emphasis:
          "bg-t-600-main [&:not(:disabled)]:text-n-900 disabled:bg-n-600 disabled:text-n-400-t3 [&:not(:disabled):not(:hover):not(:active)]:bg-g1 [&:not(:disabled)]:hover:bg-t-600-main [&:not(:disabled)]:active:bg-t-800",
        teal: "border bg-black disabled:border-n-600 disabled:text-n-500-t4 [&:not(:disabled)]:border-t-600-main [&:not(:disabled)]:text-t-600-main [&:not(:disabled)]:hover:border-t-700 [&:not(:disabled)]:hover:text-t-700 [&:not(:disabled)]:active:border-t-800 [&:not(:disabled)]:active:text-t-800",
        glass:
          "glass-btn-disabled-bg text-white backdrop-blur-md disabled:text-n-300 [&:not(:disabled)]:bg-white/10 [&:not(:disabled)]:hover:bg-white/20",
      },
      size: {
        xl: "[&_svg]:size-6 [&_svg]:shrink-0 [&_img]:shrink-0 [&_img]:size-6 py-4 px-6 h-[56px] text-label-lg",
        lg: "[&_svg]:size-5 [&_svg]:shrink-0 [&_img]:shrink-0 [&_img]:size-5 py-3 px-5 h-[48px] text-label-lg",
        md: "[&_svg]:size-5 [&_svg]:shrink-0 [&_img]:shrink-0 [&_img]:size-5 py-2.5 px-4 h-10 text-label-md",
        sm: "[&_svg]:size-4 [&_svg]:shrink-0 [&_img]:shrink-0 [&_img]:size-4 py-1.5 px-3 h-8 text-label-sm",
      },
      extra: {
        pureIcon: "",
      },
    },
    compoundVariants: [
      {
        extra: "pureIcon",
        size: "xl",
        className: "p-4",
      },
      {
        extra: "pureIcon",
        size: "lg",
        className: "p-[14px]",
      },
      {
        extra: "pureIcon",
        size: "md",
        className: "p-2.5",
      },
      {
        extra: "pureIcon",
        size: "md",
        className: "p-2",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, extra, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, extra, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
