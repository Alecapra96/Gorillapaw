const searchContainer =document.getElementById("discord-guide");

function hideAllContainer(){
    searchContainer.style.display = "none";
}

function myFunction() { // Cada vez que se aprieta enter corre este evento
    if (event.keyCode == 13) {
    document.getElementById("img-search").style.display = "none";
    var input = document.getElementById("Search");
    var searchValue = input.value.toLowerCase();
   
    var els = document.getElementsByName("target"); //no anda por que se le resetea el class name 
    hideAllContainer();
    searchContainer.style.display = "block";

        for(var i = 0; i < els.length; i++){
        let div = els[i].id;

        if (div.includes(searchValue)){

            els[i].className = "is-active";
            els[i].style.display = "block";

        }
    }
}
  }