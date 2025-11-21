console.log("Loadet afledningsmanøvre...");

document.querySelector("#energi").addEventListener("click", energiF);
// ved at tilføje og samle alle const i topdokumentet gælder de for hele VS-dokumentet
// defineres const derimod i under en function kan fx "oeje" kun anvendes i den respektive funktion og ikke udenfor denne.
// giver iøvrigt mest mening kun at lave, når der er gengangere ellers er det dobbelt konfekt
const oeje = document.querySelector("#oejevariant");
const smil = document.querySelector("#smil");

function energiF() {
  console.log("energiF er loaded...");
  resetF();
  oeje.classList.add("rotate");
  oeje.classList.add("my_scale");
  document.querySelector("#oeje").classList.add("hide");
  // sidste ovenfor "oeje" er ikke samme som const

  // anvender innerHTML i stedet for textContent fordi der er html kode i teksten (ellers vil fx. strong ikke aktiveres og blot stå på sitet)
  document.querySelector(".info-ener").innerHTML =
    "<strong>Energier</strong> <br />Alien-frøerne frastødes øjeblikkeligt ved synet af mennesker, der behandler hinanden godt og udsender gode vibrationer";
}

document.querySelector("#sendetsmil").addEventListener("click", sendetsmilF);

function sendetsmilF() {
  console.log("sendetsmilF er loaded...");
  resetF();
  document.querySelector("#smil").classList.add("my_scale");
  document.querySelector("#smil").classList.add("selected");
  document.querySelector("#taender").style.stroke = "yellow";
  document.querySelector("#smil .mundhule").style.fill = "black";
  document.querySelector(".info-smil").innerHTML =
    '<strong>Smil</strong> <br/> Oftest fysisk udfordrende for enhver diktator, men alien-frøen kan afledes ved at udsende et smil og godt humørt - se evt. tutorial.<br /><br /> Du kan tillige lægge det stramme udseende på hylden og forklæd dig lidt loose. <br /> <br />   <a href="https://www.youtube.com/watch?v=VaZnXo2p1YI"           class="cta_btn"target="_blank">Lær at smile tutorial</a>';
}
//  Problemer med at få link til at virke i innerHTML i JS - afhænger af brug af "" og ' ' hhv. udenom og indeni html indholdet -->

document
  .querySelector("#demokratiskesayings")
  .addEventListener("click", demokratiskesayingsF);

function demokratiskesayingsF() {
  console.log("demokratiskesayingsF er loaded...");
  resetF();
  document.querySelector("#Rentegning_krop").classList.add("wiggle");
  document.querySelector(".info-demo").innerHTML =
    "<strong>Demokratiske sayings</strong> <br /> er en gylden mulighed for at aflede alien-frøernes opmærksomhed. Du    kan med fordel citere <br />  <blockquote>Spørg ikke hvad dit land kan gøre for dig, spørg hvad du kan gøre for dit land.</blockquote> - Franklin D. Roosevelt  <br />  <blockquote> Regeringsførelse af folket, ved folket, for folket. </blockquote> - Abraham Lincoln <br /> <blockquote> Demokrati er den dårligste styreform, bortset fra alle de andre       former, der er blevet prøvet fra tid til anden.</blockquote> - Winston Churchill <br />";
}

document.querySelector("#resetknap").addEventListener("click", resetF);

function resetF() {
  console.log("resetF er loaded...");

  document.querySelector("#smil .mundhule").style.fill = "#414042";
  document.querySelector("#smil").classList.remove("selected");
  document.querySelector("#Rentegning_krop").classList.remove("wiggle");
  document.querySelector("#oejevariant").classList.remove("rotate");
  document.querySelector("#oejevariant").classList.remove("my_scale");
  document.querySelector(".info-ener").innerHTML = "";
  document.querySelector(".info-demo").innerHTML = "";
  document.querySelector(".info-smil").innerHTML = "";
}
// fjern klasse (css funktioner rotate etc.) function remove class

// fremadrettet behold styles i css og fokus på class i java, kan fjerne class, men ikke styles her (derfor .mundhule ændres i reset til oprindelig grå farve)
