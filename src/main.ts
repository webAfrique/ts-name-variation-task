import {getNumberOfChars, getFirstChar, getLastChar, getLower, getUpper} from "./variations.ts";

const answer1 = document.querySelector("#answer1") as HTMLDivElement;
const answer2 = document.querySelector("#answer2") as HTMLDivElement;
const answer3 = document.querySelector("#answer3") as HTMLDivElement;
const answer4 = document.querySelector("#answer4") as HTMLDivElement;
const answer5 = document.querySelector("#answer5") as HTMLDivElement;

const name = document.querySelector("#your-name") as HTMLInputElement;

name.addEventListener("keyup", () => {
    const value = name.value;
    const nbChars = getNumberOfChars(value);
    const firstChar = getFirstChar(value);
    const lastChar = getLastChar(value);
    const lower = getLower(value);
    const upper = getUpper(value);
    answer1.textContent = nbChars.toString();

    if (typeof firstChar === "string") {
        answer2.textContent = firstChar;
    }
    if (typeof lastChar === "string") {
        answer3.textContent = lastChar;
    }
    if (typeof lower === "string") {
        answer4.textContent = lower;
    }
    if (typeof upper === "string") {
        answer5.textContent = upper;
    }
});