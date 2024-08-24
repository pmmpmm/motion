import { Component } from './components/base.js';
import { DialogComponent } from './components/dialog/dialog.js';
import { MediaInputData, MediaInputDialog } from './components/dialog/input/media-input.js';
import { TextInputData, TextInputDialog } from './components/dialog/input/text-input.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TaskComponent } from './components/page/item/task.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent, PageItemComponent } from './components/page/page.js';

type InputDialogConstructor<T extends (MediaInputData | TextInputData) & Component> = {
  new (): T;
};

class App {
  private page;
  constructor(private pageRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(this.pageRoot);

    this.bindElementToDialog<MediaInputDialog>(
      '#new-image',
      MediaInputDialog,
      (MediaInputDialog) => new ImageComponent(MediaInputDialog.title, MediaInputDialog.url)
    );
    this.bindElementToDialog<MediaInputDialog>(
      '#new-video',
      MediaInputDialog,
      (MediaInputDialog) => new VideoComponent(MediaInputDialog.title, MediaInputDialog.url)
    );
    this.bindElementToDialog<TextInputDialog>(
      '#new-note',
      TextInputDialog,
      (TextInputDialog) => new NoteComponent(TextInputDialog.title, TextInputDialog.body)
    );
    this.bindElementToDialog<TextInputDialog>(
      '#new-task',
      TextInputDialog,
      (TextInputDialog) => new TaskComponent(TextInputDialog.title, TextInputDialog.body)
    );
  }
  private bindElementToDialog<T extends (MediaInputData | TextInputData) & Component>(
    selector: string,
    inputDialog: InputDialogConstructor<T>,
    makeListComponent: (input: T) => Component
  ) {
    const element = document.querySelector(selector) as HTMLButtonElement;
    element.addEventListener('click', () => {
      const input = new inputDialog();
      const dialog = new DialogComponent(input);

      dialog.attachTo(this.dialogRoot);

      dialog.setOnSubmitListener(() => {
        const itemComponent = makeListComponent(input);
        this.page.addChild(itemComponent);
        dialog.removeFrom(this.dialogRoot);
      });
      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });
    });
  }
}

new App(document.querySelector('.page-document') as HTMLElement, document.body);
