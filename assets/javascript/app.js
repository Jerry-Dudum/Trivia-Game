var questions = [
    question1 = {
        question: "What is Luffy made of?",
        answer1: "Plastic",
        answer2: "Rubber",
        answer3: "Candy",
        answer4: "Gum",
        correct: "Rubber",
        image: "FILL WITH IMAGE LATER"
    },
    question2 = {
        question: "How many swords does Zoro use?",
        answer1: "1",
        answer2: "2",
        answer3: "3",
        answer4: "4",
        correct: "3",
        image: "FILL WITH IMAGE LATER"
    },
    question3 = {
        question: "What is Nami an expert in?",
        answer1: "Navigation",
        answer2: "Repairing",
        answer3: "Shooting",
        answer4: "Fighting",
        correct: "Navigation",
        image: "FILL WITH IMAGE LATER"
    },
    question4 = {
        question: "What weapon does Usopp wield?",
        answer1: "Gun",
        answer2: "Sword",
        answer3: "He doesn't use weapons",
        answer4: "Slingshot",
        correct: "Slingshot",
        image: "FILL WITH IMAGE LATER"
    },
    question5 = {
        question: "Sanji is the ____ for the Straw Hat Pirates.",
        answer1: "Captain",
        answer2: "Musician",
        answer3: "Chef",
        answer4: "Deckhand",
        correct: "Chef",
        image: "FILL WITH IMAGE LATER"
    },
    question6 = {
        question: "Robin's devil fruit ability is called?",
        answer1: "Hana Hana no Mi",
        answer2: "Desu Desu no Mi",
        answer3: "Gomu Gomu no Mi",
        answer4: "Hito Hito no Mi",
        correct: "Hana Hana no Mi",
        image: "FILL WITH IMAGE LATER"
    },
    question7 = {
        question: "What is so special about Franky?",
        answer1: "He's half man, half demon",
        answer2: "He's a Fishman",
        answer3: "He's half tiger, half man",
        answer4: "He's a cyborg",
        correct: "He's a cyborg",
        image: "FILL WITH IMAGE LATER"
    },
    question8 = {
        question: "Brook's devil fruit changed his appearance to?",
        answer1: "A skeleton",
        answer2: "A child",
        answer3: "An old man",
        answer4: "A ghost",
        correct: "A skeleton",
        image: "FILL WITH IMAGE LATER"
    },
    question9 = {
        question: "Chopper is a what?",
        answer1: "Dog",
        answer2: "Motorcycle",
        answer3: "Reindeer",
        answer4: "Cat",
        correct: "Reindeer",
        image: "FILL WITH IMAGE LATER"
    },
    question10 = {
        question: "Jinbei know's what special martial arts technique?",
        answer1: "Water Jutsu",
        answer2: "Fishman Karate",
        answer3: "Swan Technique",
        answer4: "Devil Trigger",
        correct: "Fishman Karate",
        image: "FILL WITH IMAGE LATER"
    }
];

var correct = 0;
var wrong = 0;
var unanswered = 0;
var timer = 10;
var timerID;
var timeUpID;
var questionIndex = 0;
var chosen;

$("#start").on("click", function () {
    startGame();
});

$(".option").on("click", function () {
    chosen = this.value
    clearTimeout(timeUpID);
    clearInterval(timerID);
    check();
});

$("#restart").on("click", function () {
    timer = 10;
    questionIndex = 0;
    correct = 0;
    unanswered = 0;
    wrong = 0;

    $("#results").addClass("d-none");
    startGame();
});

function startGame() {
    $("#restart").addClass("d-none");
    $("#description").addClass("d-none");
    $("#question").removeClass("d-none");
    $("#start").addClass("d-none");
    $("#buttons").removeClass("d-none");
    $("#timer").removeClass("d-none");
    generateQuestion();
}

function gameOver() {
    $("#buttons").addClass("d-none");
    $("#question").addClass("d-none");
    $("#results").removeClass("d-none");
    $("#results").text("Correct: " + correct + " Unanswered: " + unanswered + " Wrong: " + wrong);
    $("#restart").removeClass("d-none");
    $("#gif").addClass("d-none");
}

function counter() {
    timer--;
    $("#timer").text(timer);
    if (timer === 0) {
        clearInterval(timerID);
    }
}

function generateQuestion() {
    timer = 10;
    $("#timer").text(timer);
    timerID = setInterval(counter, 1000);
    chosen = ""
    timeUpID = setTimeout(check, 10000);

    $("#buttons").removeClass("d-none");
    $("#results").addClass("d-none");
    $("#gif").addClass("d-none");

    $("#question").text(questions[questionIndex].question);
    $("#answer1").text(questions[questionIndex].answer1);
    $("#answer1").val(questions[questionIndex].answer1);
    $("#answer2").text(questions[questionIndex].answer2);
    $("#answer2").val(questions[questionIndex].answer2);
    $("#answer3").text(questions[questionIndex].answer3);
    $("#answer3").val(questions[questionIndex].answer3);
    $("#answer4").text(questions[questionIndex].answer4);
    $("#answer4").val(questions[questionIndex].answer4);
}

function check () {
    clearTimeout(timeUpID);
    clearInterval(timerID);

    $("#buttons").addClass("d-none");
    $("#results").removeClass("d-none");

    if (chosen === questions[questionIndex].correct) {
        correct++;
        $("#results").text("CORRECT!");
    }
    else if (chosen === "") {
        unanswered++;
        $("#results").text("Time Up! Correct Answer: " + questions[questionIndex].correct);
    }
    else {
        wrong++;
        $("#results").text("Wrong! Correct Answer: " + questions[questionIndex].correct);
    }

    $("#gif").removeClass("d-none");
    $("#gif").attr('src', "assets/images/question" + (questionIndex + 1) + ".gif")

    questionIndex++;

    if (questionIndex === questions.length) {
        setTimeout(gameOver, 3000);
    }
    else {
        setTimeout(generateQuestion, 3000);
    }
}

