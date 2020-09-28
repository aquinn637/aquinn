import { DemoSharedBase } from '../utils';
import InAppBrowser from '@aquinn/inappbrowser';
import { Utils } from '@nativescript/core';

export class DemoSharedInappbrowser extends DemoSharedBase {

    testIt() {
        console.log('test inappbrowser!');

        this.openLink("https://www.google.com");
    }

    async openLink(url) {
        try {
            if (InAppBrowser.isAvailable()) {
                InAppBrowser.open(url);
            }
        }
        catch (error) {
            alert({
                title: 'Error',
                message: error.message,
                okButtonText: 'Ok'
            });
        }
    }

}
