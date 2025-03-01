document.getElementById("big-button").addEventListener("click", function () {
  //   console.log("Button working");
  window.location.href = "blog-page.html";
});

// Completed Button 1
document
  .getElementById("btn-completed-1")
  .addEventListener("click", function () {
    document.getElementById('btn-completed-1').disabled = true;
    //   console.log("Button working");
    alert("Click OK to Complete the Task");
    const secondList = document.getElementById("history");
    const list = document.createElement("list");

    const getDate = new Date();
    const currentDate = getDate.toLocaleString("en-BD");
    list.innerHTML = `<p>You have completed the Task on</p>` + currentDate;
    secondList.appendChild(list);
  });
// function clickedDisabled(){
//     document.getElementById('btn-completed-1').disabled = true;
// }



// Clear History
document.getElementById("clear-history").addEventListener("click", function () {
  const clearAll = document.getElementById("history");
  clearAll.innerHTML = " ";
});

const getDate = new Date();
const currentDate = getDate.toLocaleString("en-BD");
const showDate = (document.getElementById("bd-date").innerHTML = currentDate);
