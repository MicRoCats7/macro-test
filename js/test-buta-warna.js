const dropdown = document.querySelector('.dropdown')
const dropdownText = document.querySelector('.dropbtn')
const dropdownContent = document.querySelector('.dropdown-content')
const arrowDropdown = document.querySelector('.arrow-down')
const hamburgerLogo = document.querySelector('.hamburger-logo')
const searchLogo = document.querySelector('.search-logo')
const searchLogoImg = document.querySelector('.search-logo img')
const navbarTextMobile = document.querySelector('.navbar-text-mobile')
const closeLogo = document.querySelector('.close-logo')
const logoWhite = document.querySelector('.logo img:nth-child(1)')
const logoBlack = document.querySelector('.logo img:nth-child(2)')
const body = document.querySelector('body')
const nav = document.querySelector('nav')
const navbarText = document.querySelectorAll('.navbar-text li')
const arrowDown = document.querySelector('.arrow-down')


dropdown.addEventListener('click', () => {
    arrowDropdown.classList.toggle("active")
    dropdownContent.classList.toggle("active")
})

hamburgerLogo.addEventListener('click', () => {
    searchLogo.classList.toggle('active')
    navbarTextMobile.classList.toggle('active')
    closeLogo.classList.toggle('active')
    logoWhite.classList.toggle('active')
    logoBlack.classList.toggle('active')
    hamburgerLogo.classList.toggle('active')
    body.style.overflow = 'hidden'
    if(navbarTextMobile.classList.contains('active')){
        logoBlack.src = 'assets/icons/logo-black.svg'
    }else{
        logoBlack.src = 'assets/icons/logo.svg'
    }
})

closeLogo.addEventListener('click', () => {
    searchLogo.classList.toggle('active')
    navbarTextMobile.classList.toggle('active')
    closeLogo.classList.toggle('active')
    logoWhite.classList.toggle('active')
    logoBlack.classList.toggle('active')
    hamburgerLogo.classList.toggle('active')
    body.style.overflow = 'auto'
})



const form = document.querySelector('form')
const inputTest = document.querySelectorAll('.input')
const btnSubmit = document.getElementById('btn-submit')
const btnLanjut = document.getElementById('btn-lanjut')
const soals = document.querySelectorAll('.wrapper-soal')
const soalKeBerapa = document.querySelector('.soal-keberapa')
const jawaban = document.querySelectorAll('.jawaban')
const checkLogo = document.querySelectorAll('.check-logo')
const btnSelesai = document.querySelector('#btn-selesai')
const hasilBagus = document.querySelector('.hasil-bagus')
const hasilBuruk = document.querySelector('.hasil-buruk')
const hasilLumayan = document.querySelector('.hasil-lumayan')
const hasilBurukBanget = document.querySelector('.hasil-buruk-banget')
const hasilBagusBanget = document.querySelector('.hasil-bagus-banget')
const wrapperTest = document.querySelector('.wrapper-test')

let position = 0;
let num = 1;
let nilai = 0;

btnLanjut.addEventListener('click', () => {
    if(position <= -700){
        position = -700;
        soals.forEach(soal => {
            soal.style.transform = `translateX(-${0 - position}%)`
        })
    }else{
      btnLanjut.disabled = true;
      btnLanjut.classList.remove('active')
      position += -100;
      num++
      soalKeBerapa.innerText = `${num} dari 8 kuis`
      soals.forEach(soal => {
        soal.style.transform = `translateX(-${0 - position}%)`
      })
      for (let i = 0; i < inputTest.length; i++) {
        const element = inputTest[i];
        if(element.checked){
          element.checked = false;
        }
      }
    }

    if(num == 8){
      btnLanjut.style.display = 'none'
      btnSelesai.style.display = 'flex'
    }
})


btnSubmit.addEventListener('click', () => {
  for (let i = 0; i < inputTest.length; i++) {
    const element = inputTest[i];

    if(element.checked){
      btnLanjut.classList.add('active')
      btnLanjut.disabled = false;
      checkLogo[num - 1].classList.add('active')

      if (element.value == myQuestions[num - 1].correctAnswer) {
        jawaban[num - 1].classList.add('benar')
        jawaban[num - 1].classList.remove('salah')
        jawaban[num - 1].innerText = "Jawaban Anda Benar"
        nilai++
      }else{
        jawaban[num - 1].classList.add('salah')
        jawaban[num - 1].classList.remove('benar')
        jawaban[num - 1].innerText = "Jawaban Anda Salah"
        nilai += 0
      }
    }
  }
})

btnSelesai.addEventListener('click', () => {
  wrapperTest.classList.add('active')
  if (nilai <= 8 && nilai >= 7) {
    hasilBagusBanget.classList.add('active')
  }
   else if (nilai <= 6 && nilai >= 5) {
      hasilBagus.classList.add('active')
  }else if (nilai <= 4 && nilai >= 3) {
    hasilLumayan.classList.add('active')
  }else if (nilai <= 2 && nilai >= 1) {
    hasilBuruk.classList.add('active')
  }else {
      hasilBurukBanget.classList.add('active')
  }
})

function mengulagiTest(){
  num = 1;
  nilai = 0;
  soalKeBerapa.innerText = `${num} dari 8 kuis`;
  position = 0;;
  wrapperTest.classList.remove('active')
  btnLanjut.style.display = 'flex';
  btnSelesai.style.display = 'none';
  soals.forEach(soal => {
    soal.style.transform = `translateX(-${0 - position}%)`;
  })
  btnLanjut.classList.remove('active');
  btnLanjut.disabled = true;

  hasilBagusBanget.classList.remove('active')
  hasilBagus.classList.remove('active')
  hasilLumayan.classList.remove('active')
  hasilBuruk.classList.remove('active')
  hasilBurukBanget.classList.remove('active')

  for (let i = 0; i < inputTest.length; i++) {
    const element = inputTest[i];
    element.checked = false;
    jawaban.forEach(jawab => {
      jawab.classList.remove('benar')
      jawab.classList.remove('salah')
      jawab.innerText = "Jawaban Anda Benar"
    })
    checkLogo.forEach(logo => {
      logo.classList.remove('active')
    })
  }
}

const myQuestions = [
  {correctAnswer: "Angka 2"},
  {correctAnswer: "Kupu - kupu"},
  {correctAnswer: "Angka 8"},
  {correctAnswer: "Angka 3"},
  {correctAnswer: "Angka 7"},
  {correctAnswer: "Angka 8"},
  {correctAnswer: "Angka 3"},
  {correctAnswer: "Angka 4"},
];

function backToHome(){
  window.location.href = 'index.html'
}

const blog = document.getElementById('blog');
blog.addEventListener('click', () => {
    window.location.href = 'all-blog.html'
})