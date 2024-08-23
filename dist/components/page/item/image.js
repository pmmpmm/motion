import { BaseComponent } from '../../base.js';
export class ImageComponent extends BaseComponent {
    constructor(title, url) {
        super(`
      <div class="flex gap-4 w-full">
        <div class="basis-1/2 aspect-video">
          <img class="img w-full h-full object-cover" />
        </div>
        <div class="basis-1/2">
          <p class="title text-xl font-medium mb-2"></p>
        </div>
      </div>`);
        this.title = title;
        this.url = url;
        const titleElement = this.element.querySelector('.title');
        const imageElement = this.element.querySelector('.img');
        titleElement.textContent = title;
        imageElement.src = url;
    }
}
