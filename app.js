let offset = 0; //cleft moove
const sliderLine = document.querySelector('.slider-line')


document.querySelector('.slider_next').addEventListener('click', function () {
    offset += 550;
    if (offset > 1650) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px';
})
document.querySelector('.slider_prev').addEventListener('click', function () {
    offset -= 550;
    if (offset < 0) {
        offset = 1650
    }
    sliderLine.style.left = -offset + 'px';
})


//// HOMETASK #1

let Tc = 22
let Tf = (9 / 5) * Tc + 32
/* console.log('22 градуса по Цельсию это - ' + Tf +' по Фаренгейту') */ // Вывести в консоль!
alert('22 градуса по Цельсию это - ' + Tf + ' по Фаренгейту')

let userName = 'Василий'
let admin
admin = userName
alert(admin)

// из * №1   Выражение будет равно 1000108
