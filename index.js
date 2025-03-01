document.getElementById("big-button").addEventListener("click", function () {
  //   console.log("Button working");
  window.location.href = "blog-page.html";
});

// Completed Button 1
document
  .getElementById("btn-completed-1")
  .addEventListener("click", function () {
    // Button disabled after clicked 
    document.getElementById('btn-completed-1').disabled = true;
    //   console.log("Button working");
    // Alert show 
    alert("Click OK to Complete the Task");
    // Add history 
    const secondList = document.getElementById("history");
    const list = document.createElement("list");
    const getDate = new Date();
    const currentDate = getDate.toLocaleString("en-BD");
    list.innerHTML = `<p>You have completed the Task on</p>` + currentDate;
    secondList.appendChild(list);
    // Minus a number ............  
    let number = document.getElementById('task-number')
    let convertedNum = parseInt(number.innerText);
    // console.log(typeof convertedNum)
    calcNumber = convertedNum-1;
    number.innerText = calcNumber.toString().padStart(2, "0");
});



















// Clear History
document.getElementById("clear-history").addEventListener("click", function () {
  const clearAll = document.getElementById("history");
  clearAll.innerHTML = " ";
});

const getDate = new Date();
const currentDate = getDate.toLocaleString("en-BD");
const showDate = (document.getElementById("bd-date").innerHTML = currentDate);
