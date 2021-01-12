document.querySelector("#box_sprite").addEventListener("mouseover", hopRed);


document.querySelector("#box_sprite2").addEventListener("stop", shake);

function hopRed() {
    console.log("hop")
    document.querySelector("#box_container2").classList.toggle("hop")


}
