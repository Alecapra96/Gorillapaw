
const revitList = document.getElementById("revit-list");
const autocadList = document.getElementById("autocad-list");

const homePageList =document.getElementById("homePage-list");

const revitContainer = document.getElementById("revit-container");
const autocadContainer = document.getElementById("autocad-container");



revitList.onclick = function(e){
    e.preventDefault();
    softwareShow(revitList,revitContainer);
    };

autocadList.onclick = function(e){
    e.preventDefault();
    softwareShow(autocadList,autocadContainer);
    };



function softwareShow(softwareList,softwareContainer){
    hideAllContainer();
    console.log(softwareContainer)
    resetIsActive();
    softwareList.className = "is-active";
    softwareContainer.style.display = "block";
}


function resetIsActive(){
    homePageList.className = "";
    revitList.className = "";
    revitContainer.className = "";
    autocadList.className = "";
    autocadContainer.className= "";

}
function hideAllContainer(){
    revitContainer.style.display = "none";
    autocadContainer.style.display = "none";
}