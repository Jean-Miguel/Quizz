const data = {
  1: {
    question: "quel élément représente la mémoire vive ?",
    choice1: "Le Processeur !!!",
    choice2: "un disque dur !!!",
    choice3: "La carte mère!!!",
    choice4: "La RAM !!!",
    answer: "La RAM !!!",
    image:
      "https://images.pexels.com/photos/2588756/pexels-photo-2588756.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },

  2: {
    question: "Où sont stockées les infotmations ?",
    choice1: "dans le processeur ",
    choice2: "dans le disque dur",
    choice3: "sur l'écran",
    choice4: "dans la carte vidéo",
    answer: "dans le disque dur",
    image:
      "https://images.pexels.com/photos/33278/disc-reader-reading-arm-hard-drive.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  3: {
    question: "laquelle de ces proposition est vraie ?",
    choice1: "le processeur est le coeur ",
    choice2: "le processeur est le cerveau",
    choice3: "le processeurr est le bras",
    choice4: "le processeur est la jambe",
    answer: "le processeur est le cerveau",
    image:
      "data:image/jpeg;base64,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",
  },

  4: {
    question: "qu'est-ce qu'un OS ? ",
    choice1: "un organe des vertèbres",
    choice2: "un système d'exploitation",
    choice3: "un problème",
    choice4: "un jouet",
    answer: "un système d'exploitation",
    image:
      "https://www.skeuden-graphik.fr/systemes-exploitations.jpg",
  },

  5: {
    question: "Quelle proposition n'est pas un composant de l'ordinateur ?",
    choice1: "la Ram ",
    choice2: "le processeur ",
    choice3: "le clavier",
    choice4: "la carte vidéo",
    answer: "le clavier",
    image:
      "https://images.pexels.com/photos/2582932/pexels-photo-2582932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  6: {
    question: "la carte mère est ?",
    choice1: "le coeur de l'ordinateur",
    choice2: "le cerveau de l'ordinateur",
    choice3: "les poumons de l'ordinateur",
    choice4: "les bras de l'ordinateur",
    answer: "le coeur de l'ordinateur",
    image:
      "https://images.pexels.com/photos/3665443/pexels-photo-3665443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  7: {
    question: "Où se situe le menu démarrer?",
    choice1: "au milieu de l'écran",
    choice2: "au début de la barre des tâches",
    choice3: "dans un dossier caché",
    choice4: "dans les widgets ",
    answer: "au début de la barre des tâches",
    image:
      "https://www.justgeek.fr/wp-content/uploads/2021/10/retrouver-menu-demarrer-windows-10-sur-windows-11-startallback.jpg",
  },
  8: {
    question: " quel touche du clavier permet d'ouvrir le menu démarrer ? ",
    choice1: "CTRL",
    choice2: "SHIFT",
    choice3: "WINDOWS",
    choice4: "ALT GR",
    answer: "WINDOWS",
    image:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  9: {
    question: " tout les composants sont reliés ?",
    choice1: "au disque dur ",
    choice2: "à la carte vidéo",
    choice3: "à la carte mère",
    choice4: "au processeur",
    answer: "à la carte mère",
    image:
      "https://images.pexels.com/photos/3520694/pexels-photo-3520694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  10: {
    question: "Suis-je un bon formateur ?",
    choice1: "oui",
    choice2: "non ",
    choice3: "je sais pas",
    choice4: "Demande à Mickael",
    answer: "oui",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    questionDiv.innerHTML = "c'est terminé !";
    questionDiv.style.height = "50px";
    questionDiv.style.width = "150px";
    questionDiv.style.marginTop = "255px";
    questionDiv.style.paddingBottom = "55px";
    document.getElementById("table").style.opacity = "0";
    document.getElementById("image").style.backgroundImage =
      "url(https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)";
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
