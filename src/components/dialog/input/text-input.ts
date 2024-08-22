import { BaseComponent } from '../../base.js';

export class TextInput extends BaseComponent {
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
          class="body-inp block w-full px-4 py-2 border border-solid border-inherit resize-none"></textarea>
        </div>
      </div>`);
  }
}
