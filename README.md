*This plugin is no longer functional.*



If you want a static cursor (even when selecting text)

**For Windows:**

Create a [CSS snippet](https://help.obsidian.md/Extending+Obsidian/CSS+snippets) with this code:

```css
.cm-cursorLayer {
  animation: none !important;
}
```

**for macOS**

Simply use these commands in Terminal (which also disable cursor blinking in other applications):

```
defaults write -g NSTextInsertionPointBlinkPeriod -float 10000
defaults write -g NSTextInsertionPointBlinkPeriodOn -float 10000
defaults write -g NSTextInsertionPointBlinkPeriodOff -float 10000
```
