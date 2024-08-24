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
        const bodyElement = this.element.querySelector('.body');
        titleElement.textContent = this.title;
        const itemTemplate = document.createElement('template');
        itemTemplate.innerHTML = `
    <li class="task-item">
      <label for="todo1" class="text-base">
        <input type="checkbox" id="todo1" />
        <span class="task inline-block -mt-[1px] pl-1 align-top"></span>
      </label>
    </li>`;
        const itemTemplateContent = itemTemplate.content.firstElementChild;
        const bodyItem = this.body.split('\r');
        bodyItem.forEach((itemContent) => {
            const item = document.importNode(itemTemplateContent, true);
            const itemLabel = item.querySelector('.task');
            itemLabel.textContent = itemContent;
            bodyElement.appendChild(item);
        });
    }
}
