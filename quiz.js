const quizForm=document.querySelector(".quiz-form");
const submitAnsweBtn=document.querySelector("#submit-answer-btn");
const output=document.querySelector("#output");

const correctAnswers=["90","right-angled"];

function calculateScore(){
    let score =0;
    let index=0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value===correctAnswers[index]){
            score+=1;
            
        }
        index+=1;
    }
    output.innerHTML="Your Score is " +score;
}

submitAnsweBtn.addEventListener("click",calculateScore);