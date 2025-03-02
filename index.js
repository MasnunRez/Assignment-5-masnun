document.getElementById("big-button").addEventListener("click", function () {
  //   console.log("Button working");
  window.location.href = "blog-page.html";
});



// Completed Button 1
document
  .getElementById("btn-completed-1")
  .addEventListener("click", function () {
    // Button disabled after clicked
    document.getElementById("btn-completed-1").disabled = true;
    //   console.log("Button working");
    // Alert show
    alert("Click OK to Complete the Task");
    // Add history
    const secondList = document.getElementById("history");
    const list = document.createElement("list");
    const getDate = new Date();
    const currentDate = getDate.toLocaleString("en-BD");
    const titleOne = document.getElementById('title-one');
    list.innerHTML = `<p>You have completed the Task </p>`+ titleOne.innerText + ' on ' + currentDate;
    secondList.appendChild(list);
    // Minus a number ............
    let number = document.getElementById("task-number");
    let convertedNum = parseInt(number.innerText);
    // console.log(typeof convertedNum)
    let numberNav = document.getElementById("nav-number");
    let convertedNum2 = parseInt(numberNav.innerText);

    calcNumber = convertedNum - 1;
    calcNumber2 = convertedNum2 + 1;
    number.innerText = calcNumber.toString().padStart(2, "0");
    numberNav.innerText = calcNumber2.toString().padStart(2, "0");
  });

// Completed Button 2 ...............

document
  .getElementById("btn-completed-2")
  .addEventListener("click", function () {
    // Button disabled after clicked
    document.getElementById("btn-completed-2").disabled = true;
    //   console.log("Button working");
    // Alert show
    alert("Click OK to Complete the Task");
    // Add history
    const secondList = document.getElementById("history");
    const list = document.createElement("list");
    const getDate = new Date();
    const currentDate = getDate.toLocaleString("en-BD");
    const titleTwo = document.getElementById('title-two');
    list.innerHTML = `<p>You have completed the Task </p>`+ titleTwo.innerText + ' on ' + currentDate;
    secondList.appendChild(list);
    // Minus a number ............
    let number = document.getElementById("task-number");
    let convertedNum = parseInt(number.innerText);
    // console.log(typeof convertedNum)
    let numberNav = document.getElementById("nav-number");
    let convertedNum2 = parseInt(numberNav.innerText);

    calcNumber = convertedNum - 1;
    calcNumber2 = convertedNum2 + 1;
    number.innerText = calcNumber.toString().padStart(2, "0");
    numberNav.innerText = calcNumber2.toString().padStart(2, "0");
  });

// Completed Button 3 ...............
document
  .getElementById("btn-completed-3")
  .addEventListener("click", function () {
    // Button disabled after clicked
    document.getElementById("btn-completed-3").disabled = true;
    //   console.log("Button working");
    // Alert show
    alert("Click OK to Complete the Task");
    // Add history
    const secondList = document.getElementById("history");
    const list = document.createElement("list");
    const getDate = new Date();
    const currentDate = getDate.toLocaleString("en-BD");
    const titleThree = document.getElementById('title-three');
    list.innerHTML = `<p>You have completed the Task </p>`+ titleThree.innerText + ' on ' + currentDate;
    secondList.appendChild(list);
    // Minus a number ............
    let number = document.getElementById("task-number");
    let convertedNum = parseInt(number.innerText);
    // console.log(typeof convertedNum)
    let numberNav = document.getElementById("nav-number");
    let convertedNum2 = parseInt(numberNav.innerText);

    calcNumber = convertedNum - 1;
    calcNumber2 = convertedNum2 + 1;
    number.innerText = calcNumber.toString().padStart(2, "0");
    numberNav.innerText = calcNumber2.toString().padStart(2, "0");
  });

// Completed Button 4 ...............
document
  .getElementById("btn-completed-4")
  .addEventListener("click", function () {
    // Button disabled after clicked
    document.getElementById("btn-completed-4").disabled = true;
    //   console.log("Button working");
    // Alert show
    alert("Click OK to Complete the Task");
    // Add history
    const secondList = document.getElementById("history");
    const list = document.createElement("list");
    const getDate = new Date();
    const currentDate = getDate.toLocaleString("en-BD");
    const titleFour = document.getElementById('title-four');
    list.innerHTML = `<p>You have completed the Task </p>` + titleFour.innerText + ' on ' + currentDate;
    secondList.appendChild(list);
    // Minus a number ............
    let number = document.getElementById("task-number");
    let convertedNum = parseInt(number.innerText);
    // console.log(typeof convertedNum)
    let numberNav = document.getElementById("nav-number");
    let convertedNum2 = parseInt(numberNav.innerText);

    calcNumber = convertedNum - 1;
    calcNumber2 = convertedNum2 + 1;
    number.innerText = calcNumber.toString().padStart(2, "0");
    numberNav.innerText = calcNumber2.toString().padStart(2, "0");
  });

// Completed Button 5 ...............
document
  .getElementById("btn-completed-5")
  .addEventListener("click", function () {
    // Button disabled after clicked
    document.getElementById("btn-completed-5").disabled = true;
    //   console.log("Button working");
    // Alert show
    alert("Click OK to Complete the Task");
    // Add history
    const secondList = document.getElementById("history");
    const list = document.createElement("list");
    const getDate = new Date();
    const currentDate = getDate.toLocaleString("en-BD");
    const titleFive = document.getElementById('title-five');
    list.innerHTML = `<p>You have completed the Task </p>`+ titleFive.innerText + ' on ' + currentDate;
    secondList.appendChild(list);
    // Minus a number ............
    let number = document.getElementById("task-number");
    let convertedNum = parseInt(number.innerText);
    // console.log(typeof convertedNum)
    let numberNav = document.getElementById("nav-number");
    let convertedNum2 = parseInt(numberNav.innerText);

    calcNumber = convertedNum - 1;
    calcNumber2 = convertedNum2 + 1;
    number.innerText = calcNumber.toString().padStart(2, "0");
    numberNav.innerText = calcNumber2.toString().padStart(2, "0");
  });

// Completed Button 6 ...............

document
  .getElementById("btn-completed-6")
  .addEventListener("click", function () {
    // Button disabled after clicked
    document.getElementById("btn-completed-6").disabled = true;
    //   console.log("Button working");
    // Alert show
    alert("Click OK to Complete the Task");
    alert("All the Task completed");
    // Add history
    const secondList = document.getElementById("history");
    const list = document.createElement("list");
    const getDate = new Date();
    const currentDate = getDate.toLocaleString("en-BD");
    const titleSix = document.getElementById('title-six');
    list.innerHTML = `<p>You have completed the Task </p>`+ titleSix.innerText + ' on ' + currentDate;
    secondList.appendChild(list);
    // Minus a number ............
    let number = document.getElementById("task-number");
    let convertedNum = parseInt(number.innerText);
    // console.log(typeof convertedNum)
    let numberNav = document.getElementById("nav-number");
    let convertedNum2 = parseInt(numberNav.innerText);

    calcNumber = convertedNum - 1;
    calcNumber2 = convertedNum2 + 1;
    number.innerText = calcNumber.toString().padStart(2, "0");
    numberNav.innerText = calcNumber2.toString().padStart(2, "0");
  });

// Change body background
function colorChange() {
  let bodyColor = document.body.style.backgroundColor;

  if (bodyColor === "black") {
    document.body.style.backgroundColor = "orange";
  } else if (bodyColor === "orange") {
    document.body.style.backgroundColor = "rgb(244, 247, 255)";
  } else {
    document.body.style.backgroundColor = "black";
  }
}

// Clear History
document.getElementById("clear-history").addEventListener("click", function () {
  const clearAll = document.getElementById("history");
  clearAll.innerHTML = " ";
});



const getDate = new Date();
const currentDate = getDate.toLocaleString("en-BD");
const showDate = (document.getElementById("bd-date").innerHTML = currentDate);
