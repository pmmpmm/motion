import { BaseComponent } from '../../base.js';

export class ImageComponent extends BaseComponent {
  constructor(private title: string, private url: string) {
    super(`
      <div class="flex gap-4 w-full">
        <div class="basis-1/2 aspect-video">
          <img class="img w-full h-full object-cover" />
        </div>
        <div class="basis-1/2">
          <p class="title text-xl font-medium mb-2"></p>
        </div>
      </div>`);

    const titleElement = this.element.querySelector('.title') as HTMLParagraphElement;
    titleElement.textContent = this.title;
    const imageElement = this.element.querySelector('.img') as HTMLImageElement;

    imageElement.src = this.url;
    imageElement.alt = this.title;
  }
}
