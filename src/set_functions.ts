import { getRandomQuote } from "./quotes";
import gsap from "gsap";

const menuTl = gsap.timeline({ defaults: { duration: 0.6 } });
menuTl
  .to(".quote", { x: 100, duration: 0.5, ease: "back" })
  .to(".title", { x: 100, duration: 0.5, ease: "back" }, "-=0.3")
  .to(".cover", { width: "calc(100% - 230px)", ease: "power3.inOut" })
  .to(".image-list", { translateX: 0, ease: "power3.inOut" }, "-=0.5")
  .to(".image-list img", { opacity: 1, stagger: 0.1, ease: "power3.out" })

  .pause();

let menuVisible = false;

function setCoverImage(name: string) {
  const coversEl: HTMLImageElement | null = document.querySelector(".covers");
  const coverEl: HTMLImageElement | null = document.querySelector(".cover");
  const cover2El: HTMLImageElement = document.createElement("img");
  if (coversEl && coverEl) {
    cover2El.src = `/images/${name}`;
    cover2El.classList.add("cover2");
    coversEl.append(cover2El);
    const imageSwapTl = gsap.timeline({
      onComplete: () => {
        coverEl.src = `/images/${name}`;
        coverEl.style.opacity = "1";
        cover2El.remove();
      },
    });
    imageSwapTl
      .to(coverEl, { opacity: 0, duration: 1 })
      .to(cover2El, { opacity: 1, duration: 1 }, "-=0.6");
  }
}

function setNavbarClass(className: string) {
  const navEl: HTMLImageElement | null = document.querySelector("#nav");
  if (navEl) {
    navEl.classList.forEach((item) => {
      navEl.classList.remove(item);
    });
    navEl.classList.add(className);
  }
}

function setQuote() {
  const quoteEl: HTMLDivElement | null = document.querySelector(".quote");
  const quoteText = quoteEl?.querySelector(".quote-text");
  const quotePerson = quoteEl?.querySelector(".quote-person");

  const quote = getRandomQuote();
  if (quoteText && quotePerson) {
    gsap.to(quoteEl, {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        quoteText.textContent = `"${quote.text}"`;
        quotePerson.textContent = `- ${quote.person}`;
        gsap.to(quoteEl, { opacity: 1, duration: 1 });
      },
    });
  }
}

function setTitle(title: string) {
  const titleEl: HTMLImageElement | null = document.querySelector(".title");

  if (titleEl) {
    gsap.to(titleEl, {
      bottom: -120,
      onComplete: () => {
        titleEl.textContent = title;
        gsap.to(titleEl, { bottom: 5, duration: 0.8 });
      },
    });
  }
}

function showBackgroundsMenu(): boolean {
  menuVisible ? menuTl.reverse() : menuTl.play();
  menuVisible = !menuVisible;
  return menuVisible;
}

function setActiveImage(imgEl: HTMLImageElement) {
  const imagesListEl: HTMLUListElement | null = document.querySelector(
    ".image-list"
  );
  const imagesList = imagesListEl?.querySelectorAll("img");
  imagesList?.forEach((el) => {
    if (el.classList.contains("selected")) {
      el.classList.remove("selected");
    }
  });

  imgEl.classList.add("selected");
}

export {
  setCoverImage,
  setNavbarClass,
  setQuote,
  setTitle,
  showBackgroundsMenu,
  setActiveImage,
};
