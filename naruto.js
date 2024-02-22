const data = {
  1: {
    question: "quel élément représente la mémoire vive ?",
    choice1: "Le Processeur !!!",
    choice2: "un disque dur !!!",
    choice3: "La carte mère!!!",
    choice4: "La RAM !!!",
    answer: "La RAM !!!",
    image:
      "",
  },

  2: {
    question: "Où sont stockées les infotmations ?",
    choice1: "dans le processeur ",
    choice2: "dans le disque dur",
    choice3: "sur l'écran",
    choice4: "dans la carte vidéo",
    answer: "dans le disque dur",
    image:
      "",
  },

  3: {
    question: "laquelle de ces proposition est fausse ?",
    choice1: "le processeur est le coeur ",
    choice2: "le processeur est le cerveau",
    choice3: "le processeurr est le bras",
    choice4: "le processeur est la jambe",
    answer: "le processeur est le cerveau",
    image:
      "",
  },

  4: {
    question: "qu'est-ce qu'un OS ? ",
    choice1: "un organe des vertèbres",
    choice2: "un système d'exploitation",
    choice3: "un problème",
    choice4: "un jouet",
    answer: "un système d'exploitation",
    image:
      "",
  },

  5: {
    question: "Quelle proposition n'est pas un composant de l'ordinateur ?",
    choice1: "la Ram ",
    choice2: "le processeur ",
    choice3: "le clavier",
    choice4: "la carte vidéo",
    answer: "le clavier",
    image:
      "",
  },

  6: {
    question: "la carte mère est ?",
    choice1: "le coeur de l'ordinateur",
    choice2: "le cerveau de l'ordinateur",
    choice3: "les poumons de l'ordinateur",
    choice4: "les bras de l'ordinateur",
    answer: "le coeur de l'ordinateur",
    image:
      "",
  },

  7: {
    question: "Où se situe le menu démarrer?",
    choice1: "au milieu de l'écran",
    choice2: "au début de la barre des tâches",
    choice3: "dans un dossier caché",
    choice4: "dans les widgets ",
    answer: "au début de la barre des tâches",
    image:
      "",
  },
  8: {
    question: " quel touche du clavier permet d'ouvrir le menu démarrer ? ",
    choice1: "CTRL",
    choice2: "SHIFT",
    choice3: "WINDOWS",
    choice4: "ALT GR",
    answer: "WINDOWS",
    image:
      "",
  },
  9: {
    question: " tout les composants sont reliés ?",
    choice1: "au disque dur ",
    choice2: "à la carte vidéo",
    choice3: "à la carte mère",
    choice4: "au processeur",
    answer: "à la carte mère",
    image:
      "",
  },
  10: {
    question: "Suis-je un bon formateur ?",
    choice1: "oui",
    choice2: "non ",
    choice3: "je sais pas",
    choice4: "Demande à Mickael",
    answer: "oui",
    image:
      "",
  },
  
};
const questionPassed = [];
const questionDiv = document.getElementById("questionDiv");
const answers = document.getElementsByTagName("td");
const actualScore = document.getElementById("score");
let randomData = 0;

randomQuestion();
addEvent();

function checkAnswer(clickedEvent) {
  if (clickedEvent.target.innerHTML === data[randomData].answer) {
    clickedEvent.target.classList.add("rightAnswer");
    actualScore.innerHTML = parseInt(actualScore.innerHTML) + 1;
    document.getElementById("rightBubble").style.opacity = 1;
  } else {
    clickedEvent.target.classList.add("wrongAnswer");
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].innerHTML === data[randomData].answer) {
        answers[i].classList.add("rightAnswer");
      }
    }
    document.getElementById("wrongBubble").style.opacity = 1;
  }
  countdown();
  deleteEvent();
  questionDiv.style.opacity = 0;
}
function randomQuestion() {
  questionDiv.style.opacity = 1;
  document.getElementById("rightBubble").style.opacity = 0;
  document.getElementById("wrongBubble").style.opacity = 0;
  let random = Math.floor(Math.random() * Object.keys(data).length) + 1;
  if (questionPassed.indexOf(random) == -1) {
    removeAllClass();
    document.getElementById("questionDiv").innerHTML = data[random].question;
    document.getElementById("choiceOne").innerHTML = data[random].choice1;
    document.getElementById("choiceTwo").innerHTML = data[random].choice2;
    document.getElementById("choiceThree").innerHTML = data[random].choice3;
    document.getElementById("choiceFour").innerHTML = data[random].choice4;
    document.getElementById("image").style.backgroundImage =
      "url(" + data[random].image + ")";
    randomData = random;
    questionPassed.push(random);
  } else if (questionPassed.length === Object.keys(data).length) {
    deleteEvent();
    removeAllClass();
    questionDiv.innerHTML = "Bravo !";
    questionDiv.style.height = "50px";
    questionDiv.style.width = "150px";
    questionDiv.style.marginTop = "255px";
    questionDiv.style.paddingBottom = "55px";
    document.getElementById("table").style.opacity = "0";
    document.getElementById("image").style.backgroundImage =
      "url(https://i.pinimg.com/736x/88/7c/30/887c307fdda656fad55caf9d017724ef.jpg)";
  } else {
    randomQuestion();
  }
}
function countdown() {
  questionDiv.innerHTML = "";
  let counter = 4;
  let interval = setInterval(function () {
    counter--;
    document.getElementById("countdown").innerHTML = counter;
    if (counter == 0) {
      clearInterval(interval);
      randomQuestion();
      document.getElementById("countdown").innerHTML = "";
      addEvent();
    }
  }, 1000);
}
function deleteEvent() {
  for (let i = 0; i < answers.length; i++) {
    answers[i].removeEventListener("click", checkAnswer);
  }
  console.log("passed");
}
function addEvent() {
  for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener("click", checkAnswer);
  }
}
function removeAllClass() {
  for (let i = 0; i < answers.length; i++) {
    answers[i].classList.remove("rightAnswer");
    answers[i].classList.remove("wrongAnswer");
  }
}
