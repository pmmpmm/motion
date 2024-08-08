import { removeDialog } from './common/removeDialog.js';
const dialogBtns = document.querySelector('.dialogue-btns');
const dialogInpArea = document.querySelector('.dialogue-input-area');
const dialogPop = document.querySelector('.dialogue-pop');
const dialogCloseBtn = document.querySelector('.dialogue-pop .closeBtn');
dialogBtns === null || dialogBtns === void 0 ? void 0 : dialogBtns.addEventListener('click', (e) => {
    const target = e.target;
    const name = target === null || target === void 0 ? void 0 : target.name;
    if (target.tagName === 'BUTTON') {
        if (dialogInpArea === null || dialogInpArea === void 0 ? void 0 : dialogInpArea.firstChild)
            dialogInpArea === null || dialogInpArea === void 0 ? void 0 : dialogInpArea.removeChild(dialogInpArea.firstChild);
        if (name === 'image' || name === 'video') {
            dialogInpArea === null || dialogInpArea === void 0 ? void 0 : dialogInpArea.insertAdjacentHTML('afterbegin', `<div type="${name}" class="dialogue-input-field flex flex-col gap-4">
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
        </div>`);
        }
        if (name === 'note' || name === 'task') {
            dialogInpArea === null || dialogInpArea === void 0 ? void 0 : dialogInpArea.insertAdjacentHTML('afterbegin', `<div type="${name}" class="dialogue-input-field flex flex-col gap-4">
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
        </div>`);
        }
        dialogPop === null || dialogPop === void 0 ? void 0 : dialogPop.classList.add('open');
    }
});
dialogCloseBtn === null || dialogCloseBtn === void 0 ? void 0 : dialogCloseBtn.addEventListener('click', () => {
    removeDialog();
});
