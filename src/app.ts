import { Component, Composable } from './components/base.js';
import { InputDialog, MediaData, TextData } from './components/dialog/dialog.js';
import { MediaInput } from './components/dialog/input/media-input.js';
import { TextInput } from './components/dialog/input/text-input.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TaskComponent } from './components/page/item/task.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent, PageItemComponent } from './components/page/page.js';

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
  new (): T;
};

class App {
  private page: Composable;
  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    // https://picsum.photos/200/300
    // https://youtu.be/Tm9urFnu7rw?si=Ii3IJXvqLBu3xQIB

    this.bindElementToDialog<MediaInput>(
      '#new-image',
      MediaInput,
      (MediaInput) => new ImageComponent(MediaInput.title, MediaInput.url)
    );

    this.bindElementToDialog<MediaInput>(
      '#new-video',
      MediaInput,
      (MediaInput) => new VideoComponent(MediaInput.title, MediaInput.url)
    );

    this.bindElementToDialog<TextInput>(
      '#new-note',
      TextInput,
      (TextInput) => new NoteComponent(TextInput.title, TextInput.body)
    );

    this.bindElementToDialog<TextInput>(
      '#new-task',
      TextInput,
      (TextInput) => new TaskComponent(TextInput.title, TextInput.body)
    );
  }

  private bindElementToDialog<T extends (MediaData | TextData) & Component>(
    selector: string,
    InputComponent: InputComponentConstructor<T>,
    makeListComponent: (input: T) => Component
  ) {
    const element = document.querySelector(selector) as HTMLButtonElement;
    element.addEventListener('click', () => {
      const dialog = new InputDialog();
      const input = new InputComponent();

      dialog.addChild(input);
      dialog.attachTo(this.dialogRoot);

      dialog.setOnSubmitListener(() => {
        dialog.removeFrom(this.dialogRoot);
        const list = makeListComponent(input);
        this.page.addChild(list);
      });
      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });
    });
  }
}
new App(document.querySelector('.document') as HTMLElement, document.body);
