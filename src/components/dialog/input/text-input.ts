import { BaseComponent } from '../../base.js';

export class TextInputDialog extends BaseComponent<HTMLElement> {
  constructor() {
    super(`
      <div class="dialogue-input-field flex flex-col gap-4">
        <div>
          <label for="text-title" class="block pb-1 font-medium">TITLE</label>
          <input type="text" id="text-title"
          class="title-inp block w-full px-4 py-2 border border-solid border-inherit"/>
        </div>
        <div>
          <label for="text-body" class="block pb-1 font-medium">BODY</label>
          <textarea name="body" id="text-body" rows="5" cols="33"
          class="body-inp block w-full px-4 py-2 border border-solid border-inherit whitespace-pre resize-none"></textarea>
        </div>
      </div>`);
  }
  get title() {
    const titleElement = this.element.querySelector('.title-inp') as HTMLInputElement;
    return titleElement.value;
  }
  get body() {
    const bodyElement = this.element.querySelector('.body-inp') as HTMLTextAreaElement;

    return bodyElement.value;
  }
}
