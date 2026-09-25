// Optional enhancement beyond the HTML/CSS lessons: a local message preview.
// No network request is made, and nothing is stored or sent.
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
const preview = document.querySelector('#message-preview');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  if (!message) {
    status.textContent = 'Please write a message before previewing it.';
    preview.hidden = true;
    form.elements.message.focus();
    return;
  }
  document.querySelector('#preview-email').textContent = `From: ${email}`;
  document.querySelector('#preview-message').textContent = message;
  preview.hidden = false;
  status.textContent = 'Preview ready. Your message has not been sent.';
});

form.addEventListener('input', () => {
  preview.hidden = true;
  status.textContent = '';
});
