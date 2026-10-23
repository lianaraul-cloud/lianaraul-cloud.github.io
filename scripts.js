
// plays sound effects when user hover over or click buttons and links
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
    const soundButtons = document.querySelectorAll('button.sound');
    soundButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            clickSound.currentTime = 0;
            clickSound.play().catch(() => {});
        });
    });

});

    // stores all the quiz questions, answers and explanation
    const quizDatabase = {
    // Filipino culture quiz question
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
        },
        {
            question: "What is the Philippines curency called?",
            options: ["Pounds", "Peso", "Yen", "Won"],
            answer: "Peso",
            explanation: "Peso, also called Piso by the locals, is used due to Philippines being colonised by Spain."
        },
        {
            question: "What is the most common way of transport used in the Philippines?",
            options: ["Car", "Bus", "Jeep", "Tricycle"],
            answer: "Jeep",
            explanation: "Jeeps evolved from post-World War II US Military Jeeps and are now used as a public transport that are colourfully decorated."
        },
        {
            question: "Which Filipino dessert is made of shaved ice, milk, and mixed toppings?",
            options: ["Bibingka", "Leche Flan", "Turon", "Halo-Halo"],
            answer: "Halo-Halo",
            explanation: "Halo-Halo is a popular cold dessert with ice, milk, fruits, beans, and leche flan."
        },
        {
            question: "What is the national bird of the Philippines?",
            options: ["Philippine Eagle", "Tinkling Cristicola", "Maleo", "Crested Ibis"],
            answer: "Philippine Eagle",
            explanation: "Philippine Eagle, also known as monkey-eating eagle, is the strongest easgle in the world and represents the strength, power, uniqueness, and love for freedom of the Filipino people."
        },
        {
            question: "WHat is the national anthem of the Philippines?",
            options: ["Kassaman", "Lupang Hinirang", "Motherland", "Marcha Real"],
            answer: "Lupang Hinirang",
            explanation: "Lupang Hinirang is the national anthem in the Philippines, celebrating the country's freedom, national beauty, and resisntance against foreign colonisers."
        },


    ],
    // FIlipino history quiz question
    history: [
        {
            question:"Who is known as the national hero of the Philippines?",
            options: ["Andres Bonifacio", "Jose Rizal", "Emilio Aguinaldo", "Apolinario Mabini"],
            answer: "Jose Rizal",
            explanation: "Jose Rizal’s writings inspired Filipinos to fight for independence through peaceful reform."
        },
        {
            question: "When did the Philippines declare independence from Spain?",
            options: ["June 12, 1898", "July 4, 1946", "August 21, 1896", "December 30, 1896"],
            answer: "June 12, 1898",
            explanation: "Emilio Aguinaldo declared independence in Kawit, Cavite on June 12, 1898."
        },
        {
            question: "Which country colonized the Philippines after Spain?",
            options: ["China", "Japan", "USA", "UK"],
            answer: "USA",
            explanation: "The USA took control after the Spanish-American War in 1898."
        },
        {
            question: "Which Filipino hero is known as the 'Brains of the Revolution'?",
            options: ["Apolinario Mabini", "Andres Bonifacio", "Emilio Jacinto", "Bongbong Marcos"],
            answer: "Apolinario Mabini",
            explanation: "Mabini guided the revolutionary government with his political writings and leadership."
        },
        {
            question: "Who was the first president of the Philippines?",
            options: ["Melchora Aquino", "Andres Bonifacio", "Gregorio del Pilar", "Emilio Aguinaldo"],
            answer: "Emilio Aguinaldo",
            explanation: "Aguinaldo is a Filipino revolutionary, politician, and military leader who served as president of the Philippines from 1899 to 1901."
        },
        {
            question: "Which president is in the ₱20 bill?",
            options: ["BongBong Marcos", "Manuel L. Quezon", "Ninoy Aquino", "Rodrigo Duterte"],
            answer: "Manuel L. Quezon",
            explanation: "Manuel L. Quezon served as a president in November 15, 1935, until his death on August 1, 1944, is on the ₱20 bill since 1967."
        },
        {
            question: "Who killed the portuguese explorer, Ferdinand Magellan?",
            options: ["Lapulapu", "Sarah Duterte", "Gabriela Silang", "Heneral Luna"],
            answer: "Lapulapu",
            explanation: "Lapulapu is a Filipino tribal leader who killed Magellan to keep their independence in the Battle of Mactan on April 27, 1521."
        },
        {
            question: "When did Ferdinand Marcos publicly annouce martial law?",
            options: ["October 24, 1967", "March 7, 1968", "September 23, 1972", "April 6, 1970"],
            answer: "September 23, 1972",
            explanation: "Ferdinand Marcos declared martial law to bypass term limits and stay in power, which led him to stay as president for 21 years."
        },
        {
            question: "How many presidents has Philippines had?",
            options: ["19", "20", "18", "17"],
            answer: "17",
            explanation: "Before Marcos, many presidents only served for a few years, so in 1987, a rule was made so that a president may only rule for 6 years."
        },
        {
            question: " What is the oldest known written legal document in the Philippines?",
            options: ["Lumang Tipan", "Noli Me Tángere", "Laguna Copperplate Inscription", "Ang Paboritong Libro ni Hudas"],
            answer: "Laguna Copperplate Inscription",
            explanation: "The Laguna Copperplate Inscription is a calendar-dated written document written in Old Malay dating back to April 12, 900 CE ."
        },
    ],
    // Filipino pop culture quiz questions 
    popculture: [
        {
            question: "Which famous Filipino singer known as a Disney legend for being the first and only singer to voice 2 Disney character?",
            options: ["Regine Velasquez", "Moira Dela Torre", "Sarah Geronimo", "Lea Salonga"],
            answer: "Lea Salonga",
            explanation: "Lea Salonga is a singer and actress, whom Disney inducted as a Disney Legend for being the voice of Jasmine and Mulan, impacting Disney's animated musical history.",
        },
        {
            question: "Which Filipino boy band become globally known for their song 'Gento'?",
            options: ["BGYO", "The Juans", "SB19", "Ben&Ben"],
            answer: "SB19",
            explanation: "SB19 gained international recognition and became the first Filipino act nominated for Billboard Music Awards."
        },
        {
           question: "Which Filipino actress is knows as the 'Millennial Queen of Philippine Movies'?",
            options: ["Kathryn Bernardo", "Liza Soberano", "Nadine Lustre", "Julia Burretto"],
            answer: "Kathryn Bernardo",
            explanation: "Kathryn Bernardo earned the title due to her record‑breaking films and massive influence." 
        },
        {
            question: "What is the longest-running noontime show in the Philippines?",
            options: ["Eat Bulaga!", "It's Showtime", "Wowowin", "ASAP"],
            answer: "Eat Bulaga!",
            explanation: "Eat Bulaga! has been airing since 1979, making it the longest-running noontime show."
        },
           {
            question: "Which Filipino love team is known as 'LizQuen'?",
            options: ["Kathryn Bernardp and Daniel Padilla", "Nadine Lustre and James Reid", "Julia Barrtto and Josua Garcia", "Liza Soberano and Enrique Gil"],
            answer: "Liza Soberano and Enrique Gil",
            explanation: "LizQuen became one of the most popular love teams through their movies and teleseryes."
        },
        {
            question: "Which Filipino singer sang the viral hit 'Buwan'?",
            options: ["Arthur Nery", "Zack Tubudlo", "Juan Karlos", "Adie"],
            answer: "Juan Karlos",
            explanation: "'Buwan' became a massive OPM (Original Philipino Music) with miliions of streams."
        },
        {
            question: "Who is the only professional boxer to become the only eight-division world champion in boxing history?",
            options: ["Luisito Espinosa", "Donnie Nietes", "Pancho Villa", "Manny Pacquiao"],
            answer: "Manny Pacquiao", 
            explanation: "Manny Pacquiao is widely regarded as one of the greatest boxers of all time."
        },
        {
            question: "Which OPM (Original Pilipino Mucic) is known for the song 'Kathang Isip'?",
            options: ["Silent Sanctuary", "Parokya ni Edgar", "Ben&Ben", "December Avenue"],
            answer: "Ben&Ben",
            explanation: "Ben&Ben is known for emotional folk-pop song."
        },
        {
            question: "What is Vice Ganda's real name?",
            options: ["Richard Reyes Faulkerson Jr.", "Jose Marie Borja Vicera", "Donato Antonio Laxa Pangilinan", "odel Pacheco Nacianceno"],
            answer: "Jose Marie Borja Vicera",
            explanation: "Jose Marie Borja Vicera started getting called 'Vice Ganda' in the start of his career, 1997, and is now a comedian, television host, actor, singer, and businessman."
        },
        {
            question: "Who is the Co-founder, President, and Creative Director of the record label, G Music?",
            options: ["Sarah Geronimo", "Bea Alonzo", "Kim Chiu", "Andrea Brillantes"],
            answer: "Sarah Geronimo",
            explanation: "Sarah Geronimo founded G Music alongside Matteo Guidicelli in 2025."
        },

    ]
};
//Audio effect for correct and incorrect answers
 const correctAudio = document.getElementById('correct-sound');
const incorrectAudio = document.getElementById('incorrect-sound');

let currentTopic = '';
let questionIndex = 0;
let runningScore = 0;
// variables used to track quiz, progress, and scores
function initiateQuiz(topicKey) {
    currentTopic = topicKey;
    questionIndex = 0;
    runningScore = 0;

    document.getElementById("results-view").classList.add('hidden');
    document.getElementById("quiz-view").classList.remove('hidden');
    renderActiveQuestion();
}
// Display the currect question and generate answer buttons
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
// Check whether the selected answer is correct
function evaluateAnswer(selectedOption, buttonElement) {
    const correctString = quizDatabase[currentTopic][questionIndex].answer;
    const explanationText = quizDatabase[currentTopic][questionIndex].explanation;
    const optionsContainer = document.getElementById("options-box");
    const allButtons = optionsContainer.querySelectorAll("button");

    // prevent the user from selecting another answer
    allButtons.forEach(btn => btn.disabled = true);

    // highlight the selected answer and play the appropriate sound effect
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

    // Display the explation for the correct answer
    document.getElementById("explanation").innerText = explanationText;

    // Determine whether to show the next button or See result button
    const totalQuestions = quizDatabase[currentTopic].length;
    if (questionIndex + 1 === totalQuestions) {
        document.getElementById("next-button").style.display ="none";
        document.getElementById("see-results-button").classList.remove("hidden");
    }else {
        document.getElementById('next-button').style.display = "block";
    }
}

// move to the next question
function moveToNext() {
    questionIndex++;
    const TotalQuestions = quizDatabase[currentTopic].length;
    if (questionIndex < TotalQuestions) {
        renderActiveQuestion();
    } else {
        showResults();
    }
}
// shows user's result and feedback message
function showResults() {
    document.getElementById("quiz-view").classList.add("hidden");
    document.getElementById("results-view").classList.remove("hidden");


    const totalQuestions = quizDatabase[currentTopic].length;
    const scoreSummary = document.getElementById("score-summary");
    const resultMessage = document.getElementById("result-message");
    scoreSummary.innerText = `You finished the ${currentTopic.toUpperCase()} quiz with a score of ${runningScore} out of ${totalQuestions}.`;

// Generate feedback based on the user's score
    if (runningScore === totalQuestions) {
        resultMessage.innerText = "Perfect score! Ang galing mo!";

    } else if (runningScore >= totalQuestions * 0.7) {
        resultMessage.innerText = "Great job! You really know your stuff!";

    }else if (runningScore >= totalQuestions * 0.4) {
        resultMessage.innerText = "Not bad! Keep learning and try again!";

    }else {
        resultMessage.innerText = "It's okay! You'll do better next time!";
    }
    
}   // Restart the quiz when Try Again button is clicked
    document.getElementById("try-again-button").addEventListener("click", () => {
        runningScore = 0;
        questionIndex = 0;
        selectedAnswer = null;

        document.getElementById("results-view").classList.add("hidden");
        document.getElementById("quiz-view").classList.remove("hidden");


        renderActiveQuestion();
    });
// restart quiz and score
function resetToQuiz() {
    document.getElementById("results-view").classList.add("hidden");
    document.getElementById("quiz-view").classList.remove("hidden");
}

// Read the selected quiz from the URL
const urlParams = new URLSearchParams(window.location.search);
const topic = urlParams.get("topic");

// Automatically load the chosen quiz category
if (topic) {
    initiateQuiz(topic);
}