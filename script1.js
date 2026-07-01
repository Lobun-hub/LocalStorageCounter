let count = 0;


loadCount();


//function to display the count
function updateCount(){
  document.getElementById("count").innerHTML = count;
}

document.getElementById("btnplus").addEventListener("click", increaseCount)
//function to increase count
function increaseCount(){
  count ++;
  updateCount();
};
document.getElementById("btnMinus").addEventListener("click", decreaseCount)
//function to decrease count
function decreaseCount(){
  if(count > 0){
    count --;
    updateCount();
  }
};
document.getElementById("Reset").addEventListener("click", resetCount)
//function to reset Count
function resetCount(){
  count = 0;
  updateCount();
};
document.getElementById("save").addEventListener("click", saveCount)
//function to save Count
function saveCount(){
  localStorage.setItem("count", count);
}
;
document.getElementById("Load").addEventListener("click", loadCount)
//function to load Count
function loadCount(){
  let saved = localStorage.getItem("count");
  if(saved !== null){
    count = Number(saved);
  }
  updateCount();
};









