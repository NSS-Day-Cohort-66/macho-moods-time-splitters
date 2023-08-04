import { getMoods } from "./database.js"

document.addEventListener(
    "click",
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target;

        if (whatWasClickedOn.dataset.type === "mood") {
            window.alert(`${whatWasClickedOn.dataset.quotes}`)
        }
    }
)


export const moodList = () => {
    const moods = getMoods()

    let moodHTMLString = ``;

    for (const mood of moods) {
        moodHTMLString += `<section class="mood-card">
                                <h3 id="mood-name">${mood.name}</h3>
                                <img class="mood-img" src="${mood.imageUrl}"/>
                                <p class="click-word"> Click </p>
                                <p class="quote-clicker" data-id="${mood.id}" data-quotes="${mood.quotes}" data-type="mood" >HERE</p>
                                <p class="macho-advice-phrase"> for MACHO ADVICE</p>
                            </section>`;
    }
    return moodHTMLString;
}