// import * as CodeMirror from 'codemirror';
// import { Plugin } from 'obsidian';

// export default class Example extends Plugin {
//     onload() {
//         this.app.workspace.on('active-leaf-change', async () => {
//             const file = this.app.workspace.getActiveFile();
//             if (file) {
//                 document.addEventListener('selectionchange', this.handleSelectionChange);
//             }
//         })
//     }

//     handleSelectionChange = () => {
//         const selection = window.getSelection();
//         if (selection && selection.toString().length > 0) {
//             console.log("text is selected");
//             //document.documentElement.style.setProperty('caret-color', 'transparent');
//         } else {
//             console.log("no selection");
//             //document.documentElement.style.setProperty('caret-color', 'white');
//         }
//     }

//     onunload() {
//         document.removeEventListener('selectionchange', this.handleSelectionChange);
//     }
// }
