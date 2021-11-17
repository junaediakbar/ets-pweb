let input = document.getElementById("input");
let button = document.getElementById("btn-form");

button.addEventListener("click", () => {
  console.log("mantap");
  return alert("Pesan " + input.value.toString() + " berhasil terkirim");
});
