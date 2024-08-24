import { DialogComponent } from './components/dialog/dialog.js';
import { MediaInputDialog } from './components/dialog/input/media-input.js';
import { TextInputDialog } from './components/dialog/input/text-input.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TaskComponent } from './components/page/item/task.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent } from './components/page/page.js';
//https://www.youtube.com/embed/Exize6mpJa0?si=bvMfp9cdttsJFQie
//https://youtu.be/m7tyQIeSm30?si=ng90l3CLFF3c_11t
class App {
  private page;
  constructor(pageRoot: HTMLElement, dialogRoot: HTMLElement) {
    this.page = new PageComponent();

    const image = new ImageComponent('이미지 타이틀', 'https://picsum.photos/500/300');
    const note = new NoteComponent('노트 타이틀', '노트 내용');
    const task = new TaskComponent('할 일 타이틀', '할 일 1\r할 일 2');
    const video1 = new VideoComponent('비디오 타이틀', 'https://www.youtube.com/embed/Exize6mpJa0');
    const video2 = new VideoComponent(
      '비디오 타이틀',
      'https://youtu.be/m7tyQIeSm30?si=ng90l3CLFF3c_11t'
    );

    this.page.addChild(video1);
    this.page.addChild(video2);
    this.page.addChild(image);
    this.page.addChild(note);
    this.page.addChild(task);
    this.page.attachTo(pageRoot);

    const imageBtn = document.querySelector('#new-image') as HTMLButtonElement;
    imageBtn.addEventListener('click', () => {
      const input = new MediaInputDialog();
      const dialog = new DialogComponent(input);
      dialog.attachTo(dialogRoot);
      dialog.setOnSubmitListener(() => {
        dialog.removeFrom(dialogRoot);
      });
      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });
    });

    const videoBtn = document.querySelector('#new-video') as HTMLButtonElement;
    videoBtn.addEventListener('click', () => {
      const input = new MediaInputDialog();
      const dialog = new DialogComponent(input);
      dialog.attachTo(dialogRoot);
      dialog.setOnSubmitListener(() => {
        dialog.removeFrom(dialogRoot);
      });
      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });
    });

    const noteBtn = document.querySelector('#new-note') as HTMLButtonElement;
    noteBtn.addEventListener('click', () => {
      const input = new TextInputDialog();
      const dialog = new DialogComponent(input);
      dialog.attachTo(dialogRoot);
      dialog.setOnSubmitListener(() => {
        dialog.removeFrom(dialogRoot);
      });
      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });
    });

    const taskBtn = document.querySelector('#new-task') as HTMLButtonElement;
    taskBtn.addEventListener('click', () => {
      const input = new TextInputDialog();
      const dialog = new DialogComponent(input);
      dialog.attachTo(dialogRoot);
      dialog.setOnSubmitListener(() => {
        dialog.removeFrom(dialogRoot);
      });
      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });
    });
  }
}

new App(document.querySelector('.page-document') as HTMLElement, document.body);
