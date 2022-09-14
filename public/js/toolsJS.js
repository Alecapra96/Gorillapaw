
const $formsignature = document.getElementById("signature-event");

$formsignature.addEventListener("submit", createSignature);

function createSignature(event){
    event.preventDefault();
    document.getElementById("img-search").style.display = "none";
    let $nameSignature = document.getElementById("first-last-name").value.toUpperCase();
    let $chargenameSignature = document.getElementById("charge-signature").value.toUpperCase();
    let $pronoumSignature = document.getElementById("pronoum-signature").value;

    let $divSignature = document.getElementById("sign-ready");
    let $name = document.getElementById("name");
    let $charge = document.getElementById("charge");
    let $pronoum = document.getElementById("pronoum");

    $name.textContent = $nameSignature;
    $charge.textContent = $chargenameSignature;
    $pronoum.textContent = $pronoumSignature;
    $divSignature.style.visibility = "visible";
}
function CopyToClipboard() {
let respText = document.getElementById("respText");
    var copyBoxElement = document.getElementById('editor1');
    copyBoxElement.contenteditable = true;
    copyBoxElement.focus();
    document.execCommand('selectAll');
    document.execCommand("copy");
    copyBoxElement.contenteditable = false;
    respText.textContent = "Signature has been copied to the clipboard";
      
    respText.style.visibility= "visible";
}