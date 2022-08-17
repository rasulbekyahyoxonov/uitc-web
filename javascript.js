let oneSection = document.getElementById('scroll-div');
let oval1 = document.getElementById('oval1');
let oval2 = document.getElementById('oval2');
let oval3 = document.getElementById('oval3');

oval1.addEventListener('click', function () {
    oneSection.style.transform = 'translateX(-0%)'
    this.style.background = '#fff'
    oval2.style.background = 'transparent'
    oval3.style.background = 'transparent'
})
oval2.addEventListener('click', function () {
    oneSection.style.transform = 'translateX(-100%)'
    oval1.style.background = 'transparent'
    this.style.background = '#fff'
    oval3.style.background = 'transparent'
})
oval3.addEventListener('click', function () {
    oneSection.style.transform = 'translateX(-200%)'
    oval1.style.background = 'transparent'
    oval2.style.background = 'transparent'
    this.style.background = '#fff'
})

document.querySelector('.check-img').addEventListener('click', function() {
    document.querySelector('.OpenNaw').style.display = 'flex';
})
document.querySelector('.close-icon').addEventListener('click', ()=> {
    document.querySelector('.OpenNaw').style.display = 'none';
})