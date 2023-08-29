// Variables
let qAndA = document.querySelector('#q-and-a')
let score = 0
let startBtn = document.querySelector('#start-btn')

// Questions with answers
// let questions = [["<h2>In what decade is the show set?</h2>\nA. 1960's\nB. 1970's\nC. 1980's\nD."]]

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
    }
    ]

// Resets choice backgrounds to white for next question
const reset = () => {
    for (let i = 0; i < document.querySelector('#choices').children.length; i++) {
        document.querySelector('#choices').children[i].style.backgroundColor = 'white';
        document.querySelector('#choices').children[i].style.color = 'black';
    }

    for (let i = 0; i < document.querySelector('#choices').children.length; i++) {
        document.querySelector('#choices').children[i].disabled = false;
    }
}

// Function gets a random question and replaces text in Q and A section with
// the question and choices
const answer = () => {
    let randNum = Math.floor(Math.random() * questions.length);

    // Correct answer function
    const correctAnswer = (event) => {
        console.log("ran")
        score ++;
        console.log(score);
        document.querySelector('#score').innerText = `Score: ${score}`;
        // Changes background color of clicked answer to green and text color to white
        event.target.style.backgroundColor = 'green';
        event.target.style.color = 'white';

        for (let i = 0; i < document.querySelector('#choices').children.length; i++) {
            document.querySelector('#choices').children[i].disabled = true;
        }
    }

    // Wrong answer function
    const wrongAnswer = (event) => {
        score = 0;
        document.querySelector('#score').innerText = `Score: ${score}`;
        // Changes background color of clicked answer to red and text color to white
        event.target.style.backgroundColor = 'red';
        event.target.style.color = 'white';

        for (let i = 0; i < document.querySelector('#choices').children.length; i++) {
            if (document.querySelector('#choices').children[i].innerText === questions[randNum].answer) {
                document.querySelector('#choices').children[i].style.backgroundColor = 'green';
                document.querySelector('#choices').children[i].style.color = 'white';
            }
        }

        for (let i = 0; i < document.querySelector('#choices').children.length; i++) {
            document.querySelector('#choices').children[i].disabled = true;
        }
    } 

    document.getElementById('question').innerText = questions[randNum].question;
    // Goes through each button and adds a choice to it. Determines whether or
    // not it's the answer and adds the correct answer or wrong answer function
    for (let i = 0; i < document.querySelector('#choices').children.length; i++) {
        document.querySelector('#choices').children[i].innerText = questions[randNum].choices[i];
        if (document.querySelector('#choices').children[i].innerText === questions[randNum].answer) {
            document.querySelector('#choices').children[i].addEventListener("click", correctAnswer)
        } else {
            document.querySelector('#choices').children[i].addEventListener("click", wrongAnswer)
        }
    }
}

startBtn.addEventListener("click", function () {
    // Hides welcome message and 'please click to start'
    document.querySelector('#welcome').style.display = 'none';
    document.querySelector('#start-p').style.display = 'none';

    // Makes question & score appear, and 'start' turns to 'next question'
    qAndA.style.display = 'block';
    document.querySelector('#score').style.display = 'block';
    // If next question is clicked and question has already been answered, reset the background colors of the answers.
    if (document.querySelector('#choices').children[0].style.backgroundColor === 'green' || document.querySelector('#choices').children[1].style.backgroundColor === 'green' || document.querySelector('#choices').children[2].style.backgroundColor === 'green' || document.querySelector('#choices').children[3].style.backgroundColor === 'green') {
        reset();
        answer();
    } else {
        answer();
    };
    startBtn.style.display = 'none';
    document.getElementById('next-btn').style.display = 'block';
});

const nextQuestion = () => {
    if (document.querySelector('#choices').children[0].disabled === false) {
        alert("You didn't answer the question")
    } else if (document.querySelector('#choices').children[0].style.backgroundColor === 'green' || document.querySelector('#choices').children[1].style.backgroundColor === 'green' || document.querySelector('#choices').children[2].style.backgroundColor === 'green' || document.querySelector('#choices').children[3].style.backgroundColor === 'green') {
        reset();
        answer();
    } else {
        answer();
    };
}

document.querySelector('#next-btn').addEventListener("click", nextQuestion);