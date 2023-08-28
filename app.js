/* Меню и сайтбар
-------------------------------------------- */
const menu = document.querySelector('.menu'),
    aside = document.querySelector('.sidebar'),
    menuLine1 = document.querySelector('.menu__line1'),
    menuLine2 = document.querySelector('.menu__line2'),
    menuLine3 = document.querySelector('.menu__line3');


    

window.addEventListener('click', event => {
    if (event.target.closest('.menu') && 
    !aside.closest('.shw')) {
        menu.classList.add('active');
        aside.classList.add('shw');
        menuLine1.classList.add('active1');
        menuLine2.classList.add('active2');
        menuLine3.classList.add('active3');
    } else if (!event.target.closest('.sidebar') && 
    aside.closest('.shw')) {
        menu.classList.remove('active');
        aside.classList.remove('shw');
        menuLine1.classList.remove('active1');
        menuLine2.classList.remove('active2');
        menuLine3.classList.remove('active3');
    }
});

/* 
-------------------------------------------- */
window.addEventListener('DOMContentLoaded', () => {
    let mainContentAll = document.querySelectorAll('.main__content');
    for (let mainContent of mainContentAll) {
        let mcN = document.createElement('div');
        mcN.classList.add('main__content-image');
            if (Array.from(mainContent.children).some(item => item.closest('img'))) {
                mainContent.append(mcN);
            }
        let mainContentII = mainContent.querySelectorAll('img');
        for (let mcImg of mainContentII) {
            mcN.append(mcImg);
        }
        
        /* slider
        -------------------------------------------- */
        let i=0;
        if (i == 0) mainContentII[i].classList.add('show-img');
        function slider(n) {
            mainContentII[i].classList.remove('show-img');
            i = (n + mainContentII.length) %mainContentII.length;
            mainContentII[i].classList.add('show-img');
        }
        function sss() {
            slider(i+1);
        }
        setInterval(sss, 10000);

        let btnLeft = document.createElement('div');
        btnLeft.classList.add('main__content-btnleft');
        let btnRight = document.createElement('div');
        btnRight.classList.add('main__content-btnright');

        if (mainContentII.length > 1) {
            mcN.append(btnLeft,btnRight);
        }

        btnLeft.addEventListener('click', () => {
            slider(i-1);
        });
        btnRight.addEventListener('click', () => {    
            slider(i+1);
        });
    }
});