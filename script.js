const box = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');
const loginBtn = document.querySelector('.login-btn');

registerLink.addEventListener('click', () => {
  box.classList.add('active');
});

loginLink.addEventListener('click', () => {
  box.classList.remove('active');
});

iconClose.addEventListener('click', () => {
  box.classList.remove('active-popup');
});

loginBtn.addEventListener('click', () => {
  box.classList.add('active-popup');
});
