
let count = 0
function increaser(){
    count = count + 1
    document.getElementById("counter").innerText = count
}

function decreaser(){
    if (count <= 0)
    alert('There is no one in the room')
    else
    count += - 1
    document.getElementById("counter").innerText = count
}
function savebutton(){
   let counter_save = count + " - "
   document.getElementById("count-state"). textContent += counter_save
   document.getElementById("counter").textContent = 0
   count = 0
}