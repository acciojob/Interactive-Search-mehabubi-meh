//your JS code here. If required.
// your JS code here. If required.
const searchDiv = document.querySelector('.search');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  searchDiv.classList.add('active');
  input.focus();
});
