var brojac = 0;
var brojacChecker = 0;
var broj = 0;
var checker = document.getElementById("checker");
var ime = document.getElementById("ime");
var godina = document.getElementById("godina");
var spol = document.getElementById("spol");
var kosa = document.getElementById("kosa");
var oci = document.getElementById("oci");

plus.addEventListener("click", function () {
  brojac++;
  brojacChecker++;
  broj = brojac;
  checker.textContent = brojacChecker;
  ime.textContent = "";
  godina.textContent = "";
  spol.textContent = "";
  kosa.textContent = "";
  oci.textContent = "";
});

minus.addEventListener("click", function () {
  brojac--;
  brojacChecker--;
  broj = brojac;
  checker.textContent = brojacChecker;
  ime.textContent = "";
  godina.textContent = "";
  spol.textContent = "";
  kosa.textContent = "";
  oci.textContent = "";
});

reset.addEventListener("click", function () {
  brojac = 0;
  brojacChecker = 0;
  broj = brojac;
  checker.textContent = brojacChecker;
  ime.textContent = "";
  godina.textContent = "";
  spol.textContent = "";
  kosa.textContent = "";
  oci.textContent = "";
});

$(document).ready(function () {
  $("#dohvatiPodatke").click(function () {
    dohvatiPodatke();
  });
});

function dohvatiPodatke() {
  $.ajax({
    url: "https://swapi.dev/api/people/?search",
    type: "GET",
    dataType: "json",
    success: function (data) {
      $("#ime").text(data.results[broj].name);
      $("#godina").text(data.results[broj].birth_year);
      $("#spol").text(data.results[broj].gender);
      $("#kosa").text(data.results[broj].hair_color);
      $("#oci").text(data.results[broj].eye_color);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      alert("Došlo je do greške: " + textStatus + " " + errorThrown);
    },
  });
}
