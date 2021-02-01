import type { BgImage } from "./interfaces/bg_image";

const bgImages: Map<string, BgImage> = new Map<string, BgImage>();
bgImages.set("night", {
  title: "Night sky",
  name: "night.jpg",
});
bgImages.set("rain", {
  title: "Raining",
  name: "rain.jpg",
});
bgImages.set("snow", {
  title: "Snowfall",
  name: "snow.png",
});
bgImages.set("sun", {
  title: "Enjoy the sun",
  name: "sun.jpg",
});
export function getBgImage(name: string): BgImage {
  return bgImages.get(name)!;
}
