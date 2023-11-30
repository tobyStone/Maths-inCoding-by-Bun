// Global variables on which pass or fail of angles quiz is determined
var correct = 0;
var preventDefault = 0;

// Function to calculate score in angles quiz, and then determine pass or fail
function getAnglesResults(correct) {
    var anglesGrade = {
        correct: []
    };

    anglesGrade.correct.push(correct);

    // Assuming you want to send data using Fetch API, replace the URL with your endpoint
    fetch("/assets/maths_questions.html", {
        method: "POST",
        body: new URLSearchParams(anglesGrade),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
}

// Add a submit event listener to the form
var questionForm = document.getElementById('question-form');

questionForm.addEventListener('submit', function (e) {
    if (document.querySelectorAll('input[class^="1"]:checked').length === 0) {
        alert('Oops! You did not select an answer.');
        preventDefault = preventDefault + 1;
        e.preventDefault();
    }

    if (document.querySelectorAll('input[class^="1"]:checked').length > 1) {
        alert('Oops! You selected too many answers.');
        preventDefault = preventDefault + 1;
        e.preventDefault();
    }

    if (document.querySelector('input[value="1a"]').checked && document.querySelectorAll('input[class^="1"]:checked').length === 1) {
        correct = correct + 1;
    }

    if (document.querySelectorAll('input[class^="2"]:checked').length === 0) {
        alert('Oops! You did not select an answer.');
        preventDefault = preventDefault + 1;
        e.preventDefault();
    }

    if (document.querySelectorAll('input[class^="2"]:checked').length > 1) {
        alert('Oops! You selected too many answers.');
        preventDefault = preventDefault + 1;
        e.preventDefault();
    }

    if (document.querySelector('input[value="2a"]').checked && document.querySelectorAll('input[class^="2"]:checked').length === 1) {
        correct = correct + 1;
    }

    if (document.querySelectorAll('input[class^="3"]:checked').length === 0) {
        alert('Oops! You did not select an answer.');
        preventDefault = preventDefault + 1;
        e.preventDefault();
    }

    if (document.querySelectorAll('input[class^="3"]:checked').length > 1) {
        alert('Oops! You selected too many answers.');
        preventDefault = preventDefault + 1;
        e.preventDefault();
    }

    if (document.querySelector('input[value="3d"]').checked && document.querySelectorAll('input[class^="3"]:checked').length === 1) {
        correct = correct + 1;
    }

    if ((correct >= 2) && (preventDefault === 0)) {
        alert('Well done. Back to the Scratch video...');
        e.preventDefault();
        window.location.href = 'JQPlayer.html';
    }

    if ((correct < 2) && (preventDefault === 0)) {
        alert('Let\'s learn more about angles...');
        e.preventDefault();
        window.location.href = 'JQPlayerAngles.html';
    }

    getAnglesResults(correct);
});
