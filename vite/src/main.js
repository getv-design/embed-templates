import './style.css';
// Each entry loads only what it needs: the editor is not downloaded until edit() runs.
import { view } from '@getv.design/embed/view';

const text = `version 4
kind slides
title "Launch"
frame intro w=1280 h=720 background=#101014
  text intro.title x=96 y=250 w=1000 h=86 size=72 weight=800 fill=#ffffff
    "Ship the design"
frame second w=1280 h=720 background=#d64545
  text second.title x=96 y=250 w=1000 h=86 size=72 weight=800 fill=#ffffff
    "Then change it"`;

let handle = await view(document.querySelector('#design'), text, { fit: 'page' });

document.querySelector('#present').addEventListener('click', () => handle.play());

let editor;
document.querySelector('#edit').addEventListener('click', async (event) => {
  if (editor) {
    handle = await editor.view();
    editor = undefined;
    event.target.textContent = 'Edit';
    return;
  }
  editor = await handle.edit();
  editor.on('change', (change) => console.log(change.text()));
  event.target.textContent = 'Back to the view';
});
