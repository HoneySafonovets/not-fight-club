export default function startInputCheck(input, btn) {
  input.addEventListener('input', (e) => {
    
    if (input.value === '') {
      btn.classList.add('create__character-btn-none');
    } else {
      btn.classList.remove('create__character-btn-none');
    }
  });
}