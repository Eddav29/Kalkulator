//menyimpan objek container-tombol
var tombol = document.querySelector(".container-tombol");
var layar = document.querySelector("#layar");
tombol.addEventListener("click", function (e) {
  //menyimpan e ke variabel
  var tombolClick = e.target;
  //ketika tombol di clik dan
  //tombol click adalah adalah sebuah
  // objek dari nomor yang dipilih maka akan disimpan
  var nilaiTombol = tombolClick.innerText;
  //agar tampil dilayar
  if (nilaiTombol == "C") {
    layar.value = "";
  } else if (nilaiTombol == "<") {
    layar.value = layar.value.slice(0, -1);
  } else if (nilaiTombol == "=") {
    layar.value = eval(layar.value);
  } else {
    layar.value = layar.value + nilaiTombol;
  }
});
