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
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(pageRoot);
        const imageBtn = document.querySelector('#new-image');
        imageBtn.addEventListener('click', () => {
            const input = new MediaInputDialog();
            const dialog = new DialogComponent(input);
            dialog.attachTo(dialogRoot);
            dialog.setOnSubmitListener(() => {
                const image = new ImageComponent(input.title, input.url);
                this.page.addChild(image);
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
        });
        const videoBtn = document.querySelector('#new-video');
        videoBtn.addEventListener('click', () => {
            const input = new MediaInputDialog();
            const dialog = new DialogComponent(input);
            dialog.attachTo(dialogRoot);
            dialog.setOnSubmitListener(() => {
                const video = new VideoComponent(input.title, input.url);
                this.page.addChild(video);
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
        });
        const noteBtn = document.querySelector('#new-note');
        noteBtn.addEventListener('click', () => {
            const input = new TextInputDialog();
            const dialog = new DialogComponent(input);
            dialog.attachTo(dialogRoot);
            dialog.setOnSubmitListener(() => {
                const note = new NoteComponent(input.title, input.body);
                this.page.addChild(note);
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
        });
        const taskBtn = document.querySelector('#new-task');
        taskBtn.addEventListener('click', () => {
            const input = new TextInputDialog();
            const dialog = new DialogComponent(input);
            dialog.attachTo(dialogRoot);
            dialog.setOnSubmitListener(() => {
                const task = new TaskComponent(input.title, input.body);
                this.page.addChild(task);
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
        });
    }
}
new App(document.querySelector('.page-document'), document.body);
