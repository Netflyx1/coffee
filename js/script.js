// Шукаємо всі контейнери слайдерів на сторінці
const containers = document.querySelectorAll('.slider-container');

containers.forEach(container => {
    // Шукаємо елементи ТІЛЬКИ всередині поточного контейнера
    const track = container.querySelector('.main_box');
    const nextBtn = container.querySelector('.next-btn');
    const prevBtn = container.querySelector('.prev-btn');
    const cards = container.querySelectorAll('.main_box_item');

    let index = 0;
    const visibleCards = 4;

    function updateSlider() {
        if (cards.length > 0) {
            const cardWidth = cards[0].offsetWidth + 20; // ширина + gap
            track.style.transform = `translateX(-${index * cardWidth}px)`;
        }
    }

    nextBtn.addEventListener('click', () => {
        // Перевірка: не гортати далі, ніж є карток саме в цьому блоці
        if (index < cards.length - visibleCards) {
            index++;
            updateSlider();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (index > 0) {
            index--;
            updateSlider();
        }
    });

    // Оновлення при зміні розміру вікна для кожного слайдера
    window.addEventListener('resize', updateSlider);
});