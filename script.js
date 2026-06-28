//Declare Count
let count = 10;

//function to display the counter
function updateCount() {
  document.getElementById("count").innerHTML = count;
}

//function to increase the counter
function increaseCount() {
  count++;
  updateCount();

}

//function to decrease the Counter
function decreaseCount() {
  if (count > 0 ) {
    count--;
    updateCount();
  }

}

//function to reset Counter
function resetCount() {
  count = 0;
  updateCount();
}

//function to save counter
function saveCount() {
  localStorage.setItem("count", count);
}

//function to load counter
function loadCount() {
  let saved = localStorage.getItem("count");
  if (saved !== null) {
    count = Numer(saved);
  }
  updateCount();
}