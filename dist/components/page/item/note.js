import { BaseComponent } from '../../base.js';
export class NoteComponent extends BaseComponent {
    constructor(title, body) {
        super(`
      <div class="flex flex-col w-full">
        <p class="title text-xl font-medium mb-2"></p>
        <p class="body">
        </p>
      </div>`);
        const titleElement = this.element.querySelector('.title');
        const bodyElement = this.element.querySelector('.body');
        titleElement.textContent = title;
        bodyElement.textContent = body;
    }
}
