document.addEventListener('DOMContentLoaded', function() {
    var typedMultiplePh = new Typed(".multiple-ph", {
      strings: [" Developpeur Front-End " , "  Developpeur Back-End" , "  Developpeur Full Stack"],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      loop: true
    })
  }
);
function validateForm() {
  var Tel = document.forms["messageform"]["tel"].value;
  var fullName = document.forms["messageform"]["fullname"].value;
  var email = document.forms["messageform"]["email"].value;
  var subject = document.forms["messageform"]["subject"].value;

  if (Tel.length > 8 || !/^\d+$/.test(Tel)) {
    alert("Le numéro de téléphone doit contenir jusqu'à huit chiffres !");
    return false;
  }

  var regexName = /^[A-Za-z\s]+$/;
  if (!regexName.test(fullName)) {
    alert("Le nom et le prénom ne doivent contenir que des lettres et des espaces !");
    return false;
  }

  var regexEmail = /^\S+@\S+\.\S+$/;
  if (!regexEmail.test(email)) {
    alert("Veuillez entrer une adresse email valide !");
    return false;
  }

  if (subject.trim() === '') {
    alert("Veuillez saisir un sujet !");
    return false;
  }

  return true;
}
function sendEmail() {
  Email.send({
    SecureToken: "a623954e-2dcc-4fa7-b6bc-b0f18cfd4b8e",
    To: "ellouzeh00@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact From Enquiry",
    Body: "Full Name: " + document.getElementById("fullname").value +
      "<br>Email: " + document.getElementById("email").value +
      "<br>Numéro: " + document.getElementById("Tel").value +
      "<br>Message: " + document.getElementById("subject").value
  }).then(
    message => alert("Message Sent Successfully")
  );
}

