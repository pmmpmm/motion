import { Component } from './components/base.js';
import { DialogComponent } from './components/dialog/dialog.js';
import { MediaInputData, MediaInputDialog } from './components/dialog/input/media-input.js';
import { TextInputData, TextInputDialog } from './components/dialog/input/text-input.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TaskComponent } from './components/page/item/task.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent, PageItemComponent } from './components/page/page.js';

type InputDialogConstructor<T = (MediaInputData | TextInputData) & Component> = {
  new (): T;
};
type ItemComponentConsructor = {
  new (title: string, content: string): Component;
};
class App {
  private page;
  constructor(private pageRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(this.pageRoot);

    this.bindElementToDialog<MediaInputDialog>('#new-image', MediaInputDialog, (MediaInputDialog) =>
      this.validateInputData(MediaInputDialog, ImageComponent)
    );
    this.bindElementToDialog<MediaInputDialog>('#new-video', MediaInputDialog, (MediaInputDialog) =>
      this.validateInputData(MediaInputDialog, VideoComponent)
    );
    this.bindElementToDialog<TextInputDialog>('#new-note', TextInputDialog, (TextInputDialog) =>
      this.validateInputData(TextInputDialog, NoteComponent)
    );
    this.bindElementToDialog<TextInputDialog>('#new-task', TextInputDialog, (TextInputDialog) =>
      this.validateInputData(TextInputDialog, TaskComponent)
    );
  }
  private validateInputData(
    input: MediaInputData | TextInputData,
    itemComponent: ItemComponentConsructor
  ): null | Component {
    if (
      ('url' in input && (!input.title || !input.url)) ||
      ('body' in input && (!input.title || !input.body))
    ) {
      alert('다이얼로그의 빈칸에 내용을 입력해 주세요.');
      return null;
    }
    if ('url' in input) {
      return new itemComponent(input.title, input.url);
    } else {
      return new itemComponent(input.title, input.body);
    }
  }
  private bindElementToDialog<T extends (MediaInputData | TextInputData) & Component>(
    selector: string,
    inputDialog: InputDialogConstructor<T>,
    makeItemComponent: (input: T) => Component | null
  ) {
    const element = document.querySelector(selector) as HTMLButtonElement;
    element.addEventListener('click', () => {
      const input = new inputDialog();
      const dialog = new DialogComponent(input);

      dialog.attachTo(this.dialogRoot);
      dialog.setOnSubmitListener(() => {
        const itemComponent = makeItemComponent(input);

        if (itemComponent) {
          this.page.addChild(itemComponent);
          dialog.removeFrom(this.dialogRoot);
        }
      });
      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });
    });
  }
}

new App(document.querySelector('.page-document') as HTMLElement, document.body);
