import { InputDialog } from './components/dialog/dialog.js';
import { MediaInput } from './components/dialog/input/media-input.js';
import { TextInput } from './components/dialog/input/text-input.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TaskComponent } from './components/page/item/task.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent, PageItemComponent } from './components/page/page.js';
class App {
    constructor(appRoot, dialogRoot) {
        this.dialogRoot = dialogRoot;
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        this.bindElementToDialog('#new-image', MediaInput, (MediaInput) => new ImageComponent(MediaInput.title, MediaInput.url));
        this.bindElementToDialog('#new-video', MediaInput, (MediaInput) => new VideoComponent(MediaInput.title, MediaInput.url));
        this.bindElementToDialog('#new-note', TextInput, (TextInput) => new NoteComponent(TextInput.title, TextInput.body));
        this.bindElementToDialog('#new-task', TextInput, (TextInput) => new TaskComponent(TextInput.title, TextInput.body));
    }
    bindElementToDialog(selector, InputComponent, makeListComponent) {
        const element = document.querySelector(selector);
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
new App(document.querySelector('.document'), document.body);
