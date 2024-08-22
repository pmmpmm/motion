import { BaseComponent } from '../../base.js';
export class NoteComponent extends BaseComponent {
    constructor(title, body) {
        super(`
      <div class="flex flex-col w-full">
        <p class="title text-xl font-medium mb-2"></p>
        <p class="body">
        </p>
      </div>`);
        this.title = title;
        this.body = body;
        const titleElement = this.element.querySelector('.title');
        titleElement.textContent = this.title;
        const bodyElement = this.element.querySelector('.body');
        bodyElement.textContent = `${this.body}`;
    }
}
