import { BaseComponent } from '../../base.js';

export class MediaInputDialog extends BaseComponent<HTMLElement> {
  constructor() {
    super(`
      <div class="dialogue-input-field flex flex-col gap-4">
        <div>
          <label for="media-title" class="block pb-1 font-medium">TITLE</label>
          <input type="text" id="media-title"
          class="title-inp block w-full px-4 py-2 border border-solid border-inherit"/>
        </div>
        <div>
          <label for="media-url" class="block pb-1 font-medium">URL</label>
          <input type="text" id="media-url" class="body-inp block w-full px-4 py-2 border border-solid border-inherit"/>
        </div>
      </div>`);
  }
}
