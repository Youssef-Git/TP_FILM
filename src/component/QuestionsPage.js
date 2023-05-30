import React from 'react';
import Header from './Header';
import Questions from './Questions';

function QuestionsPage() {
    const questions = [
        { question: "Qui est Franklin Saint ?", answer: "Le personnage principal et héros de la série", level: "Facile" },
        { question: "Où se déroule la série ?", answer: "Los Angeles", level: "Facile" },
        { question: "Avec qui Franklin démarre son activité ?", answer: "Avec son oncle et sa tante", level: "Moyen" },
        { question: "Dans la saison 1, dans quel état Franklin retrouve son père?", answer: "Dans la rue à faire la manche", level: "Difficile" },
        { question: "Qui est Leon ?", answer: "Un proche de Franklin", level: "Facile" },
        { question: "Où Franklin va récupérer sa cargaison pour la première fois ?", answer: "Oakland", level: "Difficile" },
        { question: "Qui est Oso ?", answer: "Un catcheur reconverti en trafiquant", level: "Facile" },
        { question: "Comment la mère de Franklin apprend ses activités illégales ?", answer: "Lorsqu'il lui offre une liasse d'argent", level: "Moyen" },
        { question: "En quelle année est se déroule l'histoire ?", answer: "Dans les années 80", level: "Facile" },
        { question: "Quel produit fait ravage dans les rues de Los Angeles ?", answer: "Le Crack", level: "Facile" },
    ];

    return (
        <>
            <Header />
            <Questions questions={questions} />
        </>
    );
}

export default QuestionsPage;