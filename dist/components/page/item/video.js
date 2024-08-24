import { BaseComponent } from '../../base.js';
export class VideoComponent extends BaseComponent {
    constructor(title, url) {
        super(`
      <div class="flex gap-4 w-full">
        <div class="basis-1/2 aspect-video">
          <iframe
            class="video-iframe w-full h-full"
            width="100%"
            height="100%"
            title="YouTube video player"
            frameborder="0"
            encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>
        </div>
        <div class="basis-1/2">
          <p class="title text-xl font-medium mb-2"></p>
        </div>
      </div>`);
        this.title = title;
        this.url = url;
        const titleElement = this.element.querySelector('.title');
        const iframeElement = this.element.querySelector('.video-iframe');
        titleElement.textContent = this.title;
        iframeElement.src = this.convertToEmbeddedURL(this.url);
    }
    convertToEmbeddedURL(url) {
        const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9(-|_)]{11})|youtu.be\/([a-zA-Z0-9(-|_)]{11}))/;
        const match = url.match(regExp);
        const videoId = match ? match[1] || match[2] : undefined;
        console.log(match);
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;
    }
}
