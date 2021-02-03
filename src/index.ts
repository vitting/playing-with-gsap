import { getBgImage } from "./bg_images";
import {
  setCoverImage,
  setNavbarClass,
  setTitle,
  setQuote,
  showBackgroundsMenu,
  setActiveImage,
} from "./set_functions";

const topNavUlEl: HTMLUListElement | null = document.querySelector(
  ".top-nav ul"
);
const imagesListEl: HTMLUListElement | null = document.querySelector(
  ".image-list"
);
topNavUlEl?.addEventListener("click", handleNavClick);
imagesListEl?.addEventListener("click", handleImageClick);

function handleImageClick(e: Event) {
  if (e.target instanceof HTMLImageElement) {
    const imgEl: HTMLImageElement = e.target;
    const id = imgEl.id;
    if (!imgEl.classList.contains("selected")) {
      const bgImageData = getBgImage(id);
      setCoverImage(bgImageData.name);
      setNavbarClass(id);
      setTitle(bgImageData.title);
      setActiveImage(imgEl);
      setQuote();
    }
  }
}

function handleNavClick(e: Event) {
  const liEl: HTMLLIElement = e.target! as HTMLLIElement;
  
  const id = liEl.id;
  switch (id) {
    case "backgrounds":
      const menuVisible = showBackgroundsMenu();
      liEl.dataset.active = menuVisible.toString();
      
      break;

    default:
      break;
  }
}

setQuote();

export {};
