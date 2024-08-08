import { removeDialog } from './common/removeDialog.js';
import { list } from './common/listElement.js';
const dialogueAddBtn = document.querySelector('.dialogue-pop .addBtn');
dialogueAddBtn === null || dialogueAddBtn === void 0 ? void 0 : dialogueAddBtn.addEventListener('click', () => {
    const titleInput = document.querySelector('#title');
    const urlInput = document.querySelector('#url');
    const bodyInput = document.querySelector('#body');
    const listWrap = document.querySelector('.list-wrap');
    const dialogInpField = document.querySelector('.dialogue-input-field');
    const dialogType = dialogInpField === null || dialogInpField === void 0 ? void 0 : dialogInpField.getAttribute('type');
    if (urlInput) {
        const titleValue = titleInput.value;
        const urlValue = urlInput.value;
        listWrap === null || listWrap === void 0 ? void 0 : listWrap.insertAdjacentHTML('beforeend', list(dialogType, titleValue, urlValue, undefined));
    }
    if (bodyInput) {
        const titleValue = titleInput.value;
        const bodyValue = bodyInput.value;
        listWrap === null || listWrap === void 0 ? void 0 : listWrap.insertAdjacentHTML('beforeend', list(dialogType, titleValue, undefined, bodyValue));
    }
    removeDialog();
});
