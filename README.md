# BWAMPIFY

### Installation

1. Read through the code to make sure I'm not hacking you. Alternatively, look at the manifest.json and see that this extension has no permissions, and can't run on any website besides bwamp.me.
2. Download/clone this repository.
3. Go to your extensions page (chrome://extensions/).
4. Enable developer mode in the top right.
5. Click "Load unpacked extension" in the top left.
6. Locate and load the repository folder, making sure that `manifest.json` is at the root of the folder.
7. Go to https://bwamp.me/sandbox/ and mash on your keyboard 
8. Revel in your might.

### Editing

If you hate the hotkeys / ordering that this ships with, you can edit it to your taste by modifying `src/bwampify.js`. 

**IMPORTANT: after any local changes are made, go back to chrome://extensions and click the little refresh icon on the extension, otherwise your changes won't propagate.** 

array `ORDER` defines the order of the buttons, by keybinding.

dict `KEY_TO_EMOJI` defines the keybinding -> emoji mapping.

Keybindings are handled by [this library](https://github.com/jaywcjlove/hotkeys/#supported-keys), linked to the syntax on defining shortcuts.

### Easy mistakes

1. If an emoji that's not on bwamp.me is "linked" to, no magic happens — it just won't show up as a button. 
2. If an emoji on bwamp is omitted from `KEY_TO_EMOJI`, the button won't show up.
3. Similarly, if a keybinding in `KEY_TO_EMOJI` is omitted from `ORDER`, the button won't show up.


