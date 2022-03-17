const quizDB = [
    {
        question: "Q.1: Which of the following is the address operator?",
        a: "@",
        b: "#",
        c: "&",
        d: "%",
        ans: "ans3"
    },
    {
        question: "Q.2: Which of the following features must be supported by any programming language to become a pure object-oriented programming language?",
        a: "Encapsulation",
        b: "Inheritance",
        c: "Polymorphism",
        d: "All of the above",
        ans: "ans4"
    },
    {
        question: "Q.3: The C++ language is ______ object-oriented language.",
        a: "Pure Object oriented",
        b: "Not Object oriented",
        c: "Semi Object-oriented or Partial Object-oriented",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Q.4: Which of the following refers to characteristics of an array?",
        a: "An array is a set of similar data items",
        b: "An array is a set of distinct data items",
        c: "An array can hold different types of datatypes",
        d: "None of the above.",
        ans: "ans1"
    },
    {
        question: "Q.5: Which type of memory is used by an Array in C++ programming language?",
        a: "Contiguous",
        b: "None-contiguous",
        c: "Both A and B",
        d: "None of the above.",
        ans: "ans1"
    },
    {
        question: "Q.6: In C++, for what purpose the 'rank()' is used?",
        a: "It returns the size of each dimension",
        b: "It returns the maximum number of elements that can be stored in the array",
        c: "It returns the dimension of the specified array",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Q.7: Which one of the following is the correct definition of the 'is_array();' function in C++?",
        a: "It checks that the specified variable is of the array or not",
        b: "It checks that the specified array of single dimension or not",
        c: "It checks that the array specified of multi-dimension or not",
        d: "Both B and C",
        ans: "ans1"
    },
    {
        question: "Q.8: Which of the following can be considered as the object of an array?",
        a: "Index of an array",
        b: "Elements of the Array",
        c: "Functions of the Array",
        d: "All of the above",
        ans: "ans2"
    },
    {
        question: "Q.9: Which of the following statements is correct about the friend function?",
        a: "A friend function is able to access private members of a class",
        b: "A friend function can access the private members of a class",
        c: "A friend function is able to access the public members of a class",
        d: "All of the above",
        ans: "ans4"
    },
    {
        question: "Q.10: Which of the following can be used to create an abstract class in the C++ programming language?",
        a: "By using the pure virtual function in the class",
        b: "By declaring a virtual function in the base class",
        c: "By declaring the virtual keyword afterward, the class Declaration",
        d: "None of the above.",
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