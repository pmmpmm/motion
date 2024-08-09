const listWrap = document.querySelector('.list-wrap');

listWrap?.addEventListener('click', (e) => {
  const target = e.target as HTMLButtonElement;

  if (target.tagName === 'BUTTON') {
    target.closest('.list')?.remove();
  }
});
