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
const dots = document.querySelectorAll('.dot');
const cards = document.querySelectorAll('.review-card');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // Знімаємо активний клас зі всіх
        dots.forEach(d => d.classList.remove('active'));
        cards.forEach(c => c.classList.remove('active'));

        // Додаємо активний клас вибраному
        dot.classList.add('active');
        cards[index].classList.add('active');
        
        // Тут можна додати логіку зміщення (translateX) для справжнього слайдера
    });
});