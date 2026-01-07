// State management
let currentQuestionIndex = 0;
let answers = {};
let totalScore = 0;

// DOM elements
const quizContainer = document.getElementById('quiz-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const resultsDiv = document.getElementById('results');
const progressFill = document.getElementById('progress-fill');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const restartBtn = document.getElementById('restart-btn');

// Initialize the quiz
function init() {
    totalQuestionsSpan.textContent = questions.length;
    displayQuestion(currentQuestionIndex);
    updateProgress();
}

// Display a question
function displayQuestion(index) {
    const question = questions[index];

    let html = `
        <div class="question-card">
            <h2>Question ${question.id}</h2>
            <p class="question-text">${question.question}${question.multiple ? ' **' : ''}</p>
            ${question.multiple ? '<p class="multiple-info">(Plusieurs réponses possibles)</p>' : ''}
            <div class="options">
    `;

    question.options.forEach((option, optionIndex) => {
        const inputType = question.multiple ? 'checkbox' : 'radio';
        const inputName = `question-${question.id}`;
        const inputId = `q${question.id}-o${optionIndex}`;
        const isChecked = answers[question.id] && answers[question.id].includes(optionIndex) ? 'checked' : '';

        html += `
            <div class="option">
                <input
                    type="${inputType}"
                    id="${inputId}"
                    name="${inputName}"
                    value="${optionIndex}"
                    ${isChecked}
                    onchange="handleAnswerChange(${question.id}, ${optionIndex}, ${question.multiple})"
                >
                <label for="${inputId}">
                    ${option.text}
                </label>
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;

    quizContainer.innerHTML = html;
}

// Handle answer change
function handleAnswerChange(questionId, optionIndex, isMultiple) {
    if (isMultiple) {
        // For multiple choice questions
        if (!answers[questionId]) {
            answers[questionId] = [];
        }

        const index = answers[questionId].indexOf(optionIndex);
        if (index > -1) {
            answers[questionId].splice(index, 1);
        } else {
            answers[questionId].push(optionIndex);
        }

        // Remove empty arrays
        if (answers[questionId].length === 0) {
            delete answers[questionId];
        }
    } else {
        // For single choice questions
        answers[questionId] = [optionIndex];
    }
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressFill.style.width = progress + '%';
    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    // Update button states
    prevBtn.disabled = currentQuestionIndex === 0;

    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
}

// Navigation handlers
prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
        updateProgress();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
        updateProgress();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

submitBtn.addEventListener('click', () => {
    calculateScore();
    displayResults();
});

restartBtn.addEventListener('click', () => {
    // Reset everything
    currentQuestionIndex = 0;
    answers = {};
    totalScore = 0;
    resultsDiv.style.display = 'none';
    document.querySelector('.container > header').style.display = 'block';
    document.getElementById('quiz-container').parentElement.querySelector('.navigation').style.display = 'flex';
    document.getElementById('progress-bar').style.display = 'block';
    document.getElementById('progress-text').style.display = 'block';
    init();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Calculate the total score
function calculateScore() {
    totalScore = 0;

    Object.keys(answers).forEach(questionId => {
        const question = questions.find(q => q.id === parseInt(questionId));
        const selectedOptions = answers[questionId];

        selectedOptions.forEach(optionIndex => {
            const optionValue = question.options[optionIndex].value;
            totalScore += optionValue;
        });
    });
}

// Display results based on score
function displayResults() {
    const scoreDisplay = document.getElementById('score-display');
    const interpretation = document.getElementById('interpretation');

    scoreDisplay.innerHTML = `<h3>Votre score: ${totalScore}</h3>`;

    let resultText = '';
    let resultClass = '';

    if (totalScore <= 4) {
        resultClass = 'result-carre-extreme';
        resultText = `
            <h3>Jusque 4 : VOUS ÊTES UN CARRÉ</h3>
            <p>
                Maniaque et psychorigide jusqu'à la névrose, vous n'aimez pas que les invités gardent
                leurs chaussures chez vous (vous aimez peu les invités de manière générale), prévoyez l'ensemble
                de vos repas de la semaine en avance, êtes probablement insomniaque, lavez régulièrement les
                murs de votre appartement et nécessitez une thérapie.
            </p>
        `;
    } else if (totalScore >= 5 && totalScore <= 14) {
        resultClass = 'result-carre';
        resultText = `
            <h3>De 5 à 14 : VOUS ÊTES UN CARRÉ</h3>
            <p>
                Tranche la plus rare de la population, correspondant à une personnalité rigide ayant su
                s'adapter pour évoluer, vous êtes capable de flexibilité dans les situations extrêmes et faites fi des
                traces de doigts laissés sur les vitres par vos invités. Vous posez les pieds sur votre table basse mais
                votre paupière tressaute si vos amis en font de même (vous parvenez néanmoins à ne pas faire de
                remarque).
            </p>
        `;
    } else if (totalScore >= 14 && totalScore <= 24) {
        resultClass = 'result-carre-leger';
        resultText = `
            <h3>De 14 à 24 : VOUS ÊTES UN CARRÉ LÉGER</h3>
            <p>
                Fiable et agréable, vous êtes un carré léger qui savez profiter de la vie. Vous êtes
                capable de mettre au point des plans tout aussi bien que de les laisser tomber sans prendre de
                xanax. Vous avez des poils de chat sur votre t-shirt et trébuchez de temps en temps, ce qui vous
                donne l'air sympathique.
            </p>
        `;
    } else if (totalScore >= 25 && totalScore <= 34) {
        resultClass = 'result-rond';
        resultText = `
            <h3>De 25 à 34 : VOUS ÊTES UN ROND</h3>
            <p>
                En rond accommodant, vous connaissez vos failles et faites généralement en sorte
                qu'elles n'impactent pas trop votre entourage. Vous êtes donc apprécié de vos pairs et menez une
                existence paisible malgré quelques frayeurs récurrentes (« MES CLÉS DE VOITURE ! »).
            </p>
        `;
    } else if (totalScore >= 35 && totalScore <= 44) {
        resultClass = 'result-rond-moyen';
        resultText = `
            <h3>De 35 à 44 : VOUS ÊTES UN ROND</h3>
            <p>
                Votre fonctionnement vous fait régulièrement perdre du temps et de l'argent et au
                mieux faire rire, au pire agacer vos proches qui aimez vous-même parce que vous mettez de votre salon. En
                un bon vivant et vous plaisez à dire que vous suivez le flow et l'aventure, attention néanmoins
                votre score indique simplement que vous êtes quelqu'un qui toucher les éléments de la cuisine
                avec vos doigts gras quand vous faites à manger.
            </p>
        `;
    } else {
        resultClass = 'result-rond-extreme';
        resultText = `
            <h3>Plus de 44 : VOUS ÊTES UN ROND EXTRÊME</h3>
            <p>
                Complètement décérébré, il est temps de vous prendre en main. Vous roulez
                aléatoirement à travers le monde, vos amis vous aiment pour votre spontanéité mais vous donnent
                rdv 1h30 à l'avance et vous craignent lorsque vous venez chez eux. Vous vivez dans la crasse
                dignement ou avez fait l'acquisition d'un carré partageant le logis et assurant les tâches
                quotidiennes.
            </p>
        `;
    }

    interpretation.innerHTML = `<div class="result-box ${resultClass}">${resultText}</div>`;

    // Hide quiz, show results
    document.querySelector('.container > header').style.display = 'none';
    quizContainer.style.display = 'none';
    document.getElementById('quiz-container').parentElement.querySelector('.navigation').style.display = 'none';
    document.getElementById('progress-bar').style.display = 'none';
    document.getElementById('progress-text').style.display = 'none';
    resultsDiv.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize the quiz when the page loads
window.addEventListener('DOMContentLoaded', init);
