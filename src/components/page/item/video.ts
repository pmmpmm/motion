import { BaseComponent } from '../../base.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(private readonly title: string, private readonly url: string) {
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

    const titleElement = this.element.querySelector('.title') as HTMLParagraphElement;
    const iframeElement = this.element.querySelector('.video-iframe') as HTMLIFrameElement;

    titleElement.textContent = this.title;
    iframeElement.src = this.convertToEmbeddedURL(this.url) as string;
  }
  private convertToEmbeddedURL(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9(-|_)]{11})|youtu.be\/([a-zA-Z0-9(-|_)]{11}))/;
    const match = url.match(regExp);
    const videoId = match ? match[1] || match[2] : undefined;

    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}
