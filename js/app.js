// console.log(console);
// console.log(Window);


// const x = window.prompt("Input first number")
// const y = window.prompt("Input second number")

// // console.log(x+y);

// const result = parseFloat(x) + parseFloat (y);
// console.log(result);

// window.alert(`Your result is ${result}`)


// How old are you   
// answer your birth year 


// const x = window.prompt("How old are you")

// const birthYear = 2024 - parseInt(x);

// window.alert (`You was born in ${birthYear} `)



// const answer = window.confirm(" Are you finished dinner")
// console.log(answer?"Yes I finished": "Not yet");

// console.log(document);       


//select an element

const heading = document.getElementById("heading");
// console.dir(heading);

const textInput = document.getElementById("textInput")
const btn = document.getElementById("btn")
const listGroup = document.getElementById("listGroup")
// change title 



//2 set 
function changeTitle(){
    heading.innerText = textInput.value;
}


//3clear 

textInput.value = "";
// 4 event listen
// btn.onclick = changeTitle;

// btn.addEventListener("click", changeTitle)


// btn.onclick = function(){
//     console.log("You click");
// }
// heading.innerText = "san kyi tr";

    // console.log(heading);
    // console.log(textInput);
    // console.log(btn);


    // console.log(heading.innerHTML);
    // console.log(heading.innerText);


    // console.log(btn.innerHTML);
    // console.log(btn.innerText);




// console.dir(listGroup);

// console.log(listGroup.innerHTML);
// console.log(listGroup.innerText);




const headingLarger = document.querySelector("#headingLarger");
const headingSmaller = document.querySelector("#headingSmaller");
headingLarger.onclick = () => {
      const current = parseInt(heading.style.fontSize);
      heading.style.fontSize = `${current + 5}px`;
    };
    headingSmaller.onclick = () => {
      const current = parseInt(heading.style.fontSize);
      heading.style.fontSize = `${current - 5}px`;
    };
 

    console.log(heading.className);
    console.log(heading.classList);
    console.log(heading.classList[0]);
    console.log(heading.classList[3]);
    console.log(heading.classList[2]);



