//   Created by Muhammad Faiz
//   Github: https://0x0v0.github.io/

//   ID: Jika Ingin Memakai Setidaknya Cantumkan Sumber dan Forked Berkas Aslinya
//   dan Jangan Lupa Follow Github Saya + Beri Bintang ^^

//   EN: If you want to use it, at least include the original sour.ce and forked files
//    and Don't Forget to Follow My Github + Touch the Star. ^^

function onlyNumber(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}
