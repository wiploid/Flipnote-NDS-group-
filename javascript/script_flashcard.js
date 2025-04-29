const flashcards = [
    {
        question: "Nevertheless",
        definition: "despite something that you have just mentioned.",
        translation: "Тем не менее",
        audio: "data/audio/Nevertheless.mp3"
    },
    {
        question: "Feasible",
        definition: "that is possible and likely to be achieved.",
        translation: "Осуществимый",
        audio: "data/audio/Feasible.mp3"
    },
    {
        question: "Sustainable",
        definition: "involving the use of natural products and energy in a way that does not harm the environment.",
        translation: "Устойчивый",
        audio: "data/audio/Sustainable.mp3"
    },
    {
        question: "Resilience",
        definition: "the ability of people or things to recover quickly after something unpleasant, such as shock, injury, etc.",
        translation: "Жизнестойкость",
        audio: "data/audio/Resilience.mp3"
    },
    {
        question: "Contemplate",
        definition: "to think about whether you should do something, or how you should do something.",
        translation: "Размышлять",
        audio: "data/audio/Contemplate.mp3"
    },
    {
        question: "Endeavor",
        definition: "an attempt to do something, especially something new or difficult.",
        translation: "Усилие",
        audio: "data/audio/Endeavor.mp3"
    },
    {
        question: "Eloquent",
        definition: "able to use language and express your opinions well, especially when you are speaking in public.",
        translation: "Красноречивый",
        audio: "data/audio/Eloquent.mp3"
    },
    {
        question: "Prosperity",
        definition: "the state of being successful, especially in making money.",
        translation: "Процветание",
        audio: "data/audio/Prosperity.mp3"
    },
    {
        question: "Exquisite",
        definition: "extremely beautiful or carefully made.",
        translation: "Изысканный",
        audio: "data/audio/Exquisite.mp3"
    },
    {
        question: "Diligent",
        definition: "showing care and effort in your work or duties",
        translation: "Усердный",
        audio: "data/audio/Diligent.mp3"
    },
    {
        question: "Intricate",
        definition: "having a lot of different parts and small details that fit together",
        translation: "Усердный",
        audio: "data/audio/Intricate.mp3"
    },
    {
        question: "Pervasive",
        definition: "existing in all parts of a place or thing; spreading gradually to affect all parts of a place or thing",
        translation: "Повсеместный",
        audio: "data/audio/Pervasive.mp3"
    },
    {
        question: "Conundrum",
        definition: "a confusing problem or question that is very difficult to solve",
        translation: "Головоломка",
        audio: "data/audio/Conundrum.mp3"
    },
];


let currentIndex = 0;
const front = document.querySelector('.front p');
const back = document.querySelector('.back p');
const audioButton = document.getElementById('audioButton');

function showCard(index) {
    const card = flashcards[currentIndex];
    const front = document.querySelector('.flashcard .front p');
    const back = document.querySelector('.flashcard .back p');

    front.textContent = card.question;
    // Здесь вместо одного длинного текста — делаем перенос строки через <br>
    back.innerHTML = `<strong>Definition:</strong> ${card.definition}<br><strong>Перевод:</strong> ${card.translation}`;
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    showCard(currentIndex);
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % flashcards.length;
    showCard(currentIndex);
});

window.onload = function() {
    const audioButton = document.getElementById('audioButton');

    audioButton.addEventListener('click', () => {
        const audio = new Audio(flashcards[currentIndex].audio);
        audio.play();
    });
};

// Показать первую карточку
showCard(currentIndex);

