//   Created by Muhammad Faiz
//   Github: https://0x0v0.github.io/

//   ID: Jika Ingin Memakai Setidaknya Cantumkan Sumber dan Forked Berkas Aslinya
//   dan Jangan Lupa Follow Github Saya + Beri Bintang ^^

//   EN: If you want to use it, at least include the original sour.ce and forked files
//    and Don't Forget to Follow My Github + Touch the Star. ^^

function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "faiz" && password == "faiz") {
    alert("Login Sukses!");
    window.location = "success.html";
    return false;
  } else {
    alert("Login Gagal");
    return false;
  }
}
