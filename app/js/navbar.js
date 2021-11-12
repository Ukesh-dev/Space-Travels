
const menu_btn = document.querySelector('.menu');
console.log(menu_btn)
const navigation = document.querySelector('.primary-navigation');
const li = document.querySelector('.primary-navigation').children;
// const buttons = document.querySelector('.destination-buttons').children;

menu_btn.addEventListener('click', () => {
    navigation.dataset.visible == 'false' ? navigation.setAttribute('data-visible', true) : navigation.setAttribute('data-visible', false)
    Array.from(li).forEach((item, index) => {
        if (navigation.dataset.visible == 'true') {
            item.style.animation = `navLinkFade .3s ease forwards ${index / 8 + .3}s`;
            menu_btn.setAttribute('aria-expanded', true);

        }
        else {
            item.style.animation = '';
            menu_btn.setAttribute('aria-expanded', false);

        }
    })



})