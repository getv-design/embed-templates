// No bundler: the ES module comes straight from jsDelivr, pinned to a version.
import { view } from 'https://cdn.jsdelivr.net/npm/@getv.design/embed@0.9.0/dist/view.js';

// A .vd document as text. A URL or a Blob works too: view(el, '/designs/home.vd').
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

// The same element becomes the editor, and keeps the camera. Press the button again to
// go back to the view: text() is the whole .vd file as edited.
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
