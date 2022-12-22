// validate email

var emailEl = document.querySelector('#login')
var u_times = document.querySelector(".u_times")
var u_check = document.querySelector(".u_check")
u_errorEl = document.querySelector(".u_error")
let validEmail = false

function validateEmail() {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailEl.value.match(validRegex)) {
        emailEl.focus();
        emailEl.style.border = '1px solid green';
        u_errorEl.style.display = 'none'
        u_times.style.display = 'none'
        u_check.style.display = 'inline';
        validEmail = true
    } else {
        u_errorEl.innerHTML = 'Please enter a valid Email!'
        u_errorEl.style.display = 'block'
        u_errorEl.style.color = 'red'
        emailEl.focus();
        emailEl.style.border = '1px solid red';
        u_times.style.display = 'inline'
        u_check.style.display = 'none';
    }
}

emailEl.addEventListener('keyup' , validateEmail)


// validatepassword

var passEl = document.querySelector('#password')
p_errorEl = document.querySelector(".p_error")
let validPass = false

passEl.addEventListener('keyup',function(){
    var p_times = document.querySelector(".p_times");
    var p_check = document.querySelector(".p_check");
    if (passEl.value.length == 0 || passEl.value.length < 6){
        passEl.style.border = '1px solid red';
        p_times.style.display = 'inline'
        p_check.style.display = 'none';
        p_errorEl.innerHTML = 'password too short'
        p_errorEl.style.display = 'block'
        p_errorEl.style.color = 'red'
        return false
    }else{
        p_errorEl.style.display = 'none'
        passEl.style.border = '1px solid green';
        p_times.style.display = 'none'
        p_check.style.display = 'inline';
        validPass = true;
    }
    }
)

// validate login

function validateLogin (){
    if( emailEl.value.length === 0){
        emailEl.focus();
        alert ("please enter your email")
    } else if (passEl.value.length === 0){
        passEl.focus();
        alert ("please enter your password")
    }
    else if (validPass === true && validEmail === true){
        alert ("Login successful")
    }
}


// Carrousel

const nextEl = document.querySelector(".next")

const prevEl = document.querySelector(".prev")

let currentImg = 1

let imageContainer = document.querySelector(".image_container") 

let imgNum= document.querySelectorAll('#panoramic')

nextEl.addEventListener("click", function(){
    currentImg++
    clearTimeout(timeout);
    updateImg()
})

prevEl.addEventListener("click", function(){
    currentImg--
    clearTimeout(timeout);
    updateImg()
})

updateImg();

function updateImg(){
if(currentImg>imgNum.length) {
    currentImg =1;
} else if(currentImg<1) {
    currentImg = imgNum.length
}
imageContainer.style.transform =`translateX(-${(currentImg-1) * 1400}px)`;
timeout = setTimeout(() => {
    currentImg++;
    updateImg();
    }, 3000);
}

// navigation menu

const nextMenuEl = document.querySelector(".nextMenu")

const prevMenuEl = document.querySelector(".prevMenu")

let currentMenu=1

let placesToVisit= document.querySelector(".content_slider")

let menuNum = document.querySelectorAll("#placesToVisitBarcelona .placesToVisitContainer").length

nextMenuEl.addEventListener("click", function(){
    currentMenu++
    placesToVisit.style.transform =`translateX(0px)`;
    updateMenu()
})

prevMenuEl.addEventListener("click", function(){
    currentMenu--
    updateMenu()
})

function updateMenu(){
    if(currentMenu > (menuNum)) {
        currentMenu =1;
    } else if(currentMenu<1) {
        currentMenu = menuNum
    }
    placesToVisit.style.transform =`translateX(-${(currentMenu-1) * 300}px)`;
    }

    let barcEl = document.querySelector("#barc")

barcEl.addEventListener("click", function(){
        placesToVisit.style.transform =`translateX(0px)`;
        menuNum = document.querySelectorAll("#placesToVisitBarcelona .placesToVisitContainer").length
        barcEl.style.borderBottom = " solid 4px rgb(25, 13, 94)";
        parEl.style.borderBottom = "none"
        amsEl.style.borderBottom = "none"
        andorraEl.style.borderBottom = "none"
        document.querySelector('#placesToVisitAmsterdam').style.display="none"
        document.querySelector('#placesToVisitBarcelona').style.display="flex"
        document.querySelector('#placesToVisitAndorra').style.display="none"
        document.querySelector('#placesToVisitParis').style.display="none"
    })

    let andorraEl = document.querySelector("#andorra")

    andorraEl.addEventListener("click", function(){
        placesToVisit.style.transform =`translateX(0px)`;
        menuNum = document.querySelectorAll("#placesToVisitAndorra .placesToVisitContainer").length
        andorraEl.style.borderBottom = " solid 4px rgb(25, 13, 94)";
        barcEl.style.borderBottom = "none"
        amsEl.style.borderBottom = "none"
        parEl.style.borderBottom = "none"
        document.querySelector('#placesToVisitAmsterdam').style.display="none"
        document.querySelector('#placesToVisitBarcelona').style.display="none"
        document.querySelector('#placesToVisitAndorra').style.display="flex"
        document.querySelector('#placesToVisitParis').style.display="none"
    })

    let parEl = document.querySelector("#par")

parEl.addEventListener("click", function(){
    placesToVisit.style.transform =`translateX(0px)`;
        menuNum = document.querySelectorAll("#placesToVisitParis .placesToVisitContainer").length
        parEl.style.borderBottom = " solid 4px rgb(25, 13, 94)";
        barcEl.style.borderBottom  = "none"
        amsEl.style.borderBottom  = "none"
        andorraEl.style.borderBottom  = "none"
        document.querySelector('#placesToVisitAmsterdam').style.display="none"
        document.querySelector('#placesToVisitBarcelona').style.display="none"
        document.querySelector('#placesToVisitAndorra').style.display="none"
        document.querySelector('#placesToVisitParis').style.display="flex"
    })

    let amsEl = document.querySelector("#ams")

amsEl.addEventListener("click", function(){
        placesToVisit.style.transform =`translateX(0px)`;
        menuNum = document.querySelectorAll("#placesToVisitAmsterdam .placesToVisitContainer").length
        amsEl.style.borderBottom = " solid 4px rgb(25, 13, 94)";
        barcEl.style.borderBottom = "none"
        parEl.style.borderBottom = "none"
        andorraEl.style.borderBottom = "none"
        document.querySelector('#placesToVisitAmsterdam').style.display="flex"
        document.querySelector('#placesToVisitBarcelona').style.display="none"
        document.querySelector('#placesToVisitAndorra').style.display="none"
        document.querySelector('#placesToVisitParis').style.display="none"
        
    })


    // section selector

    let barcelonaSectionEl = document.querySelector("#exploreBarcelona")

    let andorrasectionEl = document.querySelector("#exploreAndorra")

    let parisSectionEl= document.querySelector("#exploreParis")

    let amsterdamSectionEl = document.querySelector("#exploreAmsterdam")

    barcelonaSectionEl .addEventListener("click", function(){
        barcelonaSectionEl.style.borderBottom = " solid 4px rgb(25, 13, 94)";
        andorrasectionEl.style.borderBottom = " none";
        parisSectionEl.style.borderBottom = " none";
        amsterdamSectionEl.style.borderBottom = " none";
        document.querySelector(".barcelonaGallery").style.display="block"
        document.querySelector(".andorreGallery").style.display="none"
        document.querySelector(".parisGallery").style.display="none"
        document.querySelector(".amsterdamGallery").style.display="none"
    })

    andorrasectionEl .addEventListener("click", function(){
        andorrasectionEl.style.borderBottom = " solid 4px rgb(25, 13, 94)";
        barcelonaSectionEl.style.borderBottom = " none";
        parisSectionEl.style.borderBottom = " none";
        amsterdamSectionEl.style.borderBottom = " none";
        document.querySelector(".andorreGallery").style.display="block"
        document.querySelector(".barcelonaGallery").style.display="none"
        document.querySelector(".parisGallery").style.display="none"
        document.querySelector(".amsterdamGallery").style.display="none"
    })

    parisSectionEl .addEventListener("click", function(){
        parisSectionEl.style.borderBottom = " solid 4px rgb(25, 13, 94)";
        barcelonaSectionEl.style.borderBottom = " none";
        andorrasectionEl.style.borderBottom = " none";
        amsterdamSectionEl.style.borderBottom = " none";
        document.querySelector(".parisGallery").style.display="block"
        document.querySelector(".barcelonaGallery").style.display="none"
        document.querySelector(".andorreGallery").style.display="none"
        document.querySelector(".amsterdamGallery").style.display="none"
    })

    amsterdamSectionEl .addEventListener("click", function(){
        amsterdamSectionEl.style.borderBottom = " solid 4px rgb(25, 13, 94)";
        barcelonaSectionEl.style.borderBottom = " none";
        andorrasectionEl.style.borderBottom = " none";
        parisSectionEl.style.borderBottom = "none";
        document.querySelector(".parisGallery").style.display="none"
        document.querySelector(".barcelonaGallery").style.display="none"
        document.querySelector(".andorreGallery").style.display="none"
        document.querySelector(".amsterdamGallery").style.display="block"
    })

    // gallery

    let display = document.querySelector(".sliderGallery")

    const nextGalEl = document.querySelector(".nextGal")

    const prevGalEl = document.querySelector(".prevGal")

    let currentSlide=1

    let box =1

    var slideNum

    var currentGallery


    function displayGallery(a){
        currentGallery=document.querySelector(a)
        display.style.display="flex";
        currentGallery.style.display = "flex";
        slideNum = currentGallery.getElementsByTagName('img').length;
    }


        let close = document.querySelector(".close")

            close.addEventListener("click", function(){
            currentSlide=1
            box =1
            currentGallery.style.display = "none";
            display.style.display = "none"
        })


        nextGalEl.addEventListener("click", function(){
            currentSlide++
            updateslide()
        })
        
        prevGalEl.addEventListener("click", function(){
            currentSlide--
            updateslide()
        })
    
        function updateslide(){
            if(currentSlide>(slideNum)) {
                currentSlide =1;
            } else if(currentSlide<1) {
                currentSlide = slideNum
            }
            document.querySelector(".display").style.transform =`translateX(-${(currentSlide-1) * 800}px)`;
            }

            // cotact us validation

            let contactUsMail=document.querySelector('#contactUsMail')

            function cu_validateEmail() {
                var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if (contactUsMail.value.match(validRegex)) {
                    contactUsMail.focus();
                    contactUsMail.style.border = '1px solid green';
                    return true
                } else {
                    contactUsMail.focus();
                    contactUsMail.style.border = '1px solid red';
                    return false
                }
            }

            contactUsMail.addEventListener('keyup' , cu_validateEmail)

        