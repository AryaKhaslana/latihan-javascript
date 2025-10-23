// ubah teks
function ubahTeks() {
    let element = document.getElementById("teks");
    element.textContent = "halo javascript sudah berjalan"
  }


  // Data diri
  const dataDiri = {
    nama: "Arya chaka braja wisesa",
    kelas: 11,
    Umur: 16,
    Citacita: "Fullstack developer",
  };

  console.log(dataDiri);

  // operator aritmatika
  function operatorHarga() {
    let harga1 = 15000;
    let harga2 = 20000;
    let harga3 = 10000;
    if(true); {
      let harga1 = 15000;
      let harga2 = 20000;
      let harga3 = 10000;
      console.log("Jadi total barang belanjaan adalah :")
    } 
    console.log(harga1 + harga2 + harga3)
  }
  
  operatorHarga()

  // nilai siswa
  function prompt() {
    let nilai = 85
    if (nilai >= 90) {
      console.log("Kamu dapat nilai :" + nilai + " dan Kamu dapat nilai A")
    } if (nilai >= 80) {
      console.log("Kamu dapat nilai :" + nilai + " dan Kamu dapat nilai B")
    } if (nilai <= 75) {
      console.log("Kamu dapat nilai :" + nilai + " dan Kamu dapat nilai C")
    } if (nilai <= 65) {
      console.log("Kamu dapat nilai :" + nilai + " dan Kamu dapat nilai D")
    } if (nilai <= 60) {
      console.log("Kamu dapat nilai :" + nilai + " dan Kamu dapat nilai E")
    }
  }

  prompt()

  // perulangan 
  for (let i = 1; i < 11; i++)
  console.log(i)

  // hitungLuasPersegi
  function hitungLuasPersegi(){
    let panjang = 5
    let lebar = 5

    totalPerhitungan = panjang * lebar
    console.log("Luas persegi dengan sisi 5 adalah :" + totalPerhitungan)
  }

  hitungLuasPersegi()

  // bilangan desimal binary octal dan hexadesimal
  let decimalNumber = 42;
  let binaryNumber = 0b101010; // Binary representation of 42
  let octalNumber = 0o52;    // Octal representation of 42 (deprecated in strict mode)
  let hexadecimalNumber = 0x2A; // Hexadecimal representation of 42

  console.log(decimalNumber);     // Output: 42
  console.log(binaryNumber);      // Output: 42
  console.log(octalNumber);       // Output: 42
  console.log(hexadecimalNumber);  // Output: 42

  // infinity special number
  let notANumber = 0 / 0;
  let infinity = 1 / 0;

  console.log(infinity);
  console.log(Number.isNaN(notANumber));

