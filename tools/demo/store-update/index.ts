import { DemoSharedBase } from '../utils';
import { AlertTypesConstants, StoreUpdate } from '@aquinn/store-update';

export class DemoSharedStoreUpdate extends DemoSharedBase {
	testIt() {
        console.log('test store-update!');

        StoreUpdate.init({
            notifyNbDaysAfterRelease: 1,
            majorUpdateAlertType: AlertTypesConstants.FORCE,
            minorUpdateAlertType: AlertTypesConstants.FORCE,
            patchUpdateAlertType: AlertTypesConstants.FORCE,
            revisionUpdateAlertType: AlertTypesConstants.FORCE
        });

	}
}
