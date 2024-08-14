import { BaseComponent } from '../../base.js';

export class NoteComponent extends BaseComponent {
  constructor(private readonly title: string, private readonly body: string) {
    super(`
      <div class="flex flex-col w-full">
        <p class="title text-xl font-medium mb-2"></p>
        <p class="body">
        </p>
      </div>`);

    const titleElement = this.element.querySelector('.title') as HTMLParagraphElement;
    titleElement.textContent = this.title;

    const bodyElement = this.element.querySelector('.body') as HTMLParagraphElement;
    bodyElement.textContent = `${this.body}`;
  }
}
