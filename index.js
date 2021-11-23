const quotes = [{
    words: " ONE dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lorem One"
  },
  {
    words: "  TWO ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lorem Two"
  },
  {
    words: "  THREE ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lorem Three"


  },
  {
    words: "  FOUR ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lorem Four"


  },
  {
    words: "  FIVE ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lorem Five"

  },
  {
    words: "  SIX ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lorem Six"


  }
];

let countQuotes = document.querySelector(".countQuotes");
let numberOfQuotes = 0;
let totalQuotes = quotes.length;

function getIt() {
  let btn = document.querySelector(".btn")
  let text = document.querySelector(".text")
  let textAuthor = document.querySelector(".authorText")
  let i = quotes[Math.floor(Math.random() * quotes.length)]
  text.innerHTML = i.words;
  textAuthor.innerHTML = "Authored By: " + " " + i.name;
  countQuotes.innerHTML = `There are ${totalQuotes} quotes`;

  // if(numberOfQuotes >= totalQuotes){
  //   countQuotes.innerHTML=`Quote 0 of ${totalQuotes}`;
  //   numberOfQuotes=0;
  //   // text.innerHTML="  ";
  //   //     textAuthor.innerHTML=" "
  //
  // }else {
  //   numberOfQuotes+=1;
  //   countQuotes.innerHTML=`Quote ${numberOfQuotes} of ${totalQuotes}`
  //
  // }
}
