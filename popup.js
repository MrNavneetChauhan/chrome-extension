const jokes = [
    {
      question: "How do you know if a vampire is unwell?",
      punchline: "Because he'll be coffin",
    },
    {
      question: "Where do pirates get their hooks?",
      punchline: "Second hand shops",
    },
    { question: "Why did the bicycle collapse?", punchline: "It was too tyred" },
    {
      question: "Why did the hairdresser win the race?",
      punchline: "He knew a shortcut",
    },
    {
      question: "How did the picture end up in prison?",
      punchline: "It was framed",
    },
    { question: "What do solicitors wear to work?", punchline: "Lawsuits" },
    { question: "Why did the bullet lose its job?", punchline: "It got fired" },
    {
      question: "Why can’t a toe be 12 inches long?",
      punchline: "Then it’d be a foot",
    },
    {
      question: "Want to hear a joke about a roof?",
      punchline: "The first one’s on the house",
    },
    { question: "What does a house wear?", punchline: "Address!" },
    {
      question: "What did one wall say to the other?",
      punchline: '"I\'ll meet you at the corner"',
    },
    { question: "Why is grass so dangerous?", punchline: "It’s full of blades" },
  ];
  
const question = document.getElementById("question");
const btn = document.getElementById("btn");
const answer = document.getElementById("answer");
const reload = document.getElementById("reload");


let number=0;
function getJokes(){
     number = Math.floor(Math.random()*jokes.length-1);
    question.innerHTML = jokes[number]?.question
}

btn.addEventListener("click",()=>{
    answer.innerHTML = jokes[number]?.punchline
})

reload.addEventListener("click",()=>{
    getJokes();
    answer.innerHTML=""
})

window.addEventListener("load",()=>{
    getJokes()
})