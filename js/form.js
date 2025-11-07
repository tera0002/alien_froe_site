console.log("Loadet form-data...");

// // når jeg har lavet fejlbeskrivelse (aria) til required formularer, skal den orange pop up - browserens orange standard box - blokeres vha nedenstående.
// const form = document.querySelector("form");

// function cancelPopup(event) {
//   event.preventDefault();
//   form.querySelector(":user-invalid").focus();
// }
// form.addEventListener("invalid", cancelPopup, true);

// // saml form-data op med nedenstående jf slide 40 torsdag
// const firstOutput = document.querySelector(".first_output");

// function handleSubmit(event) {
//   // Hent værdier fra form
//   const formData = new FormData(form);
//   const firstName = formData.get("first_name");
//   const lastName = formData.get("last_name");

//   // Sæt værdier ind i output-elementer
//   firstOutput.textContent = firstName;
//   lastOutput.textContent = lastName;
// }

// indsæt javascript for formular her
// husk at referere til javascript korrekt i html etc
const form = document.querySelector("form");

const firstOutput = document.querySelector("#first_name_output");
const lastOutput = document.querySelector("#last_name_output");
const emailOutput = document.querySelector("#email_output");
const dateOutput = document.querySelector("#date_output");
const rumraketOutput = document.querySelector("#rumraket_output");
const fileOutput = document.querySelector("#file_output");
const termsOutput = document.querySelector("#terms_output");

// når man har lavet fejlbeskrivelse til required formularer, skal den orange pop up - (browserens orange standard box) blokeres.
form.addEventListener("invalid", cancelPopup, true);

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}
// Tilføj event listener, der lytter efter 'submit' eventet (submit indstiller til reset af formular se slide 33)
form.addEventListener("submit", handleSubmit);

// Lav en funktion, der stopper refresh og nulstiller formularen
function handleSubmit(event) {
  console.log("handleSubmit");
  //   // 1. undgå refresh
  event.preventDefault();

  // 2. Saml værdierne fra formularen først hentes alt formdata den første linje herunder, herefter specifikke input-"name"s (lav én ny konstant ad gangen og tjek etc.)
  const formData = new FormData(form);
  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");
  const email = formData.get("email");
  const date = formData.get("date");
  const rumraket = formData.get("rumraket");
  const file = formData.get("file");

  const accept_terms = formData.get("accept_terms");

  // 3. Vis værdierne i de rigtige output-felter. Sæt værdier ind i output-elementer fra elementets span id.
  firstOutput.textContent = firstName;
  lastOutput.textContent = lastName;
  emailOutput.textContent = email;
  dateOutput.textContent = date;
  rumraketOutput.textContent = rumraket;
  // fileOutput.textContent = file?.name || "Ingen fil valgt";
  fileOutput.textContent = file;
  // bed om vejledning ift. der i opsummering ikke står [object:file] men value fra html: adspurgt skal ikke bruge file nu
  termsOutput.textContent = accept_terms;

  //   // 4. evt. nustil formular
  form.reset();
}
