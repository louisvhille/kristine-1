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