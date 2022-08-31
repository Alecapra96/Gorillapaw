const searchList =document.getElementById("homePage-list");
const revitList = document.getElementById("revit-list");
const autocadList = document.getElementById("autocad-list");
const navisworkList = document.getElementById("naviswork-list");
const recapList = document.getElementById("recap-list");
const bluebeamList = document.getElementById("bluebeam-list");
const otherList = document.getElementById("other-list");
const addinsList = document.getElementById("addins-list");


const searchContainer =document.getElementById("search-container");
const revitContainer = document.getElementById("revit-container");
const autocadContainer = document.getElementById("autocad-container");
const navisworkContainer = document.getElementById("naviswork-container");
const recapContainer = document.getElementById("recap-container");
const bluebeamContainer = document.getElementById("bluebeam-container");
const otherContainer = document.getElementById("other-container");
const addinsContainer = document.getElementById("addins-container");


searchList.onclick = function(e){
    e.preventDefault();
    softwareShow(searchList,searchContainer);
    };

revitList.onclick = function(e){
    e.preventDefault();
    softwareShow(revitList,revitContainer);
    };

autocadList.onclick = function(e){
    e.preventDefault();
    softwareShow(autocadList,autocadContainer);
    };

navisworkList.onclick = function(e){
    e.preventDefault();
    softwareShow(navisworkList,navisworkContainer);
    };

recapList.onclick = function(e){
    e.preventDefault();
    softwareShow(recapList,recapContainer);
    };

bluebeamList.onclick = function(e){
    e.preventDefault();
    softwareShow(bluebeamList,bluebeamContainer);
    };

otherList.onclick = function(e){
    e.preventDefault();
    softwareShow(otherList,otherContainer);
    };
        
addinsList.onclick = function(e){
    e.preventDefault();
    softwareShow(addinsList,addinsContainer);
    };
    

function softwareShow(softwareList,softwareContainer){
    hideAllContainer();
    resetIsActive();
    softwareList.className = "is-active";
    softwareContainer.style.display = "block";

}


function resetIsActive(){
    searchList.className = "";
    searchContainer.className = "";
    revitList.className = "";
    revitContainer.className = "";
    autocadList.className = "";
    autocadContainer.className= "";
    navisworkList.className ="";
    navisworkContainer.className ="";
    recapList.className ="";
    recapContainer.className = "";
    bluebeamList.className ="";
    bluebeamContainer.className = "";
    otherList.className = "";
    otherContainer.className = "";
    addinsList.className = "";
    addinsContainer.className = "";
}
function hideAllContainer(){
    revitContainer.style.display = "none";
    autocadContainer.style.display = "none";
    navisworkContainer.style.display = "none";
    recapContainer.style.display = "none";
    bluebeamContainer.style.display = "none";
    otherContainer.style.display = "none";
    addinsContainer.style.display = "none";
    searchContainer.style.display = "none";

}

function myFunction() { // Cada vez que se aprieta enter corre este evento
    if (event.keyCode == 13) {
        console.log("entre")
    var input = document.getElementById("Search");
    var searchValue = input.value.toLowerCase();
   
    var els = document.getElementsByName("target"); //no anda por que se le resetea el class name 
    hideAllContainer();
    searchContainer.style.display = "block";

        for(var i = 0; i < els.length; i++){
        let div = els[i].id;
        console.log("entre")
        console.log(els[i])
        if (div.includes(searchValue)){
            console.log(div)
            console.log(els[i])
            els[i].className = "is-active";
            els[i].style.display = "block";

        }
    }
}
  }