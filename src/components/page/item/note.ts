import { BaseComponent } from '../../base.js';

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(`
      <div class="flex flex-col w-full">
        <p class="title text-xl font-medium mb-2"></p>
        <p class="body">
        </p>
      </div>`);

    const titleElement = this.element.querySelector('.title') as HTMLParagraphElement;
    const bodyElement = this.element.querySelector('.body') as HTMLParagraphElement;
    titleElement.textContent = title;
    bodyElement.textContent = body;
  }
}
