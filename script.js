let maxQuestions = 10;
let choices = Array.from(document.querySelectorAll('.choice'));
let question = document.querySelector('#question');
let score = 0;
let acceptingAnswers = true;
let questionCounter = 0;
let questions = [
    {
        question: "In what decade is the show set?",
        choices: ["A. 1960's", "B. 1970's", "C. 1980's", "D. 1990's"],
        answer: "C. 1980's"
    },

    {
        question: "What is putting stores out of business in season 3?",
        choices: ["A. The arcade", "B. Scoops Ahoy", "C. Starcourt Mall", "D. Angeles Movie Theater"],
        answer: "C. Starcourt Mall"
    },

    {
        question: "What is Eleven's full name?",
        choices: ["A. Claire Simmons", "B. Jane Ives", "C. El Brown", "D. Bailey Kelce"],
        answer: "B. Jane Ives"
    },

    {
        question: "Which song does Jonathan play for Will to help him feel safe in season 1?",
        choices: ["A. Should I Stay or Should I Go", "B. Rock You Like A Hurricane", "C. Girls, Girls, Girls", "D. Every Breath You Take"],
        answer: "A. Should I Stay or Should I Go"
    },

    {
        question: "What is the name of the arcade game that Dustin and Lucas play to determine the leader of their party in season 2?",
        choices: ["A. Pac-Man", "B. Centipede", "C. Donkey Kong", "D. Dig Dug"],
        answer: "D. Dig Dug"
    },

    {
        question: "In season 3, which character becomes possessed by the Mind Flayer?",
        choices: ["A. Mike Wheeler", "B. Billy Hargrove", "C. Max Mayfield", "D. Nancy Wheeler"],
        answer: "B. Billy Hargrove"
    },

    {
        question: "What is the name of the Russian scientist who helps the main characters in season 3?",
        choices: ["A. Alexei", "B. Brenner", "C. Vladimir", "D. Shevchenko"],
        answer: "A. Alexei"
    },

    {
        question: "What is the name of the lab that is responsible for opening a portal to the Upside Down?",
        choices: ["A. Stan's Steelworks", "B. Brenner CIA", "C. Unknown", "D. Hawkins National Laboratory"],
        answer: "D. Hawkins National Laboratory"
    },

    {
        question: "Which two characters worked at The Hawkins Post before getting fired?",
        choices: ["A. Mike and El", "B. Jonathan and Nancy", "C. Steve and Robin", "D. Billy and Heather"],
        answer: "B. Jonathan and Nancy"
    },

    {
        question: "What game do the boys of Stranger Things like to play?",
        choices: ["A. Dungeons and Dragons", "B. Fortnite", "C. Monopoly", "D. Cops and Robbers"],
        answer: "A. Dungeons and Dragons"
    }
]

const startGame = () => {
    score = 0;
    acceptingAnswers = true;
    questionCounter = 0;
    nextQuestion();
}

const nextQuestion = () => {
    document.querySelector('#barFill').style.width = `${(questionCounter/maxQuestions) * 100}%`
    if (questionCounter >= maxQuestions) {
        acceptingAnswers = false;
        document.querySelector('#score').style.display = 'none';
        document.querySelector('#progressBar').style.display = 'none';
        question.innerText = `Out of a possible score of 10, you scored ${score}! That is good for a ${Math.round((score/maxQuestions) * 100)}%!`;
        for (const choice of choices) {
            choice.style.display = 'none';
        };
        document.querySelector('#playAgain').style.display = 'inline';
        document.querySelector('#demogorgon').style.display = 'inline';
        document.querySelector('#demogorgon').style.width = '300px';
        document.querySelector('#demogorgon').style.marginTop = '20px';
    } else {
        acceptingAnswers = true;
        question.innerText = questions[questionCounter].question;
        for (let i = 0; i < choices.length; i++) {
            choices[i].style.background = 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(119,0,20,1) 71%, rgba(255,0,0,1) 95%)'
            choices[i].innerText = questions[questionCounter].choices[i]
        }
    }
}

choices.forEach(function(choice) {
    choice.addEventListener("click", function (event) {
        if (!acceptingAnswers) {
            return;
        } else if (event.target.innerText === questions[questionCounter].answer) {
            score ++;
            choice.style.background = 'green';
            acceptingAnswers = false;
            questionCounter++;
            document.querySelector('#score').innerText = `Score: ${score}`;
            document.querySelector('#barFill').style.width = `${(questionCounter/maxQuestions) * 100}%`;
        } else {
            choice.style.background = 'red';
            acceptingAnswers = false;
            questionCounter++;
            document.querySelector('#barFill').style.width = `${(questionCounter/maxQuestions) * 100}%`;
        };

        setTimeout(nextQuestion, 1000)
    })
})

startGame();

document.querySelector('#playAgain').addEventListener("click", startGame());
    
// Add event listeners to buttons
// Next question function should run when button is clicked
