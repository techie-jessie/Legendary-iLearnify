import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
const buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap rounded-full text-xs font-semibold transition-colors focus-visible:outline-none disabled:pointer-events-none", { variants: { variant: { default: "bg-violet text-white hover:bg-violet/90", outline: "border border-ink bg-white text-ink hover:bg-zinc-50" }, size: { default: "h-9 px-4", sm: "h-7 px-3 text-[10px]" } }, defaultVariants: { variant: "default", size: "default" } });
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => { const Comp = asChild ? Slot : "button"; return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />; });
Button.displayName = "Button";
export { Button, buttonVariants };
