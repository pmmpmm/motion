import { BaseComponent } from '../../base.js';

export class MediaInput extends BaseComponent {
  constructor() {
    super(`
      <div class="dialogue-input-field flex flex-col gap-4">
        <div>
          <label for="visual-title" class="block pb-1 font-medium">TITLE</label>
          <input type="text" id="visual-title"
          class="title-inp block w-full px-4 py-2 border border-solid border-inherit"/>
        </div>
        <div>
          <label for="visual-url" class="block pb-1 font-medium">URL</label>
          <input type="text" id="visual-url" class="body-inp block w-full px-4 py-2 border border-solid border-inherit"/>
        </div>
      </div>`);
  }
}
