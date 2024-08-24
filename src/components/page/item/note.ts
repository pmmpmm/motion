import { BaseComponent } from '../../base.js';

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(private readonly title: string, private readonly body: string) {
    super(`
      <div class="flex flex-col w-full">
        <p class="title text-xl font-medium mb-2"></p>
        <p class="body whitespace-pre">
        </p>
      </div>`);

    const titleElement = this.element.querySelector('.title') as HTMLParagraphElement;
    const bodyElement = this.element.querySelector('.body') as HTMLParagraphElement;
    titleElement.textContent = this.title;
    bodyElement.textContent = this.body;
  }
}
