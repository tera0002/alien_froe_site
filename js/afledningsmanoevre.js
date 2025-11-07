console.log("Loadet afledningsmanøvre...");

document.querySelector("#energi").addEventListener("click", energiF);

function energiF() {
  console.log("energiF er loaded...");
  // indsæt funktion med at forstørre øjet + grundvold/krop skal wiggle
}
// fortsat eksempel med at forstørre grafik fra infographic.css
// document.querySelector("#frederiksberg").classList.add("myScale");
// document.querySelector("#frederiksberg").style.fill = "red";

document.querySelector("#smil").addEventListener("click", smilF);

function smilF() {
  console.log("smilF er loaded...");
}

document
  .querySelector("#demokratiskesayings")
  .addEventListener("click", demokratiskesayingsF);

function demokratiskesayingsF() {
  console.log("demokratiskesayingsF er loaded...");
}
// lav hotspot-ting for de tre knapper: se de øvrige css tings for frederiksberg etc.
// Rentegning_krop
// helefroe
// oeje
// oejevariant
// smil
