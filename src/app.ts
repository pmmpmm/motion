import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { PageComponent } from './components/page/page.js';

class App {
  private page;
  constructor(pageRoot: HTMLElement) {
    this.page = new PageComponent();

    const image = new ImageComponent('이미지 타이틀', 'https://picsum.photos/500/300');
    const note = new NoteComponent('노트 타이틀', '노트 내용');
    this.page.addChild(image);
    this.page.addChild(note);
    this.page.attachTo(pageRoot);
  }
}

new App(document.querySelector('.page-document') as HTMLElement);
