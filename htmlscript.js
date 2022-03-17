const quizDB = [
    {
        question: "Q.1: What is the full form of HTML?",
        a: "HighText Markup Language",
        b: "Hypertext Markup Language",
        c: "Hypertext Makeup Language",
        d: "None of the above",
        ans: "ans2"
    },
    {
        question: "Q.2:  How many sizes of headers are available in HTML by default?",
        a: "5",
        b: "1",
        c: "3",
        d: "6",
        ans: "ans4"
    },
    {
        question: "Q.3: What are the types of lists available in HTML?",
        a: "Ordered, Unordered Lists.",
        b: "Bulleted, Numbered Lists.",
        c: "Named, Unnamed Lists.",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q.4: We enclose HTML tags within?",
        a: "{}",
        b: "<>",
        c: "[]",
        d: "None of the above.",
        ans: "ans2"
    },
    {
        question: "Q.5: Which of the following is correct about HTML?",
        a: "HTML uses User Defined Tags.",
        b: "HTML uses tags defined within the language.",
        c: "Both A and B",
        d: "None of the above.",
        ans: "ans2"
    },
    {
        question: "Q.6: What is meant by an empty tag in HTML?",
        a: "There is no concept of an empty tag in HTML",
        b: "An empty tag cannot have any content within it",
        c: "An empty tag doesn't require a closing tag",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Q.7:  Which of the following properties is used to change the font of text?",
        a: "font-family",
        b: "font-size",
        c: "text-align",
        d: "All of the above",
        ans: "ans1"
    },
    {
        question: "Q.8: What tag is used to render an image on a webpage?",
        a: "img",
        b: "src",
        c: "image",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q.9: Apart from <i> tag, which of the following tag is used to render a text in italics?",
        a: "&lt;strong&gt;",
        b: "&lt;em&gt;",
        c: "&lt;br&gt;",
        d: "None of the above.",
        ans: "ans2"
    },
    {
        question: "Q.10: Which property is used to set border colors in HTML?",
        a: "border-color",
        b: "border",
        c: "Border-colour",
        d: "None of the above.",
        ans: "ans2"
    }


];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElment) => {
        if (curAnsElment.checked) {
            answer = curAnsElment.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElment) => curAnsElment.checked = false);
}

submit.addEventListener('click', () => {
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer);

    if (checkAnswer == quizDB[questionCount].ans) {
        score++;
    };
    questionCount++;
    deselectAll();
    if (questionCount < quizDB.length) {
        if (questionCount == quizDB.length - 1) {
            let x = document.getElementById("submit");
            x.style.backgroundImage = "linear-gradient(135deg, lightgreen, green)";
            x.style.color = "black";
            x.innerHTML = "Submit";
        }
        loadQuestion();
    } else {
        showScore.innerHTML = `
            <h3> Your Score: ${score}/${quizDB.length} ✌️</h3>
            <button class="btn" onclick="window.location.href = 'index.html'">Back to Main Menu</button>
        `;
        showScore.classList.remove('scoreArea');
    }
});