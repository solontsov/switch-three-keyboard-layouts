# switch-three-keyboard-layouts
GNOME Shell (ver. 46) extensions for switching keyboard layouts from command line or by setting different shortcuts for each layout 

This is a modification of https://gist.github.com/Envek/85f40478d1c8b9658621190569046447

For switching to the 1st keyboard layout the following command is used:

`gdbus call --session --dest org.gnome.Shell --object-path /org/gnome/Shell/Extensions/SwitchThreeKeyboardLayouts --method org.gnome.Shell.Extensions.SwitchThreeKeyboardLayouts.Call0`

For switching to the 2nd and 3rd keyboard layout - similar command with Call1 and Call2 at the end instead of Call0
