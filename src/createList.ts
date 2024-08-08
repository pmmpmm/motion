import { removeDialog } from './common/removeDialog.js';
import { list } from './common/listElement.js';
import { DialogueBtn } from '../src/domain/DialogueDomain';

const dialogueAddBtn = document.querySelector('.dialogue-pop .addBtn');

dialogueAddBtn?.addEventListener('click', () => {
  const titleInput = document.querySelector('#title') as HTMLInputElement;
  const urlInput = document.querySelector('#url') as HTMLInputElement;
  const bodyInput = document.querySelector('#body') as HTMLTextAreaElement;

  const listWrap = document.querySelector('.list-wrap');
  const dialogInpField = document.querySelector('.dialogue-input-field');
  const dialogType = dialogInpField?.getAttribute('type') as DialogueBtn;

  if (urlInput) {
    const titleValue = titleInput.value;
    const urlValue = urlInput.value;

    listWrap?.insertAdjacentHTML('beforeend', list(dialogType, titleValue, urlValue, undefined));
  }
  if (bodyInput) {
    const titleValue = titleInput.value;
    const bodyValue = bodyInput.value;

    listWrap?.insertAdjacentHTML('beforeend', list(dialogType, titleValue, undefined, bodyValue));
  }

  removeDialog();
});
