document.querySelectorAll('.function__items').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = '0.3s';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

document.querySelectorAll('.function__items p').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.color = 'rgb(187, 142, 52)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.color = ''; // Возвращает цвет по умолчанию
    });
});