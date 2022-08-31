const homePageList =document.getElementById("homePage-list");

const revitList = document.getElementById("revit-list");
const autocadList = document.getElementById("autocad-list");
const navisworkList = document.getElementById("naviswork-list");
const recapList = document.getElementById("recap-list");
const bluebeamList = document.getElementById("bluebeam-list");
const otherList = document.getElementById("other-list");

const revitContainer = document.getElementById("revit-container");
const autocadContainer = document.getElementById("autocad-container");
const navisworkContainer = document.getElementById("naviswork-container");
const recapContainer = document.getElementById("recap-container");
const bluebeamContainer = document.getElementById("bluebeam-container");
const otherContainer = document.getElementById("other-container");

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
        

function softwareShow(softwareList,softwareContainer){
    hideAllContainer();
    resetIsActive();
    softwareList.className = "is-active";
    softwareContainer.style.display = "block";
    console.log(softwareContainer)
}


function resetIsActive(){
    homePageList.className = "";
    revitList.className = "";
    revitContainer.className = "";
    autocadList.className = "";
    autocadContainer.className= "";
    navisworkList.className = "";
    navisworkContainer.className = "";
    recapList.className = "";
    recapContainer.className = "";
    bluebeamList.className = "";
    bluebeamContainer.className = "";
    otherList.className = "";
    otherContainer.className = "";
}
function hideAllContainer(){
    revitContainer.style.display = "none";
    autocadContainer.style.display = "none";
    navisworkContainer.style.display = "none";
    recapContainer.style.display = "none";
    bluebeamContainer.style.display = "none";
    otherContainer.style.display = "none";

}