import '../style/style.scss';

document.querySelectorAll('.collapsible').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    console.log(content)
    button.classList.toggle('collapsible--active');
    
    if(button.classList.contains('collapsible--active')){
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = 0;
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