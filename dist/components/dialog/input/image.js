import { BaseComponent } from '../../base.js';
export class ImageInout extends BaseComponent {
    constructor() {
        super(`
      <div class="image flex gap-4 w-full">
        <div class="basis-1/2 aspect-video">
          <img class="img w-full h-full" />
        </div>
        <div class="basis-1/2">
          <p class="title text-xl font-medium mb-2"></p>
        </div>
      </div>`);
    }
}
