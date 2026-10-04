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
            clickSound.onended = () => {
                window.location.href = destination;
            };
        setTimeout(() => {
            window.location.href = destination;
         },250);
        });  
    });
});

function checkQuestion1(answer) {
    const correctSound = document.getElementById('correct-sound');
    const incorrectSound = document.getElementById('incorrect-sound');
    
    if (answer == 'correct') {
        correctSound.currentTime = 0;
        correctSound.play().catch(() => {});
        document.getElementById('answer1').innerHTML = "Correct! The Philippines tends to celebrate Christmas for the longest time in the world, starting from September 1st to January 6th.";
        document.getElementById('answer1').style.color = "green";
    } else {
        incorrectSound.currentTime = 0;
        incorrectSound.play().catch(() => {});
        document.getElementById('answer1').innerHTML = "Incorrect. The correct answer is: September. The Philippines tends to celebrate Christmas for the longest time in the world, starting from September 1st to January 6th.";
        document.getElementById('answer1').style.color = "red";
    }
    setTimeout(() => {
        window.location.href = "culture2.html";
    }, 4000);
 }

 function checkQuestion2(answer) {
     setTimeout(() => {
        window.location.href = "history2.html";
    }, 4000);
 }