"use strict"

const herois = [
    'IronMan - Wounded, captured and forced to build a weapon by …make the world a safer, better place as Iron Man.',
    'Thanos - The Mad Titan Thanos, a melancholy, brooding indiv…he became more powerful than any of his brethren.',
    'SpiderMan - Peter’s relatively normal life changed abruptly du…it escaped and bit Peter before it was destroyed.',
    'Thor - As the Norse God of thunder and lightning, Thor wi…never, ever stop fighting for a worthwhile cause.',
    'CaptainAmerica - Vowing to serve his country any way he could, youn… living, breathing symbol of freedom and liberty.'
]

const cardTitle = (heroi) => heroi.split('-')[0];
const cardText = (heroi) => heroi.split('-')[1];

const createCard = (heroi) => {
    const container = document.querySelector(".card-container");
    const card = document.createElement("div") ;
    card.innerHTML = `
        <div class="card-body">
            <div class="card-title">${cardTitle(heroi)}</div>
            <div class="card-text">${cardText(heroi)}</div>
        </div>
    `;
    container.appendChild(card);
}

const renderCards = (herois) => herois.forEach(createCard);

renderCards (herois);