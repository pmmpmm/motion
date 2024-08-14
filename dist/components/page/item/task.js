import { BaseComponent } from '../../base.js';
export class TaskComponent extends BaseComponent {
    constructor(title, body) {
        super(`
      <div class="flex flex-col w-full">
        <p class="title text-xl font-medium mb-2"></p>
        <ul class="body">
        </ul>
      </div>`);
        this.title = title;
        this.body = body;
        const titleElement = this.element.querySelector('.title');
        titleElement.textContent = this.title;
        const bodyElement = this.element.querySelector('.body');
        const bodyListElement = document.createElement('li');
        bodyListElement.innerHTML = `
      <label for="todo1" class="text-base">
        <input type="checkbox" id="todo1" />
        <span class="task inline-block -mt-[1px] pl-1 align-top"></span>
      </label>`;
        const chackBoxTextElement = bodyListElement.querySelector('.task');
        chackBoxTextElement.textContent = this.body;
        bodyElement.append(bodyListElement);
    }
}
