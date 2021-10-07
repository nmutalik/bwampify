# BWAMPIFY

### Installation

1. Clone this repository.
2. Read through the code to make sure I'm not hacking you. Alternatively, look at the manifest.json and see that this extension has no permissions, and can't run on any website besides bwamp.me.
3. Go to your extensions page (chrome://extensions/).
4. Enable developer mode in the top right.
5. Click "Load unpacked extension" in the top left.
6. Load the repo you just cloned.
7. Go to https://bwamp.me/sandbox/ and mash on your keyboard 
8. Revel in your might.

### Editing

If you hate the hotkeys / ordering that this ships with, you can edit it to your taste by modifying `src/bwampify.js`. 

**After any local changes are made, go back to chrome://extensions and click the little refresh icon on the extension, otherwise your changes won't propagate.** 

`ORDER`, on line 1, defines the order of the buttons by keybinding.

`KEY_TO_EMOJI`, on line 2, defines the keybinding -> emoji mapping.

If an emoji is linked to that's not on bwamp, no magic happens — it just won't show that button. Similarly, if an emoji on bwamp is omitted from either `ORDER` or `KEY_TO_EMOJI`, the button won't show up.

Keybindings are handled by [this library](https://github.com/jaywcjlove/hotkeys/#supported-keys), linked to the syntax on defining shortcuts.
