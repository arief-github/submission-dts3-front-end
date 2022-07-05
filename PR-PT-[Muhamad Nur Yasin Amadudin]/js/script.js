let circularProgress_1 = document.getElementById("cr-1"),
    progressValue_1 = document.querySelector(".pv-1"),
    circularProgress_2 = document.querySelector(".cr-2"),
    progressValue_2 = document.querySelector(".pv-2"),
    circularProgress_3 = document.querySelector(".cr-3"),
    progressValue_3 = document.querySelector(".pv-3"),
    circularProgress_4 = document.querySelector(".cr-4"),
    progressValue_4 = document.querySelector(".pv-4"),
    circularProgress_5 = document.querySelector(".cr-5"),
    progressValue_5 = document.querySelector(".pv-5")
    ;

let progressStartValue = 0,    
    progressEndValue_1 = 90,    
    progressEndValue_2 = 70,    
    progressEndValue_3 = 50,    
    progressEndValue_4 = 50,    
    progressEndValue_5 = 60,    
    speed = 20;
    
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const elementPosition = circularProgress_1.offsetTop - 550;
    console.log(scrolled, elementPosition)
    if (scrolled >= elementPosition) {
        let progress = setInterval(() => {
    progressStartValue++;

    if(progressStartValue <= progressEndValue_1){
        progressValue_1.textContent = `${progressStartValue}%`
    circularProgress_1.style.background = `conic-gradient(#00bd95 ${progressStartValue * 3.6}deg, #21272f 0deg)`
    }

    if(progressStartValue <= progressEndValue_2){
        progressValue_2.textContent = `${progressStartValue}%`
    circularProgress_2.style.background = `conic-gradient(#00bd95 ${progressStartValue * 3.6}deg, #21272f 0deg)`
    }

    if(progressStartValue <= progressEndValue_3){
        progressValue_3.textContent = `${progressStartValue}%`
    circularProgress_3.style.background = `conic-gradient(#00bd95 ${progressStartValue * 3.6}deg, #21272f 0deg)`
    }

    if(progressStartValue <= progressEndValue_4){
        progressValue_4.textContent = `${progressStartValue}%`
    circularProgress_4.style.background = `conic-gradient(#00bd95 ${progressStartValue * 3.6}deg, #21272f 0deg)`
    }

    if(progressStartValue <= progressEndValue_5){
        progressValue_5.textContent = `${progressStartValue}%`
    circularProgress_5.style.background = `conic-gradient(#00bd95 ${progressStartValue * 3.6}deg, #21272f 0deg)`
    }


    if(progressStartValue == 100){
        clearInterval(progress);
    }    
}, speed);
    }
})

