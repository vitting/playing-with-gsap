import { getRandomQuote } from "./quotes";
import gsap from "gsap";

const quoteEl: HTMLDivElement | null = document.querySelector(".quote");
const quoteText = quoteEl?.querySelector(".quote-text");
const quotePerson = quoteEl?.querySelector(".quote-person");
const topNavUlEl: HTMLUListElement | null = document.querySelector(
  ".top-nav ul"
);
const imagerListEl: HTMLUListElement | null = document.querySelector(
  ".image-list"
);
topNavUlEl?.addEventListener("click", handleNavClick);
imagerListEl?.addEventListener("click", handleImageClick);

function handleImageClick(e: Event) {
  if (e.target instanceof HTMLImageElement) {
    const imgEl: HTMLImageElement = e.target;
    const id = imgEl.id;
    const selected = imgEl.classList.contains("selected");
    console.log(id, selected);
  }
}

function handleNavClick(e: Event) {
  const liEl: HTMLLIElement = e.target! as HTMLLIElement;
  const id = liEl.id;
  console.log(id);
}

const quote = getRandomQuote();
if (quoteText && quotePerson) {
  quoteText.textContent = `"${quote.text}"`;
  quotePerson.textContent = `- ${quote.person}`;
}

export {};
