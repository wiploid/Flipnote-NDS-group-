const quizData = [
    {
      question: "Выберите синоним 'however'",
      correct: "Nevertheless",
      options: ["Conundrum", "Nevertheless", "Prosperity"]
    },
    {
      question: "Выберите синоним 'busy'",
      correct: "Diligent",
      options: ["Diligent", "Pervasive", "Endeavor"]
    },
    {
      question: "Выберите синоним 'viable'",
      correct: "Sustainable",
      options: ["Eloquent", "Feasible", "Sustainable"]
    },
    {
      question: "Выберите синоним 'resilient'",
      correct: "Resilience",
      options: ["Resilience", "Intricate", "Contemplate"]
    },
    {
      question: "Выберите синоним 'articulate'",
      correct: "Eloquent",
      options: ["Eloquent", "Feasible", "Prosperity"]
    },
    {
      question: "Выберите синоним 'luxurious'",
      correct: "Exquisite",
      options: ["Exquisite", "Diligent", "Pervasive"]
    },
    {
      question: "Выберите синоним 'wealth'",
      correct: "Prosperity",
      options: ["Prosperity", "Endeavor", "Conundrum"]
    },
    {
      question: "Выберите синоним 'effort'",
      correct: "Endeavor",
      options: ["Endeavor", "Nevertheless", "Pervasive"]
    },
    {
      question: "Выберите синоним 'hardworking'",
      correct: "Diligent",
      options: ["Diligent", "Intricate", "Sustainable"]
    },
];

let currentQuizIndex = 0;
let answered = false;

const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const feedback = document.getElementById('feedback');
const restartButton = document.getElementById('restart-button');

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function showQuiz() {
  answered = false;

  const currentQuiz = quizData[currentQuizIndex];
  quizQuestion.textContent = currentQuiz.question;
  
  quizOptions.innerHTML = '';

  const shuffledOptions = shuffle([...currentQuiz.options]);
  
  shuffledOptions.forEach(optionText => {
    const option = document.createElement('div');
    option.classList.add('option');
    option.innerHTML = `<p>${optionText}</p>`;
    option.addEventListener('click', () => checkAnswer(optionText === currentQuiz.correct, option));
    quizOptions.appendChild(option);
  });

  // Анимация плавного появления вопроса
  quizOptions.classList.add('fade-in');
  setTimeout(() => {
    quizOptions.classList.remove('fade-in');
  }, 600);
}

function checkAnswer(isCorrect, selectedOption) {
  if (answered) return;
  answered = true;

  if (isCorrect) {
    playSound('data/audio/correct.mp3');
    showFeedback('Правильно!', 'green');
  } else {
    selectedOption.classList.add('wrong', 'shake');
    playSound('data/audio/wrong.mp3');
    setTimeout(nextQuestion, 1500);
  }
}

function showFeedback(message, color) {
  feedback.style.display = 'block';
  feedback.style.color = color;
  feedback.textContent = message;

  
  setTimeout(() => {
    feedback.style.display = 'none';
    nextQuestion();
  }, 1000);
}

function nextQuestion() {
  currentQuizIndex++;
  if (currentQuizIndex < quizData.length) {
    showQuiz();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  quizQuestion.textContent = 'Квиз завершён!';
  quizOptions.innerHTML = '';
  restartButton.style.display = 'block';
}

function restartQuiz() {
  currentQuizIndex = 0;
  restartButton.style.display = 'none';
  showQuiz();
}

function playSound(src) {
  const audio = new Audio(src);
  audio.play();
}

// Навешиваем обработчик на кнопку "Начать заново"
restartButton.addEventListener('click', restartQuiz);

// Старт квиза
showQuiz();