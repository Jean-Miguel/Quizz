const data = {
  1: {
    question: "quel est le nom de ce composant?",
    choice1: "Le Processeur !!!",
    choice2: "un disque dur !!!",
    choice3: "La carte mère!!!",
    choice4: "La RAM !!!",
    answer: "La RAM !!!",
    image:
      "https://cdn.pixabay.com/fr/photos/m%C3%A9moire-ram-ordinateur-8141642.png",
  },

  2: {
    question: "Qui est ce ninja ?",
    choice1: "Rock Lee",
    choice2: "Sasuke Utchiwa",
    choice3: "Kakashi Hatake",
    choice4: "Néji Hyuga",
    answer: "Sasuke Utchiwa",
    image:
      "https://cdn.pixabay.com/photo/2022/07/13/05/25/sasuke-7318576_1280.png",
  },

  3: {
    question: "Qu'apprend Naruto au Mont-Myôboku ?",
    choice1: "Le Taïjutsu",
    choice2: "Le genjutsu",
    choice3: "Le Senjutsu",
    choice4: "Le Ninjutsu",
    answer: "Le Senjutsu",
    image:
      "https://cdn.pixabay.com/photo/2022/06/21/07/04/naruto-7275259_1280.png",
  },

  4: {
    question: "Naruto, Sakura, Sasuke Forment avec Kakashi ",
    choice1: "L'équipe 3",
    choice2: "L'équipe 2",
    choice3: "l'équipe 1",
    choice4: "L'équipe 7",
    answer: "L'équipe 7",
    image:
      "https://i.pinimg.com/736x/15/40/4c/15404cd25401af6f8cb642d095639357.jpg",
  },

  5: {
    question: "Quel est le nom de ce ninja légendaire ?",
    choice1: "Orochimaru",
    choice2: "Tsunade",
    choice3: "Jiraya",
    choice4: "Minato",
    answer: "Jiraya",
    image:
      "https://i.pinimg.com/564x/d8/18/1c/d8181ca48c49200023dc71e1530d8db7.jpg",
  },

  6: {
    question: "Qui suis-je ?",
    choice1: "Hashirama Senju",
    choice2: "Tobirama Senju",
    choice3: "Naruto UZUMAKI",
    choice4: "Kakashi Hatake",
    answer: "Hashirama Senju",
    image:
      "https://i.pinimg.com/564x/90/40/ff/9040ff30affc45afc242563e62a080c4.jpg",
  },

  7: {
    question: "Quel ennemi combat Naruto et Sasuke avec cette transformation ?",
    choice1: "Pain",
    choice2: "Orochimaru",
    choice3: "Obito Utchiwa",
    choice4: "Kabuto ",
    answer: "Obito Utchiwa",
    image:
      "https://i.pinimg.com/564x/01/e3/43/01e34313e6972b27c9fa4968de1831aa.jpg",
  },
  8: {
    question: "Qui ce cache sous se masque ? ",
    choice1: "Obito Utchiwa",
    choice2: "orochimaru",
    choice3: "Jiraya",
    choice4: "Sasuke Utchiwa",
    answer: "Obito Utchiwa",
    image:
      "https://i.pinimg.com/736x/10/5e/cb/105ecb427ee9a6b151bf823a948fbcaa.jpg",
  },
  9: {
    question: "Qui est le chef de l'Akatsuki?",
    choice1: "Pain",
    choice2: "Deidara",
    choice3: "Kakuzu",
    choice4: "Toby",
    answer: "Toby",
    image:
      "https://i.pinimg.com/564x/f1/e6/49/f1e649d7560e445a794109c5e199304b.jpg",
  },
  10: {
    question: "Quel est le plat préféré de naruto ?",
    choice1: "Les nouilles",
    choice2: "Les Ramens d'Ichiraku",
    choice3: "Les pâtes bolognaises",
    choice4: "Le sauté-mine",
    answer: "Les Ramens d'Ichiraku",
    image:
      "https://i.pinimg.com/564x/16/5c/1d/165c1d6911936e5645c6a64b6102c86c.jpg",
  },
  11: {
    question: "Quel est le nom de ce démon ?",
    choice1: "Hachibi",
    choice2: "Kyubi",
    choice3: "Sanbi",
    choice4: "Nanabi",
    answer: "Kyubi",
    image:
      "https://i.pinimg.com/564x/0d/64/f2/0d64f2a4129dbb48383afbd49967cc20.jpg",
  },
  12: {
    question:
      "Qui deviens la femme de Naruto ?",
    choice1: "Sakura HARUNO",
    choice2: "Tenten",
    choice3: "Hinata Hyuga",
    choice4: "Ino",
    answer: "Hinata Hyuga",
    image: "https://i.pinimg.com/564x/48/c0/b8/48c0b8c52fb59a706fb2355ae54082cc.jpg",
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
