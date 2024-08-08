export const clearTextField = () => {
  const titleInput = document.querySelector('#title') as HTMLInputElement;
  const urlInput = document.querySelector('#url') as HTMLInputElement;
  const bodyInput = document.querySelector('#body') as HTMLTextAreaElement;

  if (titleInput) titleInput.value = '';
  if (urlInput) urlInput.value = '';
  if (bodyInput) bodyInput.value = '';
};
