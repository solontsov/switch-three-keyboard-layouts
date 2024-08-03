// Installation:
//  1. mkdir -p ~/.local/share/gnome-shell/extensions/switch-three-keyboard-layouts
//  2. cp ./extension.js ./metadata.json ~/.local/share/gnome-shell/extensions/switch-three-keyboard-layouts
//  3. Restart GNOME Shell (e.g. log out and log in)
//  4. Enable it in the GNOME Extensions App
// Usage:
// gdbus call --session --dest org.gnome.Shell --object-path /org/gnome/Shell/Extensions/SwitchThreeKeyboardLayouts --method org.gnome.Shell.Extensions.SwitchThreeKeyboardLayouts.Call


import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";
import Gio from "gi://Gio";
import { getInputSourceManager } from "resource:///org/gnome/shell/ui/status/keyboard.js";

const MR_DBUS_IFACE = `
<node>
    <interface name="org.gnome.Shell.Extensions.SwitchThreeKeyboardLayouts">
    <method name="Call0">
    </method>
    <method name="Call1">
    </method>
    <method name="Call2">
    </method>
</interface>
</node>`;

export default class MyExtension extends Extension {
    enable() {
        this._dbus = Gio.DBusExportedObject.wrapJSObject(MR_DBUS_IFACE, this);
        this._dbus.export(Gio.DBus.session, '/org/gnome/Shell/Extensions/SwitchThreeKeyboardLayouts');
    }

    disable() {
        this._dbus.flush();
        this._dbus.unexport();
        delete this._dbus;
    }

    Call0(){
        getInputSourceManager().inputSources[0].activate()
    }
    Call1(){
        getInputSourceManager().inputSources[1].activate()
    }
    Call2(){
        getInputSourceManager().inputSources[2].activate()
    }
}