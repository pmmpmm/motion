import { BaseComponent } from '../../base.js';

export class TaskComponent extends BaseComponent {
  constructor(private readonly title: string, private readonly body: string) {
    super(`
      <div class="flex flex-col w-full">
        <p class="title text-xl font-medium mb-2"></p>
        <ul class="body">
        </ul>
      </div>`);

    const titleElement = this.element.querySelector('.title') as HTMLParagraphElement;
    titleElement.textContent = this.title;

    const bodyElement = this.element.querySelector('.body') as HTMLUListElement;

    const bodyListElement = document.createElement('li');
    bodyListElement.innerHTML = `
      <label for="todo1" class="text-base">
        <input type="checkbox" id="todo1" />
        <span class="task inline-block -mt-[1px] pl-1 align-top"></span>
      </label>`;
    const chackBoxTextElement = bodyListElement.querySelector('.task')! as HTMLSpanElement;
    chackBoxTextElement.textContent = this.body;

    bodyElement.append(bodyListElement);
  }
}
