/****************** FUNCTIONS ******************/
// Create HTML Elements
function createElement(tag, classes, content) {
    const element = document.createElement(tag);
    element.setAttribute("class", classes);
    element.innerText = (content);
    return element;
}

/****************** VARIABLES ******************/
const team = [
    { name: "Wayne Barnett",    role: "Founder & CEO",          img: "wayne-barnett-founder-ceo.jpg" },
    { name: "Angela Caroll",    role: "Chief Editor",           img: "angela-caroll-chief-editor.jpg" },
    { name: "Walter Gordon",    role: "Office Manager",         img: "walter-gordon-office-manager.jpg" },
    { name: "Angela Lopez",     role: "Social Media Manager",   img: "angela-lopez-social-media-manager.jpg" },
    { name: "Scott Estrada",    role: "Developer",              img: "scott-estrada-developer.jpg" },
    { name: "Barbara Ramos",    role: "Graphic Designer",       img: "barbara-ramos-graphic-designer.jpg" },
];
const main = document.querySelector("main");
let workerInfo = "";
let card;

/******************   INIT    ******************/

// Print team in console and on web page
console.log("OUR TEAM");
for (const key in team) {
    workerInfo = `NAME: ${team[key].name};  ROLE: ${team[key].role}`;
    console.log("👉 " + workerInfo + `IMAGE: ${team[key].img}.`);
    card = createElement("div", "card", "");
    card.style.backgroundImage = `url(./assets/img/${team[key].img})`;
    cardText = createElement("span", "cardText", `${workerInfo}`);
    card.append(cardText);
    main.append(card);
}