import type { Quote } from "./interfaces/quote";

const quotes: Quote[] = [
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall",
        person: "Nelson Mandela"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        person: "Walt Disney"
    },
    {
        text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        person: "Steve Jobs"
    },
    {
        text: "If life were predictable it would cease to be life, and be without flavor.",
        person: "Eleanor Roosevelt"
    },
    {
        text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        person: "James Cameron"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        person: "John Lennon"
    },
    {
        text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        person: "Mother Teresa"
    },
    {
        text: "When you reach the end of your rope, tie a knot in it and hang on.",
        person: "Franklin D. Roosevelt"
    },
    {
        text: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        person: "Robert Louis Stevenson"
    },
    {
        text: "Always remember that you are absolutely unique. Just like everyone else.",
        person: "Margaret Mead"
    }
];

export function getRandomQuote(): Quote {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index]
}