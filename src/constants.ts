import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const apiKey = "t1xOm5aKr1WWcHhH6huTVQgGk3qBoQRD";
const urlBase = "https://api.giphy.com/v1/gifs";
export const searchBaseUrl = `${urlBase}/search?api_key=${apiKey}&q=`;
export const trendingUrl = `${urlBase}/trending?api_key=${apiKey}`;

export interface Gif {
  id: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
