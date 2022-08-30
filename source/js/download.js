
const revitList = document.getElementById("revit-list");
const homePageList =document.getElementById("homePage-list");

const revitContainer = document.getElementById("revit-container");

revitList.addEventListener("click", revitShow);

function revitShow(){
    resetIsActive();
revitList.className = "is-active";
revitContainer.style.visibility = "visible";
}


function resetIsActive(){

    revitList.className = "";
    homePageList.className = "";
}