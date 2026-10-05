const copyButton = document.querySelector('[data-copy-email]');
copyButton?.addEventListener('click', async () => {
  const status = document.querySelector('.copy-status');
  const label = copyButton.querySelector('span');
  try {
    await navigator.clipboard.writeText(copyButton.dataset.copyEmail);
    label.textContent = 'Email copied';
    status.textContent = 'Ready to paste into your email app.';
    setTimeout(() => { label.textContent = 'Copy email'; status.textContent = ''; }, 4000);
  } catch {
    status.textContent = 'Please select and copy the email address above.';
  }
});
