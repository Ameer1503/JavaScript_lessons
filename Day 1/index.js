
let count = 0
function increaser(){
    count = count + 1
    document.getElementById("counter").innerText = count
}

function decreaser(){
    if (count <= 0)
    alert('There is no one in the room')
    else
    count = count - 1
    document.getElementById("counter").innerText = count

    
    
}