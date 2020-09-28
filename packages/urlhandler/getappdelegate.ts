import { Application } from '@nativescript/core';

/**
 * The following function is part of the NativeScript plugin: nativescript-plugin-firebase
 * It is licensed under the MIT license. The license can be found at the bottom of this file.
 * Copyright (c) EddyVerbruggen
 *
 * This function is an unmodified copy of the original function that can be found at:
 * https://github.com/EddyVerbruggen/nativescript-plugin-firebase/blob/78f60f55be30b022690722006e1080b1685548fa/src/firebase.ios.ts#L469
 */

export function getAppDelegate() {
    // Play nice with other plugins by not completely ignoring anything already added to the appdelegate
    if (Application.ios.delegate === undefined) {
        class UIApplicationDelegateImpl extends UIResponder implements UIApplicationDelegate {
            public static ObjCProtocols = [UIApplicationDelegate];

            static new(): UIApplicationDelegateImpl {
                return <UIApplicationDelegateImpl>super.new();
            }
        }

        Application.ios.delegate = UIApplicationDelegateImpl;
    }

    return Application.ios.delegate;
}
