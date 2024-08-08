import { removeDialog } from './common/removeDialog.js';
import { DialogueBtn } from '../src/domain/DialogueDomain';

const dialogBtns = document.querySelector('.dialogue-btns');
const dialogInpArea = document.querySelector('.dialogue-input-area');
const dialogPop = document.querySelector('.dialogue-pop');
const dialogCloseBtn = document.querySelector('.dialogue-pop .closeBtn');

dialogBtns?.addEventListener('click', (e) => {
  const target = e.target as HTMLButtonElement;
  const name = target?.name as DialogueBtn;

  if (target.tagName === 'BUTTON') {
    if (dialogInpArea?.firstChild) dialogInpArea?.removeChild(dialogInpArea.firstChild);

    if (name === 'image' || name === 'video') {
      dialogInpArea?.insertAdjacentHTML(
        'afterbegin',
        `<div type="${name}" class="dialogue-input-field flex flex-col gap-4">
          <div>
            <label for="title" class="block pb-1 font-medium">TITLE</label>
            <input
            type="text"
            id="title"
            class="block w-full px-4 py-2 border border-solid border-inherit"/>
          </div>
          <div>
            <label for="url" class="block pb-1 font-medium">URL</label>
            <input type="text" id="url" class="block w-full px-4 py-2 border border-solid border-inherit"/>
          </div>
        </div>`
      );
    }
    if (name === 'note' || name === 'task') {
      dialogInpArea?.insertAdjacentHTML(
        'afterbegin',
        `<div type="${name}" class="dialogue-input-field flex flex-col gap-4">
          <div>
            <label for="title" class="block pb-1 font-medium">TITLE</label>
            <input
            type="text"
            id="title"
            class="block w-full px-4 py-2 border border-solid border-inherit"/>
          </div>
          <div>
            <label for="body" class="block pb-1 font-medium">BODY</label>
            <textarea name="body" id="body" rows="5" cols="33"
            class="block w-full px-4 py-2 border border-solid border-inherit resize-none"></textarea>
          </div>
        </div>`
      );
    }

    dialogPop?.classList.add('open');
  }
});

dialogCloseBtn?.addEventListener('click', () => {
  removeDialog();
});
