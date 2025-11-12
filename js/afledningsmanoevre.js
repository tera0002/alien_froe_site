console.log("Loadet afledningsmanøvre...");

document.querySelector("#energi").addEventListener("click", energiF);

function energiF() {
  console.log("energiF er loaded...");
  resetF();
  document.querySelector("#oejevariant").classList.add("rotate");
  document.querySelector("#oejevariant").classList.add("my_scale");
  document.querySelector("#oeje").classList.add("hide");
}
document.querySelector("#sendetsmil").addEventListener("click", sendetsmilF);

function sendetsmilF() {
  console.log("sendetsmilF er loaded...");
  resetF();
  document.querySelector("#smil").classList.add("my_scale");
  document.querySelector("#smil").classList.add("selected");
  document.querySelector("#taender").style.stroke = "red";
  document.querySelector("#smil .mundhule").style.fill = "yellow";
}

document
  .querySelector("#demokratiskesayings")
  .addEventListener("click", demokratiskesayingsF);

function demokratiskesayingsF() {
  console.log("demokratiskesayingsF er loaded...");
  resetF();
  document.querySelector("#Rentegning_krop").classList.add("wiggle");
}

document.querySelector("#resetknap").addEventListener("click", resetF);

function resetF() {
  console.log("resetF er loaded...");

  document.querySelector("#smil .mundhule").style.fill = "#414042";
  document.querySelector("#smil").classList.remove("selected");
  document.querySelector("#Rentegning_krop").classList.remove("wiggle");
  document.querySelector("#oejevariant").classList.remove("rotate");
  document.querySelector("#oejevariant").classList.remove("my_scale");
}
// fjern klasse (css funktioner rotate etc.) function remove class

// fremadrettet behold styles i css og fokus på class i java, kan fjerne class, men ikke styles her (derfor .mundhule ændres i reset til oprindelig grå farve)
