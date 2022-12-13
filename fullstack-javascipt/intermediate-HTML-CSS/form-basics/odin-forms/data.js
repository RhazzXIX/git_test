const submitButton = document.querySelector('#upSkill');
const name = document.querySelector('#first_name')
submitButton.style.background = 'red';
submitButton.addEventListener('click', (e) => {
   alert(`Welcome to Up-Skilling World ${name.textContext}`);
});

