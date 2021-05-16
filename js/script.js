/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
// create an array
let quotes =[
  {
    quote:"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    source: "Martin Fowler",
    citation:"twitter",
    year:2020
  },
  {
    quote:"It's the questions we can't answer that teach us the most. They teach us how to think. If you give a man an answer, all he gains is a little fact. But give him a question and he'll look for his own answers",
    source: "Patrick Rothfuss",
    citation:"The Wise Man's Fear",
    year:2011
  },
  {
    quote:"very great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    citation:"Twitter",
    year:2016
  },
  {
    quote:"Laughter is poison to fear.",
    source: "George R.R.Martin",
    citation:"A Game of Thrones",
    year:1996
  },
  {
    quote:"If you do not change direction, you may end up where you are heading.",
    source: "Lao Tzu",

  },
  {
    quote:"Understanding is the first step to acceptance, and only with acceptance can there be recovery",
    source: "J.K. Rowling",
    citation:"Harry Potter",
    year:2000
  },
];



/***
 * `getRandomQuote` function
***/
// creat a function for get random quotes
function getRandomQuote() {
  // 1. Create a variable that generates a random number
   let randomNumber = Math.floor(Math.random()*quotes.length);
   console.log(randomNumber);
  
  return quotes[randomNumber];
 }

/***
 * `printQuote` function
***/

// create a function printQuote for print the quotes in html  
function printQuote()
{
  //call getRandomQuote function to get the value
 let RandomQuote= getRandomQuote();
 console.log(RandomQuote);
// create a properity and and add values
 let PtoHTML1 = "<p class='quote'>" + RandomQuote.quote +"</p>"+ "<p class='source'>" +RandomQuote.source;
 
 // use if statement to check citation exist or not, if exist add it to html tag
 if(RandomQuote.citation)
 {
   PtoHTML1+="<span class='citation'>"+RandomQuote.citation+"</span>"
 }
 // use if statement to check year exist or not, if exist add it to html tag
 if(RandomQuote.year)
 {
  PtoHTML1+="<span class='year'>"+RandomQuote.year+"</span>"
 
 }
 // add closing p tag
 PtoHTML1+='</p>';
 document.getElementById('quote-box').innerHTML =PtoHTML1;
 console.log(PtoHTML1);
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);