import { clearTextField } from './clearTextField.js';
export const removeDialog = () => {
    const dialogPop = document.querySelector('.dialogue-pop');
    dialogPop === null || dialogPop === void 0 ? void 0 : dialogPop.classList.remove('open');
    clearTextField();
};
