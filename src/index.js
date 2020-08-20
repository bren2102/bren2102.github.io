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

(function () {
  emailjs.init('user_O5FbAcZ71Jmx750DSsMLN');
})();

window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    this.contact_number.value = Math.random() * 100000 | 0;
    emailjs.sendForm('contact_service', 'contact_form', this);
  });
}