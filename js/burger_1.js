document.querySelectorAll('.button_1').forEach((el) => {
    el.addEventListener('click', () => {
    let content = el.nextElementSibling;
    if(content.style.maxHeight) {
        document.querySelectorAll('.burger_1').forEach((el) => el.style.maxHeight =null)
    } else {
        document.querySelectorAll('.burger_1').forEach((el) => el.style.maxHeight =null)
        content.style.maxHeight = content.scrollHeight + 'px';
    }
    })
})