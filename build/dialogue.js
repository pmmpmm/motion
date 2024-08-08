"use strict";
const dialogueBtns = document.querySelector('.dialogue-btns');
const dialogueInpField = document.querySelector('.dialogue-input-field');
const dialoguePop = document.querySelector('.dialogue-pop');
const dialogueCloseBtn = document.querySelector('.dialogue-pop .closeBtn');
dialogueBtns === null || dialogueBtns === void 0 ? void 0 : dialogueBtns.addEventListener('click', (e) => {
    const target = e.target;
    const name = target === null || target === void 0 ? void 0 : target.name;
    if (dialogueInpField === null || dialogueInpField === void 0 ? void 0 : dialogueInpField.lastChild)
        dialogueInpField === null || dialogueInpField === void 0 ? void 0 : dialogueInpField.removeChild(dialogueInpField.lastChild);
    if (name === 'image' || name === 'video') {
        dialogueInpField === null || dialogueInpField === void 0 ? void 0 : dialogueInpField.insertAdjacentHTML('beforeend', `<div>
        <label for="url" class="block pb-1 font-medium">URL</label>
        <input type="text" id="url" class="block w-full px-4 py-2 border border-solid border-inherit"
        />
      </div>`);
    }
    if (name === 'note' || name === 'task') {
        dialogueInpField === null || dialogueInpField === void 0 ? void 0 : dialogueInpField.insertAdjacentHTML('beforeend', `<div>
        <label for="body" class="block pb-1 font-medium">BODY</label>
        <textarea name="body" id="body" rows="5" cols="33"
          class="block w-full px-4 py-2 border border-solid border-inherit resize-none"></textarea>
      </div>`);
    }
    dialoguePop === null || dialoguePop === void 0 ? void 0 : dialoguePop.classList.add('open');
});
dialogueCloseBtn === null || dialogueCloseBtn === void 0 ? void 0 : dialogueCloseBtn.addEventListener('click', () => {
    dialoguePop === null || dialoguePop === void 0 ? void 0 : dialoguePop.classList.remove('open');
});
