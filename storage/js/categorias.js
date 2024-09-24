const catalogoSlider2 = function() {
    const slider = document.querySelector('#catalogo .list-slide-movies-2');
    const slides = slider.querySelectorAll('.slider');
    const prevSlide = document.getElementById('prev-slide-2');
    const nextSlide = document.getElementById('next-slide-2');
    let slideCurrent = 0;
    let width = slides[0].offsetWidth;

    const runSliderCatalogo = function(next) {
        let slideNumber = 2;
        let gap = 64;

        if (next && slideCurrent < ((slides.length / slideNumber))) {
            slideCurrent += 2;
        }
        if (!next && slideCurrent >= 2) {
            slideCurrent = slideCurrent - 2;
            console.log(`${slideCurrent} = ${slideCurrent} - ${2}`);
        }
        console.log(slideCurrent);
        slider.style.cssText = `transform: translateX(-${((width + gap)*slideCurrent)}px);`;
    }

    prevSlide.addEventListener('click', function() {
        runSliderCatalogo(false);
    })
    nextSlide.addEventListener('click', function() {
        runSliderCatalogo(true);
    })
}
const catalogoSlider3 = function() {
    const slider = document.querySelector('#catalogo-2 .list-slide-movies');
    const slides = slider.querySelectorAll('.slider');
    const prevSlide = document.getElementById('prev-slide-3');
    const nextSlide = document.getElementById('next-slide-3');
    let slideCurrent = 0;
    let width = slides[0].offsetWidth;

    const runSliderCatalogo = function(next) {
        let slideNumber = 2;
        let gap = 64;

        if (next && slideCurrent < ((slides.length / slideNumber))) {
            slideCurrent += 2;
        }
        if (!next && slideCurrent >= 2) {
            slideCurrent = slideCurrent - 2;
            console.log(`${slideCurrent} = ${slideCurrent} - ${2}`);
        }
        console.log(slideCurrent);
        slider.style.cssText = `transform: translateX(-${((width + gap)*slideCurrent)}px);`;
    }

    prevSlide.addEventListener('click', function() {
        runSliderCatalogo(false);
    })
    nextSlide.addEventListener('click', function() {
        runSliderCatalogo(true);
    })
}
const catalogoSlider4 = function() {
    const slider = document.querySelector('#catalogo-2 .list-slide-movies-2');
    const slides = slider.querySelectorAll('.slider');
    const prevSlide = document.getElementById('prev-slide-4');
    const nextSlide = document.getElementById('next-slide-4');
    let slideCurrent = 0;
    let width = slides[0].offsetWidth;

    const runSliderCatalogo = function(next) {
        let slideNumber = 2;
        let gap = 64;

        if (next && slideCurrent < ((slides.length / slideNumber))) {
            slideCurrent += 2;
        }
        if (!next && slideCurrent >= 2) {
            slideCurrent = slideCurrent - 2;
            console.log(`${slideCurrent} = ${slideCurrent} - ${2}`);
        }
        console.log(slideCurrent);
        slider.style.cssText = `transform: translateX(-${((width + gap)*slideCurrent)}px);`;
    }

    prevSlide.addEventListener('click', function() {
        runSliderCatalogo(false);
    })
    nextSlide.addEventListener('click', function() {
        runSliderCatalogo(true);
    })
}
const catalogoSlider5 = function() {
    const slider = document.querySelector('#catalogo-2 .list-slide-movies-3');
    const slides = slider.querySelectorAll('.slider');
    const prevSlide = document.getElementById('prev-slide-5');
    const nextSlide = document.getElementById('next-slide-5');
    let slideCurrent = 0;
    let width = slides[0].offsetWidth;

    const runSliderCatalogo = function(next) {
        let slideNumber = 2;
        let gap = 64;

        if (next && slideCurrent < ((slides.length / slideNumber))) {
            slideCurrent += 2;
        }
        if (!next && slideCurrent >= 2) {
            slideCurrent = slideCurrent - 2;
            console.log(`${slideCurrent} = ${slideCurrent} - ${2}`);
        }
        console.log(slideCurrent);
        slider.style.cssText = `transform: translateX(-${((width + gap)*slideCurrent)}px);`;
    }

    prevSlide.addEventListener('click', function() {
        runSliderCatalogo(false);
    })
    nextSlide.addEventListener('click', function() {
        runSliderCatalogo(true);
    })
}

catalogoSlider2();
catalogoSlider3();
catalogoSlider4();
catalogoSlider5();