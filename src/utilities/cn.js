import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...a) {
    return twMerge(clsx(a));
}