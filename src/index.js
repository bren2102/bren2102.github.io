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