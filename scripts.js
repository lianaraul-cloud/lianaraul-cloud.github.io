document.addEventListener('DOMContentLoaded', function() {
    const hoverSound = document.getElementById('hover-sound');
    const clickSound = document.getElementById('click-sound');
    const soundLinks = document.querySelectorAll('.sound');

    soundLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            hoverSound.currentTime = 0;
            hoverSound.play().catch(() => {
                console.log('Hover sound waiting for initial user interaction.');
            });
        });

        link.addEventListener('click', function(event) {
            const destination = this.getAttribute('href');
            if(!destination || destination === '#' || destination.startsWith('javascript:')) {
                return;
            }
            event.preventDefault();
            clickSound.currentTime = 0;
            clickSound.play().catch(() => {});
            clickSound.onended = () => {
                window.location.href = destination

            };
        setTimeout(() => {
            window.location.href = destination;
         },250);
        });  
    });

});


    const quizDatabase = {
    culture: [
        {
            question: "When do Filipinos typically start celebrating and preparing for Christmas?",
            options: ["September", "October", "November", "December"],
            answer: "September",
            explanation: "Philippines is the longest country that celebrates Christmas, as they start in September, marking the beginning of the 'Ber' months"
        },
        {
            question: "What is the tradtional house called in the Philippines that is made of bamboo and nipa palm?",
            options: ["Bahay na Bato", "Bahay Kubo", "Bahay na Lata", "Bahay na Kahoy"],
            answer: "Bahay Kubo",
            explanation: "A Bahay Kubo is a traditional Filipino house made from bamboo and nipa palm."
        },
        {
            question: "What formality is used when addressing elders or people of higher status in Filipino culture?",
            options: ["Po and Opo", "Mabuhay", "Kumusta", "Salamat"],
            answer: "Po and Opo",
            explanation: "Filipinos use 'po' and 'opo' to show respect when speaking to elders."
        },
        {
            question: "What is the formal attire worn by Filipino men and women during special occasions?",
            options: ["Kimono and Hanbok", "Sari and Salwar Kameez", "Cheongsam and Qipao", "Barong Tagalog and baro't saya"],
            answer: "Barong Tagalog and baro't saya",
            explanation: "The Barong Tagalog (men) and baro't saya (women) are traditional Filipino formal wear."
        },
        
        {
            question: "What is the traditional Filipino dance that involves balancing oil lamps on the head and hands?",
            options: ["Tinikling", "Singkil", "Pandanggo sa Ilaw", "Cariñosa"],
            answer: "Pandanggo sa Ilaw",
            explanation: "Pandanggo sa Ilaw is a dance where performers balance oil lamps while dancing gracefully."
        }
    ],
    history: [
        {
            question:"Who is known as the national hero of the Philippines?",
            options: ["Andres Bonifacio", "Jose Rizal", "Emilio Aguinaldo", "Apolinatio Mabini"],
            answer: "Jose Rizal",
            explanation: "Jose Rizal’s writings inspired Filipinos to fight for independence through peaceful reform."
        }
    ],
    popculture: [
        {
            question: "Which famous Filipino singer known as a Disney legend for being the first and only singer to voice 2 Disney character?",
            options: ["Regine Velasquez", "Moira Dela Torre", "Sarah Geronimo", "Lea Salonga"],
            answer: "Lea Salonga",
            explanation: "Lea Salonga is a singer and actress, whom Disney inducted as a Disney Legend for being the voice of Jasmine and Mulan, imacting Disney's animated musical history.",
        }

    ]
};
 const correctAudio = document.getElementById('correct-sound');
const incorrectAudio = document.getElementById('incorrect-sound');

let currentTopic = '';
let questionIndex = 0;
let runningScore = 0;

function initiateQuiz(topicKey) {
    currentTopic = topicKey;
    questionIndex = 0;
    runningScore = 0;

    document.getElementById("results-view").classList.add('hidden');
    document.getElementById("quiz-view").classList.remove('hidden');
    renderActiveQuestion();
}

function renderActiveQuestion() {
    document.getElementById("next-button").style.display = "none";
    document.getElementById("see-results-button").classList.add("hidden");
    document.getElementById("explanation").innerText = "";
    const optionsContainer = document.getElementById("options-box");
    optionsContainer.innerHTML = "";
    const dataset = quizDatabase[currentTopic];
    const activeQuestion = dataset[questionIndex];

    document.getElementById("progress").innerText = `Question ${questionIndex + 1} of ${dataset.length}`;
    document.getElementById("question").innerText = activeQuestion.question;
     const hoverSound = document.getElementById('hover-sound');
    activeQuestion.options.forEach(choiceText => {
        const choiceButton = document.createElement("button");
        choiceButton.innerText = choiceText;
        choiceButton.classList.add("option-button");

        choiceButton.addEventListener("mouseenter", () => {
            hoverSound.currentTime = 0;
            hoverSound.play().catch(() => {});
        });

        choiceButton.onclick = () => evaluateAnswer(choiceText, choiceButton);
        optionsContainer.appendChild(choiceButton);
    });
}

function evaluateAnswer(selectedOption, buttonElement) {
    const correctString = quizDatabase[currentTopic][questionIndex].answer;
    const explanationText = quizDatabase[currentTopic][questionIndex].explanation;
    const optionsContainer = document.getElementById("options-box");
    const allButtons = optionsContainer.querySelectorAll("button");

    allButtons.forEach(btn => btn.disabled = true);

    if (selectedOption === correctString) {
        buttonElement.style.backgroundColor = "#c8e6c9";
        buttonElement.style.color = "#1d351e";
        buttonElement.style.borderColor = "#274128";
        runningScore++;
        if (correctAudio) { correctAudio.currentTime = 0; correctAudio.play().catch(() => {}); }
    } else {
        buttonElement.style.backgroundColor = "#be646d";
        buttonElement.style.color = "#ffffff";
        buttonElement.style.borderColor = "#5c1f22";

        allButtons.forEach(btn => {
            if (btn.innerText === correctString) {
                btn.style.backgroundColor = "#c8e6c9";
                btn.style.color = "#1d351e";
                btn.style.borderColor = "#274128";
            }
        });
        if (incorrectAudio) { incorrectAudio.currentTime = 0; incorrectAudio.play().catch(() => {}); }
    }

    document.getElementById("explanation").innerText = explanationText;

    const totalQuestions = quizDatabase[currentTopic].length;
    if (questionIndex + 1 === totalQuestions) {
        document.getElementById("next-button").style.display ="none";
        document.getElementById("see-results-button").classList.remove("hidden");
    }else {
        document.getElementById('next-button').style.display = "block";
    }
}

function moveToNext() {
    questionIndex++;
    const TotalQuestions = quizDatabase[currentTopic].length;
    if (questionIndex < TotalQuestions) {
        renderActiveQuestion();
    } else {
        showResults();
    }
}
function showResults() {
    document.getElementById("quiz-view").classList.add("hidden");
    document.getElementById("results-view").classList.remove("hidden");

    const totalQuestions = quizDatabase[currentTopic].length;
    document.getElementById("score-summary").innerText = `You finished the ${currentTopic.toUpperCase()} quiz with a score of ${runningScore} out of ${totalQuestions}.`;
}
function resetToQuiz() {
    document.getElementById("results-view").classList.add("hidden");
    document.getElementById("quiz-view").classList.remove("hidden");
}

const urlParams = new URLSearchParams(window.location.search);
const topic = urlParams.get("topic");

if (topic) {
    initiateQuiz(topic);
}