console.log("Loadet form-data...");

// når når har lavet fejlbeskrivelse til required formularer, skal den orange pop up - browserens orange standard box.
const form = document.querySelector("form");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}
form.addEventListener("invalid", cancelPopup, true);

// saml form-data op med nedenstående jf slide 40 torsdag
const firstOutput = document.querySelector(".first_output");

function handleSubmit(event) {
  // Hent værdier fra form
  const formData = new FormData(form);
  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");

  // Sæt værdier ind i output-elementer
  firstOutput.textContent = firstName;
  lastOutput.textContent = lastName;
}

// indsæt javascript for formular her
