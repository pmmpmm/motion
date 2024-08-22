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
        const page = new PageComponent(PageItemComponent);
        page.attachTo(appRoot);
        const image = new ImageComponent('Image Title', 'https://picsum.photos/200/300');
        const video = new VideoComponent('Video Title', 'https://youtu.be/Tm9urFnu7rw?si=Ii3IJXvqLBu3xQIB');
        const note = new NoteComponent('Note Title', 'note text content');
        const task = new TaskComponent('Task Title', 'task text content');
        page.addChild(image);
        page.addChild(video);
        page.addChild(note);
        page.addChild(task);
        const imageBtn = document.querySelector('#new-image');
        imageBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const mediaInput = new MediaInput();
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.addChild(mediaInput);
            dialog.attachTo(dialogRoot);
        });
        const noteBtn = document.querySelector('#new-note');
        noteBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const textInput = new TextInput();
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.addChild(textInput);
            dialog.attachTo(dialogRoot);
        });
    }
}
new App(document.querySelector('.document'), document.body);
