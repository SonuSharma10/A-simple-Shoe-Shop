let body = document.querySelector('.full_page');
let colo = document.querySelectorAll('.more-color');
let price = document.querySelectorAll('.mid-section');
console.dir(colo);
console.dir(body);
for (let color of colo) {
  color.addEventListener('click', () => {
    console.log('pressed');
    console.dir(color);
    // style = window.getComputedStyle(color);
    current_color = color.style.backgroundColor;
    // bg = style.getPropertyValue('background-color')
    // console.log(bg);
    if (current_color == 'black') {
      body.classList.add('white');
      body.style.backgroundColor = current_color;
    } else body.style.backgroundColor = current_color;
  });
}
