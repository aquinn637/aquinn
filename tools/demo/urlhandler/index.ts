import { DemoSharedBase } from '../utils';
import { handleOpenURL, AppURL } from '@aquinn/urlhandler';

export class DemoSharedUrlhandler extends DemoSharedBase {
	testIt() {
        console.log('test urlhandler!');

        handleOpenURL((appURL: AppURL) => {
            console.log('Got the following appURL', appURL);
        });
	}
}
