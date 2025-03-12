
function getInfo() {
    var eleValue = document.getElementById("sliderunten");
    var txt = "Height of the elements paragraph along with padding and border in pixels is: " + eleValue.offsetHeight + "px";
    document.getElementById("sudo").innerHTML = txt;
}
