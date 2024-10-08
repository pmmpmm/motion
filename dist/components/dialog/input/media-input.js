import { BaseComponent } from '../../base.js';
export class MediaInputDialog extends BaseComponent {
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
          <input type="text" id="media-url" class="url-inp block w-full px-4 py-2 border border-solid border-inherit"/>
        </div>
      </div>`);
    }
    get title() {
        const titleElement = this.element.querySelector('.title-inp');
        return titleElement.value;
    }
    get url() {
        const urlElement = this.element.querySelector('.url-inp');
        return urlElement.value;
    }
}
