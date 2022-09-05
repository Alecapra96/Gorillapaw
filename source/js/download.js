const searchList =document.getElementById("homePage-list");
const revitList = document.getElementById("revit-list");
const autocadList = document.getElementById("autocad-list");
const navisworkList = document.getElementById("naviswork-list");
const recapList = document.getElementById("recap-list");
const bluebeamList = document.getElementById("bluebeam-list");
const otherList = document.getElementById("other-list");
const cloudcompareList = document.getElementById("cloudcompare-list");
const bimcollaborateList = document.getElementById("bimcollaborate-list");
const bimproList = document.getElementById("bimpro-list");
const cordinationissuesList = document.getElementById("cordinationissues-list");
const dirootsList = document.getElementById("diroots-list");
const stlexporterList = document.getElementById("stlexporter-list");
const dynamoList = document.getElementById("dynamo-list");
const bimtrackList = document.getElementById("bimtrack-list");
const bimtoolsList = document.getElementById("bimtools-list");
const evolveList = document.getElementById("evolve-list");
const procoreList = document.getElementById("procore-list");
const pyrevitList = document.getElementById("pyrevit-list");
const synchroList = document.getElementById("synchro-list");
const pointList = document.getElementById("point-list");


const searchContainer =document.getElementById("search-container");
const revitContainer = document.getElementById("revit-container");
const autocadContainer = document.getElementById("autocad-container");
const navisworkContainer = document.getElementById("naviswork-container");
const recapContainer = document.getElementById("recap-container");
const bluebeamContainer = document.getElementById("bluebeam-container");
const otherContainer = document.getElementById("other-container");
const cloudcompareContainer = document.getElementById("cloudcompare-container");
const bimcollaborateContainer = document.getElementById("bimcollaborate-container");
const bimproContainer = document.getElementById("bimpro-container");
const cordinationissuesContainer = document.getElementById("cordinationissues-container");
const dirootsContainer = document.getElementById("diroots-container");
const stlexporterContainer = document.getElementById("stlexporter-container");
const dynamoContainer = document.getElementById("dynamo-container");
const bimtrackContainer = document.getElementById("bimtrack-container");
const bimtoolsContainer = document.getElementById("bimtools-container");
const evolveContainer = document.getElementById("evolve-container");
const procoreContainer = document.getElementById("procore-container");
const pyrevitContainer = document.getElementById("pyrevit-container");
const synchroContainer = document.getElementById("synchro-container");
const pointContainer = document.getElementById("point-container");

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
        
cloudcompareList.onclick = function(e){
    e.preventDefault();
    softwareShow(cloudcompareList,cloudcompareContainer);
    };
    
bimcollaborateList.onclick = function(e){
    e.preventDefault();
    softwareShow(bimcollaborateList,bimcollaborateContainer);
    };

bimproList.onclick = function(e){
    e.preventDefault();
    softwareShow(bimproList,bimproContainer);
    };

cordinationissuesList.onclick = function(e){
    e.preventDefault();
    softwareShow(cordinationissuesList,cordinationissuesContainer);
    };
    
dirootsList.onclick = function(e){
    e.preventDefault();
    softwareShow(dirootsList,dirootsContainer);
    };

stlexporterList.onclick = function(e){
    e.preventDefault();
    softwareShow(stlexporterList,stlexporterContainer);
    };

dynamoList.onclick = function(e){
    e.preventDefault();
    softwareShow(dynamoList,dirootsContainer);
    };

bimtrackList.onclick = function(e){
    e.preventDefault();
    softwareShow(bimtrackList,bimtrackContainer);
    };

bimtoolsList.onclick = function(e){
    e.preventDefault();
    softwareShow(bimtoolsList,bimtoolsContainer);
    };

evolveList.onclick = function(e){
    e.preventDefault();
    softwareShow(evolveList,evolveContainer);
    };

procoreList.onclick = function(e){
    e.preventDefault();
    softwareShow(procoreList,procoreContainer);
    };

pyrevitList.onclick = function(e){
    e.preventDefault();
    softwareShow(pyrevitList,pyrevitContainer);
    };

synchroList.onclick = function(e){
    e.preventDefault();
    softwareShow(synchroList,synchroContainer);
    };

pointList.onclick = function(e){
    e.preventDefault();
    softwareShow(pointList,pointContainer);
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
    cloudcompareList.className = "";
    cloudcompareContainer.className = "";
    bimcollaborateList.className = "";
    bimcollaborateContainer.className = "";
    bimproList.className = "";
    bimproContainer.className = "";
    cordinationissuesList.className = "";
    cordinationissuesContainer.className = "";
    dirootsList.className = "";
    dirootsContainer.className = "";
    stlexporterList.className = "";
    stlexporterContainer.className = "";
    dynamoList.className = "";
    dynamoContainer.className = "";
    bimtrackList.className = "";
    bimtrackContainer.className = "";
    bimtoolsList.className = "";
    bimtoolsContainer.className = "";
    evolveList.className = "";
    evolveContainer.className = "";
    procoreList.className = "";
    procoreContainer.className = "";
    pyrevitList.className = "";
    pyrevitContainer.className = "";
    synchroList.className = "";
    synchroContainer.className = "";
    pointList.className = "";
    pointContainer.className = "";
}


function hideAllContainer(){
    revitContainer.style.display = "none";
    autocadContainer.style.display = "none";
    navisworkContainer.style.display = "none";
    recapContainer.style.display = "none";
    bluebeamContainer.style.display = "none";
    otherContainer.style.display = "none";
    cloudcompareContainer.style.display = "none";
    searchContainer.style.display = "none";
    bimcollaborateContainer.style.display = "none";
    bimproContainer.style.display = "none";
    cordinationissuesContainer.style.display = "none";
    dirootsContainer.style.display = "none";
    stlexporterContainer.style.display = "none";
    dynamoContainer.style.display = "none";
    bimtrackContainer.style.display = "none";
    bimtoolsContainer.style.display = "none";
    evolveContainer.style.display = "none";
    procoreContainer.style.display = "none";
    pyrevitContainer.style.display = "none";
    synchroContainer.style.display = "none";
    pointContainer.style.display = "none";
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