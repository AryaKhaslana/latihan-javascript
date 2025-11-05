 // soal 1 
 const ubahWarna = document.getElementById('button1');

 ubahWarna.addEventListener("click", function() {
     const warnaAcak = "#" + Math.floor(Math.random() * 16777215).toString(16);
     document.body.style.backgroundColor = warnaAcak;
 })

 // soal 2

 const kotak = document.getElementById('kotaks')

 kotak.onmouseover = function() {
    kotak.style.backgroundColor = "red";
 };

 kotak.onmouseout = function() {
    kotak.style.backgroundColor = "gray";
 };

//  latihan 3

function updateValue(newVal) {
    document.getElementById("sliderValue").innerHTML = newVal;
  }

// latihan 4 

const form = document.getElementById('form-notif');
const notifPesan = document.getElementById('pesan-notifikasi');
const nama = document.getElementById('name');
const email = document.getElementById('email');


form.addEventListener('submit', function(event) {
    event.preventDefault();

    if(nama == '', email == '') {
    alert("input masih kosong")
    }else{
    alert("halo " + nama.value + 'email kamu adalah' + email.value)
    }
    nama.value=''
    email.value=''
})
