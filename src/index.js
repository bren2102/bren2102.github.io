import '../style/style.scss';

document.querySelectorAll('.collapsible').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    button.classList.toggle('collapsible--active');
    
    if(button.classList.contains('collapsible--active')){
      content.style.maxHeight = content.scrollHeight + 'px';
      button.style.borderBottom = 'none';
      button.lastElementChild.style.transform = "rotate(90deg)";
    } else {
      content.style.maxHeight = 0;
      button.lastElementChild.style.transform = "rotate(0)";
      button.style.borderBottom = '1px solid #DFE1E6';
    }
  })
})

document.querySelectorAll('.displayMenu').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('menu--active');
    if (button.classList.contains('menu--active')) {
      document.querySelector('.menuDisplayed').style.maxHeight = '100%';
      document.querySelector('.displayMenu').style.position = 'unset';
    } else {
      console.log('no')
    }
  })
})


document.querySelectorAll('.closeMenu').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('displayed--active');

    if (button.classList.contains('displayed--active')) {    
      document.querySelector('.menuDisplayed').style.maxHeight = 0;
      document.querySelector('.displayMenu').style.position = 'sticky';
    } else {
      console.log('no')
    }
  })
})
