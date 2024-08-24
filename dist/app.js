import { DialogComponent } from './components/dialog/dialog.js';
import { MediaInputDialog } from './components/dialog/input/media-input.js';
import { TextInputDialog } from './components/dialog/input/text-input.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TaskComponent } from './components/page/item/task.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent, PageItemComponent } from './components/page/page.js';
class App {
    constructor(pageRoot, dialogRoot) {
        this.pageRoot = pageRoot;
        this.dialogRoot = dialogRoot;
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(this.pageRoot);
        this.bindElementToDialog('#new-image', MediaInputDialog, (MediaInputDialog) => new ImageComponent(MediaInputDialog.title, MediaInputDialog.url));
        this.bindElementToDialog('#new-video', MediaInputDialog, (MediaInputDialog) => new VideoComponent(MediaInputDialog.title, MediaInputDialog.url));
        this.bindElementToDialog('#new-note', TextInputDialog, (TextInputDialog) => new NoteComponent(TextInputDialog.title, TextInputDialog.body));
        this.bindElementToDialog('#new-task', TextInputDialog, (TextInputDialog) => new TaskComponent(TextInputDialog.title, TextInputDialog.body));
    }
    bindElementToDialog(selector, inputDialog, makeListComponent) {
        const element = document.querySelector(selector);
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
new App(document.querySelector('.page-document'), document.body);
