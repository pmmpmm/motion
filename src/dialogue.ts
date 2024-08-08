type DialogueBtn = 'image' | 'video' | 'note' | 'task';

const dialogueBtns = document.querySelector('.dialogue-btns');
const dialogueInpField = document.querySelector('.dialogue-input-field');
const dialoguePop = document.querySelector('.dialogue-pop');
const dialogueCloseBtn = document.querySelector('.dialogue-pop .closeBtn');

dialogueBtns?.addEventListener('click', (e) => {
  const target = e.target as HTMLButtonElement;
  const name = target?.name as DialogueBtn;

  if (dialogueInpField?.lastChild) dialogueInpField?.removeChild(dialogueInpField.lastChild);

  if (name === 'image' || name === 'video') {
    dialogueInpField?.insertAdjacentHTML(
      'beforeend',
      `<div>
        <label for="url" class="block pb-1 font-medium">URL</label>
        <input type="text" id="url" class="block w-full px-4 py-2 border border-solid border-inherit"
        />
      </div>`
    );
  }
  if (name === 'note' || name === 'task') {
    dialogueInpField?.insertAdjacentHTML(
      'beforeend',
      `<div>
        <label for="body" class="block pb-1 font-medium">BODY</label>
        <textarea name="body" id="body" rows="5" cols="33"
          class="block w-full px-4 py-2 border border-solid border-inherit resize-none"></textarea>
      </div>`
    );
  }

  dialoguePop?.classList.add('open');
});

dialogueCloseBtn?.addEventListener('click', () => {
  dialoguePop?.classList.remove('open');
});
