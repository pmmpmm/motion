import { clearTextField } from './clearTextField.js';

export const removeDialog = () => {
  const dialogPop = document.querySelector('.dialogue-pop');
  dialogPop?.classList.remove('open');
  clearTextField();
};
