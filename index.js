/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/
function greet(timeString='15:00'){
  let parsedTString = parseInt(timeString);
  
  if (parsedTString <= 12) {
    return "Good Morning";
  } else if (parsedTString > 17) {
    return "Good Evening";
  } else {
    return "Good Afternoon";
  }
};

/* Write your implementation of greet() */


function displayMessage(str){
  let greeting = document.getElementById("greeting");
  greeting.innerText = str;
}
/* Write your implementation of displayMessage() */
