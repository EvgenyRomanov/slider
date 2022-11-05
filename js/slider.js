const projects = [
    {
        city: "Rostov-on-Don<br> LCD admiral",
        area: "81 m2",
        time: "3.5 months",
        cost: "Upon request",
        img: "image/image 2.1.png"
    },
    {
        city: "Sochi<br> Thieves",
        area: "105 m2",
        time: "4 months",
        cost: "Upon request",
        img: "image/image 2 (1).png"
    },
    {
        city: "Rostov-on-Don<br> LCD admiral",
        area: "93 m2",
        time: "3 months",
        cost: "Upon request",
        img: "image/image 3.png"
    }
];

const city = document.querySelector('.city');
const area = document.querySelector('.area');
const time = document.querySelector('.time');
const cost = document.querySelector('.cost');
const img = document.querySelector('.img');
const dots = document.querySelectorAll('.dot');
const firstDot = document.querySelector('.dot');
const firstNameImage = document.querySelector('.section-completed__images-item');
const namesImages = document.querySelectorAll('.section-completed__images-item');

const setProject = (index) => {
    city.innerHTML = projects[index].city;
    area.innerText = projects[index].area;
    time.innerText = projects[index].time;
    cost.innerText = projects[index].cost;
    img.setAttribute('src', projects[index].img);

    dots.forEach(function(item, idx, array) {
        if (idx === index) {
            item.setAttribute('class', 'dot');
        } else {
            item.setAttribute('class', 'dot opacity');
        }
    });

    namesImages.forEach(function(item, idx, array) {
        if (idx === index) {
            item.setAttribute('class', 'section-completed__images-item images-item--selected');
        } else {
            item.setAttribute('class', 'section-completed__images-item');
        }
    });

};

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentIndex = 0;

prev.addEventListener('click', () => {
    setProject(currentIndex - 1);
    currentIndex -= 1;
})

next.addEventListener('click', () => {
    setProject(currentIndex + 1);
    currentIndex += 1;
})

document.addEventListener('DOMContentLoaded', (event) => {
    setProject(currentIndex);
    firstDot.setAttribute('class', 'dot');
    firstNameImage.setAttribute('class', 'section-completed__images-item images-item--selected');
});