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
const cursorInner = document.querySelector('.cursor-inner')
const blog = document.getElementById('blog')
const blog1 = document.querySelector('#blog1')
const blog2 = document.querySelector('#blog2')
const blog3 = document.querySelector('#blog3')
const start = document.querySelector('.start')
const startTest = document.querySelector('#start-test')
const popupBg = document.querySelector('#popup')
const popup = document.querySelector('#popupMain')
const back = document.querySelector('#back')
const scrollBg = document.querySelector('.scroll-bg')
const circleScroll = document.querySelector('.circle')
const cursor = document.querySelector('.cursor')
const textList = document.querySelectorAll('li')
const card = document.querySelectorAll('.card')
const text = document.createElement('span')
const logo = document.querySelectorAll('.logo')
const picture = document.querySelectorAll('.picture')
const mulaiTes = document.querySelectorAll('.mulai-tes')
const search = document.querySelector('.search')
const searchClose = document.querySelector('#search-close')
const searchInput = document.querySelector('.search input')
const iconFacebook = document.querySelectorAll('.icon-facebook')
const iconTwitter = document.querySelectorAll('.icon-twitter')
const iconInstagram = document.querySelectorAll('.icon-instagram')

let titleBlog = document.querySelectorAll('.title-blog')

// DROPDOWN EVENT ON CLICK
dropdown.addEventListener('click', () => {
    arrowDropdown.classList.toggle("active")
    dropdownContent.classList.toggle("active")
})

// HAMBURGER LOGO EVENT ON CLICK
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

// CLOSE LOGO EVENT ON CLICK
closeLogo.addEventListener('click', () => {
    searchLogo.classList.toggle('active')
    navbarTextMobile.classList.toggle('active')
    closeLogo.classList.toggle('active')
    logoWhite.classList.toggle('active')
    logoBlack.classList.toggle('active')
    hamburgerLogo.classList.toggle('active')
    body.style.overflow = 'auto'
})

// STIKY NAVBAR EVENT ON SCROLL 
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

// BLOG NAVBAR EVENT ON CLICK
blog.addEventListener('click', () => {
    window.location.href = 'all-blog.html'
})

// BLOG1 EVENT ON CLICK
blog1.addEventListener('click', () => {
    window.location.href = 'blog1.html'
})

// BLOG2 EVENT ON CLICK
blog2.addEventListener('click', () => {
    window.location.href = 'blog2.html'
})

// BLOG3 EVENT ON CLICK
blog3.addEventListener('click', () => {
    window.location.href = 'blog3.html'
})

// GO TO BACK FUNCTION
function goBack() {
    window.history.back();
}

// GO TO HOME/INDEX FUNCTION
function backToHome(){
    window.location.href = 'index.html'
}

// GO TO TEST RABUN FUNCTION
function goToTesRabun(){
    window.location.href = 'test-rabun.html?#'
}

// START TEST EVENT ON CLICK
start.addEventListener('click', () => {
    body.style.overflow = 'hidden',
    popupBg.style.transform = 'scale(1)',
    popupBg.style.animation = 'fadeIn forwards .5s ease-in',
    popupBg.style.animationDelay = '0.4s',
    popup.style.animation = 'scaleIn forwards .5s ease-in';
    popup.style.animationDelay = '0.8s';
} )

// CLOSE POPUP TEST EVENT ON CLICK
back.addEventListener('click', () => {
    popupBg.style.transform = 'scale(0)',
    popupBg.style.animation = 'fadeOut forwards 0s ease-in',
    popup.style.animation = 'scaleOut forwards 0s ease-in',
    body.style.overflow = 'auto';
} )

// SCROLL BG EVENT ON MOUSEOVER AND MOUSEOUT
scrollBg.addEventListener('mouseover', () => {
    circleScroll.style.marginTop = '20px'
})

scrollBg.addEventListener('mouseout', () => {
    circleScroll.style.marginTop = '0px'
})

// SCROLL BG EVENT ON CLICK
scrollBg.addEventListener('click', () => {
    startTest.scrollIntoView({
        behavior: 'smooth', 
        block: 'center'
    });
})

// FOLLOWING CURSOR EVENT ON MOUSEMOVE
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
})

// CHANGE CURSOR ACTIVE WHEN HOVERING ON ELEMENT
textList.forEach(text => {
    text.addEventListener('mouseover', () => {
        cursor.classList.add('active')
        cursorInner.classList.add('active')
    })
    text.addEventListener('mouseout', () => {
        cursor.classList.remove('active')
        cursorInner.classList.remove('active')
    })
})

scrollBg.addEventListener('mouseover', () => {
    cursor.classList.add('active')
    cursorInner.classList.add('active')
})

scrollBg.addEventListener('mouseout', () => {
    cursor.classList.remove('active')
    cursorInner.classList.remove('active')
})

start.addEventListener('mouseover', () => {
    cursor.classList.add('active')
    cursorInner.classList.add('active')
})

start.addEventListener('mouseout', () => {
    cursor.classList.remove('active')
    cursorInner.classList.remove('active')
})

// CARD HOVER
card.forEach(card => {
    card.addEventListener('mouseover', () => {
        cursor.classList.add('active')
        cursorInner.classList.add('active')
    })
    card.addEventListener('mouseout', () => {
        cursor.classList.remove('active')
        cursorInner.classList.remove('active')
    })
})

// LOGO HOVER
logo.forEach(logo => {
    logo.addEventListener('mouseover', () => {
        cursor.classList.add('active')
        cursorInner.classList.add('active')
    })
    logo.addEventListener('mouseout', () => {
        cursor.classList.remove('active')
        cursorInner.classList.remove('active')
    })
})

// PICUTRE HOVER
picture.forEach(picture => {
    picture.addEventListener('mouseover', () => {
        cursor.classList.add('active')
        cursorInner.classList.add('active')
    })
    picture.addEventListener('mouseout', () => {
        cursor.classList.remove('active')
        cursorInner.classList.remove('active')
    })
})

// MULAI TEST BUTTON HOVER
mulaiTes.forEach(mulaiTes => {
    mulaiTes.addEventListener('mouseover', () => {
        cursor.classList.add('active')
        cursorInner.classList.add('active')
    })
    mulaiTes.addEventListener('mouseout', () => {
        cursor.classList.remove('active')
        cursorInner.classList.remove('active')
    })
})

// POPUP CLOSE HOVER
back.addEventListener('mouseover', () => {
    cursor.classList.add('active')
    cursorInner.classList.add('active')
})

back.addEventListener('mouseout', () => {
    cursor.classList.remove('active')
    cursorInner.classList.remove('active')
})

// if search logo clicked change display initial to search
searchLogo.addEventListener('click', () => {
    search.classList.add('active')
    searchLogo.style.display = 'none'
})

searchClose.addEventListener('click', () => {
    search.classList.remove('active')
    searchLogo.style.display = 'initial'
})

searchClose.addEventListener('mouseover', () => {
    cursor.classList.add('active')
    cursorInner.classList.add('active')
})

searchClose.addEventListener('mouseout', () => {
    cursor.classList.remove('active')
    cursorInner.classList.remove('active')
})

function goToTesButaWarna(){
    window.location.href = 'test-buta-warna.html'
}

// if iconFacebook click open https://www.facebook.com/ in new tab
iconFacebook.forEach(iconFacebook => {
    iconFacebook.addEventListener('click', () => {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href, '_blank')
        // dont open card
        event.stopPropagation()
    })
})

// if iconTwitter click open https://twitter.com/ in new tab
iconTwitter.forEach(iconTwitter => {
    iconTwitter.addEventListener('click', () => {
        window.open('https://twitter.com/intent/tweet?url=' + window.location.href, '_blank')
        // dont open card
        event.stopPropagation()
    })
})

// if iconInstagram click open https://www.instagram.com/ in new tab
iconInstagram.forEach(iconInstagram => {
    iconInstagram.addEventListener('click', () => {
        window.open('https://www.instagram.com/?url=' + window.location.href, '_blank')
        // dont open card
        event.stopPropagation()
    })
})

function shareFacebook() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href, '_blank')
}

function shareTwitter() {
    window.open('https://twitter.com/intent/tweet?url=' + window.location.href, '_blank')
}

function shareInstagram() {
    window.open('https://www.instagram.com/?url=' + window.location.href, '_blank')
}