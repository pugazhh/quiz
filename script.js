let container = document.querySelector(".container");
let start_Quiz = document.querySelector(".start-quiz")
let displayContainer = document.getElementById("display-container");
let countOfQuestion = document.getElementById("no-of-question");
let scoreContainer = document.getElementById("score-container");
let userScore = document.getElementById("user-score");
let timeLeft = document.getElementById("time-left");
let restart = document.getElementById("restart");
let optionContainer = document.getElementById("option-con")
let option = document.querySelectorAll(".option")
let body = document.querySelector("body")





let questionCount;
let scoreCount;
let count = 11;
let countdown;
let quizData = [
    [
        {   
        Id:"0",
        question:"Javascript is a _____ language.",
        options:["Programing","Application","Scripting","None of above"],
        correct:"Scripting"
        },
        {
        Id:"1",
        question:"JavaScript is a _____ Side Scripting Language.",
        options:["server","Browser","ISP","None of above"],
        correct:"Browser"
       },
       {
        Id:"2",
        question:"The time a device takes to locate data and instructions and make them available to CPU is known as",
        options:["A processing cycle","Clock speed","Access time","CPU speed"],
        correct:"A processing cycle"
        },
        {
        Id:"3",
        question:"Which of the following purpose, JavaScript is designed for ? ",
        options:[" Related to DB on Server","To Style HTML pages","Server Side Scripting","interactivity to HTML Pages."],
        correct:"interactivity to HTML Pages."
       },
       {
        Id:"4",
        question:"JavaScript can be written",
        options:["directly on the Server Script","directly into HTML pages","All of the above","None of the above"],
        correct:"directly into HTML pages"
       }
    ],
    [
        {   
        Id:"0",
        question:"Python is designed by",
        options:["Guido van Rossum","James Gosling","Dennis Ritchie","Google"],
        correct:"Guido van Rossum"
        },
        {
        Id:"1",
        question:"Python influenced by",
        options:["C and C++","Java and Perl","Lisp and Haskell","All the above"],
        correct:"All the above"
       },
       {
        Id:"2",
        question:"Python developed as a successor of",
        options:["Java","ABC","Lisp","C"],
        correct:"ABC"
        },
        {
        Id:"3",
        question:"The CPU also called the ____ when talking about PCs does the vast majority of the processing for a computer.",
        options:["Macro processor","Memory system","RAM","Microprocessor"],
        correct:"Microprocessor"
       },
       {
        Id:"4",
        question:"Python is used for",
        options:["web and software development","mathematics and system scripting","Both the above","None of the above"],
        correct:"Both the above"
       }
    ],
    [
        {   
        Id:"0",
        question:"Java is designed by",
        options:["Dennis Ritchie","James Gosling","Charles Babbage","Guido van Rossum"],
        correct:"James Gosling"
        },
        {
        Id:"1",
        question:"Java first appeared in",
        options:["May 23, 1995","23 July, 1994","18 August, 2001","13 September, 1983"],
        correct:"May 23, 1995"
       },
       {
        Id:"2",
        question:"Java influenced by",
        options:["C++","Objective-C","Ada","All the above"],
        correct:"All the above"
        },
        {
        Id:"3",
        question:"What is the default value of data type boolean in Java ?",
        options:["0","1","True","False"],
        correct:"False"
       },
       {
        Id:"4",
        question:"If a = -5, then +a means",
        options:["-5","5","0","none of above"],
        correct:"-5"
       }
    ],
    [
        {   
        Id:"0",
        question:"C++ is a __________ programming language.",
        options:["general-purpose","procedural and functional","object-oriented, generic, and modular","All the above"],
        correct:"All the above"
        },
        {
        Id:"1",
        question:"C++ designed by",
        options:["Bjarne Stroustrup","Dennis Ritchie","James Gosling","Albert Einstein"],
        correct:"Bjarne Stroustrup"
       },
       {
        Id:"2",
        question:"C++ was first appeared in",
        options:["1985","1984","1995","1994"],
        correct:"1985"
        },
        {
        Id:"3",
        question:"C++ is an extension of C with a major addition of the class construct feature of",
        options:["Simula57","Simula67","Simula47","Simula87"],
        correct:"Simula67"
       },
       {
        Id:"4",
        question:"_____ refer to the names of variables, functions, arrays, classes etc. created by the programmer",
        options:["Identifiers","Keywords","Constraints","Strings"],
        correct:"Identifiers"
       }
    ]
]

replay = () => {
    optionContainer.classList.remove("hide");
    restart.style.display="none"
    clearInterval()
}

exit = () => {
    optionContainer.classList.remove("hide")
    container.classList.add("hide");

}

startQuiz = () => {
    console.log(container);
    optionContainer.classList.remove("hide");
    start_Quiz.classList.add("hide");
}

option.forEach(el => {
    el.addEventListener('click',()=>{
        container.classList.remove("hide")
        optionContainer.classList.add("hide");
        console.log(el.title)
        initial(el.title)
    })
})

initial = (data) => {
    displayContainer.innerHTML="";
    questionCount = 0;
    scoreCount = 0;
    clearInterval(countdown);
    count = 11;
    timerDisplay();
    quizCreate(data);
    quizDisplay(questionCount)
}

quizDisplay = (questionCount) => {
    let quizcards = document.querySelectorAll(".container_mid");

    quizcards.forEach((card) => {
        card.classList.add("hide");
    });
    quizcards[questionCount].classList.remove("hide");
}

timerDisplay = () => {
    countdown = setInterval(() => {
		count--;
		timeLeft.innerHTML = `${count}s`;
		if (count == 0) {
			clearInterval(countdown);
			nextQuiz();
		}
	}, 1000);
}

quizCreate = (data) => {
    for ( let i of quizData[data]) {
        let div = document.createElement("div");
        div.classList.add("container_mid" , "hide")
        countOfQuestion.innerHTML=1 + " of " + quizData[data].length +" Question";
        
        div.innerHTML = `
        <p class="question">${i.question}</p> 
<button class="option-div" onclick=checker(this,${data})>${i.options[0]}</button>
<button class="option-div" onclick=checker(this,${data})>${i.options[1]}</button>
<button class="option-div" onclick=checker(this,${data})>${i.options[2]}</button>
<button class="option-div" onclick=checker(this,${data})>${i.options[3]}</button>
`;
		displayContainer.appendChild(div);
    }

}

console.log(quizData[0].length);
nextQuiz = () =>{
    questionCount += 1;
    if (questionCount == quizData[0].length) {
        container.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML =
            "Your score is " + scoreCount + " out of " + questionCount;
            restart.style.display="block"
    } else {
        countOfQuestion.innerHTML =
            questionCount + 1 + " of " + quizData[0].length + " Question";
        quizDisplay(questionCount);
        count = 11;
        clearInterval(countdown);
        timerDisplay();
    }
}

function checker(userOption,data) {
    console.log(data);
	let userSolution = userOption.innerText;
	let question = document.getElementsByClassName("container_mid")[questionCount];
	console.log(questionCount);
	let options = question.querySelectorAll(".option-div");
	console.log(options);
	
	if (userSolution === quizData[data][questionCount].correct) {
		userOption.classList.add("correct");
		scoreCount++;
	} else {
		options.forEach((element) => {
			if (element.innerText == quizData[data][questionCount].correct) {
				element.classList.add("correct");
			}
		});
	}
	clearInterval(countdown);

	options.forEach((element) => {
		element.disabled = true;
	});
}