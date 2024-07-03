console.clear();

const nav = document.querySelector('.navigation');
const listItems = document.querySelectorAll('.list');

nav.addEventListener('click', function (e) {
    if (e.target.closest('.list')) {
        listItems.forEach(item => item.classList.remove('active'));
        e.target.closest('.list').classList.add('active');
    }
})