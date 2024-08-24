import { BaseComponent } from '../../base.js';

export class TaskComponent extends BaseComponent<HTMLElement> {
  constructor(private readonly title: string, private readonly body: string) {
    super(`
      <div class="flex flex-col w-full">
        <p class="title text-xl font-medium mb-2"></p>
        <ul class="body">
        </ul>
      </div>`);

    const titleElement = this.element.querySelector('.title') as HTMLParagraphElement;
    const bodyElement = this.element.querySelector('.body') as HTMLParagraphElement;

    titleElement.textContent = this.title;

    const itemTemplate = document.createElement('template');
    itemTemplate.innerHTML = `
    <li class="task-item">
      <label for="todo1" class="text-base">
        <input type="checkbox" id="todo1" />
        <span class="task inline-block -mt-[1px] pl-1 align-top"></span>
      </label>
    </li>`;
    const itemTemplateContent = itemTemplate.content.firstElementChild as HTMLElement;

    const bodyItem = this.body.split('\r');
    bodyItem.forEach((itemContent) => {
      const item = document.importNode(itemTemplateContent, true);
      const itemLabel = item.querySelector('.task') as HTMLSpanElement;
      itemLabel.textContent = itemContent;
      bodyElement.appendChild(item);
    });
  }
}
