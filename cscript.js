const quizDB = [
    {
        question: "Q.1: Which is valid C expression?",
        a: "int my_num = 100,000;",
        b: "int my_num = 100000;",
        c: "int my num = 1000;",
        d: "int $my_num = 10000;",
        ans: "ans2"
    },
    {
        question: "Q.2: What is an example of iteration in C?",
        a: "for",
        b: "while",
        c: "do-while",
        d: "All of the above",
        ans: "ans4"
    },
    {
        question: "Q.3: What is #include <stdio.h>?",
        a: "Preprocessor directive",
        b: "Inclusion directive",
        c: "File inclusion directive",
        d: "None of the mentioned",
        ans: "ans1"
    },
    {
        question: "Q.4: Which of the following return-type cannot be used for a function in C?",
        a: "char *",
        b: "void",
        c: "struct",
        d: "None of the above.",
        ans: "ans4"
    },
    {
        question: "Q.5: When a C program is started, O.S environment is responsible for opening file and providing pointer for that file?",
        a: "Standard input",
        b: "Standard output",
        c: "Standard error",
        d: "All of the above.",
        ans: "ans4"
    },
    {
        question: "Q.6: What is the sizeof(char) in a 32-bit C compiler?",
        a: "1 bit",
        b: "2 bits",
        c: "1 byte",
        d: "2 bytes",
        ans: "ans3"
    },
    {
        question: "Q.7: What is the 16-bit compiler allowable range for integer constants?",
        a: "-3.4e38 to 3.4e38",
        b: "-32767 to 32768",
        c: "-32668 to 32667",
        d: "-32768 to 32767",
        ans: "ans4"
    },
    {
        question: "Q.8: What does this declaration mean?     int x : 4;",
        a: "X is a four-digit integer.",
        b: "X cannot be greater than a four-digit integer.",
        c: "X is a four-bit integer.",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Q.9: Why is a macro used in place of a function?",
        a: "It reduces execution time.",
        b: "It reduces code size.",
        c: "It increases execution time.",
        d: "It increases code size.",
        ans: "ans2"
    },
    {
        question: "Q.10: How many times will the following loop execute?    for(j = 1; j <= 10; j = j-1)",
        a: "forever",
        b: "never",
        c: "0",
        d: "1",
        ans: "ans1"
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