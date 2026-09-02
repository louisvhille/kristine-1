let page1 = document.getElementById('page-1');
let page2 = document.getElementById('page-2');
let page3 = document.getElementById('page-3');
let page4 = document.getElementById('page-4');
let page5 = document.getElementById('page-5');

const audio = document.getElementById("audio");

document.getElementById('start-btn').addEventListener('click', function() {
    showPage2();
});

document.getElementById('gift-1').addEventListener('click', function() {
    showPage3();
});

document.getElementById('letter').addEventListener('click', function() {
    const kristine = document.getElementById('kristine-1');
    const currentOpacity = window.getComputedStyle(kristine).opacity;

    if (currentOpacity === '0' || currentOpacity === '') {
        document.getElementById('letter').style.transform = 'scale(0.5)';
        kristine.style.opacity = '1';
    }
    else {
        document.getElementById('letter').style.transform = 'scale(1)';
        kristine.style.opacity = '0';
    }
});

document.getElementById('kristine-1').addEventListener('click', function() {
    
});

document.getElementById('gift-2').addEventListener('click', function() {
    showPage4();
});

document.getElementById('gift-3').addEventListener('click', function() {
    showPage5();
});

document.getElementById('back-btn-1').addEventListener('click', function() {
    showPage2();
});

document.getElementById('back-btn-2').addEventListener('click', function() {
    showPage2();
});

document.getElementById('back-btn-3').addEventListener('click', function() {
    showPage2();
});

function showPage1() {
    
}

function showPage2() {
    page1.style.display = 'none';
    page2.style.display = 'flex';
    page3.style.display = 'none';
    page4.style.display = 'none';
    page5.style.display = 'none';

    audio.pause();
}

function showPage3() {
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'flex';
    page4.style.display = 'none';
    page5.style.display = 'none';

    document.getElementById('letter').style.transform = 'scale(0.5)';
    document.getElementById('kristine-1').style.opacity = 1;
}

function showPage4() {
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'flex';
    page5.style.display = 'none';

    audio.volume = 0.5;
    audio.play();
}

function showPage5() {
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'none';
    page5.style.display = 'flex';
}