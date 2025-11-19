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

  // belajar max value min value
  console.log(Number.MAX_VALUE)
  console.log(Number.NaN)

  // belajar string bolo
  let singleQuotedString = 'Hello, world!';
  let doubleQuotedString = "This is a string.";
  let backtickString = `This is also a string.`;

  console.log(singleQuotedString);   // Output: Hello, world!
  console.log(doubleQuotedString);   // Output: This is a string.
  console.log(backtickString);       // Output: This is also a string.

  // String Properties and Methods
  let myString = "  Hello, World!  ";

  console.log(myString.length);             // Output: 17
  console.log(myString.charAt(0));          // Output: " "
  console.log(myString.substring(2, 7));     // Output: "Hello"
  console.log(myString.slice(2, 7));         // Output: "Hello"
  console.log(myString.toUpperCase());       // Output: "  HELLO, WORLD!  "
  console.log(myString.toLowerCase());       // Output: "  hello, world!  "
  console.log(myString.indexOf("World"));    // Output: 9
  console.log(myString.lastIndexOf("o"));    // Output: 10
  console.log(myString.replace("World", "Universe")); // Output: "  Hello, Universe!  "
  console.log(myString.trim());              // Output: "Hello, World!"
  console.log(myString.startsWith("  "));      // Output: true
  console.log(myString.endsWith("  "));        // Output: true
  console.log(myString.includes("Hello"));     // Output: true
  console.log(myString.split(","));          // Output: [ '  Hello', ' World!  ' ]

  // booleans
  let isTrue = true;
  let isFalse = false;

  console.log(isTrue);    // Output: true
  console.log(isFalse);   // Output: false

  console.log(Boolean(true));       // Output: true
  console.log(Boolean(false));      // Output: false
  console.log(Boolean("hello"));     // Output: true (truthy)
  console.log(Boolean(""));          // Output: false (falsy)
  console.log(Boolean(1));          // Output: true (truthy)
  console.log(Boolean(0));          // Output: false (falsy)
  console.log(Boolean(null));       // Output: false (falsy)
  console.log(Boolean(undefined));  // Output: false (falsy)
  console.log(Boolean(NaN));        // Output: false (falsy)
  console.log(Boolean({}));         // Output: true (truthy) - even an empty object is truthy
  console.log(Boolean([]));         // Output: true (truthy) - even an empty array is truthy

// const hobi =  ['coding, gambar, berenang']

// const [satu, dua, tiga] = hobi;

// console.log(satu)
// console.log(dua)

const player = {
  nama: "asep",
  rank: "glory",
  usia: 10
};

const {nama, rank} = player;

console.log(nama)
console.log(rank)