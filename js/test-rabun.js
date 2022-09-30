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
const inputTest = document.querySelector('#input-test')
const inputBtn = document.querySelector('#input-btn')
const imgCheck = document.querySelector('.wrapper-input-check img')
const testCharacter = document.querySelector('.test-character h2')
const btnLanjut = document.querySelector('.btn-lanjut')
const circles = document.querySelectorAll('.list-circle li')
const testSelesai = document.querySelector('.test-selesai')
const testRabun = document.querySelector('.test-rabun')
const btnSelesai = document.querySelector('.btnSelesai')
const hasilBagus = document.querySelector('.hasil-bagus')
const hasilLumayan = document.querySelector('.hasil-lumayan')
const hasilBuruk = document.querySelector('.hasil-buruk')
const errorInput = document.querySelector('.error-input')
const errorInputMobile = document.querySelector('.error-input-mobile')

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

window.addEventListener('scroll', function() {
    nav.classList.toggle('sticky', window.scrollY > 0)
    dropdownText.classList.toggle('sticky', window.scrollY > 0)
    arrowDown.classList.toggle('sticky', window.scrollY > 0)
    searchLogoImg.classList.toggle('sticky', window.scrollY > 0)

    if (dropdownText.classList.contains('sticky')) {
        logoBlack.src = 'assets/icons/logo.svg'
    }else{
        logoBlack.src = 'assets/icons/logo-black.svg'
    }
    navbarText.forEach(text => {
        text.classList.toggle('sticky', window.scrollY > 0)
    })
})

let hasil = [];

inputTest.addEventListener('input', checkValueInput)

function checkValueInput(){    
    if(inputTest.value.length >= 8){
        imgCheck.classList.add('active')
    }else{
        imgCheck.classList.remove('active')
    }
}

function randomCharacter(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

testCharacter.innerText = randomCharacter(8)
circles[0].classList.add('active')

let increment = 0;
let decrement = 0;
let size = 1.875; 
let mobileMediaQuery = window.matchMedia("(max-width: 700px)")

btnLanjut.addEventListener('submit', btnLanjutHandling)

function sizingTestCharacter(){
    decrement += 0.31;
    if(mobileMediaQuery.matches){
        size = 1.5  
        testCharacter.style.fontSize = `${size - decrement}em`
    }else{
        testCharacter.style.fontSize = `${size - decrement}em`
    }
}

function resetTestCharacter(){
    decrement = 0;
    if(mobileMediaQuery.matches){
        size = 1.5
        testCharacter.style.fontSize = `${size}em`
    }else{
        size = 1.875;
        testCharacter.style.fontSize = `${size}em`
    }
}

function addBubbleTest(increment) {
    for (let i = 0; i <= circles.length; i++) {
        circles[increment].classList.add('active')
    }
}

function resetBubbleTest(){
    for (let i = 1; i <= circles.length; i++) {
        circles[i].classList.remove('active')
    }
}

function toggleClassActive(addOrRemove){
    if(addOrRemove == 'add'){
        errorInput.classList.add('active')
        errorInputMobile.classList.add('active')
    }else{
        errorInput.classList.remove('active')
        errorInputMobile.classList.remove('active')
    }
}

function btnLanjutHandling() {
    if(inputTest.value.length < 8){
        inputTest.style.border = '#FF0000 solid 2px'
        toggleClassActive('add')
    }else{
        inputTest.style.border = 'black solid 2px'
        toggleClassActive('remove')
        
        sizingTestCharacter()

        increment++
        imgCheck.classList.remove('active')
    
        if(inputTest.value.toUpperCase() == testCharacter.innerText){
            hasil = parseInt([hasil + 1])
        }else{
            hasil = parseInt([hasil + 0])
        }
    
        inputTest.value = "";
        
        if(increment > 5){
            testSelesai.classList.add('active')
            testRabun.classList.add('active')
        }else{
            testCharacter.innerText = randomCharacter(8)
            addBubbleTest(increment)
        }   
    }
}

function mengulangiTest(){
    hasil = 0
    increment = 0
    testRabun.classList.remove('active')
    testSelesai.classList.remove('active')
    hasilBagus.classList.remove('active')
    hasilLumayan.classList.remove('active')
    hasilBuruk.classList.remove('active')
    resetTestCharacter()
    resetBubbleTest()
}

btnSelesai.addEventListener('click', () => {
    testSelesai.classList.remove('active')
    if (hasil <= 6 && hasil > 4) {
        hasilBagus.classList.add('active')
    } else if (hasil <= 4 && hasil > 2) {
        hasilLumayan.classList.add('active')
    } else {
        hasilBuruk.classList.add('active')
    }
}) 

function backToHome(){
    window.location.href = 'index.html'
}

const blog = document.getElementById('blog');
blog.addEventListener('click', () => {
    window.location.href = 'all-blog.html'
})

const lanjut = document.querySelectorAll('.lanjut');
const instruction = document.querySelectorAll('.instruction');
let position = 0;

lanjut.forEach(lanjut => {
    lanjut.addEventListener('click', () => {
        position += -100;
        instruction.forEach(instruction => {
            instruction.style.transform = `translateX(-${0 - position}%)`
        })
    })
})

const kembali = document.querySelectorAll('.kembali');
kembali.forEach(kembali => {
    kembali.addEventListener('click', () => {
        position += 100;
        instruction.forEach(instruction => {
            instruction.style.transform = `translateX(-${0 - position}%)`
        })
    })
})

const skip = document.getElementById('skip');
const instructionBg = document.querySelectorAll('.instruction-bg');
const iContainer = document.querySelectorAll('.instruction-container');
const mulai = document.querySelectorAll('.mulai');

skip.addEventListener('click', () => {
    instructionBg.forEach(instructionBg => {
        instructionBg.style.animation = 'fadeOut .5s ease-in-out forwards',
        instructionBg.style.animationDelay = '.5s'
    })
    iContainer.forEach(iContainer => {
        iContainer.style.animation = 'scaleOut .5s ease-in-out forwards',
        iContainer.style.animationDelay = '0s'
    })
})

mulai.forEach(mulai => {
    mulai.addEventListener('click', () => {
        instructionBg.forEach(instructionBg => {
            instructionBg.style.animation = 'fadeOut .5s ease-in-out forwards',
            instructionBg.style.animationDelay = '.5s'
        })
        iContainer.forEach(iContainer => {
            iContainer.style.animation = 'scaleOut .5s ease-in-out forwards',
            iContainer.style.animationDelay = '0s'
        })
    })
})

function limit(element)
{
    var max_chars = 8;

    if(element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    }
}